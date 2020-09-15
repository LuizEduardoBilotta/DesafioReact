import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { subtract, sum } from '../../store/Calculator/Calculator.actions'
import { Wrapper } from './Calculator.styles'

function Calculator() {
    const dispatch = useDispatch()
    const result = useSelector(state => state.calculator)

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    return <Wrapper>
        <div style={{fontSize: 12}}>
            Calculadora:
        </div>    
        <input 
            type="text" 
            placeholder="a"
            value={a}
            onChange={(e) => setA(Number(e.target.value))} />
        <input 
            type="text" 
            placeholder="b"
            value={b}
            onChange={(e) => setB(Number(e.target.value))} />
        <button 
        onClick={() => {dispatch(sum(a, b))}}
        >Somar</button>
        <button
        onClick={() => {dispatch(subtract(a, b))}}
        >Subtrair</button>
        <div style={{fontSize: 24}}>
            {result.toLocaleString('pt-br', {
                minimumFractionDigits: 2, style: 'currency', currency:'BRL'
            })}
        </div>
    </Wrapper>
}

export default Calculator

