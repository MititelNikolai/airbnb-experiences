import React from 'react'
import './hero.css'
import HERO from '../../assets/hero.png'
const Hero = () => {
	return (
		<div className='container hero__container'>
			<div className='img__container'>
				<img src={HERO} alt='Hero Img' className='hero__img' />
			</div>
			<h1 className='hero__title'>Online Experiences</h1>
			<div className='hero__subtitle'>
				Join unique interactive activities led by one-of-a-kind hosts—all
				without leaving home.
			</div>
		</div>
	)
}

export default Hero
