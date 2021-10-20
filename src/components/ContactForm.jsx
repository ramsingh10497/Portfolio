import React, { useState } from 'react';
// import reactDom from 'react-dom';
import 'react-responsive-modal/styles.css';
import styled from 'styled-components';
import { Modal } from 'react-responsive-modal';
import submittSuccess from '../submittSuccess.gif';
import submittFailed from "../submittFailed.gif"

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
    color: azure;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: gray;
    background-color:lavender;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
    
  }
  textarea {
    min-height: 100px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: grey;
    color: black;
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);
const [msg, setMsg] = useState("");
const [img, setImg] = useState();
// const [clr, setClr] = useState("")
  const onOpenModal = (e) => {
    e.preventDefault();
    setOpen(true)
    if(name.length <= 2){
      setMsg("Name must be of more than two letters");
      setImg(submittFailed);
      
    }
    if(!(email.includes("@"))){
      setMsg("Email should be in proper format and must includes @");
      setImg(submittFailed);
      
    }
    if(name.length>2 && email !== "" && email.includes("@")){
      
       setMsg("Submitted Successfully");
       setImg(submittSuccess);
      }
     
  };
  const onCloseModal = () => setOpen(false);

  
  return (
    <>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" onClick={onOpenModal}>Send</button>
        <Modal open={open} onClose={onCloseModal} center>
        <h2 style={{margin:"3rem auto", textAlign: "center", color:"seagreen", fontWeight:"bold"}}>{msg}</h2>
        <img src={img} alt="success" style={{width:"60%", margin:"3rem 20%", textAlign: "center", }} />
          
      </Modal>
      </FormStyle>
    </>
  );
}