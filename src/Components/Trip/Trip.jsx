import React from 'react'
import TripData from './TripData'
import './Trip.css'

import Trip1 from "../../assets/france1.jpg"
import Trip2 from "../../assets/italy1.jpg"
import Trip3 from "../../assets/netherlands1.jpg"

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
    
        <div className="trip-card">
            <TripData
                image={Trip1}
                heading={"Trip in France"}
                text={"France is a country renowned for its rich history, refined culture, and exceptional cuisine. Paris, the capital, is home to icons like the Eiffel Tower and the Louvre, while regions like Provence charm with their lavender fields. France provides a diverse experience, from stunning beaches to majestic mountains in the Alps."}
            />

            <TripData
                image={Trip2}
                heading={"Trip in italy"}
                text={"Italy is a land of unparalleled beauty, renowned for its Renaissance architecture, magnificent art, and delicious cuisine. Cities like Rome, Florence, and Venice unveil historical grandeur, while the Amalfi Coast offers breathtaking landscapes. Indulge in authentic dishes like pasta and pizza, and immerse yourself in the captivating atmosphere of this charming country."}
            />

            <TripData
                image={Trip3}
                heading={"Trip in Netherlands"}
                text={"The Netherlands is renowned for its colorful tulip fields, picturesque canals, and iconic windmills. Amsterdam, the capital, captivates with its vibrant atmosphere and fascinating museums. Explore charming villages like Giethoorn, known as the 'Venice of the North.' The Netherlands seamlessly blends tradition and modernity, offering a unique experience to visitors."}
            />
        </div>
    </div>
  )
}

export default Trip
