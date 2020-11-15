import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

const createDate = () => {
  const today = moment()
  return {
    date: today,
    formatedDate: today.format('DD.MM.YYYY'),
  }
}

const NewTraining = ({
  currentUser,
}) => {
  const [sets, setSets] = useState([0, 0, 0])
  const { date, formatedDate } = createDate()
  const history = useHistory()

  const handleAddSet = () => {
    setSets([
      ...sets,
      0,
    ])
  }

  const updateSets = (key, value) => {
    setSets(
      sets.map((set, setKey) => {
        if (setKey !== key) return set
        return value
      }),
    )
  }

  const handleInputChange = (key, event) => {
    updateSets(key, event.target.value)
  }

  const handleCreateTraining = () => {
    axios.post('http://localhost:5000/api/trainings/create', {
      date,
      sets,
      userId: currentUser.id,
    })
      .then((response) => {
        console.log('response:', response)
        history.replace('/')
      })
      .catch((error) => {
        console.log('err:', error)
      })
  }
  return (
    <>
      <div>
        <Link
          className="uk-button uk-button-default"
          type="button"
          to="/"
        >
          Назад
        </Link>
      </div>
      <div className="uk-card uk-card-default uk-card-small uk-margin-medium-top">
        <div className="uk-flex uk-flex-center uk-card-header uk-text-bold uk-text-lead">
          {formatedDate}
        </div>
        <div className="uk-card-body">
          <div className="">
            {sets.map((set, key) => (
              <div className="uk-margin-small-top">
                <div className=" uk-flex uk-flex-inline uk-width">
                  <span className="uk-text-lead uk-padding uk-padding-remove-vertical">
                    {key + 1}
                  </span>
                  <input
                    className="uk-input uk-width"
                    type="tel"
                    placeholder="Кол-во повторений"
                    value={set || ''}
                    onChange={event => handleInputChange(key, event)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="uk-flex uk-flex-center uk-margin-small-top">
            <button
              className="uk-button uk-button-default"
              type="button"
              onClick={handleAddSet}
            >
              <span className="uk-margin-small-left">Добавить подход</span>
            </button>
          </div>
        </div>
        <div className="uk-card-footer uk-flex uk-flex-right">
          <button
            className="uk-button uk-button-primary"
            type="button"
            onClick={handleCreateTraining}
          >
            Сохранить
          </button>
          <Link
            className="uk-button uk-button-default uk-margin-small-left"
            type="button"
            to="/"
          >
            Отмена
          </Link>
        </div>
      </div>
    </>
  )
}

export default React.memo(NewTraining)
