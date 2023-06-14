import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Crew = () => {
  
  const [crewMember, setCrewMember] = useState('commander');
  const [crewInfo, setCrewInfo] = useState([]);

  useEffect(() => {
    const crewMemberInfo = async() => {
      const getInfo = await axios.get('data.json');
      setCrewInfo(getInfo.data.crew)
    }
    crewMemberInfo()
  }, [])

  const infoCommander = () => {
    setCrewMember('commander')
  }

  const infoMissionSpecialist = () => {
    setCrewMember('specialist')
  }

  const infoPilot = () => {
    setCrewMember('pilot')
  }

  const infoFlightEngineer = () => {
    setCrewMember('engineer')
  }

  return (
    <div className='crew'>
      <div className='crew-block'>
        <div className='crew-status'>
          <div className='crew-titel'>Meet your crew</div>

          {crewMember === 'commander' && (
            <div className='crew-block-info'>
              {crewInfo.map((info) => (
                <p>
                  {info.role === 'Commander' && <p className='commander-role'>{info.role}</p>}
                  {info.role === 'Commander' && <p className='commander-name'>{info.name}</p>}
                  {info.role === 'Commander' && <p className='commandet-bio'>{info.bio}</p>}
                </p>
              ))}
            </div>
          )}

          {crewMember === 'specialist' && (
            <div className='crew-block-info'>
              {crewInfo.map((info) => (
                <p>
                  {info.role === 'Mission Specialist' && <p className='specialist-role'>{info.role}</p>}
                  {info.role === 'Mission Specialist' && <p className='specialist-name'>{info.name}</p>}
                  {info.role === 'Mission Specialist' && <p className='specialist-bio'>{info.bio}</p>}
                </p>
              ))}
            </div>
          )}

          {crewMember === 'pilot' && (
            <div className='crew-block-info'>
              {crewInfo.map((info) => (
                <p>
                  {info.role === 'Pilot' && <p className='pilot-role'>{info.role}</p>}
                  {info.role === 'Pilot' && <p className='pilot-name'>{info.name}</p>}
                  {info.role === 'Pilot' && <p className='pilot-bio'>{info.bio}</p>}
                </p>
              ))}
            </div>
          )}

          {crewMember === 'engineer' && (
            <div className='crew-block-info'>
              {crewInfo.map((info) => (
                <p>
                  {info.role === 'Flight Engineer' && <p className='engineer-role'>{info.role}</p>}
                  {info.role === 'Flight Engineer' && <p className='engineer-name'>{info.name}</p>}
                  {info.role === 'Flight Engineer' && <p className='engineer-bio'>{info.bio}</p>}
                </p>
              ))}
            </div>
          )}

          <div className='crew-menu'>
            <p className={crewMember === 'commander' ? 'circle-active' : 'circle-commander'} onClick={infoCommander}></p>
            <p className={crewMember === 'specialist' ? 'circle-active' : 'circle-specialist'} onClick={infoMissionSpecialist}></p>
            <p className={crewMember === 'pilot' ? 'circle-active' : 'circle-pilot'} onClick={infoPilot}></p>
            <p className={crewMember === 'engineer' ? 'circle-active' : 'circle-engineer'} onClick={infoFlightEngineer}></p>
          </div>
        </div>
        <div className='crew-photo'>
          {crewMember === 'commander' && (
            <>
              {crewInfo.map((photoCrew) => (
                <p>
                  {photoCrew.role === 'Commander' && <p className='photo-commander'></p>}
                </p>
              ))}
            </>
          )}

          {crewMember === 'specialist' && (
            <>
              {crewInfo.map((photoCrew) => (
                <p>
                  {photoCrew.role === 'Mission Specialist' && <p className='photo-specialist'></p>}
                </p>
              ))}
            </>
          )}

          {crewMember === 'pilot' && (
            <>
              {crewInfo.map((photoCrew) => (
                <p>
                  {photoCrew.role === 'Pilot' && <p className='photo-pilot'></p>}
                </p>
              ))}
            </>
          )}

          {crewMember === 'engineer' && (
            <>
              {crewInfo.map((photoCrew) => (
                <p>
                  {photoCrew.role === 'Flight Engineer' && <p className='photo-engineer'></p>}
                </p>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Crew
