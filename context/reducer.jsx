import {
    TOGGLE_MOBILE_MENU,
    TOGGLE_THEME,
    IS_SERVER,
    TOGGLE_COMMENT_SECTION,
    TOGGLE_AUTH_MODAL
} from "./action"


import { initialState } from "./Context";
const reducer = (state, action) => {

    if (action.type === TOGGLE_MOBILE_MENU) {
        return {
            ...state,
            toggleMobileMenu: !state.toggleMobileMenu
        }
    }

    if (action.type === TOGGLE_THEME) {
        const { toggleTheme } = state
        return {
            ...state,
            toggleTheme: !state.toggleTheme,
            theme: !toggleTheme ? "dark" : "light"
        }
    }


    if (action.type === TOGGLE_COMMENT_SECTION) {
        return {
            ...state,
            togglecommentsSection: !state.togglecommentsSection,
        }
    }


    if (action.type === IS_SERVER) {
        const ISSERVER = typeof window === "undefined";
        return {
            ...state,
            isServer: !ISSERVER ? false : true
        }
    }


    if (action.type === TOGGLE_AUTH_MODAL) {
        return {
            ...state,
            authToggle: !state.authToggle
        }
    }

    throw new Error(`no such action : ${action.type}`);
}

export default reducer;