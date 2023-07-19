// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { firstName, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [firstName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //usar socket.io
    //leer en el portal de ironhack
    console.log(formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className='contact-container'>
      <h1>Say Hello!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'></label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            placeholder='First Name'
          />
        </div>
        <label htmlFor='lastName'></label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          placeholder='Last Name'
        />
        <div>
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
        <div>
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
        <div>
          <label htmlFor='message'></label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder='Your message'
          />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};
