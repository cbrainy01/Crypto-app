import { TOGGLE_THEME } from "./isBlackedReducer";

export const toggleTheme = (updatedTheme) => {
        return {
            type: TOGGLE_THEME,
            payload: updatedTheme,
        } 
}
 