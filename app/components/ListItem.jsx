import React, { useState, useEffect } from "react";
import { calculateDuration } from "../../lib/utils";

const ListItem = (props) => {
  const isValidSrc = props.src && props.src !== "" && props.src !== "./icons8-question-mark-48.png";
  const [imageError, setImageError] = useState(!isValidSrc);

  useEffect(() => {
    // Reset error state when src changes
    if (isValidSrc) {
      setImageError(false);
    } else {
      setImageError(true);
    }
  }, [props.src, isValidSrc]);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageError(false);
  };

  return (
    <li className="relative ml-10 pr-2 py-4">
      <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white w-12 h-12">
        {!isValidSrc || imageError ? (
          <div className="w-full h-full rounded-full bg-purple-900 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">?</span>
          </div>
        ) : (
          <img
            width="48"
            height="48"
            src={props.src || null}
            className="bg-transparent rounded-full object-center w-full h-full"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            onError={handleImageError}
            onLoad={handleImageLoad}
            alt=""
          />
        )}
      </div>
      <div className="flex flex-col gap-1 text-white">
        <time className="text-xs text-gray-400">
          {props.time}
          {calculateDuration(props.time) && ` - ${calculateDuration(props.time)}`}
        </time>
        <h2 className="font-semibold leading-none">{props.place}</h2>
        <p className="text-sm text-gray-400">{props.position}</p>
        <p className="text-sm whitespace-pre-line">{props.task}</p>
      </div>
    </li>
  );
};

export default ListItem;
