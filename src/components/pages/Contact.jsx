import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

 
  // Function to update form data
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle blur event
  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  // Function to validate the form data
  const validate = () => {
    const errors = {};
    // if (!formData.name) errors.name = 'Name is required';

    if (!formData.email) { 
      // errors.email = 'Email is required';   
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Invalid Email Entry';
    }

    if (!formData.message) errors.message = 'Message sent!';
    return errors;
  };

  const errors = validate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Fetch error:', error);
    }

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };


return (
    <div>
      <h1 class="text-center beau font70 margin20">Contact Page:</h1>
      <div className="container mt-5">
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group" class="text-center font30 play">
            <label htmlFor="name">Name:</label>
            <div class="d-flex justify-content-center margin20">
            <input
              type="text"
              className="form-control w-50"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            </div>
            {touched.name && errors.name && <div className="text-danger">{errors.name}</div>}
          </div>

          <div className="form-group" class="text-center margin20 font30 play">
            <label htmlFor="email">Email:</label>
            <div class="d-flex justify-content-center margin20">
            <input
              type="email"
              className="form-control w-50"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            </div>
            {touched.email && errors.email && <div className="text-green">{errors.email}</div>}
          </div>

          <div className="form-group" class="text-center margin20 font30 play">
            <label htmlFor="message">Message:</label>
            <div class="d-flex justify-content-center margin20">
            <textarea
              className="form-control w-50"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            ></textarea></div>
            {touched.message && errors.message && <div className="text-green">{errors.message}</div>}
          </div>
          <div class="d-flex justify-content-center margin30">
          <button type="submit" className="btn grn contactbtn nuni">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
  }



 