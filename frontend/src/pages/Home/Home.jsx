import { Hero, PetFilterCard } from '../../components'

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
            <PetFilterCard src='/Perro.webp' title='Perros' href='/dogs' />
            <PetFilterCard src='/Gato.webp' title='Gatos' href='/cats' />
          </div>
        </section>
      </div>
    </div>
  )
}
export default Home
