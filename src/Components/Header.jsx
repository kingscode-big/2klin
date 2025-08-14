 import React, { useState } from 'react';
import { motion } from 'framer-motion';
import klin from '../Image/2klin-Photoroom.png';
import { FiShoppingCart, FiHeart, FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaWhatsapp, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6'; 
import Homepage from './Homepage';
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

export default function Header({ searchQuery, setSearchQuery, searchResults, onSelectProduct }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuPages = ['Home', 'Products', 'Shop', 'Contact', 'Distributor'];

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
          <img className="App-logo" src={klin} alt="logo" />
        </motion.div>

        {/* Nav list */}
        <motion.div
          className="App-ul-container"
          variants={listContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.ul className="App-ul">
            {['Home', 'Products', 'Shop', 'Contact', 'Order Services'].map((item, index) => (
              <motion.li
                key={index}
                className="App-page-list"
                variants={listItem}
                whileHover={{ scale: 1.1, color: '#15960c' }}
              >
                <Link>{item}</Link>
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
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a> {/* TikTok */}
          <a href="tel:+1234567890"><FiPhone /></a> {/* Call */}
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
            {menuPages.map((page, i) => (
              <li
                key={i}
                style={{
                  fontSize: '2rem',
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                }}
                onClick={() => setMenuOpen(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setMenuOpen(false);
                }}
                tabIndex={0}
              >
                {page}
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
            <a href="https://www.tiktok.com/@daberechukwu24" target="_blank" rel="noopener noreferrer"><FaTiktok size={24} /></a> {/* TikTok */}
            <a href="tel:+2347047391302"><FiPhone size={24} /></a> {/* Call */}
          </div>
        </motion.div>
      )}
    </section>
  );
}
