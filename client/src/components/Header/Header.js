import React from 'react'
import { Link } from 'react-router-dom'

import logo from './logo.svg'

const Header = ({
  currentUser,
}) => (
  <nav
    className="uk-navbar-container"
    data-uk-navbar
  >
    <div className="uk-container uk-container-expand uk-width">
      <div className="uk-navbar">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active" />
            <li className="uk-active">
              <Link
                to={`/users/${currentUser?.id}`}
                className=""
              >
                Мой дневник
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-center">
          <Link
            to="/"
            className="uk-logo"
          >
            <img
              src={logo}
              alt="logo"
              style={{ height: '80px' }}
            />
          </Link>
        </div>
        <div className="uk-navbar-right uk-margin-remove-right">
          {currentUser ? currentUser.name : (
            <Link
              to="/auth"
              className="uk-button uk-button-primary"
            >
              <span className="uk-margin-small-left">
                Войти
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  </nav>
)

export default React.memo(Header)
