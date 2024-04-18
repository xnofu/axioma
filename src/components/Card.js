import React from 'react'
import imbecil from './img/mcidiotaz.jpg'
import './css/Card.css'


class Card extends React.Component{
    render(){
        const {nombre, profesion, edad, colord, color} = this.props
        return (
        <div className='card back'>
            <div className='tits'>
                <h1 style={{color:`${color}`}}>Hola pendejos de mierda, mi nombre es {nombre}, y soy {profesion}. Tengo actualmente {edad} años, y soy color {colord}</h1>
            </div>
            <div className='sex'>
                <img src={imbecil} alt="mcdios"/>
            </div>
        </div>
    )
    }
}

export default Card