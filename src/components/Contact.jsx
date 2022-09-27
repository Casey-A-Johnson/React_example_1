import React from 'react';
import { useState } from 'react';

const Contact = (props) => {
  const [inputs, setInputs] = useState({
    Name: '',
    Email: '',
    Message: '',
  });

  const [errors, setErrors] = useState({
    Name: '',
    Email: '',
    Message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Thanks for your message');
  };

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: validate(e.target.name, e.target.value),
    });
  };

  const validations = {
    Name: {
      type: 'minLength',
      comp: 0,
    },
    Email: {
      type: 'minLength',
      comp: 0,
    },
    Message: {
      type: 'minLength',
      comp: 0,
    },
  };

  const validate = (inputName, inputValue) => {
    const validation = validations[inputName];
    if (validation.type === 'minLength') {
      return inputValue.length < validation.comp ? (
        <p style={{ color: 'red' }}>{`${inputName} must be provided`}</p>
      ) : (
        ''
      );
    }
  };

  return (
    <div className="Form">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            name="Name"
            onChange={handleChange}
            value={inputs.Name}
            required
          />
          {errors.Name}
        </div>
        <div>
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            name="Email"
            onChange={handleChange}
            value={inputs.Email}
            required
          />
          {errors.Email}
        </div>
        <div>
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            name="Message"
            onChange={handleChange}
            value={inputs.Message}
            required
          ></textarea>
          {errors.Message}
        </div>
        <button className="btn btn-outline-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
