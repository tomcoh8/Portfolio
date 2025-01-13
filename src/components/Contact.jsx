import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Formulaire envoyé !');
  };

  return (
    <div id='all-contact'>
      <h2>CONTACTEZ-MOI</h2>

      <div id="contact">

        <div id='infos-contact'>
          <a href="mailto:tom.cohelech8@gmail.com."><img src="../../mail.png" alt="" width="30vh"/>tom.coheleach8@gmail.com</a>

          <a href="https://www.linkedin.com/in/tom-coheleach-3284a0264"><img src="../../logo linkedin.png" alt="" width="30vh"/>Tom Coheleach</a>
          <a href="../../mon cv.pdf"><img src="../../logo-cv.png" alt="" width="30vh"/>mon CV ici</a>
        </div>
        <div id='contactez-moi'>

          <form onSubmit={handleSubmit} className="contact-form">

            <div className="form-row">
              <div className="form-group">
                <label>Prénom</label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Nom</label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label id='label-message'>Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div class="form-row button-row">
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>

      </div>
    </div>

    
  );
}
