import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

import { autoSign } from '../../utils/autoSign'

const Auth = ({
  setCurrentUser,
}) => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [passwordError, setPasswordError] = useState(null)
  const [nameError, setNameError] = useState(null)
  const [password, setPassword] = useState('')
  const handleNameChange = (event) => {
    setNameError(null)
    setName(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPasswordError(null)
    setPassword(event.target.value)
  }
  // eslint-disable-next-line consistent-return
  const handleClick = () => {
    if (!name || !password) {
      if (!name) {
        setNameError('Имя не может быть пустым')
      } else {
        setNameError(null)
      }
      if (!password) {
        setPasswordError('Пароль не может быть пустым')
      } else {
        setPasswordError(null)
      }
      return null
    }
    axios.post('http://localhost:5000/api/auth', {
      name,
      password,
    })
      .then((response) => {
        localStorage.setItem('userId', response.data.id)
        autoSign(setCurrentUser)
        history.replace('/')
      })
      .catch(() => {
        setPasswordError('Неверный пароль')
      })
  }

  return (
    <div>
      <div className=" uk-card uk-card-default">
        <div className="uk-card-header uk-text-center">Хочу отжиматься и не хочу писать на бумажке</div>
        <div className="uk-card-body">
          <input
            className={`uk-input ${nameError ? 'uk-form-danger' : ''}`}
            type="text"
            placeholder="Меня зовут"
            autoComplete="off"
            value={name || ''}
            onChange={handleNameChange}
          />
          <input
            className={`uk-input uk-margin-small-top ${passwordError ? 'uk-form-danger' : ''}`}
            type="password"
            placeholder="Пароль"
            autoComplete="new-password"
            value={password || ''}
            onChange={handlePasswordChange}
          />
          {passwordError && <div className="uk-text-center uk-text-danger">{passwordError}</div>}
          {nameError && <div className="uk-text-center uk-text-danger">{nameError}</div>}
        </div>
        <div
          className="uk-card-footer uk-flex uk-flex-center"
        >
          <button
            onClick={handleClick}
            className="uk-button uk-button-secondary"
            type="button"
          >
            <span className="uk-margin-small-left">Погнали!</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Auth)
