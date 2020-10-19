import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Typography } from '@material-ui/core';
import Logger from 'js-logger';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { requestAPOD } from '../actions/nasa';
import { apodIsRequestionSelector, apodCurrentResultsSelector } from '../selectors/nasa';
import {KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme=>({
	app:{
		backgroundColor:theme.palette.background.default,
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		flexDirection:'column',
		margin:0,
	},
}))

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

	return (
		<Typography className={classes.app} component='div' variant='body2' >
			<Typography variant='h3' component='p'>{result.title}</Typography>
			<p>{result.date}</p>
			<KeyboardDatePicker
				disableToolbar
				variant="inline"
				format="MM/dd/yyyy"
				margin="normal"
				id="date-picker-inline"
				label="Date picker inline"
				value={selectedDate}
				onChange={handleDateChange}
				KeyboardButtonProps={{
					'aria-label': 'change date',
				}}
        />
			<p>{result.copyright}</p>
			<img src={result.url} alt=""/>
			<p>{result.explanation}</p>
		</Typography>
	);
};

export default AstroPictureDay;
