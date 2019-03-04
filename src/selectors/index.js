import { createSelector } from 'reselect';
import Logger from 'js-logger';

const getAPODSelector = state => state.apod;

export const getAstronomyPictureDay = createSelector([getAPODSelector],apod =>{

	// const date = apod.date;
	// const title = apod.title;
	// const explanation = 'to explain tings';
	// const url = 'url';

	return {...apod}
});

const getSelectedDateSelector = state => state.selectedDate;
export const getSelectedDate = createSelector([getSelectedDateSelector], selectedDate => {
	Logger.info('getSEeclted date',selectedDate);
	Logger.info( selectedDate instanceof Date);
	return selectedDate;
});