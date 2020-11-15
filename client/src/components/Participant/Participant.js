import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import AddButton from '../AddButton/AddButton'

function Participant({
  currentUser,
}) {
  const { userId } = useParams()
  const [items, setItems] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:5000/api/trainings/${userId}`)
      .then((res) => {
        setItems(res.data)
      })
  }, [setItems])
  console.log('currentUser:', currentUser)

  return (
    <div>
      <div className="uk-container uk-margin-small-top">
        <div className="uk-flex uk-flex-between">
          <Link
            className="uk-button uk-button-default"
            type="button"
            to="/"
          >
            Назад
          </Link>
          {userId === currentUser?.id && (
          <div className="uk-visible@s">
            <AddButton />
          </div>
          )}
        </div>
        <div className="uk-margin-medium-top">
          {items.length > 0 ? (
            <div
              className="uk-card uk-card-small uk-card-body uk-margin-small-top uk-padding-remove-vertical uk-visible@s"
            >
              <div className="uk-flex uk-flex-between uk-flex-middle">
                <div className="uk-flex uk-flex-inline uk-flex-middle">
                  <div style={{ width: '50px' }}>
                    Дата
                  </div>
                  <div className="uk-flex uk-flex-inline uk-margin-medium-left">
                    <div className="uk-padding-small uk-padding-remove-vertical">
                      Подходы и повторения
                    </div>

                  </div>
                </div>
                <div className="uk-padding-small uk-padding-remove-vertical">
                  Итого
                </div>
              </div>
            </div>
          ) : (
            <div className="uk-text-center">
              Тут будут отображаться твои тренировки
            </div>
          )}

          {items.map((item, key) => (
            <div
              key={key} // eslint-disable-line react/no-array-index-key
              className="uk-card uk-card-default uk-card-small
              uk-card-hover uk-card-body uk-margin-small-top uk-padding-remove-vertical"
            >
              <div style={{
                paddingLeft: '90px',
                paddingRight: '90px',
              }}
              >
                <div className="uk-position-absolute uk-position-left uk-padding-small">
                  {moment(item.date).format('DD.MM.YYYY')}
                </div>
                <div
                  className="uk-flex uk-flex-inline"
                  style={{
                    width: '100%',
                    'overflow-x': 'auto',
                  }}
                >
                  {item.sets.map(set => (
                    <div
                      className="uk-padding-small"
                      key={set}
                    >
                      {set}
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    width: '80px',
                    paddingRight: '15px',
                  }}
                  className="uk-position-absolute uk-position-right uk-text-right"
                >
                  <span
                    className="uk-text-bold uk-text-lead"
                    style={{
                      lineHeight: '54px',
                    }}
                  >
                    {item.totalReps}
                  </span>
                  {` / ${item.totalSets}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {userId === currentUser?.id && (
      <div className="uk-hidden@s uk-position-fixed uk-position-bottom-center uk-padding">
        <AddButton />
      </div>
      )}
    </div>
  )
}

export default React.memo(Participant)
