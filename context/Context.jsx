"use client"
import { Inter } from "next/font/google";
import React, { useReducer, createContext, useContext, useEffect } from "react";
import reducer from "./reducer";

import { TOGGLE_MOBILE_MENU, TOGGLE_THEME } from "./action"


const theme = localStorage.getItem("theme")
const themeState = localStorage.getItem("toggleState")

const parse = JSON.parse(themeState)

const initialState = {
    toggleMobileMenu: false,
    toggleTheme: parse && parse,
    theme: theme && theme,
};




const inter = Inter({ subsets: ["latin"] });

const Context = createContext({})
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        if (state.toggleTheme) {
            document.body.className = state.theme;
        }
    }, [state.toggleTheme, state.theme]);

    const toggleMenu = () => {
        dispatch({ type: TOGGLE_MOBILE_MENU })
    }

    const themeFn = () => {
        if (!state.toggleTheme) {
            
            document.body.className = 'dark';
            localStorage.setItem("theme", "dark");
            localStorage.setItem("toggleState", true);
        }

        if (state.toggleTheme) {
            localStorage.setItem("theme", "light");
            localStorage.setItem("toggleState", false);
            document.body.className = 'light';
        }
    }


    const toggleThemefn = () => {
        dispatch({ type: TOGGLE_THEME })
        themeFn()
    }


    return (
        <Context.Provider value={{ ...state, toggleMenu, toggleThemefn }} >
            {children}
        </Context.Provider>
    )

}

const useAppContext = () => {
    return useContext(Context)
}


export { ContextProvider, useAppContext, initialState };
