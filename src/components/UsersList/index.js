import React from 'react'


const UsersList = React.createClass({

  getInitialState() {
    return {
      users: []
    }
  },

  componentDidMount() {
    fetch(`api/users`)
      .then((res) => {
        return res.json()
      })
      .then(users => this.setState({users}))
  },

  render() {
    const { users } = this.state
    return (
      <div>
        <h3>Users</h3>  
        <ul>
          {
            users.map((user) => {
              return (
                <li key={user._id}>{user.firstName} {user.lastName} - </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
})

export default UsersList
