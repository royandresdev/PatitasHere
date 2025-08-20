const TestimonialCard = ({ profileImage, adoptedPet, name, rating, testimonial }) => {
  return (
    <div className='space-y-2 p-4 border border-grey-2 rounded-lg'>
      {/* Card header */}
      <div className='flex gap-2'>
        <img src={profileImage} alt="Historia de adopción" className="size-10 rounded-full" />
        <div>
          <h3>{name}</h3>
          <p className='text-grey-1'>Adoptó a {adoptedPet}</p>
        </div>
      </div>
      {/* Card rating */}
      <p>{'⭐'.repeat(rating)}</p>
      {/* Card testimonial */}
      <p className='text-primary'>
        &quot;{testimonial}&quot;
      </p>
    </div>
  )
}
export default TestimonialCard
