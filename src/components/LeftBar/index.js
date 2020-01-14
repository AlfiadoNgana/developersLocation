import React from 'react';

import './style.css';

const Leftbar = () => (
  <div className="left-bar">
    <ul>
      <li>
        <div>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt=""
          />
          <div className="user-info">
            <h2>Diego</h2>
            <h3>Diogo3g</h3>
          </div>
          <button type="submit">
            <i className="fa fa-fw fa-times-circle remove" />
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-fw fa-angle-right go-to-page" />
          </a>
        </div>
      </li>
    </ul>
  </div>
);

export default Leftbar;
