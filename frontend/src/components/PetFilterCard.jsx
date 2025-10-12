import { Link } from 'react-router-dom'

const PetFilterCard = ({ src, title, href }) => {
  return (
    <div className='w-full rounded-xl overflow-hidden shadow-lg aspect-9/12 flex flex-col gap-4'>
      <Link
        className='block flex-1'
        to={href}
        title={`Ver ${title}`}
        aria-label={`Ver ${title}`}
      >
        <img className='w-full h-full object-cover' src={src} alt={`Imagen de ${title}`} loading="lazy" />
      </Link>
      <p className='text-base font-semibold text-center py-2'>{title}</p>
    </div>
  )
}

export default PetFilterCard
