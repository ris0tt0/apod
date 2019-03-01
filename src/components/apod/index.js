import {connect} from 'react-redux';
import {AstronomyPictureDay} from './AstronomyPictureDay'

const mapStateToProps = state =>
{
	const date = '';
	const title = 'title';
	const explanation = 'to explain tings';
	const url = 'url';

	return {date,title,explanation,url};
}

const mapDispatchToProps = dispatch =>{
	return {
		// onLegDetails:() => 'leg details',
	};
}

const APODContainer = connect(mapStateToProps,mapDispatchToProps)(AstronomyPictureDay);

export default APODContainer;