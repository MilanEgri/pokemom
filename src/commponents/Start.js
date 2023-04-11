import React, { useEffect, useState } from 'react'

const Start = () => {

  const [locations, setLocations] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/location')
    .then(res => res.json())
    .then(data=> setLocations(data))
  }, [])

  return (
    <div>
      {locations && locations.results.map((location, index) => (
        <h2 key={index}>{location.name}</h2>
      ))}
    </div>
  )
}

export default Start
