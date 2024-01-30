"use client"
import { Inter } from "next/font/google";
import React, { useReducer, createContext, useContext, useEffect } from "react";
import reducer from "./reducer";
import { SessionProvider } from "next-auth/react"
import { TOGGLE_MENU, TOGGLE_THEME, IS_SERVER, TOGGLE_COMMENT_SECTION, TOGGLE_AUTH_MODAL } from "./action"


let theme
let themeState
let parsedData

const ISSERVER = typeof window === "undefined";
if (!ISSERVER) {
    theme = localStorage.getItem("theme")
    themeState = localStorage.getItem("toggleState")
    parsedData = JSON.parse(themeState)
}



const initialState = {
    toggleMenu: false,
    togglecommentsSection: false,
    isServer: true,
    authToggle: false,
    toggleTheme: parsedData ? parsedData : false,
    theme: theme ? theme : "light",
    user: null,
};


const inter = Inter({ subsets: ["latin"] });

const Context = createContext({})
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const intialLoad = () => {
        if (state.toggleTheme) {
            document.body.className = 'dark';
            localStorage.setItem("theme", "dark");
            localStorage.setItem("toggleState", true);
        } else {
            localStorage.setItem("theme", "light");
            localStorage.setItem("toggleState", false);
            document.body.className = 'light';
        }
    }


    const toggleMenuFn = () => {
        dispatch({ type: TOGGLE_MENU })
    }

    const themeFn = () => {
        if (!state.toggleTheme) {
            document.body.className = 'dark';
            localStorage.setItem("theme", "dark");
            localStorage.setItem("toggleState", true);
        } else {
            localStorage.setItem("theme", "light");
            localStorage.setItem("toggleState", false);
            document.body.className = 'light';
        }
    }


    const toggleThemefn = () => {
        dispatch({ type: TOGGLE_THEME })
        themeFn()
    }


    const isServerFn = () => {
        dispatch({ type: IS_SERVER })
    }

    useEffect(() => {
        isServerFn()
        intialLoad()
        document.body.className = state.theme === null ? "ligth" : state.theme;

        if (state.toggleTheme) {
            document.body.className = state.theme
        }
    }, [state.theme, state.toggleTheme]);


    const toggleCommentsSectionFn = () => {
        dispatch({ type: TOGGLE_COMMENT_SECTION })
    }


    const toggleAuthModal = () => {
        dispatch({ type: TOGGLE_AUTH_MODAL })
    }

    return (
        <Context.Provider
            value={{ ...state,toggleMenuFn, toggleThemefn, toggleCommentsSectionFn, toggleAuthModal }}
        >
            <SessionProvider>{children}</SessionProvider>
        </Context.Provider>
    )

}

const useAppContext = () => {
    return useContext(Context)
}


export { ContextProvider, useAppContext, initialState };
