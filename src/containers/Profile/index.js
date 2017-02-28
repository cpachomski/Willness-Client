import React from 'react'
import NavBar from 'components/NavBar'

const Profile = React.createClass({

  render() {
    return (
      <div className='page profile'>
        <NavBar />
        <div className='page--container'>
          <h1>Profile</h1>
        </div>
      </div>
    )
  }
})

export default Profile
