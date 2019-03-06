import {connect} from 'react-redux';
import {Picker} from './Picker'
import {getSelectedDate, getIsRequesting} from '../../selectors';

import Logger from 'js-logger'
import { setNewDate, fetchAPOD } from '../../actions';

const mapStateToProps = state =>
{
	const date = getSelectedDate(state);
	const isRequesting = getIsRequesting(state);

	return {date,isRequesting};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
		onChange: date => {
			/**
			 * TODO: Should we move these calls the action creators?
			 */
			dispatch(setNewDate(date));
			dispatch(fetchAPOD())},
	}
}

const APODContainer = connect(mapStateToProps,mapDispatchToProps)(Picker);

export default APODContainer;