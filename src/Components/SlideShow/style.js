import styled from "styled-components";

export const Carousel = styled.div`
    width: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    position: relative;
    
    :hover {
        .carousel-controlers button {
            opacity: .8;
            transition: .5s;
        }
    }

    .carousel-container-imgs {
        display: flex;
        transform: translateX(0);
        transition: transform 0.5s ease-in-out;
    }

    .carousel-controlers {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: space-between;

        button {
            width: 5%;
            height: 94%;

            cursor: pointer;
            border: none;
            opacity: .1;
        }
    }



`;

export const ItemMedium = styled.div`
    min-width: calc(33.33% - 1rem);
    /* max-height: 60vh; */
    
    margin-right: 1rem;
    margin-bottom: 1rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

    overflow: hidden;
    border-radius: 7px;

    :nth-last-child() {
        margin-right: 0;
    }

    img {
        width: 100%;
        object-fit: cover;
    }

`;