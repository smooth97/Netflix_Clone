import { FETCH_ROMANCE_MOVIES } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
      case FETCH_ROMANCE_MOVIES:
          return {
            ...state,
            movies: action.data,
          }
      default:
          return state;
  }
}