import React, { useState } from 'react';

const TopBtn = () => {
    const [topLink, setTopLink] =useState(false);
    const topScroll = ()=>{
        const scrollHeight = window.scrollY;
        if(scrollHeight > 100)
            setTopLink(true);
        else
            setTopLink(false);
    }
    window.addEventListener('scroll', topScroll);
  return (
    <div className={topLink ? "topBtn" : "hideBtn"} onClick={()=>window.scroll(0,0)}>
      <i className="fa-solid fa-angle-up" />
    </div>
  );
}

export default TopBtn;
