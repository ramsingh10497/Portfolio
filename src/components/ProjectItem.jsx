import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../upGradProject.png';

const ProjectItemStyles = styled.div`
  .outer{
    border: 3px solid grey;
    border-radius: 12px;
  }
  .projectItem__img {
    width: 100%;
    height: 220px;
   
    overflow: hidden;
    display: inline-block;
    
    /* background-color: beige; */
    z-index: 2;
    img {
      
      height: 100%;
      width: 100%;
    }
  }
  .projectItem__info {
    /* margin-top: 1rem; */
    background-color: black;
    color:whitesmoke;
    padding: 1rem;
    border-radius: 12px;
    height: 325px;
  }
  .projectItem__title {
    font-size: 2.2rem;
    /* color: greenyellow; */
    color: var(--primary-orange);
  }
  .projectItem__desc {
    font-size: 1.6rem;
    /* font-family: 'RobotoMono Regular'; */
    margin-top: 1rem;
    margin-bottom: 5%;
    height: 90px;
  }
  .tech{
    /* display: flex; */
    height: 110px;
    border: 1px solid floralwhite;
    margin-bottom: 4%;
    
  }
  .btndiv > button{
    /* border-top: 3px solid red; */
    /* border-bottom: 3px solid white; */
    /* border: 0.1875rem solid var(--primary-orange); */
    /* background-color: rosybrown; */
    /* font-size: 2rem; */
    width: 80px;
    color: white; 
    height:40px; 
    border-radius:4px;
    font-size:1.7rem;
    font-weight:bold;
    border:1px solid #d99500;
    background-color:#d99500;
    /* outline: none; */
    /* border-radius: 10px; */

    
  }
  .btndiv > button:hover{
    /* border:px solid red; */
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    /* border-top: 3px solid white; */
    /* border-bottom: 3px solid red; */

  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 240px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  href = 'something',
  href1 = "dsr",
  tech = "sfs",
}) {
  return (
    <ProjectItemStyles>
    <div className="outer">
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
       
          <h3 className="projectItem__title">{title}</h3>
        
        <p className="projectItem__desc">{desc}</p>
        <div className="tech"><p style={{fontSize:"large", textAlign:"center", paddingTop:"0.9rem", color:"#d99500"}}>Tech Used :-</p><p style={{fontSize:"medium", textAlign:"center", padding:"0 0.7rem 1.2rem 0.7rem"}}>{tech}</p></div>
        <div className="btndiv" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginLeft:"10px", marginRight:"10px"}}>
         <button> <a href={href} target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}>Code </a></button>
        <button><a href={href1} target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}>Link</a></button>
        </div>
      </div>
      </div>
    </ProjectItemStyles>
  );
}