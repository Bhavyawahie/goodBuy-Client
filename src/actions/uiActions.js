import { UI_SNAPSHOT_APPLY, UI_SNAPSHOT_TAKE } from "../constants/uiConstants"

export const takeUISnapshot = () => (dispatch) => {
    dispatch({
        type: UI_SNAPSHOT_TAKE
    })
}
export const applyUISnapshot = () => (dispatch) => {
    dispatch({
        type: UI_SNAPSHOT_APPLY
    })
}