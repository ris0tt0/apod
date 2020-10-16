import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Typography } from '@material-ui/core';
import Logger from 'js-logger';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { requestAPOD } from '../actions/nasa';
import { apodIsRequestionSelector, apodResultSelector } from '../selectors/nasa';

const useStyles = makeStyles(theme=>({
	app:{
		flex:1,
		backgroundColor:theme.palette.background.default,
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		flexDirection:'column',
		margin:0,
		minWidth:400,
	}
}))

const AstroPictureDay = props => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const isRequesting = useSelector(apodIsRequestionSelector);
	const result = useSelector(apodResultSelector);

	const rr = useSelector(state => state);

	Logger.info(rr);

	Logger.info(result);
	Logger.info(isRequesting);
	
	useEffect(()=>{
		dispatch(requestAPOD());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	Logger.info(`${result.date} ${result.copyright}`);

	if(isRequesting){
		return(
			<div>
				<CircularProgress />
			</div>
		)
	}

	return (
		<Typography className={classes.app} component='div' variant='body2' >
			<Typography variant='h3' component='p'>{result.title}</Typography>
			<p>{result.date}</p>
			<p>{result.copyright}</p>
			<img src={result.url} alt=""/>
			<p>{result.explanation}</p>
			<p>{result.hdurl}</p>
			<p>{result.url}</p>
		</Typography>
	)
};

export default AstroPictureDay;
