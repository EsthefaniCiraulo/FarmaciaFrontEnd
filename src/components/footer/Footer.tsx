import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
// import React, { useContext } from 'react'
// import { AuthContext } from '../../contexts/AuthContext'

export default function Footer() {

  // const { usuario, handleLogout } = useContext(AuthContext)

  // let footerComponent

  const data = new Date().getFullYear()

  // if(usuario.token !== '') {
    const footerComponent = (
      <>
        <div className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Farmácia Generation | Copyright: {data}</p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={24} weight='bold' />
              <InstagramLogo size={24} weight='bold' />
              <FacebookLogo size={24} weight='bold' />
            </div>
          </div>
        </div>
      </>
    )
  // }

  return (
    <>
      {footerComponent}
    </>
  )
}
