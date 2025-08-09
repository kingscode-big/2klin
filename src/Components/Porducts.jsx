 import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaCreditCard, FaUniversity, FaMoneyCheckAlt, FaCcMastercard, FaCcVisa, FaCcAmex } from 'react-icons/fa';
import { FiEye, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

import antibacteria from '../Image/antibacterial-Photoroom.png';
import klin from '../Image/kik1.png';
import klin2 from '../Image/debby-Photoroom.png';
import well from '../Image/well-Photoroom.png';
import bleach from '../Image/bleach-Photoroom.png';
import survenirs from '../Image/survenirs-Photoroom.png';
import bodywash from '../Image/bodywash-Photoroom.png';
import toilet from '../Image/toilet-Photoroom.png';
import stain from '../Image/retain remover-Photoroom.png';
import soap from '../Image/soap multi-Photoroom.png';

export default function Porducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedProductForPayment, setSelectedProductForPayment] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [paymentStep, setPaymentStep] = useState('selectMethod'); // 'selectMethod', 'creditCardOptions', 'cartUnavailable', 'bankTransferDetails'

  const [mainImages, setMainImages] = useState({});
  const [hoverImages, setHoverImages] = useState({});

  const [quantity, setQuantity] = useState(1);

  const products = [
    { id: 1, name: 'Multipurpose soap', image: well, price: 45, rating: 4.5, size: 'large', description: 'A versatile soap for all purposes.' },
    { id: 2, name: 'Toilet Cleaner', image: klin2, price: 55, rating: 5, size: 'medium', description: 'Effective cleaner for your toilet.' },
    { id: 3, name: 'Tile cleaner', image: klin, price: 49, rating: 4, size: 'large', description: 'Keeps your tiles sparkling clean.' },
    { id: 4, name: 'Air Refreshner', image: klin, price: 60, rating: 4, size: 'large', description: 'Freshens the air instantly.' },
    { id: 5, name: 'Bleach', image: bleach, price: 60, rating: 4.5, size: 'large', description: 'Powerful bleach for whitening.' },
    { id: 6, name: 'Multipurpose soap', image: klin, price: 60, rating: 5, size: 'small', description: 'Small but effective soap.' },
    { id: 7, name: 'Soap Survenirs', image: survenirs, price: 60, rating: 5, size: 'medium', description: 'Beautiful souvenir soaps.' },
    { id: 8, name: 'Body wash', image: bodywash, price: 60, rating: 3.5, size: 'large', description: 'Gentle and moisturizing body wash.' },
    { id: 9, name: 'Antibacterial soap', image: antibacteria, price: 60, rating: 3.5, size: 'small', description: 'Keeps bacteria away.' },
    { id: 10, name: 'Toilet soap', image: toilet, price: 60, rating: 3.5, size: 'small', description: 'Soap made for toilet use.' },
    { id: 11, name: 'Stain remover', image: stain, price: 60, rating: 3.5, size: 'medium', description: 'Removes tough stains easily.' },
    { id: 12, name: 'Multipurpose soap survenir', image: soap, price: 60, rating: 3.5, size: 'small', description: 'Souvenir multipurpose soap.' },
  ];

  const variationsMap = {
    1: [well, klin, klin2, bleach],
    2: [klin2, well, bleach, survenirs],
    3: [klin, klin2, bleach, bodywash],
    4: [klin, survenirs, bleach, antibacteria],
    5: [bleach, klin2, soap, toilet],
    6: [klin, well, stain, survenirs],
    7: [survenirs, klin, soap, bleach],
    8: [bodywash, klin2, soap, stain],
    9: [antibacteria, klin, bleach, toilet],
    10: [toilet, klin2, soap, bodywash],
    11: [stain, klin, survenirs, bleach],
    12: [soap, klin2, well, toilet],
  };

  function renderStars(rating) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={'full-' + i} />);
    if (hasHalf) stars.push(<FaStarHalfAlt key="half" />);
    for (let i = 0; i < emptyStars; i++) stars.push(<FaRegStar key={'empty-' + i} />);
    return stars;
  }

  const handleThumbnailClick = (productId, image) => {
    setMainImages(prev => ({ ...prev, [productId]: image }));
  };

  useEffect(() => {
    if (selectedProduct) {
      setQuantity(1);
    }
  }, [selectedProduct]);

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const getModalImage = () => {
    if (!selectedProduct) return null;
    const hovered = hoverImages[selectedProduct.id];
    const main = mainImages[selectedProduct.id];
    return hovered || main || selectedProduct.image;
  };

  return (
    <>
      <div className="products-header">
        <img src={klin} alt="klin" className="moving-image delay-1" />
        <img src={klin2} alt="klin2" className="moving-image delay-2" />
      </div>
      <div className="products-title-section">
        <h1 className="hero-header-title">Our Products</h1>
      </div>

      <section className="products-container">
        <section className="products-grid-container">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}
              style={{ cursor: 'pointer', position: 'relative' }}
              onClick={() => {
                const imageToShow = hoverImages[product.id] || mainImages[product.id] || product.image;
                setSelectedProduct({ ...product, image: imageToShow });
              }}
            >
              <div className="product-actions">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const imageToShow = hoverImages[product.id] || mainImages[product.id] || product.image;
                    setSelectedProduct({ ...product, image: imageToShow });
                  }}
                  aria-label="View Product"
                >
                  <FiEye />
                </button>
                <button aria-label="Add to Wishlist"><FiHeart /></button>
                <button aria-label="Add to Cart"><FiShoppingCart /></button>
              </div>

              <img
                src={hoverImages[product.id] || mainImages[product.id] || product.image}
                alt={product.name}
                className="product-image"
                onClick={(e) => {
                  e.stopPropagation();
                  const imageToShow = hoverImages[product.id] || mainImages[product.id] || product.image;
                  setSelectedProduct({ ...product, image: imageToShow });
                }}
              />

              <div className="product-variations" onClick={(e) => e.stopPropagation()}>
                {variationsMap[product.id].map((variant, i) => (
                  <img
                    key={i}
                    src={variant}
                    alt={`${product.name} variation ${i + 1}`}
                    className="variation-thumb"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleThumbnailClick(product.id, variant);
                    }}
                    onMouseEnter={() =>
                      setHoverImages(prev => ({ ...prev, [product.id]: variant }))
                    }
                    onMouseLeave={() =>
                      setHoverImages(prev => {
                        const newHover = { ...prev };
                        delete newHover[product.id];
                        return newHover;
                      })
                    }
                  />
                ))}
              </div>

              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <p className="product-size">Size: {product.size}</p>
              <div className="star-rating" style={{ color: '#ffc107', fontSize: '1rem' }}>
                {renderStars(product.rating)}
              </div>
              <button
                className="buy-button"
                onClick={(e) => {
                  e.stopPropagation();
                  const imageToShow = hoverImages[product.id] || mainImages[product.id] || product.image;
                  setSelectedProduct({ ...product, image: imageToShow });
                }}
              >
                Check in
              </button>
            </motion.div>
          ))}
        </section>
      </section>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={getModalImage()} alt={selectedProduct.name} className="modal-image" />
              <h2>{selectedProduct.name}</h2>
              <p className="modal-price">Price: ${selectedProduct.price.toFixed(2)}</p>
              <p className="modal-size">Size: {selectedProduct.size}</p>
              <p className="modal-description">{selectedProduct.description || 'No description available.'}</p>
              <div className="modal-stars" style={{ color: '#ffc107', fontSize: '1.4rem' }}>
                {renderStars(selectedProduct.rating)}
              </div>

              <div className="quantity-selector" style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                <button
                  onClick={decrementQuantity}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    backgroundColor: '#f0f0f0',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }}
                >
                  -
                </button>
                <span style={{ margin: '0 15px', fontSize: '1.1rem' }}>{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    backgroundColor: '#f0f0f0',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }}
                >
                  +
                </button>
              </div>

              <button
                name="buy-now-btn"
                onClick={() => {
                  setShowPaymentModal(true);
                  setSelectedProductForPayment({ ...selectedProduct, quantity });
                  setPaymentMethod(null);
                  setPaymentStep('selectMethod');
                }}
                style={{
                  backgroundColor: '#007BFF',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 16px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  marginTop: '10px',
                }}
              >
                Buy Now
              </button>

              <button
                className="modal-close"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close modal"
                style={{
                  backgroundColor: '#ddd',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 14px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  marginTop: '10px',
                  marginLeft: '10px',
                }}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Payment Method Modal */}
      <AnimatePresence>
        {showPaymentModal && selectedProductForPayment && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPaymentModal(false)}
          >
            <motion.div
              className="modal payment-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: 'relative', paddingTop: '3rem' }}
            >
              {/* Back Button */}
              <button
                onClick={() => setShowPaymentModal(false)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: '#007BFF',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0056b3'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#007BFF'}
                aria-label="Back"
              >
                ← Back
              </button>

              {paymentStep === 'selectMethod' && (
                <>
                  <h2>Select Payment Method</h2>
                  <button
                    onClick={() => {
                      setPaymentMethod('creditCard');
                      setPaymentStep('creditCardOptions');
                    }}
                    style={{
                      margin: '10px 0',
                      padding: '10px',
                      width: '100%',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      backgroundColor: '#0070f3',
                      color: 'white',
                      border: 'none',
                    }}
                  >
                    <FaCreditCard size={24} color="#ffd700" /> Credit Card
                  </button>
                  <button
                    onClick={() => {
                      setPaymentMethod('cart');
                      setPaymentStep('cartUnavailable');
                    }}
                    style={{
                      margin: '10px 0',
                      padding: '10px',
                      width: '100%',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      backgroundColor: '#28a745',
                      color: 'white',
                      border: 'none',
                    }}
                  >
                    <FaMoneyCheckAlt size={24} color="#ffffff" /> Cart
                  </button>
                  <button
                    onClick={() => {
                      setPaymentMethod('bankTransfer');
                      setPaymentStep('bankTransferDetails');
                    }}
                    style={{
                      margin: '10px 0',
                      padding: '10px',
                      width: '100%',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      backgroundColor: '#6f42c1',
                      color: 'white',
                      border: 'none',
                    }}
                  >
                    <FaUniversity size={24} color="#ffc107" /> Bank Transfer
                  </button>

                  <button
                    onClick={() => setShowPaymentModal(false)}
                    style={{
                      marginTop: '20px',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      background: '#eee',
                      border: 'none',
                    }}
                  >
                    Cancel
                  </button>
                </>
              )}

              {paymentStep === 'creditCardOptions' && (
                <div style={{ marginTop: '1rem' }}>
                  <p>Select Credit Card Type:</p>
                  <button
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px', padding: '8px', width: '100%', borderRadius: '6px', border: '1px solid #ccc', cursor: 'pointer' }}
                  >
                    <FaCcMastercard size={28} color="#eb001b" /> Mastercard
                  </button>
                  <button
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px', padding: '8px', width: '100%', borderRadius: '6px', border: '1px solid #ccc', cursor: 'pointer' }}
                  >
                    <FaCcVisa size={28} color="#1a1f71" /> Visa
                  </button>
                  <button
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px', padding: '8px', width: '100%', borderRadius: '6px', border: '1px solid #ccc', cursor: 'pointer' }}
                  >
                    <FaCcAmex size={28} color="#2e77bb" /> American Express
                  </button>
                </div>
              )}

              {paymentStep === 'cartUnavailable' && (
                <div style={{ marginTop: '1rem', color: 'red' }}>
                  <p>Payment by cart is not available. Please pay by bank transfer.</p>
                </div>
              )}

              {paymentStep === 'bankTransferDetails' && (
                <div style={{ marginTop: '1rem' }}>
                  <p>Bank Transfer Details:</p>
                  <ul style={{ listStyle: 'none', paddingLeft: 0 ,padding:'1rem'}}>
                    <li style={{color:'green',paddingTop:'1rem'}}><strong style={{color:'white',paddingTop:'1rem'}}>Bank Name:</strong> Example Bank</li>
                    <li style={{color:'green',paddingTop:'1rem'}}><strong style={{color:'white',paddingTop:'1rem'}}>Account Number:</strong> 1234567890</li>
                    <li style={{color:'green',paddingTop:'1rem'}}><strong style={{color:'white',paddingTop:'1rem'}}>Account Name:</strong> 2klin sparkle</li>
                    <li style={{color:'green',paddingTop:'1rem'}}><strong style={{color:'white',paddingTop:'1rem'}}>Swift Code:</strong> EXAMP123</li>
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
