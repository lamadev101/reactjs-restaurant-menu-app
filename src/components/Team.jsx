import React from 'react';
import chef1 from '../img/our-chef-1.jpg';
import chef2 from '../img/our-chef-2.jpg';
import chef3 from '../img/our-chef-3.jpg';

const chefs = [
  {img: chef1, name:"Jerry Robertson", desc: "master chef"},
  {img: chef2, name:"Corol Rowson", desc: "master chef"},
  {img: chef3, name:"Taylor Mccoy", desc: "junior chef"},
]
const Team = () => {
  return (
    <div className='team' id='team'>
      <h1>our talented chef</h1>
      <h3 className='tagLine'> ~ Experience $ Enthusiasm ~ </h3>
      <div className="chef">
        {chefs.map((chef, idx)=>(
          <div className="box" key={idx}>
            <div className="img">
              <img src={chef.img} alt="" />
            </div>
            <div className="info">
              <div className='wrapper'>
                <h3>{chef.name}</h3>
                <span>{chef.desc}</span>
                <ul>
                  <li><i className="fa-brands fa-instagram" /></li>
                  <li><i className="fa-brands fa-twitter" /></li>
                  <li><i className="fa-brands fa-whatsapp" /></li>
                  <li><i className="fa-brands fa-linkedin-in" /></li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
