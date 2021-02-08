import React from 'react'
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">
        About Us
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit necessi Tatibus quasi velit, aspernatur sed placeat exerctionem blandtis, libero provident ad, eius quae at! Minima, exerciionfsem eligndi similique unde eos quos officiis.</p>
      <Link to="/" className="btn btn-primary" style={{marginLeft : '250px', marginTop : '13px'}}>Back Home</Link>
    </section>
  )
}

export default About
