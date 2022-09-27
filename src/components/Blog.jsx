import React from 'react';
import blog1 from '../img/post-thumb-4.jpg';
import blog2 from '../img/post-thumb-5.jpg';
import blog3 from '../img/post-thumb-6.jpg';

const blogs = [
  {img:blog1, title: "PROFESSIONAL LEVEL", subtitle: "nor again is there anyone who loves or pursues or desires to obtain pain of itself, becuase it is pain, but because occasionally circumstances occur." },
  {img:blog2, title: "FRESH FOOD GUARANTEED", subtitle: "nor again is there anyone who loves or pursues or desires to obtain pain of itself, becuase it is pain, but because occasionally circumstances occur." },
  {img:blog3, title: "THE MENU IS PLENTIFUL", subtitle: "nor again is there anyone who loves or pursues or desires to obtain pain of itself, becuase it is pain, but because occasionally circumstances occur." },
]

const Blog = () => {
  return (
    <div className='about' id='blog'>
        <h1 className='heading'>Latest News</h1>
        <h3 className="tagLine"> ~ Greate Articles ~ </h3>
        <div className="container">
          {blogs.map((blog, idx)=>(
            <div className="box" key={idx}>
              <div className="img">
                <img src={blog.img} alt="" />
              </div>
              <div className="content">
                <h3>{blog.title}</h3>
                <p>{blog.subtitle}</p>
                <a href="#about" className='btn'>Read More</a>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Blog;
