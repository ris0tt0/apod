import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AstroPictureDay from './components/apod';

const useStyles = makeStyles(theme => createStyles({
  root: {
	backgroundColor: theme.palette.backgroundColor,
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	height:'100vh',
	flex:1,
  },
}));

function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AstroPictureDay />
		</div>
	);
}

export default App;
