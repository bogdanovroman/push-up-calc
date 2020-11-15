import React, { useEffect, useState } from 'react'
import axios from 'axios'

import UserCard from './UserCard/UserCard'

function Main({
  currentUser,
}) {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then((res) => {
        setUsers(res.data)
      })
  }, [setUsers])

  return (
    <div className="uk-container uk-margin-small-top">
      <div
        data-uk-grid
        className="uk-grid-small uk-child-width-1-3@l uk-child-width-1-4@xl uk-child-width-1-2@s"
      >
        {users.map(user => (
          <UserCard
            currentUser={currentUser}
            user={user}
            key={user.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Main
