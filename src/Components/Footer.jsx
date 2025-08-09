 import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* About / Logo */}
        <div style={styles.section}>
          <h2 style={styles.title}>2klin Soap Detergent</h2>
          <p style={styles.text}>
            Trusted quality detergent for your daily cleaning needs.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.subtitle}>Quick Links</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="#home" style={styles.link}>Home</a></li>
            <li style={styles.listItem}><a href="#products" style={styles.link}>Products</a></li>
            <li style={styles.listItem}><a href="#shop" style={styles.link}>Shop</a></li>
            <li style={styles.listItem}><a href="#contact" style={styles.link}>Contact</a></li>
            <li style={styles.listItem}><a href="#distributor" style={styles.link}>Distributor</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div style={styles.section}>
          <h3 style={styles.subtitle}>Contact Us</h3>
          <p style={styles.text}>Email: support@2klin.com</p>
          <p style={styles.text}>Phone: +234 -7047391302, +234-8064850939</p>
          <p style={styles.text}>Address: 123 st.Francs, Lagos city, Nigeria</p>
        </div>

        {/* Social + Newsletter */}
        <div style={styles.section}>
          <h3 style={styles.subtitle}>Stay Connected</h3>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com/2klin" target="_blank" rel="noreferrer" style={styles.icon}><FiFacebook size={24} /></a>
            <a href="https://instagram.com/2klin" target="_blank" rel="noreferrer" style={styles.icon}><FiInstagram size={24} /></a>
            <a href="https://twitter.com/2klin" target="_blank" rel="noreferrer" style={styles.icon}><FiTwitter size={24} /></a>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks for subscribing!');
            }}
            style={{ marginTop: '1rem' }}
          >
            <label htmlFor="email" style={styles.label}>
              <FiMail style={{ verticalAlign: 'middle', marginRight: 6 }} />
              Subscribe to our newsletter:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Subscribe</button>
          </form>
        </div>
      </div>

      <div style={styles.copy}>
        &copy; {new Date().getFullYear()} 2klin Soap Detergent. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#15960c',
    color: 'white',
    padding: '2rem 1rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '0 auto',
    justifyContent: 'space-between',
  },
  section: {
    flex: '1 1 220px',
    margin: '1rem',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
    borderBottom: '2px solid white',
    paddingBottom: '0.3rem',
  },
  text: {
    marginBottom: '0.6rem',
    lineHeight: 1.5,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: '0.5rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
  },
  icon: {
    color: 'white',
    transition: 'color 0.3s',
    textDecoration: 'none',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
  },
  input: {
    padding: '0.5rem',
    width: 'calc(100% - 110px)',
    borderRadius: '4px',
    border: 'none',
    marginRight: '0.5rem',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#0f6c07',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    cursor: 'pointer',
  },
  copy: {
    textAlign: 'center',
    marginTop: '2rem',
    fontSize: '0.9rem',
    opacity: 0.8,
  },
};
