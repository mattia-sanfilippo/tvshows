import { GET_SHOWS } from './../home.constants';

export type TVShow = {
  score: number;
  show: {
    id: string;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    premiered: string;
    rating: {
      average: number;
    };
    network: {
      id: number;
      name: string;
      country: {
        name: string;
      };
    };
    image: {
      medium: string;
      original: string;
    };
    summary: string;
  };
};

export type HomeState = {
  loading: boolean;
  failure?: Error;
  shows: TVShow[];
};

const initialState: HomeState = {
  loading: true,
  failure: undefined,
  shows: [],
};

export const homeReducer = (
  state: HomeState = initialState,
  action: any,
): HomeState => {
  switch (action.type) {
    case GET_SHOWS:
      return {
        ...state,
        loading: false,
        failure: action.failure,
        shows: action.payload,
      };
    default:
      return state;
  }
};
