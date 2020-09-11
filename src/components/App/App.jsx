import React from 'react'
import { Wrapper, Container } from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'

function App () {
    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
                left={<div>
                    Produtos disponíveis 
                </div>}

                middle={<div>
                    Sua lista de compras
                </div>}

                right={<div>
                    Estatísticas    
                </div>}
            />
        </Container>
    </Wrapper>
}

export default App