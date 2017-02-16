import React from 'react'
import classNames from 'classnames'

const navItems = [
  {
    name: 'dashboard',
    iconClass: 'tachometer'
  },
  {
    name: 'profile',
    iconClass: 'id-card-o'
  },
  {
    name: 'settings',
    iconClass: 'cog'
  },
  {
    name: 'logout',
    iconClass: 'sign-out'
  }
]

const NavBar = React.createClass({


  //NOTE MAKE HIGHER ORDER COMPONENT THAT DOES DIFFERENT TYPES OF ANIMATIONS BASED ON CLASSES GIVEN TO CHILD COMPONENT

  getInitialState() {
    return {
      loaded: false
    }
  },

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      })  
    }, 500)
  },

  render() {
    const { loaded } = this.state
    const loadingClass = classNames({
      loaded
    })

    return (
      <nav className={loadingClass}>
        <ul>
          <li><h1>W</h1></li>
          {
            navItems.map((item) => {
              return (
                <li key={item.name} className='nav--list-item'>
                  <button className='nav--button' data-nav-name={item.name}>
                      <i className={`fa fa-${item.iconClass}`}></i>
                  </button>
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
  }
})

export default NavBar
