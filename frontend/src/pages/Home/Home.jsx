import { Link } from 'react-router-dom'
import { Hero } from '../../components'
import ListPets from '../../components/ListPets'

const PetFilterCard = ({ src, title, href }) => {
  return (
    <div className=' flex flex-col rounded-[14px] overflow-hidden mt-[25px] shadow-[0_0_25px_0_#0000001A] pb-8'>
      <Link
        className='bg-[#D6E4E8] grow w-[357px] h-[399px] md:w-[311px] md:h-[348px] lg:w-[446px] lg:h-[501px]'
        to={href}
      >
        <img className='w-full h-full object-contain' src={src} alt={title} />
      </Link>
      <h3 className='text-center text-[18px] pt-5'>{title}</h3>
    </div>
  )
}

const Home = () => {
  return (
    <div id='home' className='space-y-2'>
      <Hero />
      <div className='container p-4'>
        <section className='space-y-8 w-full'>
          <h2 className='text-center'>
            ¿Qué queres adoptar?
          </h2>
          <div className='grid grid-cols-2 w-fit mx-auto gap-3'>
            <PetFilterCard src='/dog.png' title='Perros' href='/dogs' />
            <PetFilterCard src='/Gato.webp' title='Gatos' href='/cats' />
          </div>
        </section>
      </div>
    </div>
  )
}
export default Home
