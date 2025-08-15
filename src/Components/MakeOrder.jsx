import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function MakeOrder() {
  const [orderData, setOrderData] = useState({
    productName: '',
    quantity: '',
    price: '',
    phone: ''
  });

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", orderData);
    alert(`Order placed for ${orderData.quantity} × ${orderData.productName}`);
    setOrderData({ productName: '', quantity: '', price: '', phone: '' });
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
      <h2 style={styles.heading}>Make an Order</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={orderData.productName}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={orderData.quantity}
          onChange={handleChange}
          style={styles.input}
          min="1"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price ($)"
          value={orderData.price}
          onChange={handleChange}
          style={styles.input}
          min="0"
          step="0.01"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={orderData.phone}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Place Order</button>
      </form>
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
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  heading: {
    marginBottom: '1rem',
    color: '#15960c',
    fontSize: '2rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
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
  }
};
