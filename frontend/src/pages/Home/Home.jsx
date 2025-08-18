import { Hero, PetFilterCard } from '../../components'

const Home = () => {
  return (
    <div id='home' className='space-y-2'>
      <Hero />
      <div className='container p-4'>
        {/* Section: What do you want to adopt? */}
        <section className='space-y-8 w-full'>
          <h2 className='text-center text-primary'>
            ¿Qué queres adoptar?
          </h2>
          <div className='grid grid-cols-2 w-fit mx-auto gap-3'>
            <PetFilterCard src='/Perro.webp' title='Perros' href='/dogs' />
            <PetFilterCard src='/Gato.webp' title='Gatos' href='/cats' />
          </div>
        </section>
      </div>

      {/* Section: Our impact in numbers */}
      <section className='w-full bg-primary'>
        <div className='container py-6 px-4 space-y-2'>
          <h2 className='text-white text-center'>Nuestro impacto en números</h2>
          <dl className='grid grid-cols-2 gap-3'>
            {/* Card: Pets adopted */}
            <div className='w-full text-center space-y-2 py-4'>
              <dt className='text-3xl!'>🐕</dt>
              <dd className='text-white font-bold'>2,847</dd>
              <dd className='text-white'>Mascotas adoptadas</dd>
            </div>
            {/* Card: Shelters associated */}
            <div className='w-full text-center space-y-2 py-4'>
              <dt className='text-3xl!'>🏠</dt>
              <dd className='text-white font-bold'>156</dd>
              <dd className='text-white'>Refugios asociados</dd>
            </div>
            {/* Card: Average rating */}
            <div className='w-full text-center space-y-2 py-4'>
              <dt className='text-3xl!'>⭐</dt>
              <dd className='text-white font-bold'>4.8</dd>
              <dd className='text-white'>Calificación promedio</dd>
            </div>
            {/* Card: Support available */}
            <div className='w-full text-center space-y-2 py-4'>
              <dt className='text-3xl!'>📞</dt>
              <dd className='text-white font-bold'>24/7</dd>
              <dd className='text-white'>Soporte disponible</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  )
}
export default Home
