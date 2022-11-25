import React, { useState } from 'react'
import Navbar from './Navbar'
import Content from './Content'
import testData from "./testdata.js"

function App() {
  const [tripData, setTripData] = React.useState({})


  React.useEffect(function () {
    fetch("http://localhost/TravelCreatorsREST/api/trip/read.php")
    .then(res => res.json())
    //.then(data => setTripData(data))
  })

  console.log("render")

  return (
    <div id='container'>
      <Navbar />
      <Content
        firstName={testData.firstName}
        lastName={testData.lastName}
        countryFrom={testData.countryFrom}
        tripTo={testData.tripTo}
        hotel={testData.hotel}
        hotelImage={testData.hotelImage}
        description={testData.description}
        activities={testData.activities}
      />
    </div>
  )
}

export default App;
