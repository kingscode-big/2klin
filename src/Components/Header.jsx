 import React, { useState } from 'react';
import { motion } from 'framer-motion';
import klin from '../Image/2klin-Photoroom.png';
import { FiShoppingCart, FiHeart, FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaWhatsapp, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6'; 
import { Link } from 'react-router-dom';

const listContainer = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

// Page route mapping
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
  { name: 'Place an Order', path: '/order-services' }
];

export default function Header({ searchQuery, setSearchQuery, searchResults, onSelectProduct }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section>
      <motion.div
        className="Header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Logo */}
        <motion.div
          className="App-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/">
            <img className="App-logo" src={klin} alt="logo" />
          </Link>
        </motion.div>

        {/* Nav list */}
        <motion.div
          className="App-ul-container"
          variants={listContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.ul className="App-ul">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                className="App-page-list"
                variants={listItem}
                whileHover={{ scale: 1.1, color: '#15960c' }}
              >
                <Link to={link.path} style={{
                  listStyle:'none',
                  textDecoration:'none',
                  color:'#333333'
                }} >{link.name}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Search input */}
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && searchResults.length > 0 && (
            <div className="search-results-overlay">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  className="search-result-item"
                  onClick={() => onSelectProduct(product)}
                >
                  {product.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Icons */}
        <motion.div
          className="header-icon"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FiShoppingCart className="shop-icon" size={30} />
          <FiHeart className="love-icon" size={30} />
        </motion.div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a href="tel:+1234567890"><FiPhone /></a>
        </div>

        {/* Hamburger Menu */}
        <motion.div
          className="App-hamburger"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.2 }}
          onClick={() => setMenuOpen(true)}
          style={{ cursor: 'pointer' }}
          aria-label="Open menu"
        >
          <FiMenu size={28} />
        </motion.div>
      </motion.div>

      {/* Menu Overlay */}
      {menuOpen && (
        <motion.div
          className="menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: '3.5rem',
            left: 0,
            width: '100vw',
            height: '800px',
            backgroundColor: 'skyblue',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 1000,
            paddingBottom: '2rem',
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
            }}
            aria-label="Close menu"
          >
            <FiX />
          </button>

          {/* Menu Pages */}
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              textAlign: 'start',
            }}
          >
            {navLinks.map((link, i) => (
              <li
                key={i}
                style={{
                  fontSize: '2rem',
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                }}
              >
                <Link
                  to={link.path}
                  style={{ color: 'white', textDecoration: 'none' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons at Bottom */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              marginTop: 'auto',
            }}
          >
            <a href="https://facebook.com/DabereChukwu" target="_blank" rel="noopener noreferrer"><FaFacebookF size={24} /></a>
            <a href="https://wa.me/7047391302" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
            <a href="https://www.tiktok.com/@daberechukwu24" target="_blank" rel="noopener noreferrer"><FaTiktok size={24} /></a>
            <a href="tel:+2347047391302"><FiPhone size={24} /></a>
          </div>
        </motion.div>
      )}
    </section>
  );
}
