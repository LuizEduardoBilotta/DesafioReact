import React, { useState } from 'react'
import { Wrapper, Container } from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
import Checkbox from '../../shared/Checkbox'

function App () {

    const [letucce, setLetucce] = useState(false);
    const [rice, setRice] = useState(false);

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
                left={<div>
                    Produtos disponíveis 

                    <Checkbox 
                    value={letucce}
                    title="Alface"
                    onclick={() => setLetucce(!letucce)}
                    />

                    <Checkbox 
                    value={rice}
                    title="Arroz"
                    onclick={() => setRice(!rice)}
                    />

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