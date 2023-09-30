import { createContext, useState } from "react";

export const UsuarioContext = createContext()

export const AppContext = ({children}) => {

    const [nombres, setNombres] = useState("Martin Rios")
    const [contador, setContador] = useState(0)

    const [favoritos, setFavoritos] = useState([])

    const agregarFavoritos = (personaje) =>{
        //SI UN FAVORITO YA SE ENCUENTRA EN LA LISTA, YA NO SE DEBERIA VOLVER A AGREAR
        setFavoritos([...favoritos , personaje])
        //UNA VEZ QUE EL USUARIO AGREGA A SU CARRITO PRODUCTOS DEBERAS CALCULAR EL TOTAL
    }


    const CambiarNombre = () =>{
        setNombres("FELIPE GARCIA")
    }

    const NombreParametro = (param) =>{
        setNombres(param)
    }

    return(
        <UsuarioContext.Provider value={{nombres, CambiarNombre, NombreParametro, contador ,setContador , favoritos ,agregarFavoritos}}>
            {children}
        </UsuarioContext.Provider>
    )
}