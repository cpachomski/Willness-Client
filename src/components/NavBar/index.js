import React from 'react'
import FontAwesome from 'react-fontawesome'

const NavBar = React.createClass({

  render() {
    return (
      <nav>
        <ul>
          {
            navItems.map((item) => {
              return (
                <li className='nav--list-item'>
                  <button classname='nav--button' data-nav-name={item.name}>
                    <FontAwesome name={item.iconClass} />
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

export default NavBar
