import { createContext, useState } from "react";

const FavContext = createContext();

export function FavProvider ({children}) {
    const [favMovie, setFavMovie] = useState([]);

    const addFav = (item) => {
        setFavMovie((prev) => [...prev, {item}]);
    }

    return (
    <FavContext.Provider value={{favMovie, addFav}}>
        {children}
    </FavContext.Provider>
    )
}

export default FavContext;