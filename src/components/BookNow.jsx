import React from 'react'
import banner from '../img/book-a-table.jpg';

const BookNow = () => {
  return (
    <div className='reservation' id='reservation'>
      <div className="wrapper">
        <div className="img">
          <img src={banner} alt="" />
        </div>
        <div className="bookNow">
          <h1>Book A Table</h1>
          <h3 className="tagLine"> ~ Check Out Our Place ~ </h3>
          <form action="" className='form'>
            <select name="" id="">
              <option value="1">1 People</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
            </select>
            <input type="date" name="" id="" placeholder='Date' />
            <input type="time" name="" id="" placeholder='Time'/>
            <input type="number" name="" id="" placeholder='Phone' />
            <input type="text" name="" id="" placeholder='Name' />
            <input type="email" placeholder='email' />
            <button className="btn">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookNow