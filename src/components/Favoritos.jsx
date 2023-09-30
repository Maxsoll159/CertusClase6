import { useContext } from "react"
import { UsuarioContext } from "../context/AppContext"

export const Favoritos = () => {
    const { favoritos, agregarFavoritos } = useContext(UsuarioContext)
    const personajes = [{
        id: 1,
        name: "Goku",
        edad: 23
    }, {
        id: 2,
        name: "Vegeta",
        edad: 20
    }, {
        id: 3,
        name: "Gohan",
        edad: 12
    }]

    return (
        <div>
            {personajes.map((per) => (
                <div className="shadow-lg p-5 rounded-lg font-bold" key={per.id}>
                    <p>{per.name}</p>
                    <p>{per.edad}</p>
                    <button onClick={() => agregarFavoritos(per)} className="bg-red-500 text-white font-bol rounded-md shadow-lg p-3">Agregar Favorito</button>
                </div>
            ))}

            <div className="border border-blue-500 rounded-md p-5 shadow-lg mt-5">
                {
                    favoritos.length > 0 ? (
                        favoritos.map((fa) => (
                            <div>{fa.name}</div>
                        ))
                    ) : (<p>No Hay Favritos</p>)
                }
            </div>

        </div>
    )
}
