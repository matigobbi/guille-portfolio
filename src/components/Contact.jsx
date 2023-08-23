// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    alert("Your message was sent. I'll reach out to you as soon as possible!");
    e.preventDefault();
    //usar socket.io
    //o emailjs pero necesito que guille cree su cuenta
    //leer en el portal de ironhack
    console.log(formData);

    setFormData({
      name: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className='contact-container' >
      <h1 className='say-hello'>Say Hello!</h1>
      <div className="black-line contact-line"></div>
      <form onSubmit={handleSubmit}>
        <div className='form-container'>
          <div className='form-item'>
            <label htmlFor='name'></label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='First Name'
            />
          </div>
          <div className='form-item'>
            <label htmlFor='lastName'></label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              placeholder='Last Name'
            />
          </div>
          <div className='form-item'>
            <label htmlFor='email'></label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
            />
          </div>
          <div className='form-item'>
            <label htmlFor='subject'></label>
            <input
              type='text'
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              placeholder='Subject'
            />
          </div>
        </div>
        <div>
          <label htmlFor='message'></label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder='Your message...'
          />
        </div>
        <div className="button-submit">
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};
