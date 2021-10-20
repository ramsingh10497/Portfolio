import React from 'react';
import styled from 'styled-components';
// import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
// import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import contactMe from '../contactMe.jpg'
import InstagramIcon from '@material-ui/icons/Instagram';
import { GitHub } from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Email } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
    width:100vw;
    /* padding: 2rem; */
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: gray;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
    z-index: 2;
    img{
        margin-top: 20px;
        width: 510px;
        /* height: 150px; */
    }
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    z-index: 2;
    /* padding-left: 3rem; */
  }
  .social{
    text-align: center;
    width: 60vw;
    margin:auto;
    margin-top: 5rem;
    /* display: flex; */
    /* font-size: x-large; */
  }
  .socialIcon{
    font-size: 5rem;
    border: 3px solid #FFFF00;
    border-radius: 50%;
    background-color: honeydew;
margin: 0 1rem;
  }
  .socialIcon:hover{
    border: 4px solid #FF0099;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
    .left { img{
      width: 100vw;
    }
  }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            {/* <ContactInfoItem icon={<MdLocalPhone />} text="+8801231" />
            <ContactInfoItem icon={<MdEmail />} text="webcifar@gmail.com" />
            <ContactInfoItem text="Chittagong, Bangladesh" /> */}
            <img src={contactMe} alt="contact" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="social">

<a href="https://github.com/ramsingh10497" target="_blank" rel="noreferrer"><GitHub className="socialIcon" /></a>

<a href="https://www.linkedin.com/in/ram-singh-99014a176/" target="_blank" rel="noreferrer"><LinkedInIcon className="socialIcon" /></a>
<a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer"><Email className="socialIcon" /></a>
<a href="https://twitter.com/home" target="_blank" rel="noreferrer"><Twitter className="socialIcon" /></a>

      </div>
    </ContactSectionStyle>
  );
}