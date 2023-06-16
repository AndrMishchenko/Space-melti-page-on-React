import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Tech = () => {

  const [techInfo, setTeachInfo] = useState([]);
  const [page, setPage] = useState('firstPage')

  useEffect(() => {
    const getTechInfo = async() => {
      const response = await axios.get('data.json')
      setTeachInfo(response.data.technology)
    }
    getTechInfo()
  },[])

  const firstPage = () => {
    setPage('firstPage')
  }

  const secondPage = () => {
    setPage('secondPage')
  }

  const thirdPage = () => {
    setPage('thirdPage')
  }

  return (
    <div className='tech'>
      <div className='tech-block'>
        <div className='tech-title-page'>Technology</div>
        <div className='tech-wrapper'>
          <div className='teck-block-info'>
              <div className='tech-menu'>
                <p className={page === 'firstPage' ? 'tech-menu-active' : 'tech-menu-off'} onClick={firstPage} >1</p>
                <p className={page === 'secondPage' ? 'tech-menu-active' : 'tech-menu-off'} onClick={secondPage}>2</p>
                <p className={page === 'thirdPage' ? 'tech-menu-active' : 'tech-menu-off'} onClick={thirdPage}>3</p>
              </div>
              <div className='tech-info'>
                <div className='tech-pre-title'>THE TERMINOLOGY…</div>
                {page === 'firstPage' && (
                  <div>
                    {techInfo.map((tech) => 
                      <div>
                        {tech.name === 'Launch vehicle' && <p className='tech-title'>{tech.name}</p>}
                        {tech.name === 'Launch vehicle' && <p className='tech-text'>{tech.description}</p>}
                      </div>
                    )}
                  </div>
                )}

              {page === 'secondPage' && (
                  <div>
                    {techInfo.map((tech) => 
                      <div>
                        {tech.name === 'Spaceport' && <p className='tech-title'>{tech.name}</p>}
                        {tech.name === 'Spaceport' && <p className='tech-text'>{tech.description}</p>}
                      </div>
                    )}
                  </div>
                )}

                {page === 'thirdPage' && (
                  <div>
                    {techInfo.map((tech) => 
                      <div>
                        {tech.name === 'Space capsule' && <p className='tech-title'>{tech.name}</p>}
                        {tech.name === 'Space capsule' && <p className='tech-text'>{tech.description}</p>}
                      </div>
                    )}
                  </div>
                )}  
              </div>
              <div className='img'>
                {page === 'firstPage' && (
                  <div className='first-img'></div>
                )}
                </div>
                {page === 'secondPage' && (
                  <div className='second-img'></div>
                )}

                {page === 'thirdPage' && (
                  <div className='third-img'></div>
                )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tech
