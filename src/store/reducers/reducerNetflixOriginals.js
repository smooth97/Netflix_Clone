import { FETCH_NETFLIX_ORIGINALS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
      case FETCH_NETFLIX_ORIGINALS:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}