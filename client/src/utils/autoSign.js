import axios from 'axios'

export const autoSign = (callback) => {
  const userId = localStorage.getItem('userId')
  if (userId) {
    axios.post('http://localhost:5000/api/auth/auto', {
      id: userId,
    }).then((response) => {
      callback(response.data)
    })
  }
}
