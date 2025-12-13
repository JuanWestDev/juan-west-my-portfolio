import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function calculateDuration(timeString) {
  if (!timeString) return "";

  const now = new Date();
  let startDate, endDate;
  let hasFullDates = false; // Track if we have full dates or just years

  let isPresent = false; // Track if this is a "Present" date

  // Handle different date formats
  if (timeString.includes("Present")) {
    // Format: "01/09/2025 - Present" or "DD/MM/YYYY - Present"
    const parts = timeString.split(" - ");
    if (parts.length === 2 && parts[1].trim() === "Present") {
      const dateStr = parts[0].trim();
      // Check if it's a full date format
      if (dateStr.includes("/")) {
        hasFullDates = true;
        isPresent = true;
        // Parse DD/MM/YYYY format
        const [day, month, year] = dateStr.split("/");
        startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        endDate = now;
      } else {
        return "";
      }
    } else {
      return "";
    }
  } else if (timeString.includes("-")) {
    // Format: "2024 - 2025" or "2020-2024" or "01/01/2024 - 03/20/2025"
    const parts = timeString.split("-").map(p => p.trim());
    
    if (parts.length === 2) {
      const startStr = parts[0].trim();
      const endStr = parts[1].trim();
      
      // Check if it's year-only format (4 digits)
      if (/^\d{4}$/.test(startStr) && /^\d{4}$/.test(endStr)) {
        hasFullDates = false; // Year-only format
        startDate = new Date(parseInt(startStr), 0, 1); // January 1st of start year
        endDate = new Date(parseInt(endStr), 11, 31); // December 31st of end year
      } else if (startStr.includes("/") && endStr.includes("/")) {
        // Full date format: "DD/MM/YYYY - DD/MM/YYYY"
        hasFullDates = true;
        const [day1, month1, year1] = startStr.split("/");
        const [day2, month2, year2] = endStr.split("/");
        startDate = new Date(parseInt(year1), parseInt(month1) - 1, parseInt(day1));
        endDate = new Date(parseInt(year2), parseInt(month2) - 1, parseInt(day2));
      } else {
        return "";
      }
    } else {
      return "";
    }
  } else {
    return "";
  }

  // Calculate difference in months
  let monthsDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                   (endDate.getMonth() - startDate.getMonth());
  
  // For "Present" dates, always round up to include the current month we're in
  // (e.g., if we started in September and we're now in December, that's 4 months)
  if (isPresent) {
    monthsDiff += 1; // Count the current month we're in
  } else {
    // For past dates, only count complete months
    if (endDate.getDate() < startDate.getDate()) {
      monthsDiff -= 1;
    }
  }

  // Format the duration
  if (monthsDiff < 1) {
    const daysDiff = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    return `${daysDiff} day${daysDiff !== 1 ? "s" : ""}`;
  } else if (monthsDiff < 12) {
    return `${monthsDiff} month${monthsDiff !== 1 ? "s" : ""}`;
  } else {
    const years = Math.floor(monthsDiff / 12);
    const remainingMonths = monthsDiff % 12;
    
    // If year-only format, don't show months
    if (!hasFullDates) {
      return `${years} year${years !== 1 ? "s" : ""}`;
    } else {
      // Full date format: show years and months if there are extra months
      if (remainingMonths === 0) {
        return `${years} year${years !== 1 ? "s" : ""}`;
      } else {
        return `${years} year${years !== 1 ? "s" : ""} ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`;
      }
    }
  }
}
