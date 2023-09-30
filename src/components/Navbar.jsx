import { useContext } from "react"
import { UsuarioContext } from "../context/AppContext"

export const Navbar = () => {

    const { nombres, CambiarNombre, NombreParametro, contador, setContador } = useContext(UsuarioContext)

    return (
        <div>
            Navbar {nombres}

            <button
                className="bg-blue-500 rounded-md text-white"
                onClick={CambiarNombre}>
                Cambiar Nombre
            </button>

            <button onClick={() => NombreParametro("NARUTO")}>CAMBIAR NOMBRE POR PARAMETRO</button>
            <button onClick={()=>setContador(contador + 1)}>CONTADOR + 1</button>
        </div>
    )
}
