// import { normalize, schema } from 'normalizr';

export const normzlizeAPOS = json => {
	return {results:{[json.date]:{...json}},current:json.date};
};
