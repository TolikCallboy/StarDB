import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>
        Ой, ой, ой. Что-то пошло не так!
      </span>
      <span>
        Мы уже выслали дронов! Скоро все будет хорошо :)
      </span>
    </div>
  );
};

export default ErrorIndicator;
