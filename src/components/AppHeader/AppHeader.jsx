import React from 'react'
import { useSelector } from 'react-redux';
import { Wrapper } from './AppHeader.styles'

function AppHeader() {
    const result = useSelector(state => state.calculator)

    return <Wrapper>
        Alga
        <span>
            Shopping | R$
        </span>
        <span>
            { result }
        </span>
    </Wrapper>
}

export default AppHeader;