import { Link } from 'react-router-dom'


export default function Navbar() {

     const navbarComponent = (
        <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase flex items-center justify-center gap-3'><i className="fa-solid fa-plus font-extrabold text-red-600 text-5xl "></i>Farmácia</Link>
            <input type='text' placeholder='Procurar' className='w-6/12 px-4 mx-4 rounded-md'></input>
            <div className='flex gap-4'>
              <Link to='/categoria' className='hover:underline'>Categorias</Link>
              <Link to='/cadastrarCategoria' className='hover:underline'>Cadastrar Categoria</Link>
              <Link to='' className='hover:underline'><i className="fa-solid fa-user text-3xl"></i></Link>
              <Link to='' className='hover:underline'><i className="fa-solid fa-cart-shopping text-3xl"></i></Link>
            </div>
          </div>
        </div>
      )

  return (
    <>
      {navbarComponent}
    </>
  )
}