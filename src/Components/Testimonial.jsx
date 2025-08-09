 import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaTimes } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Alice Johnson',
    feedback: 'Amazing products! The quality is top-notch and the delivery was super fast.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 2,
    name: 'Michael Smith',
    feedback: 'Great customer service and lovely packaging. Will definitely order again.',
    rating: 4.5,
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 3,
    name: 'Sophie Lee',
    feedback: 'The soap smells wonderful and lasts long. Highly recommend to everyone!',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
  },
  {
    id: 4,
    name: 'David Wilson',
    feedback: 'Fast delivery, great quality products. Will definitely recommend.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/30.jpg',
  },
];

function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={'full-' + i} color="#ffc107" />);
  if (hasHalf) stars.push(<FaStarHalfAlt key="half" color="#ffc107" />);
  for (let i = 0; i < emptyStars; i++) stars.push(<FaRegStar key={'empty-' + i} color="#ffc107" />);
  return stars;
}

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  return (
    <section style={{ padding: '3rem 1rem', backgroundColor: 'skyblue', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '2rem', fontSize: '2rem', color: '#333' }}>
        What Our Customers Say
      </h2>

      {/* Overlapping Avatars */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {testimonials.map((t, idx) => (
          <div
            key={t.id}
            style={{
              position: 'relative',
              marginLeft: idx === 0 ? '0' : '-15px',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedTestimonial(t)}
          >
            <img
              src={t.avatar}
              alt={t.name}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid white',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      {selectedTestimonial && (
        <div
          onClick={() => setSelectedTestimonial(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2rem',
              maxWidth: '400px',
              textAlign: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
              position: 'relative',
            }}
          >
            <img
              src={selectedTestimonial.avatar}
              alt={selectedTestimonial.name}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '1rem',
              }}
            />
            <h3 style={{ marginBottom: '0.5rem' }}>{selectedTestimonial.name}</h3>
            <div style={{ marginBottom: '1rem' }}>{renderStars(selectedTestimonial.rating)}</div>
            <p style={{ color: '#555', fontStyle: 'italic' }}>
              "{selectedTestimonial.feedback}"
            </p>
            <FaTimes
              onClick={() => setSelectedTestimonial(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontSize: '1.5rem',
                color: '#333',
                cursor: 'pointer',
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
