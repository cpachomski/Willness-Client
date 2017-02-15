import React from 'react'

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
  }
]

const NavBar = React.createClass({

  render() {
    return (
      <nav>
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
