import { createSelector } from "reselect";

const apodSelector = state => state.apod;

export const apodIsRequestionSelector = createSelector([apodSelector],apod => apod.isRequesting);
export const apodResultSelector = createSelector([apodSelector],apod => apod);
export const apodCurrentResultsSelector = createSelector([apodSelector],apod => apod.apod[apod.current] ? apod.apod[apod.current] : {});
