import React from 'react'
import './card.css'
import STAR from '../../assets/star.svg'

const Card = props => {
	let badgeText
	if (props.openSpots === 0) {
		badgeText = 'SOLD OUT'
	} else if (props.location === 'Online') {
		badgeText = 'ONLINE'
	}
	return (
		<div className='card'>
			{badgeText && <div className='card__badge'>{badgeText}</div>}
			<img src={`../../img/${props.coverImg}`} alt='' className='card__image' />
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
