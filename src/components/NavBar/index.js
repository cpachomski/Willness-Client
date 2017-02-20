import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setNavBarLoaded } from 'actions/actions'

const navItems = [
  {
    name: 'dashboard',
    iconClass: 'tachometer',
    linkTo: '/dashboard'
  },
  {
    name: 'Workouts',
    iconClass: 'list',
    linkTo: '/workouts'
  },
  {
    name: 'profile',
    iconClass: 'id-card-o',
    linkTo: '/profile'
  },
  {
    name: 'settings',
    iconClass: 'cog',
    linkTo: '/settings'
  }
]

const NavBar = React.createClass({


  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(setNavBarLoaded())
    }, 500)
  },

  handleLogout() {
    if(localStorage) {
      localStorage.removeItem('willnessUser')
    }
  },

  render() {
    const { loaded } = this.props
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
                <li key={item.name} className='nav--list-item' data-nav-name={item.name}>
                    <Link to={item.linkTo}
                          className={`fa fa-${item.iconClass}`}></Link>
                </li>
              )
            })
          }
          <li className='nav--list-item' data-nav-name='logout'>
            <Link onClick={this.handleLogout} to='/' className='fa fa-sign-out' ></Link>
          </li>
        </ul>
      </nav>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    loaded: state.view.navBarLoaded
  }
}

export default connect(mapStateToProps)(NavBar)
