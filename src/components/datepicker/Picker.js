import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';


import Logger from 'js-logger';

function Picker({date,onChange}) {
	Logger.info(date);
	return (
		<div>
			<DatePicker
				selected={date}
				onChange={onChange}
			/>
		</div>
	)
}

Picker.propTypes = {
	date:PropTypes.instanceOf(Date),
	onChange:PropTypes.func.isRequired,
}

export {Picker}

