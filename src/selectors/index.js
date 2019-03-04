import { createSelector } from 'reselect';
import Logger from 'js-logger';

const getAPODSelector = state => state.apod;
const getSelectedDateSelector = state => state.selectedDate;

export const getAstronomyPictureDay = createSelector(
	[getAPODSelector,getSelectedDateSelector],
	(apod,d) =>
	{
		const date = d.toDateString();
		Logger.info(apod);
		return {...apod,date}
	});

export const getSelectedDate = createSelector(
	[getSelectedDateSelector],
	selectedDate => selectedDate);
