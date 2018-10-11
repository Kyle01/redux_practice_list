import {
    SEND_INFORMATION,
    SEND_FIRST,
    SEND_SECOND,
    SEND_THIRD,
    RECEIVE_ERRORS
} from '../actions/items_actions';
import merge from "lodash/merge";

const rootReducer = (state, action) => {
    Object.freeze(state);

    switch (action.type) {
      case SEND_INFORMATION:
        return merge({}, state, { item: action.item });
      case SEND_FIRST:
        debugger;
        return merge({}, state, {firstItems: state.firstItems += action.item});
      case RECEIVE_ERRORS:
        return merge({}, state, { item: action.errors });
      default:
        return state;
    }
}

export default rootReducer;