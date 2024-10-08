import React,{ useRef, useState } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
import contactimg from '../../assets/contact.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [isdisable, setdisable] = useState(false);
  const success = () => toast.success("Email sent,thank you");
    const failed = () => toast.error("Sorry some error occured!");
  function handleClick()
  {
    setdisable(true);
  }
  const sendEmail = (e) => {
    e.preventDefault();
    handleClick();

    emailjs
      .sendForm('service_7fzzmul', 'template_kqqxv6h', form.current, {
        publicKey: 'oJkjQA-lOMAfOY9S_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          success();
          form.current.reset();
          setdisable(false);
        },
        (error) => {
          failed();
          console.log('FAILED...', error.text);
          setdisable(false);
        },
      );
  };
  return (
    <>
    <div className="div">
      <div className="left">
      <h1>Any Queries ?</h1>
      </div>
      <div className="right">
        <form className="form" ref={form} onSubmit={sendEmail}>
        <p className="p">Name*</p>
          <input
            className="input"
            type="text"
            id="Name"
            name="from_name"
            placeholder="Your Name" required
          />
          <p className="p">Email*</p>
          <input type="email" name="from_email" placeholder="Enter your Email" required/>
          <p className="p">What can we help you with?</p>
          <textarea
            className="textarea"
            name="message"
            rows="3"
            required
          ></textarea>
        <input className={`button ${isdisable ? 'disable' : ''}`} type="submit" value="Submit" disabled={isdisable}/>
        </form>
      </div>
    </div>
    <ToastContainer position="top-center"/>
    </>
  );
};

export default Contact;

