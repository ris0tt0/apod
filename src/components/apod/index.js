import {connect} from 'react-redux';
import {AstronomyPictureDay} from './AstronomyPictureDay';
import {getAstronomyPictureDay} from '../../selectors';

import Logger from 'js-logger'

const mapStateToProps = state =>
{
	return getAstronomyPictureDay(state);
}

const APODContainer = connect(mapStateToProps)(AstronomyPictureDay);

export default APODContainer;