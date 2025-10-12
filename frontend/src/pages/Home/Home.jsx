import { Link } from 'react-router-dom'
import { Hero, PetCard, PetFilterCard, TestimonialCard } from '../../components'

const testimonialList = [
  {
    profileImage: "/path/to/image.jpg",
    name: "María González",
    adoptedPet: "Cloe",
    testimonial: "Adoptar a Cloe fue la mejor decisión que tomé. El proceso fue súper fácil y ahora no puedo imaginar mi vida sin ella.",
    rating: 5,
  },
  {
    profileImage: "/path/to/image.jpg",
    name: "Juan Pérez",
    adoptedPet: "Max",
    testimonial: "Max ha traído tanta alegría a nuestra familia. La plataforma hizo que todo el proceso de adopción fuera sencillo y agradable.",
    rating: 4,
  },
  {
    profileImage: "/path/to/image.jpg",
    name: "Ana López",
    adoptedPet: "Luna",
    testimonial: "Adoptar a Luna ha sido una experiencia maravillosa. La plataforma me guió en cada paso del proceso.",
    rating: 5,
  },
]

const urgentPets = [
  {
    id: 1,
    name: "Coco",
    gender: "Macho",
    age: "2 años",
    size: "Mediano",
    character: "Juguetón y cariñoso",
    image: "/pets/coco.jpg",
  },
  {
    id: 2,
    name: "Mia",
    gender: "Hembra",
    age: "1 año",
    size: "Pequeño",
    character: "Tranquila y sociable",
    image: "/pets/mia.jpg",
  },
  {
    id: 3,
    name: "Simón",
    gender: "Macho",
    age: "3 años",
    size: "Grande",
    character: "Protector y leal",
    image: "/pets/simon.jpg",
  },
]

const Home = () => {
  return (
    <div id='home' className='space-y-2'>
      <Hero />

      {/* Section: What do you want to adopt? */}
      <div className='container m-auto p-4'>
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
        <div className='container m-auto py-6 px-4 space-y-2'>
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
      <section className='container px-4 py-8 space-y-2 m-auto'>
        <h2 className='text-center text-primary'>¿Cómo funciona?</h2>
        <p className='text-center'>Adoptar es muy fácil. Seguí estos simples pasos y en poco tiempo tendrás un nuevo miembro en tu familia.</p>
        {/* Steps */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
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
      <section className='container m-auto px-4 space-y-3'>
        <h2 className='text-center text-primary'>Adopción urgente</h2>
        <p className='text-left text-primary'>Estas mascotas necesitan un hogar con urgencia. Cada una tiene una historia especial y está esperando encontrar una familia que las ame.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-4'>
          {urgentPets.map((pet) => (
            <PetCard
              key={pet.id}
              id={pet.id}
              gender={pet.gender}
              character={pet.character}
              name={pet.name}
              age={pet.age}
              size={pet.size}
              image={pet.image}
            />
          ))}
        </div>
        {/* Button: View all pets */}
        <Link className='block text-sm font-bold bg-primary px-6 py-3 rounded-lg text-white mx-auto w-fit' to='/pets'>
          Ver todas las mascotas
        </Link>
      </section>

      {/* Section: Testimonials */}
      <section className='container m-auto px-4 py-8 space-y-2'>
        <h2 className='text-primary text-center'>Historias que nos inspiran</h2>
        <p className='text-primary text-left'>Conocé las experiencias de quienes ya encontraron a su compañero ideal a través de nuestra plataforma.</p>
        {/* Testimonials list */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-4'>
          {testimonialList.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              profileImage={testimonial.profileImage}
              name={testimonial.name}
              adoptedPet={testimonial.adoptedPet}
              rating={testimonial.rating}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
export default Home
