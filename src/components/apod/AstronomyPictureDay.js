import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

import Logger from 'js-logger';

/**
 * returns the youtube video id.
 */
function getID(url)
{
	const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	const match = url.match(regExp);

	if (match && match[7].length === 11) {
		return match[7];
	} else {
		return false;
	}
}

function AstronomyPictureDay({date,media_type,copyright,title,explanation,url,isRequesting})
{
	if( isRequesting) return <div></div>;

	const isYouTube = media_type === 'video';
	let id, opts;
	if( isYouTube)
	{
		id = getID(url);
		opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
		};
	}

	const cr = copyright ? <span><h3>Copyright:</h3> {copyright}</span> : '';
	// determine media type.
	const media = isYouTube ?
		<YouTube videoId={id} opts={opts} onReady={event => event} />
		: 
		<img src={url} alt=''/>;

	return (
		<div className='APOD'>
			<span>{date}</span>
			<br />
			{media}
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
	media_type:PropTypes.string.isRequired,
	explanation:PropTypes.string.isRequired,
	url:PropTypes.string.isRequired,
	copyright:PropTypes.string,
	isRequesting:PropTypes.bool.isRequired,
}

export { AstronomyPictureDay }
