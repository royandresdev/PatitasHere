const Hero = () => {
  return (
    <div className='w-full px-4 bg-secondary flex justify-center items-center gap-2'>
      <div className='w-[200px]'>
        <img
          className='h-auto object-cover w-full'
          src='/woman.svg'
          alt='Woman with your dog'
        />
      </div>
      <div className='w-1/2 space-y-4'>
        <h1 className='font-semibold'>
          PatitasHere
        </h1>
        <p className='text-primary font-semibold'>
          Donde las patitas encuentran su hogar para siempre.
        </p>
      </div>
    </div>
  )
}
export default Hero
