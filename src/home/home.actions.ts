import axios from 'axios';
import { GET_SHOWS } from './home.constants';

export const fetchShows = (searchValue: string) => {
  return function (dispatch: any) {
    return axios
      .get(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
      .then(({ data }) => {
        dispatch(setShows(data));
      })
      .catch(error => {
        dispatch(setShows(undefined, error));
      });
  };
};

const setShows = (data: any, error?: Error) => {
  return {
    type: GET_SHOWS,
    payload: data,
    failure: error,
  };
};
