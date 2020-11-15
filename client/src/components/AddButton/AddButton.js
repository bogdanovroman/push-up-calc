import React from 'react'
import { Link } from 'react-router-dom'

const AddButton = () => (
  <div className="uk-flex uk-flex-center">
    <Link
      className="uk-button uk-button-primary"
      type="button"
      to="/new"
    >
      <span className="uk-margin-small-left">Добавить тренировку</span>
    </Link>
  </div>
)

export default React.memo(AddButton)
