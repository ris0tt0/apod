export const waitFor = ms => new Promise(resolve => setTimeout(resolve,ms));
/**
 * Returns a YYYY-MM-DD	The date of the APOD image to retrieve
 * @param {Date} date the date to use
 */
export const formatNasaDate = (date = null) => {
	if( date === null){
		date = new Date();
	}
	return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}
