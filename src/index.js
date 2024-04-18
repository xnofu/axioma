import React from 'react'
import ReactDOM from 'react-dom/client'
import Testing from './components/testing.jsx'

// const nombre = 'Nicolás'
const root = ReactDOM.createRoot(document.getElementById('root'))
const user = {
  Nombre:'Puta',
  Apellido:'Tonta',
  Edad:18,
  Avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6E6hiJsU8s4SuAXqeAq8odmi8xMstC0zkoxp67WlULQ&s'
}
function basura(user){
  return user.Nombre + ' ' + user.Apellido
}
const element = <h1>Hola, {basura(user)}. Tienes {user.Edad} añitos de culiada</h1>
const element2 = <img src={user.Avatar} alt="Avatar" width="300px" height="400px"/>
const component = <Testing/>


const elementfinal = (
  <div>
    {element}
    {element2}
    {component}
  </div>
)
root.render(elementfinal)