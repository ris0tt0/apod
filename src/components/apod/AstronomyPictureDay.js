import React from 'react';
import PropTypes from 'prop-types'
import Logger from 'js-logger';

function getID(url)
{
	var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	var match = url.match(regExp);

	if (match && match[2].length == 11) {
		return match[2];
	} else {
		return false;
	}
}

function AstronomyPictureDay({date,media_type,copyright,title,explanation,url,isRequesting})
{
	if( isRequesting) return <div>Loading</div>;
	
	// if( media_type === 'video')
	const cr = copyright ? <span><h3>Copyright:</h3> {copyright}</span> : '';
	return (
		<div className='APOD'>
			<span>{date}</span>
			<br />
			<img src={url} alt=''/>
			<br />
			{cr}
			<span><h1>{title}</h1></span>
			<br />
			<span>{explanation}</span>
			<br />
		</div>
	)
}
/**
 * <iframe 
 * 	width="806" 
 * 	height="453" 
 * 	src="https://www.youtube.com/embed/lJIrF4YjHfQ" 
 * 	frameborder="0" 
 * 	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
 * </iframe>
 */

AstronomyPictureDay.propTypes = {
	date:PropTypes.string.isRequired,
	title:PropTypes.string.isRequired,
	media_type:PropTypes.string.isRequired,
	explanation:PropTypes.string.isRequired,
	url:PropTypes.string.isRequired,
	copyright:PropTypes.string,
	isRequesting:PropTypes.bool.isRequired,
}

export { AstronomyPictureDay }
