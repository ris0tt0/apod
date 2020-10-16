import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => createStyles({
  root: {
	backgroundColor: theme.palette.backgroundColor,
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	height:'100vh'
  },
}));

function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			APOD
		</div>
	);
}

export default App;
