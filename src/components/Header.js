import React from 'react'
import { Link } from 'react-router/lib'

class Header extends React.Component {
  constructor () {
    super()

    this.state = {
      isNavOpen : false
    }
  }

  navBtnClick () {
    this.setState({ isNavOpen: !this.state.isNavOpen })
  }

  render () {
    console.log('Render')

    return (
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='#'>Yasin Selek</a>

          <button className='navbar-toggler' type='button' onClick={() => this.navBtnClick()}>
            <span className='navbar-toggler-icon' />
          </button>

          <div className={'navbar-collapse ' + (this.state.isNavOpen ? '' : 'd-none')}>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to='/' activeClassName='active' className='nav-link'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to='/hakkimizda' activeClassName='active' className='nav-link'>Hakkımızda</Link>
              </li>
              <li className='nav-item'>
                <Link to='/iletisim' activeClassName='active' className='nav-link'>İlitişim</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
