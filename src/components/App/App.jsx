import React, { useState, useEffect } from 'react'
import { Wrapper, Container } from './App.styles'
import AppHeader from '../AppHeader'
import AppContainer from '../AppContainer'
import LineChart from '../../shared/LineChart/LineChart'
import ShoppingList from '../ShoppingList'
import productsMock from '../../mocks/products.json'

function App () {
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    const [products, setProducts] = useState(productsMock.products);
    const [selectedProducts, setSelectedProducts] = useState([]);
    
    useEffect(() => {
        const newSelectedProducts = products
            .filter(product => product.checked)

            setSelectedProducts(newSelectedProducts)
    }, [products])

    function handleToggle(id) {
        const newProducts = products.map(product => 
            product.id === id
                ? { ...product, checked: !product.checked}
                : product
        )
        setProducts(newProducts);
    }

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
                left={<ShoppingList 
                    title="Produtos disponíveis"
                    products={products} 
                    onToggle={handleToggle}
                />} 

                middle={<ShoppingList 
                    title="Sua lista de compras"
                    products={selectedProducts} 
                />}

                right={<div>
                    Estatísticas 

                    <LineChart color={colors[0]} title="saudável" percentage={80} />   
                    <LineChart color={colors[1]} title="não tão saudável assim" percentage={20} />
                    <LineChart color={colors[2]} title="limpeza" percentage={35} />
                    <LineChart color={colors[3]} title="outros" percentage={15} />
                </div>}
            />
        </Container>
    </Wrapper>
}

export default App