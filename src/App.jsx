import { useContext, useState } from "react"
import { useRef } from "react"
import { Navbar } from "./components/Navbar"
import { UsuarioContext } from "./context/AppContext"
import { Favoritos } from "./components/Favoritos"

function App() {
  const { contador } = useContext(UsuarioContext)



  //const captura = document.querySelector("")
  const capturaDiv = useRef()
  const cambiarColor = () =>{
    //const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16)
    //capturaDiv.current.style.backgroundColor = colorAleatorio
    //capturaDiv.current.classList.add('rounded-2xl')
    //capturaDiv.current.classList.remove('bg-blue-500')
    //capturaDiv.current.style.color = "white"
    capturaDiv.current.classList.add('text-white')
    capturaDiv.current.innerHTML = "<p>ME AGREGO DESDE EL USEREF</p>"
  }
  const inputRef = useRef()
  const inputContraseña = useRef()
  const capturaValores = (e) =>{
    e.preventDefault()
    console.log(inputRef.current.value)
    console.log(inputContraseña.current.value)
  }
  const contadorRef = useRef(0)
  const incrementUseRef = () =>{
    contadorRef.current += 1
    //console.log(contadorRef.current)
  }

  return (
    <div>
      <Navbar />
      {/**QUE SE RENDERIZE EL CONTADO */}
      <p className="font-bold text-3xl text-green-500">
        {contador}
      </p>


      <h1 className="text-red-500 text-5xl">Tailwind + REACT</h1>
      <p>USEREF</p>
      <p>Hace referencia a una etiqueta del html, tambien para almacenar valores y no renderizar el componente</p>
      <div className="w-56 h-56 bg-blue-500" ref={capturaDiv}>
      </div>
      <form onSubmit={capturaValores}>
        <input type="text" ref={inputRef} />
        <input type="password" ref={inputContraseña} />
        <button>Entrar</button>
      </form>
      <button onClick={cambiarColor}>Cambiar de color</button>
      <p>{contadorRef.current}</p>
      <button onClick={incrementUseRef}>SUMAR +1</button>


      <Favoritos />
    </div>
  )
}

export default App
