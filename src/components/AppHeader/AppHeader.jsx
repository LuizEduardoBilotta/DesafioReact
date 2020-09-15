import React from 'react'
import { useSelector } from 'react-redux';
import { selectSelectedProductsTotalPrice } from '../../store/Products/Products.selectors';
import { Wrapper } from './AppHeader.styles'

function AppHeader() {
    const result = useSelector(selectSelectedProductsTotalPrice)

    return <Wrapper>
        Alga
        <span>
            Shopping |
        </span>
        <span>
            { result.toLocaleString('pt-br', {
                mininumFractionDigits: 2, style: 'currency', currency: 'BRL'
            }) }
        </span>
    </Wrapper>
}

export default AppHeader;