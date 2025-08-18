import { Link } from 'react-router-dom'

const PetFilterCard = ({ src, title, href }) => {
  return (
    <div className='w-full rounded-xl overflow-hidden shadow-lg'>
      <Link
        className='block'
        to={href}
        title={`Ver ${title}`}
        aria-label={`Ver ${title}`}
      >
        <img className='w-full h-full object-cover' src={src} alt={`Imagen de ${title}`} loading="lazy" />
      </Link>
      <p className='text-base font-bold text-center py-2'>{title}</p>
    </div>
  )
}

export default PetFilterCard
