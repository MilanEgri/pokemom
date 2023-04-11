import React, { useEffect, useState } from 'react'

const Start = () => {


  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/location')
    .then(res => res.json())
    .then(data=> setLocations(data))
  }, [])

  return (
    <div>
      {locations && locations.map(location => (
        <h2>{location.name}</h2>
      ))}
    </div>
  )
}

export default Start
