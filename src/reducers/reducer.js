import {
    RECEIVE_INFORMATION,
    RECEIVE_ERRORS
} from '../actions/items_actions';

const rootReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
      case RECEIVE_INFORMATION:
        return [];
        case RECEIVE_ERRORS:
        return [];
      default:
        return state;
    }
}

export default rootReducer;