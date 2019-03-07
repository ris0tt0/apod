import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

function Picker({date,isRequesting,onChange}) {
	if( isRequesting) return <div>loading....</div>;

	return (
		<div>
			<span>Please select a date: </span><DatePicker
				selected={date}
				onChange={onChange}
				maxDate={new Date()}
			/>
		</div>
	)
}

Picker.propTypes = {
	isRequesting:PropTypes.bool.isRequired,
	date:PropTypes.instanceOf(Date),
	onChange:PropTypes.func.isRequired,
}

export {Picker}

