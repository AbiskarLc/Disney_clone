import { createContext } from "react";



export const stateContext = createContext();


export const Contexts = ({children}) =>{

    const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=';
    const movieBaseURL = "https://api.themoviedb.org/3";
    const apiKey = import.meta.env.VITE_APIKEY;
    
    return (
        <stateContext.Provider value={{apiKey,movieBaseURL,movieByGenreBaseURL}}>
           {children}
        </stateContext.Provider>
    )
}