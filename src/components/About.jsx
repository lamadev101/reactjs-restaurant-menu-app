import React from 'react';
import post1 from '../img/post-thumb-1.jpg';
import post2 from '../img/post-thumb-2.jpg';
import post3 from '../img/post-thumb-3.jpg';

const posts = [
  {img:post1, title: "PROFESSIONAL LEVEL", subtitle: "nor again is there anyone who loves or pursues or desires to obtain pain of itself, becuase it is pain, but because occasionally circumstances occur." },
  {img:post2, title: "FRESH FOOD GUARANTEED", subtitle: "nor again is there anyone who loves or pursues or desires to obtain pain of itself, becuase it is pain, but because occasionally circumstances occur." },
  {img:post3, title: "THE MENU IS PLENTIFUL", subtitle: "nor again is there anyone who loves or pursues or desires to obtain pain of itself, becuase it is pain, but because occasionally circumstances occur." },
]

const About = () => {
  return (
    <div className='about' id='about'>
        <h1 className='heading'>WELCOME TO ROYATE</h1>
        <h3 className="tagLine"> ~ Luxury & Quality ~ </h3>
        <div className="container">
          {posts.map((post, idx)=>(
            <div className="box" key={idx}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                <h3>{post.title}</h3>
                <p>{post.subtitle}</p>
                <a href="#about" className='btn'>Read More</a>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default About;
