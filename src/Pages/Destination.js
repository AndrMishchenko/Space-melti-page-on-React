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
        <div className='planet-block'>
          <h2 className='planet-block-titel'>Pick your destination</h2>
          <div className='planet-block-info'>
            <div className='planet-block-specification'>
              <div className='planet-block-menu'>
                <p className={planet === 'moon' ? 'moon-active' : ''} onClick={Moon}>Moon</p>
                <p className={planet === 'mars' ? 'mars-active' : ''} onClick={Mars}>Mars</p>
                <p className={planet === 'europa' ? 'europa-active' : ''} onClick={Europa}>Europa</p>
                <p className={planet === 'titan' ? 'titan-active' : ''} onClick={Titan}>Titan</p>
              </div>
              {planet === 'moon' && (
                <>
                <div className='block-moon'>
                <div className='moon-img'></div>
                <div className='planet-moon-info'>
                  {destinations.map(planet => (
                    <p>
                      {planet.name === 'Moon' && <p className='planet-moon-titel'>{planet.name}</p>}
                      {planet.name === 'Moon' && <p className='planet-moon-text'>{planet.description}</p>}
                    </p>
                  ))}
                  <div className='planet-moon-block-border'></div>
                  <div className='planet-moon-block-dist-travel'>
                    <div>
                      <p className='planet-moon-distance-title'>avg. distance</p>
                      {destinations.map((planet) => (
                        <p>
                          {planet.name === 'Moon' && <p className='planet-moon-distance'>{planet.distance}</p>}
                        </p>
                      ))}
                    </div>
                    <div>
                      <p className='planet-moon-travel-title'>est. treavel.time</p>
                      {destinations.map((planet) => (
                        <p>
                          {planet.name === 'Moon' && <p className='planet-moon-travel'>{planet.travel}</p>}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
                </>
              )}

              {planet === 'mars' && (
                <>
                <div className='block-mars'>
                <div className='mars-img'></div>
                <div className='planet-mars-info'>
                  {destinations.map(planet => (
                    <p>
                      {planet.name === 'Mars' && <p className='planet-mars-titel'>{planet.name}</p>}
                      {planet.name === 'Mars' && <p className='planet-mars-text'>{planet.description}</p>}
                    </p>
                  ))}
                  <div className='planet-mars-block-border'></div>
                  <div className='planet-mars-block-dist-travel'>
                    <div>
                      <p className='planet-mars-distance-title'>avg. distance</p>
                      {destinations.map((planet) => (
                        <p>
                          {planet.name === 'Mars' && <p className='planet-mars-distance'>{planet.distance}</p>}
                        </p>
                      ))}
                    </div>
                    <div>
                      <p className='planet-mars-travel-title'>est. treavel.time</p>
                      {destinations.map((planet) => (
                        <p>
                          {planet.name === 'Mars' && <p className='planet-mars-travel'>{planet.travel}</p>}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
                </>
              )}

              {planet === 'europa' && (
                <>
                <div className='block-europa'>
                <div className='europa-img'></div>
                <div className='planet-europa-info'>
                  {destinations.map(planet => (
                    <p>
                      {planet.name === 'Europa' && <p className='planet-europa-titel'>{planet.name}</p>}
                      {planet.name === 'Europa' && <p className='planet-europa-text'>{planet.description}</p>}
                    </p>
                  ))}
                  <div className='planet-europa-block-border'></div>
                  <div className='planet-europa-block-dist-travel'>
                    <div>
                      <p className='planet-europa-distance-title'>avg. distance</p>
                      {destinations.map((planet) => (
                        <p>
                          {planet.name === 'Europa' && <p className='planet-europa-distance'>{planet.distance}</p>}
                        </p>
                      ))}
                    </div>
                    <div>
                      <p className='planet-europa-travel-title'>est. treavel.time</p>
                      {destinations.map((planet) => (
                        <p>
                          {planet.name === 'Europa' && <p className='planet-europa-travel'>{planet.travel}</p>}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
                </>
              )}

              {planet === 'titan' && (
                <>
                <div className='block-titan'>
                <div className='titan-img'></div>
                <div className='planet-titan-info'>
                  {destinations.map(planet => (
                    <p>
                      {planet.name === 'Titan' && <p className='planet-titan-titel'>{planet.name}</p>}
                      {planet.name === 'Titan' && <p className='planet-titan-text'>{planet.description}</p>}
                    </p>
                  ))}
                  <div className='planet-titan-block-border'></div>
                  <div className='planet-titan-block-dist-travel'>
                    <div>
                      <p className='planet-titan-distance-title'>avg. distance</p>
                      {destinations.map((planet) => (
                        <p>
                          {planet.name === 'Titan' && <p className='planet-titan-distance'>{planet.distance}</p>}
                        </p>
                      ))}
                    </div>
                    <div>
                      <p className='planet-titan-travel-title'>est. treavel.time</p>
                      {destinations.map((planet) => (
                        <p>
                          {planet.name === 'Titan' && <p className='planet-titan-travel'>{planet.travel}</p>}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
