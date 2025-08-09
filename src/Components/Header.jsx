 import React, { useState } from 'react';
import { motion } from 'framer-motion';
import klin from '../Image/2klin-Photoroom.png';
import { FiShoppingCart, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa'; 
 

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
                {item}
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
            height: '500px',
            backgroundColor: 'skyblue',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'start',
            zIndex: 1000,
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
                  padding:'2rem',
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
        </motion.div>
      )}
    </section>
  );
}
