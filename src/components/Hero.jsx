import React from 'react'
import crown from '../img/crown-symbol.png';

const Hero = () => {
    
  return (
    <div class="home" id="home">
		<div class="swiper home-slider">
			<div class="swiper-wrapper wrapper">
				<div class="swiper-slide slide slide1">
					<div class="content">
						<img src={crown} alt="" />
						<h3>delicious royate</h3>
						<h1>gift voucher</h1>
						<p>
							give away your beloved customers
						</p>
						<a href="#order" class="btn">order now</a>
					</div>
				</div>

				<div class="swiper-slide slide slide2">
					<div class="content">
						<img src={crown} alt="" />

						<h3>sale of 10% this dish</h3>
						<h1>the fresh</h1>
						<p>
							food restaurant
						</p>
						<a href="#order" class="btn">order now</a>
					</div>
				</div>

				<div class="swiper-slide slide slide3">
					<div class="content">
						<img src={crown} alt="" />

						<h3>we are open</h3>
						<h1>fresh fruits</h1>
						<p>
							you will love it
						</p>
						<a href="#order" class="btn">order now</a>
					</div>
				</div>
			</div>

			<div class="swiper-pagination"></div>
		</div>
	</div>
  )
}

export default Hero