import React from 'react'
import { useState } from 'react';
import StarIcon from '../components/StarIcon';
import { Link } from 'react-router-dom';
import BarsIcon from '../components/BarsIcon';


const Home = () => {

  const [categories] = useState([
    { id: 1, name: 'Mobile Phones', image: 'http://localhost:5000/images/gadget_1732121334262.png', route: '/smartphones' },
    { id: 2, name: 'Laptops', image: 'http://localhost:5000/images/gadget_1732121368623.png', route: '/laptops' },
    { id: 3, name: 'Smart Watches', image: 'http://localhost:5000/images/gadget_1732121341379.png', route: '/smartwatches' },
    { id: 4, name: 'Headphones', image: 'http://localhost:5000/images/gadget_1732121349943.png', route: '/audio' },
  ]);

  const [latestTech] = useState([
    {
      id: 1,
      title: 'Quantum Computing Breakthroughs',
      description: 'Discover the latest advancements in quantum computing that promise to revolutionize industries like healthcare, finance, and AI.',
      image: 'http://localhost:5000/images/gadget_1732121376237.png',
      link: 'https://www.ibm.com/quantum-computing/'
    },
    {
      id: 2,
      title: 'AI-Powered Personal Assistants',
      description: 'Explore the next generation of AI assistants that make life easier, from smart homes to virtual reality integration.',
      image: 'http://localhost:5000/images/gadget_1732121385073.png',
      link: 'https://openai.com/'
    },
    {
      id: 3,
      title: 'The Rise of AR Glasses',
      description: 'Augmented reality glasses are the future of personal computing. Learn how tech giants are pushing boundaries.',
      image: 'https://fxmweb.com/assets/images/content/insights/how-is-apples-vision-pro-headset-transforming-the-world-of-vr-and-ar-original.jpg',
      link: 'http://localhost:5000/images/gadget_1732121392793.png'
    }
  ]);

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Gadget Grade</h1>
        <p>Your trusted source for honest tech reviews</p>
      </div>

    <section className="categories">
        <h2 className='browse-heading'>Browse Categories</h2>
        <div className="category-grid">
          {categories.map(category => (
            <Link key={category.id} to={category.route} className="category-card">
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="latest-tech">
        <h2>Latest Tech</h2>
        <div className="tech-grid">
          {latestTech.map(tech => (
            <div
              key={tech.id}
              className="tech-card"
              onClick={() => window.open(tech.link, '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <img src={tech.image} alt={tech.title} />
              <h3>{tech.title}</h3> 
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
      <div className="grid-container">
        <div className="card">
          <div className="image-container">
           <StarIcon />
          </div>
          <h3 className="card-title">Honest Reviews</h3>
          <p className="card-description">
            Read authentic reviews from verified purchasers to make informed decisions.
          </p>
        </div>
        <div className="card">
         
          <h3 className="card-title">Earn Rewards</h3>
          <p className="card-description">
            Get points and gift cards for sharing your valuable product experiences.
          </p>
        </div>
        <div className="card">
          <div className="image-container">
            <BarsIcon />
          </div>
          <h3 className="card-title">Compare Products</h3>
          <p className="card-description">
            Compare features and user experiences to find your perfect match.
          </p>
        </div>
      </div>
      </section>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Gadget Grade. All rights reserved.</p>
        <p>
          <Link to="/about">About Us</Link> | <Link to="/contact">Contact</Link> | <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
      </footer>

    </div>
  )
}

export default Home