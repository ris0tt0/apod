import { CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Logger from 'js-logger';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { requestAPOD } from '../actions/nasa';
import { apodCurrentResultsSelector, apodIsRequestionSelector } from '../selectors/nasa';


const useStyles = makeStyles(theme=>({
	app:{
		backgroundColor:theme.palette.background.default,
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		flexDirection:'column',
		margin:0,
	},
	copyright:{
		alignSelf:'flex-end',
		paddingRight:10,
	},
	container:{
		display:'flex',
		justifyContent:"center",
		alignItems:'center',
		flexDirection:'column',
		maxWidth:900,
	}
}));

const MediatContainer = ({mediaType,url}) => {

	if(mediaType === 'image'){
		return (
			<div>
				<img src={url} alt=""/>
			</div>
		);
	}

	if(mediaType === 'video'){
		const opts = {
			height: '390',
			width: '640',
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 1,
			},
		};

		const found = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
		
		return <YouTube videoId={found[1]} opts={opts} />;
	}

	Logger.error(`unknown mediat type: ${mediaType} url: ${url}`);
}

const AstroPictureDay = props => {

	const [selectedDate,setSelectedDate] = useState(new Date());
	const classes = useStyles();
	const dispatch = useDispatch();
	const isRequesting = useSelector(apodIsRequestionSelector);
	const result = useSelector(apodCurrentResultsSelector);

	useEffect(()=>{
		async function delay(){
			await dispatch(requestAPOD());
		};

		delay();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	const handleDateChange = (date) => {
		setSelectedDate(date);
		dispatch(requestAPOD(date));
	};

	if(isRequesting){
		return(
			<div>
				<CircularProgress color='secondary' />
			</div>
		);
	}

	if(!result){
		return(
			<div>
				<CircularProgress color='secondary' />
			</div>
		);
	}

	const minDate = new Date('jun 16, 1996');
	const maxDate = new Date();

	return (
		<Typography className={classes.app} component='div' variant='body2' >
			<Typography variant='h3' component='p'>{result.title}</Typography>
			<KeyboardDatePicker
				maxDate={maxDate}
				minDate={minDate}
				disableToolbar
				autoOk={true}
				variant="inline"
				format="MM/dd/yyyy"
				margin="normal"
				id="date-picker-inline"
				value={selectedDate}
				onChange={handleDateChange}
				KeyboardButtonProps={{
					'aria-label': 'change date',
				}}
        />
			<MediatContainer url={result.url} mediaType={result.media_type} />
			<Typography variant='caption' component='p' className={classes.copyright}>
				{result.copyright}
			</Typography>
			<div className={classes.container}>
				<p>{result.explanation}</p>
			</div>
		</Typography>
	);
};

export default AstroPictureDay;
