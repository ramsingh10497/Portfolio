import React, { useState } from 'react'
import styled from 'styled-components';
import PText from './Ptext';
import SectionTitle from './SectionTitle';
import aboutMe from '../aboutMe.jpg'
import { Frontend, Backend } from './proficiencyList';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  background-color: rgb(19,20,25) !important;
  color: beige;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
    z-index: 2;
  }
  .mbtn{
    /* border-top: 3px solid var(--primary-orange); */
    /* border-bottom: 3px solid white; */
    border: 0.1875rem solid var(--primary-orange);
    color: var(--primary-white);
    background-color: black;
    font-size: 2rem;
    width: 100px;
    /* box-sizing: border-box; */
    padding: 0.5rem 1rem;
    /* border-radius: 10px; */
  }
  .mbtn:hover{
    /* border:px solid red; */
    border-radius: 15px;
    /* border-top: 3px solid white; */
    /* border-bottom: 3px solid red; */
    transition: 0.3s ease-out
    /* border-radius: 10px; */
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column-reverse;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 1rem;
      margin-bottom: 1rem;
     img{
       width: 100vw !important;
     }
    }
    
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 1rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

const About = () => {
  const [fskill, setFskill] = useState(Frontend)
  const [bskill, setBskill] = useState(Backend)

  
    return (
        <AboutSectionStyles>
          <div className="container">
            <div className="aboutSection__left">
              <SectionTitle 
                subheading="Let me introduce myself"
                heading="About Me"
              />
              <PText>
              My name is Ram Singh.
I am from Asansol, West Bengal.
I am a hard-working B.Tech. graduate specialized in Computer Science from BCET, Durgapur in 2021.
I'm a curious and enthusiastic full-stack web developer with a good foundation in following libraries, frameworks and tools.

              </PText>
              <div className="aboutSection__buttons">
                <button className="mbtn">Projects</button>
                <button className="mbtn">Blogs</button>
              </div>
            </div>
            <div className="aboutSection__right">
              <img className="aboutImg" style={{width:"550px"}} src={aboutMe} alt="Img" />
            </div>
          </div>
          {/* <div className="mySkills">
              <h2>Proficiencies</h2>
              <div>
                <div className="front">
                  <h3>Frontend</h3>
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
                  <h3>Backend</h3>
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
           */}
        </AboutSectionStyles>
      );
}

export default About
