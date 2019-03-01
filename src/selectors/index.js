import { createSelector } from 'reselect';

const getAPOD = state => state.apod;

export const getAstronomyPictureDay = createSelector([getAPOD],apod =>{

	// const date = apod.date;
	// const title = apod.title;
	// const explanation = 'to explain tings';
	// const url = 'url';

	return {...apod}
});