 import React from 'react';
import { motion } from 'framer-motion';
import klin from '../Image/klinn.jpg';
import kik from '../Image/kik-Photoroom.png';
import kik1 from '../Image/kik1.png';

export default function Hero() {
  return (
    <section className="App-hero">
      <div className="hero-content">
        {/* Image 1: Zoom and fade on load, zoom on scroll, scale on hover */}
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileInView={{ scale: 1.1 }}
          whileHover={{ scale: 1.2, rotate: 2 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <img src={kik} alt="basket" className="hero-image1" />
        </motion.p>

        {/* Image 2: Slide in from left on load, zoom on scroll, lift on hover */}
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileInView={{ scale: 1.05 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <img src={klin} alt="basket" className="hero-image" />
        </motion.p>

        <div className="hero-content2">
          {/* Image 3: Slide in from right on load, fade on scroll, scale on hover */}
          <motion.img
            src={kik1}
            alt="2klin"
            className="hero-2klin-image"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileInView={{ opacity: 0.9 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: false }}
          />

          {/* Image 4: Bounce in on load and scroll, rotate on hover */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileInView={{ scale: 1.1 }}
            whileHover={{ rotate: 3, scale: 1.1 }}
            transition={{ duration: 1.4 }}
            viewport={{ once: false }}
          >
            <img src={klin} alt="basket" className="hero-image3" />
          </motion.p>
        </div>
      </div>
    </section>
  );
}
