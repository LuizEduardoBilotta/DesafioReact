import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 32px;
    display: flex;
    align-items: center;
    cursor: default;
`

export const Indicator = styled.div`
    height: 14px;
    width: 14px;
    ${props => props.value ? 'background-color: #004D61;' : ''};
    border-radius: 7px;
    border: 2px solid #004D61;
    margin-right: 8px;
    cursor: pointer;

    transition: .5s ease;
`