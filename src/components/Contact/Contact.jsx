import React,{ useRef, useState } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
  

const Contact = () => {
  const form = useRef();
  const [isdisable, setdisable] = useState(false);
  function handleClick()
  {
    setdisable(true);
    setTimeout(() => {
      setdisable(false);
    }, 3000);
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7fzzmul', 'template_kqqxv6h', form.current, {
        publicKey: 'oJkjQA-lOMAfOY9S_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email sent,thank you");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="div">
      <div className="left">
        <h1>Any Queries ?</h1>
        <div>
          <div>Need to clarify any query with us?</div>
          <div>Fill out the form with your
          inquiry and we will reach you out soon</div>
        </div>
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
            rows="3" required
          ></textarea>
        <input className={`button ${isdisable ? 'disable' : ''}`} type="submit" value="Submit" onSubmit={handleClick} />
        </form>
      </div>
    </div>
  );
};

export default Contact;

