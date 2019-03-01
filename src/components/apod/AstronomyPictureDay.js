import React from 'react';
import PropTypes from 'prop-types'

import Logger from 'js-logger';

function AstronomyPictureDay({date,title,explanation,url}) {
	return (
		<div className='APOD'>
			<span>{date}</span>
			<span>{title}</span>
			<span>{explanation}</span>
			<span>{url}</span>
		</div>
	)
}

AstronomyPictureDay.propTypes = {
	date:PropTypes.string.isRequired,
	title:PropTypes.string.isRequired,
	explanation:PropTypes.string.isRequired,
	url:PropTypes.string.isRequired,
}

export { AstronomyPictureDay }

