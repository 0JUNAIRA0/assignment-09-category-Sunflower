import React from 'react';

const vets= 
    [
  {
    "id": 1,
    "name": "Dr. Sarah Thompson",
    "specialization": "Small Animal Dermatology",
    "experience": 10,
    "image": "https://i.ibb.co.com/SDxtNNJQ/Dr-Sarah-Thompson.jpg",
    
  },
  {
    "id": 2,
    "name": "Dr. Ahmed Rahman",
    "specialization": "Veterinary Surgery & Orthopedics",
    "experience": 12,
    "image": "https://i.ibb.co.com/r2n48pNm/Dr-Ahmed-Rahman.jpg",
    
  },
  {
    "id": 3,
    "name": "Dr. Emily Carter",
    "specialization": "Pet Nutrition & Wellness",
    "experience": 8,   
    "image": "https://i.ibb.co.com/CKm6B6j6/Dr-Emily-Carter.jpg",
    
  },
  
]


const MeetOurVets = () => {
    return (
        <div className='py-12 bg-base-100'>
            <h2 className='text-3xl text-center font-bold text-primary mb-8'>
               Meet Our Expert Vets
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4'>
  {vets.map((vet) => (
    <div key={vet.id} className="card bg-base-200 shadow-lg h-full">
      <figure>
        <img
          className="h-72 w-full object-cover"
          src={vet.image}
          alt={vet.name}
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <div>
          <h2 className="card-title text-primary">{vet.name}</h2>
          <p className="text-sm font-semibold">{vet.specialization}</p>
          <p className="text-sm opacity-70">{vet.experience} years</p>
        </div>

        <button className="btn btn-primary btn-sm mt-3">
          Book Appointment
        </button>
      </div>
    </div>
  ))}
</div>

 </div>
 );
};

export default MeetOurVets;