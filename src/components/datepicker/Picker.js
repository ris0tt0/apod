import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

function Picker({date,onChange}) {
	return (
		<div>
			<DatePicker
				selected={date}
				onChange={onChange}
				maxDate={new Date()}
			/>
		</div>
	)
}

Picker.propTypes = {
	date:PropTypes.instanceOf(Date),
	onChange:PropTypes.func.isRequired,
}

export {Picker}

