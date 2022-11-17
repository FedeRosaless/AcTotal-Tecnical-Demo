import React from 'react';
import './Card.css';

export default function Card ({name, email, number, date}){

    return(
        <div className="divCard">
            <div className='div'>
                 <div className='data'> <div className='caract'>Nombre: </div>  {name}</div>
                {number ? <div className='data2'><div className='caract'>Teléfono:</div> {number}</div> : <div className='data2'>Sin número de teléfono.</div>}
            </div>

            <div className='div'>
                 <div className='data'> <div className='caract'>Email:</div> {email} </div>
                <div className='data2'> <div className='caract'> Ingresado:</div> {date.slice(8, 10)}/{date.slice(5, 7)}/{date.slice(0, 4)} </div>
            </div>
        </div>
    )
}