import { useState } from 'react';
import menulist from '.././data.js';
import icon from '.././img/notify.png';

const Menu = () => {
  const [category, setCategory] = useState("cu");

  const dishes = menulist.filter(({key})=>{
    return key === category;
  })

  return (
    <div className='menu' id="menu">
        <h1>Our Hot Dishes</h1>
        <h3 className='tagLine'> ~ See What We Offer ~ </h3>
        <div className="category">
          {menulist.map((item, idx)=>(
            <div className={item.key === category ? "card active" : "card"} onClick={()=>setCategory(item.key)} key={idx}>
              <img src={icon} alt="" />
              <span>{item.category}</span>
            </div>
          ))}
        </div>
        <div className="dishes">
            {dishes[0].list.map((item, idx)=>(
              <div className="box" key={idx}>
                <div className="img">
                  <img src={item.img} alt="" />
                </div>
                <div className='info'>
                  <span className='itemName'>{item.name}</span> 
                  <span className='price'>$ {item.price}.00</span>
                  <button className="btn">order now</button>
                </div>
              </div>
            ))}
        </div>
    </div>
  );
}

export default Menu;
