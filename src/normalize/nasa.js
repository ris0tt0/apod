// import { normalize, schema } from 'normalizr';

export const normzlizeAPOS = json => {

	return {apod:{[json.date]:{...json}},current:json.date};
};
