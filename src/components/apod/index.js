import {connect} from 'react-redux';
import {AstronomyPictureDay} from './AstronomyPictureDay';
import {getAstronomyPictureDay, getIsRequesting} from '../../selectors';

import Logger from 'js-logger'

const mapStateToProps = state =>
{
	const apod = getAstronomyPictureDay(state);
	const isRequesting = getIsRequesting(state);

	return {...apod,isRequesting};
}

const APODContainer = connect(mapStateToProps)(AstronomyPictureDay);

export default APODContainer;