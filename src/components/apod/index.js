import {connect} from 'react-redux';
import {AstronomyPictureDay} from './AstronomyPictureDay';
import {getAstronomyPictureDay} from '../../selectors';

import Logger from 'js-logger'

const mapStateToProps = state =>
{
	return getAstronomyPictureDay(state);
}

const mapDispatchToProps = dispatch =>{
	return {
		// onLegDetails:() => 'leg details',
	};
}

const APODContainer = connect(mapStateToProps,mapDispatchToProps)(AstronomyPictureDay);

export default APODContainer;