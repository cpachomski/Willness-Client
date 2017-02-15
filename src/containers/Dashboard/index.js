import React from 'react'
import UsersList from 'components/UsersList'
import NavBar from 'components/NavBar'

const Dashboard = React.createClass({

  render() {
    return (
      <div>
        <NavBar />
        <UsersList />
      </div>
    )

  }
})

export default Dashboard
