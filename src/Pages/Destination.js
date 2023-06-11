import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  const [planet, setPlanet] = useState('moon')

  useEffect(() => {
    const getInfo = async() => {
      const response = await axios.get('data.json')
      setDestinations(response.data.destinations)
    }
    getInfo()
  }, [])

  const Moon = () => {
    setPlanet('moon')
  }

  const Mars = () => {
    setPlanet('mars')
  }

  const Europa = () => {
    setPlanet('europa')
  }

  const Titan = () => {
    setPlanet('titan')
  }

  return (
    <>
      <div className='destination'>
        <div className='menu'>
          <p onClick={Moon}>Moon</p>
          <p onClick={Mars}>Mars</p>
          <p onClick={Europa}>Europa</p>
          <p onClick={Titan}>Titan</p>
        </div>

        {planet === 'moon' &&(
          <>
            <div>
              {destinations.map((planet) => (
                <p>
                  {planet.name === 'Moon' && <p className='moon-info'>{planet.description}</p>}
                </p>
              ))}
            </div>
          </>
        )}

        {planet === 'mars' && (
          <>
            <div>
              {destinations.map((planet) => (
                <p>
                  {planet.name === 'Mars' && <p className='mars-info'>{planet.description}</p>}
                </p>
              ))}
            </div>
          </>
        )}

      </div>
    </>
  );
};

export default Destination;
