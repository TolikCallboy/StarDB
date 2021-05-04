import React from 'react';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className='header'>
      <div className="name">
        <a href="/home">
          StarDB
        </a>
      </div >
         <span className="people">
             <a href="/people">Персонажи</a>
         </span >

         <span className="planets">
             <a href="/planets">Планеты</a>
         </span>

          <span className="starships">
             <a href="/starships">Космические корабли</a>
          </span>

        <div>
            <button
                onClick={onServiceChange}
                className="btn btn-primary btn-sm">
                Свой "сервер"
            </button>
        </div>

    </div>
  );
};

export default Header;