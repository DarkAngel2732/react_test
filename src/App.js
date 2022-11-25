import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

export default function App() {
  const [tripData, setTripData] = React.useState()


  React.useEffect(function () {
    fetch("http://localhost/TravelCreatorsREST/api/trip/read.php")
      .then(res => res.json())
      .then(data => setTripData(data))
  }, [])

  if (tripData) {
    return (
      <div id='container'>
        <Navbar />
        <Content
          firstName={tripData.data[0].creator_firstname}
          lastName={tripData.data[0].creator_lastname}
          countryVisit={tripData.data[0].country}
          hotel={tripData.data[0].hotel}
          description={tripData.data[0].description}
          activities={tripData.data[0].activity.split(',')}
          hotelURL={tripData.data[0].hotel_url}
        />
      </div>
    )
  }
}
