import React from 'react';
import styled from 'styled-components';
import './Card.css'

export default function Card(){

const DIV = styled.div`
display: flex;
`

const Div = styled.div`
display: flex;
flex-direction: column;
margin-left: 5%;


`



    return(

        <div className='mainContainer' >
            <DIV>
                <img className='firstImg' src="/src/assets/starter1.png" alt="" />
                <Div>
                <h1>Rozes</h1>
                <p>Under the grave</p>
                </Div>
            </DIV>
            <div className='secondContainer'>
                <p className='par' >Rate this album</p>
                <div className='star' >
                <img className='rate' src="/src/assets/star.png" alt="" />
                <img className='rate' src="/src/assets/star.png" alt="" />
                <img className='rate' src="/src/assets/star.png" alt="" />
                <img className='rate' src="/src/assets/star.png" alt="" />
                <img className='rate' src="/src/assets/star.png" alt="" />
                </div>
            </div>

        </div>






    )
}