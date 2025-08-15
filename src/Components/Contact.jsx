 import React, { useState } from 'react';
import { FaFacebookF, FaWhatsapp, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import Header from './Header';
import Footer from './Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <Header />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <section style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...styles.input, height: '120px', resize: 'none' }}
          required
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>

      {/* Social Media Icons */}
      <div style={styles.socialContainer}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaFacebookF /></a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaWhatsapp /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaInstagram /></a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={styles.icon}><FaTiktok /></a>
        <a href="tel:+1234567890" style={styles.icon}><FiPhone /></a>
      </div>
    </section>

    <Footer />
    </>
  );
}

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: '2rem auto',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    
     
  },
  heading: {
    marginBottom: '1rem',
    color: '#15960c',
    fontSize: '2rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    
  },
  input: {
    padding: '0.8rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  },
  button: {
    padding: '0.8rem',
    backgroundColor: '#15960c',
    color: 'white',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1.5rem'
  },
  icon: {
    fontSize: '1.5rem',
    color: '#15960c',
    textDecoration: 'none'
  }
};
