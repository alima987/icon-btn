import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faHeart, faStar, faCheckCircle, faCar, faCamera, faComment, faMusic, faSmile } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faHeart, faStar, faCheckCircle, faCar, faCamera, faComment, faMusic, faSmile);

const iconArray = [
  faCoffee, faHeart, faStar, faCheckCircle, faCar, faCamera, faComment, faMusic, faSmile
];

const getRandomIcon = () => {
  return iconArray[Math.floor(Math.random() * iconArray.length)];
};

const IconBtn = () => {
  const [icon, setIcon] = useState(getRandomIcon());
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setIcon(getRandomIcon());
        setIsLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setIcon(getRandomIcon());
  }, []);

  return (
    <div class=''>
      <button className="icon-button" onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : (icon && <FontAwesomeIcon icon={icon} />)}
      </button>
    </div>
  );
};

export default IconBtn;
