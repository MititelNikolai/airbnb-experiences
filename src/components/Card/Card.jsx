import React from 'react'
import './card.css'
import STAR from '../../assets/star.svg'
import katie from '../../assets/img/katie-zaferes.png'
import mountain from '../../assets/img/mountain-bike.png'
import wedding from '../../assets/img/wedding-photography.png'

const Card = props => {
	let badgeText
	if (props.openSpots === 0) {
		badgeText = 'SOLD OUT'
	} else if (props.location === 'Online') {
		badgeText = 'ONLINE'
	}
	//This function is necessary for the correct display of images on GitHub Pages
	function selectImg() {
		switch (props.coverImg) {
			case 'katie-zaferes.png':
				return katie
			case 'mountain-bike.png':
				return mountain
			case 'wedding-photography.png':
				return wedding
			default:
				return 'Image'
		}
	}
	return (
		<div className='card'>
			{badgeText && <div className='card__badge'>{badgeText}</div>}
			<img src={selectImg()} alt='' className='card__image' />
			<div className='card__ratting'>
				<img src={STAR} alt='Star' className='card__star' />
				{props.stats.rating}{' '}
				<p className='card__votes'>
					({props.stats.reviewCount}) • {props.location}
				</p>
			</div>
			<p className='card__description'>{props.title}</p>
			<p className='card__price'>
				<b>From ${props.price}</b> / person
			</p>
		</div>
	)
}

export default Card
