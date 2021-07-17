import { useState } from 'react'

import { Container, Input, Button } from './style'

const Header = () => {

    const [customer, setCustomer] = useState({
        customer: {
            name: "",
            email: ""
        }

    }, [])

    const submitHandle = (e) => {
        e.preventDefault()

        let jsonConverter = JSON.stringify(customer)
        localStorage.setItem('@weslleylsilva/customer', jsonConverter)

        console.log("Seus dados: ", customer)
    }

    return (
        <Container
            position="relative"
        >
            <div className="content">

                <div className="header-title">
                    <h1>Black <br/> Friday</h1>
                    <p>Seja o primeiro(a) a receber novidades</p>
                </div>


                <form>
                    <Input 
                        placeholder="SEU NOME"
                        onChange={e => setCustomer({ ...customer, name: e.target.value })}
                    />
                    <Input 
                        placeholder="SEU MELHOR EMAIL"
                        onChange={e => setCustomer({ ...customer, email: e.target.value })}
                    />
                    <Button
                        onClick={e => submitHandle(e)}
                    
                    >
                        Quero receber novidades
                    </Button>
                </form>
            </div>

            <div className="blur"></div>


        </Container>

    )
}

export default Header