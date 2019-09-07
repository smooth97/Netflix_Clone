import { FETCH_TRENDING } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
      case FETCH_TRENDING:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}