import { Hero, PetCard, PetFilterCard } from '../../components'

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

      {/* Section: How it works */}
      <section className='container px-4 py-8 space-y-2'>
        <h2 className='text-center text-primary'>¿Cómo funciona?</h2>
        <p className='text-center'>Adoptar es muy fácil. Seguí estos simples pasos y en poco tiempo tendrás un nuevo miembro en tu familia.</p>
        {/* Steps */}
        <div className='grid grid-cols-2 gap-3'>
          {/* Step 1 */}
          <div className='flex flex-col items-center space-y-4 p-4'>
            <div className='size-10 flex items-center justify-center bg-secondary rounded-full'>
              <span className='text-xl'>🔍</span>
            </div>
            <div className='size-8 bg-primary rounded-full center flex items-center justify-center'>
              <span className='text-white text-xl font-semibold'>1</span>
            </div>
            <h3 className='text-base text-center'>Explora</h3>
            <p className='text-center text-primary'>Navegá por nuestro catálogo de mascotas disponibles y encontrá tu compañero ideal.</p>
          </div>
          {/* Step 2 */}
          <div className='flex flex-col items-center space-y-4 p-4'>
            <div className='size-10 flex items-center justify-center bg-secondary rounded-full'>
              <span className='text-xl'>💝</span>
            </div>
            <div className='size-8 bg-primary rounded-full center flex items-center justify-center'>
              <span className='text-white text-xl font-semibold'>2</span>
            </div>
            <h3 className='text-base text-center'>Conectá</h3>
            <p className='text-center text-primary'>Ponete en contacto con el refugio y programá una visita para conocer a tu mascota.</p>
          </div>
          {/* Step 3 */}
          <div className='flex flex-col items-center space-y-4 p-4'>
            <div className='size-10 flex items-center justify-center bg-secondary rounded-full'>
              <span className='text-xl'>🏡</span>
            </div>
            <div className='size-8 bg-primary rounded-full center flex items-center justify-center'>
              <span className='text-white text-xl font-semibold'>3</span>
            </div>
            <h3 className='text-base text-center'>Adoptá</h3>
            <p className='text-center text-primary'>Completá el proceso de adopción y dale un hogar lleno de amor a tu nueva mascota.</p>
          </div>
        </div>
      </section>

      {/* Section: Urgent adoption */}
      <section className='px-4 space-y-3'>
        <h2 className='text-center text-primary'>Adopción urgente</h2>
        <p className='text-center text-primary'>Estas mascotas necesitan un hogar con urgencia. Cada una tiene una historia especial y está esperando encontrar una familia que las ame.</p>
        <div className='grid grid-cols-1 gap-3 py-4'>
          <PetCard />
        </div>
      </section>
    </div>
  )
}
export default Home
