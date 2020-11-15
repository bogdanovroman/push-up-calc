import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const imgSrc = 'https://image.freepik.com/free-vector/fitness-gym-logo-premium-vector_144543-140.jpg'

const useUserTrainings = ({ trainings }) => {
  let totalReps = 0
  let bestRepHash = {}
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const key in trainings) {
    const training = trainings[key]

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index <= training.sets.length; index++) {
      const reps = training.sets[index]
      bestRepHash = {
        ...bestRepHash,
        [reps]: reps,
      }
    }
    totalReps += training.totalReps
  }
  const [bestSet] = trainings.sort((prev, next) => next.totalReps - prev.totalReps)
  const [bestRep] = Object.keys(bestRepHash).sort((a, b) => b - a)

  return {
    totalReps,
    bestRep,
    bestSet: bestSet?.totalReps,
  }
}

const UserCard = ({
  user,
}) => {
  const {
    totalReps,
    bestRep,
    bestSet,
  } = useUserTrainings(user)
  return (
    <div>
      <div
        className="uk-card uk-card-default uk-card-small"
        key={user.userId}
      >
        <div className="uk-card-header">
          <div
            className="uk-grid-small uk-flex uk-flex-middle"
            data-uk-grid
          >
            <div className="uk-width-auto">
              <img
                alt="logo"
                className="uk-border-circle"
                width="40"
                height="40"
                src={imgSrc}
              />
            </div>
            <div className="uk-width-expand">
              <h3 className="uk-card-title uk-margin-remove-bottom">
                {user.userName}
              </h3>
              <p className="uk-text-meta uk-margin-remove-top">
                Отжимается с
                {' '}
                {moment(user.created).format('DD.MM.YYYY')}
              </p>
            </div>
          </div>
        </div>
        <div className="uk-card-body">
          <div>
            Всего отжиманий:
            {' '}
            <span className="uk-text-bold">{totalReps}</span>
          </div>
          <div>
            Лучший подход:
            {' '}
            <span className="uk-text-bold">{bestRep}</span>
          </div>
          <div>
            Лучшая тренировка:
            {' '}
            <span className="uk-text-bold">{bestSet}</span>
          </div>
        </div>
        <div className="uk-card-footer">
          <Link
            to={`/users/${user.userId}`}
            className="uk-button uk-button-text"
          >
            Узнать детали
          </Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(UserCard)
