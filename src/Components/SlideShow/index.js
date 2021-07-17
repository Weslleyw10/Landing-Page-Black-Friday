import { useState, useEffect } from 'react'

import {Carousel, ItemMedium} from './style'

const SlideShow = ({ data }) => {
    const [translateX1, setTranslateX1] = useState(0)

    useEffect(() => {
        let index = 0
        const changeImage = () => {
            if (index > data.length - 3) {
                index = 0
            } else if (index < 0) {
                index = data.length - 3
            }
            setTranslateX1(-index * 100 / 3)
        }

        const handleRun = () => {
            index++
            changeImage()
        }


        setInterval(handleRun, 2000)


    }, [data.length])

    return (
        <Carousel>
            <div
                className="carousel-container-imgs"
                style={{
                    transform: `translateX(${translateX1}%)`
                }}
            >

                {
                    data.map((item, index) => (
                        <ItemMedium key={index}>
                            <img src={item.url} alt={item.url} />
                        </ItemMedium>
                    ))
                }

            </div>
            
            <div className="carousel-controlers">
                <button 
                // onClick={() => setNextPrev('prev')} 
                className="prev">
                    Prev
                </button>

                <button 
                // onClick={() => setNextPrev('next')} 
                className="next"> 
                    Next
                </button>
            </div>
        
        </Carousel>
    )


}

export default SlideShow