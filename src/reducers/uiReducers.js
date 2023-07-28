import { UI_SNAPSHOT_APPLY, UI_SNAPSHOT_TAKE } from "../constants/uiConstants";

export const uiStateReducer = (state = { uiSnapshot: {} }, action) => {
	switch (action.type) {
		case UI_SNAPSHOT_TAKE:
			return Object.assign({}, state, { uiSnapshot: state });
		case UI_SNAPSHOT_APPLY:
			return Object.assign({}, state, state.uiSnapshot);
		default:
			return state;
	}
}
