import { useEffect, useState } from 'react'
import logo from '/Logo.svg'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'
import { useAuth } from '../context/AuthContext'
import useToken from '../hooks/useToken'
import { Icon } from '@iconify/react/dist/iconify.js'

const ROUTES = [
  {
    name: 'Consultar Solicitud',
    url: '/search/adoptionForm'
  },
  {
    name: 'Sobre Nosotros',
    url: '/about'
  },
  {
    name: 'Iniciar sesión',
    url: '/login'
  }
]

const PROTECTED_ROUTES = [
  {
    name: 'Consultar Solicitud',
    url: '/search/adoptionForm'
  },
  {
    name: 'Sobre Nosotros',
    url: '/about'
  },
  {
    name: 'Dashboard',
    url: '/admin'
  },
  {
    name: 'Cerrar Sesion',
    url: ''
  }
]

const StickyNavbar = () => {
  const [isNavVisible, setNavVisible] = useState(false)
  const { userAuth } = useAuth()
  const { deleteToken } = useToken()
  const [currentRoutes, setCurrentRoutes] = useState(ROUTES)

  useEffect(() => {
    if (userAuth) {
      setCurrentRoutes(PROTECTED_ROUTES)
    } else {
      deleteToken()
      setCurrentRoutes(ROUTES)
    }
  }, [userAuth])

  const toggleNav = () => {
    setNavVisible(!isNavVisible)
  }

  return (
    <header className='flex items-center justify-between py-4 px-8 h-[60px] container mx-auto'>
      <Link className='h-full' to={'/'}>
        <img className='h-full w-auto' src={logo} alt='Logo' />
      </Link>
      <button
        className='lg:hidden text-xl text-gray-800 bg-transparent border-0 cursor-pointer'
        onClick={toggleNav}
      >
        <Icon icon="iconamoon:menu-burger-horizontal-fill" className="text-xl" />
      </button>
    </header>
  )
}

export default StickyNavbar
