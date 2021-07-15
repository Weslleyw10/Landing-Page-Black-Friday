import Header from '../../Components/Header'

import { Container, ItemSmall, ItemMedium, ItemLarge,  Row } from './style'


const Landing = () => {
    return (
        <>
        <Header />
        
        <Container>
            <ItemMedium>
                ItemMedium
            </ItemMedium>
            <ItemMedium>
                ItemMedium
            </ItemMedium>
            <ItemMedium>
                ItemMedium
            </ItemMedium>
            
            <ItemMedium>
                ItemMedium
            </ItemMedium>
            <ItemMedium>
                ItemMedium
            </ItemMedium>
            <ItemMedium>
                ItemMedium
            </ItemMedium>

        </Container>

        <Row 
            paddingTop="2"
            background="#000"
        >
            <ItemSmall></ItemSmall>
            <ItemSmall></ItemSmall>
            <ItemSmall></ItemSmall>
            <ItemSmall></ItemSmall>
            <ItemSmall></ItemSmall>
        </Row>

        <Container>
            <ItemLarge>
                ItemLarge
            </ItemLarge>
            <ItemLarge>
                ItemLarge
            </ItemLarge>

            <ItemLarge>
                ItemLarge
            </ItemLarge>
            <ItemLarge>
                ItemLarge
            </ItemLarge>
            

        </Container>
        
        <Header />
        </>
    )
}

export default Landing