import React from 'react';
import PropTypes from 'prop-types'
import Logger from 'js-logger';

function AstronomyPictureDay({date,copyright,title,explanation,url}) {
	const cr = copyright ? <span>Copyright: {copyright}</span> : '';
	return (
		<div className='APOD'>
			<span>{date}</span>
			<br />
			<img src={url} alt='hello world'/>
			<br />
			{cr}
			<span><h1>{title}</h1></span>
			<br />
			<span>{explanation}</span>
			<br />
			
		</div>
	)
}

AstronomyPictureDay.propTypes = {
	date:PropTypes.string.isRequired,
	title:PropTypes.string.isRequired,
	explanation:PropTypes.string.isRequired,
	url:PropTypes.string.isRequired,
	copyright:PropTypes.string,
}

export { AstronomyPictureDay }
