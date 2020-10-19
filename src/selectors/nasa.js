import { createSelector } from "reselect";

const apodSelector = state => state.apod;

export const apodIsRequestionSelector = createSelector([apodSelector],apod => apod.isRequesting);
export const apodResultsSelector = createSelector([apodSelector],apod => apod.results);
export const apodCurrentIdSelector = createSelector([apodSelector],apod => apod.current);
export const apodCurrentResultsSelector = createSelector([apodResultsSelector,apodCurrentIdSelector],(results,id) => results[id] ? results[id] : {});
