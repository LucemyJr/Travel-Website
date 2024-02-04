import React from 'react'
import './Destination.css'
import DestinationData from './DestinationData'

import Pernambuco1 from '../../assets/pernambuco1.jpg'
import Pernambuco2 from '../../assets/pernambuco2.jpg'
import RioDeJaneiro1 from '../../assets/riodejaneiro1.jpg'
import RioDeJaneiro2 from '../../assets/riodejaneiro2.jpg'



const Destination = () => {
  return (
    <>
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you a opportunity to see a lot, within a time frame</p>
        </div>

        <DestinationData
          className = "first-des"

          heading = "Pernambuco, Brazil"

          text = "One of Brazil's main tourist destinations is the state of Pernambuco, due to its unique combination of natural attractions, rich cultural heritage, and authentic experiences. Its stunning beaches, such as Porto de Galinhas and Maragogi, are renowned for golden sands and crystal-clear waters. The historic city of Olinda, declared a UNESCO World Heritage site, captivates with its hills and cultural events, while Recife offers a captivating blend of architecture, museums, and nightlife."
        
          img1 = {Pernambuco1}

          img2 = {Pernambuco2}
        />

        <DestinationData
          className = "first-des-reverse"

          heading = "Rio de Janeiro, Brazil"

          text = "Rio de Janeiro, known as the 'Marvelous City,' is another example of one of the world's most iconic and attractive tourist destinations. Its stunning landscape is shaped by globally renowned beaches like Copacabana and Ipanema, offering golden sands and spectacular views. The Christ the Redeemer, one of the New Seven Wonders of the World, and the Pão de Açúcar (Sugarloaf Mountain) provide unparalleled panoramas of the city."
        
          img1 = {RioDeJaneiro1}

          img2 = {RioDeJaneiro2}
        />
    </>
  )
}

export default Destination
