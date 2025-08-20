import { Link } from 'react-router-dom'
import { Icon } from "@iconify/react";

const PetCard = ({ nombre, sexo, edad, tamaño, caracter, imagen, id }) => {
  const decodeText = (text) => {
    try {
      if (!text) return ''
      const bytes = new Uint8Array(
        text.split('').map((char) => char.charCodeAt(0))
      )
      return new TextDecoder('utf-8').decode(bytes)
    } catch (e) {
      console.error('Error decoding text:', e)
      return text
    }
  }

  const handleImageError = (event) => {
    event.target.src = `/pet_not_found.png`
  }

  return (
    <div className='rounded-2xl overflow-hidden shadow-lg pb-4 w-full'>
      {/* Pet image */}
      <div className='bg-white aspect-video w-full rounded-b-[14px]'>
        <img
          className='w-full h-full rounded-b-4 object-cover object-center'
          src={`${imagen}`}
          alt={`Imagen de ${nombre}`}
          onError={handleImageError}
        />
      </div>
      <div className='px-4 space-y-3'>
        {/* Pet name */}
        <h3 className='text-center text-[18px] font-medium mt-[15px] mb-3'>
          {nombre}
        </h3>
        {/* Pet details */}
        <div className='space-y-1'>
          <p className='text-primary flex gap-2'>
            <Icon icon="streamline-plump:intersex-symbol-remix" className='text-xl' /> Sexo: {sexo}
          </p>
          <p className='text-primary flex gap-2'>
            <Icon icon="streamline-flex:pet-paw-solid" className='text-xl' /> Edad: {edad}</p>
          <p className='text-primary flex gap-2'>
            <Icon icon="material-symbols:height-rounded" className='text-xl' /> Tamaño: {tamaño}</p>
          <p className='text-primary flex gap-2'>
            <Icon icon="material-symbols-light:pet-supplies" className='text-xl' /> Carácter: {decodeText(caracter)}</p>
        </div>
        {/* Adopt button */}
        <Link className='block text-center text-base font-semibold text-primary bg-secondary rounded-lg py-2' to={`/petdetails/${id}`}>
          Adoptar
        </Link>
      </div>
    </div>
  )
}
export default PetCard
