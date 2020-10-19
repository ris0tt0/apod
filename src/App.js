import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import AstroPictureDay from './components/apod';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(theme => createStyles({
  root: {
	backgroundColor: theme.palette.backgroundColor,
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	minHeight:'100vh',
	flex:1,
  },
}));

function App() {
	const classes = useStyles();

	return (

		<div className={classes.root}>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<AstroPictureDay />
			</MuiPickersUtilsProvider>
		</div>
	);
}

export default App;
