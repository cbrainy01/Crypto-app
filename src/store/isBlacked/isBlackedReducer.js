export const TOGGLE_THEME = "TOGGLE_THEME";
const initialState = false

export function isBlackedReducer(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_THEME:
            return action.payload;
        default:
            return state
    }
}
