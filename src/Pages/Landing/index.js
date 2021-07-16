import { useState, useEffect } from 'react'

import Header from '../../Components/Header'

import { Container, SessionTitle, Carousel, ItemSmall, ItemMedium, ItemLarge, Row } from './style'


const Landing = () => {
    const [translateX1, setTranslateX1] = useState(0)
<<<<<<< HEAD

=======
   
    let index = 0
>>>>>>> 6f6858876aa2b7a290a53a27aa092f223802bb73
    let img = [
        {
            "url": "http://demo2.posthemes.com/pos_rozer/layout3/81-large_default/new-balance-fresh-foam-arishi-sport-2.jpg"
        },
        {
            "url": "http://demo2.posthemes.com/pos_rozer/layout3/52-large_default/madden-by-steve-madden-cale-6.jpg"
        },
        {
            "url": "http://demo2.posthemes.com/pos_rozer/layout3/24-large_default/brown-bear-vector-graphics.jpg"
        },
        {
            "url": "http://demo2.posthemes.com/pos_rozer/layout3/32-large_default/new-balance-fresh-foam-lazr-v1-sport.jpg"
        },

        {
            "url": "http://demo2.posthemes.com/pos_rozer/layout3/48-large_default/trans-weight-hooded-wind-and-water-resistant-shell.jpg"
        },
        {
            "url": "http://demo.posthemes.com/pos_ecolife_singleproduct/treadmill/588-large_default/brown-bear-notebook.jpg"
        },
        {
            "url": "http://demo.posthemes.com/pos_ecolife_fashion/fashion4/321-large_default/new-luxury-men-s-slim-fit-shirt-short-sleeve-stylish-casual-blouse.jpg"
        },
        {
            "url": "http://demo.posthemes.com/pos_ecolife_singleproduct/skateboard/648-large_default/customizable-mug.jpg"
        },
<<<<<<< HEAD

    ]

    useEffect(() => {
        let index = 0
        const changeImage = () => {
=======
        
    ]

    useEffect(() => {
        const changeImage = () => {

>>>>>>> 6f6858876aa2b7a290a53a27aa092f223802bb73
            if (index > img.length - 3) {
                index = 0
            } else if (index < 0) {
                index = img.length - 3
            }
<<<<<<< HEAD
            setTranslateX1(-index * 100 / 3)
        }

=======
    
            setTranslateX1(-index * 100 / 3)
        }
    
>>>>>>> 6f6858876aa2b7a290a53a27aa092f223802bb73
        const handleRun = () => {
            index++
            changeImage()
        }
<<<<<<< HEAD

        setInterval(handleRun, 2000)


    }, [img.length])
=======
    
        let interval = setInterval(handleRun, 2000)


    },[])
>>>>>>> 6f6858876aa2b7a290a53a27aa092f223802bb73

    return (
        <>
            <Header />

            <Container
                overflow="hidden"
<<<<<<< HEAD
            // height="100vh"
=======
                // height="100vh"
>>>>>>> 6f6858876aa2b7a290a53a27aa092f223802bb73
            >
                <SessionTitle>
                    Coleções
                </SessionTitle>
<<<<<<< HEAD

                <Carousel>
                    <div className="carousel-container-imgs"
                        style={{
                            transform: `translateX(${translateX1}%)`
                        }}
=======
                
                <Carousel>
                    <div className="carousel-container-imgs"
                    style={{
                        transform: `translateX(${translateX1}%)`
                    }}
>>>>>>> 6f6858876aa2b7a290a53a27aa092f223802bb73
                    >

                        {
                            img.map((item, index) => (
                                <ItemMedium key={index}>
<<<<<<< HEAD
                                    <img src={item.url} alt={item.ur} />
=======
                                    <img src={item.url} />
>>>>>>> 6f6858876aa2b7a290a53a27aa092f223802bb73
                                </ItemMedium>

                            ))
                        }

                    </div>
                </Carousel>

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