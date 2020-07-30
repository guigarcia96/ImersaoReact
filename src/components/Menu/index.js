import React from 'react'
import Logo from '../../assets/logo_main.png'
//import ButtonLink from './../ButtonLink'
import Button from './../Button'
import {Link} from 'react-router-dom'

import './Menu.css'
const Menu = () => {

  return (
    <nav className='menu'>
      <Link to="/">
        <img className='logo' src={Logo} alt="AluraFlix - Logo" />
      </Link>

      <Button as={Link} className='ButtonLink' to='/cadastro/video'>
        Novo Vídeo
      </Button>
    </nav>
  )

}
export default Menu
