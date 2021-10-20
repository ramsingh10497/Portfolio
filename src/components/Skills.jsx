import React, { useState } from 'react';
import '../App.css';
import { Frontend, Backend } from './proficiencyList';
import SectionTitle from './SectionTitle';

const Skills = () => {
    const [fskill, setFskill] = useState(Frontend)
  const [bskill, setBskill] = useState(Backend)
    return (
        <>
        <div className="mySkills">
        {/* <h2>Proficiencies</h2> */}
        <div>
          <div className="front">
            {/* <h3>Frontend</h3> */}
             <SectionTitle 
                subheading=""
                heading="Frontend"
              />
            <div className="fmain">
              {fskill.map((item) => (
                <>
                <div className="boxes">
                  <h4>{item.name}</h4>
                  <img src={item.img} alt="sf" />
                </div>
                </>
              ))}
            </div>
          </div>
          <div className="back">
            {/* <h3>Backend</h3> */}
             <SectionTitle 
                subheading=""
                heading="Backend"
              />
            <div className="bmain">
              {bskill.map((item) => (
                <>
                <div className="boxes">
                  <h4>{item.name}</h4>
                  <img src={item.img} alt="sfg" />
                </div>
                </>
              ))}
            </div>
          </div>
        </div>
    </div>
    </>
    )
}

export default Skills
