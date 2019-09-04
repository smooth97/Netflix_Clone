import { FETCH_HORROR_MOVIES } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
      case FETCH_HORROR_MOVIES:
          return action.data;
      default:
          return state;
  }
}