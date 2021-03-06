import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: ${props => props.height ?? ''};
    display: flex;
    flex: ${props => props.flex ?? ''};
    overflow: ${props => props.overflow ?? ''};
    background-color: ${props => props.background ?? ''};
    justify-content: ${props => props.justify ?? ''};
    flex-flow: row wrap;
    padding: 3rem 2rem;

    .content {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`

export const SessionTitle = styled.h1`
    color: #ffffff;
    width: 100%;
    height: 5vh;
    margin-bottom: 1rem;
    line-height: 1;
    z-index: 99;
`;


export const ItemSmall = styled.div`
    width: calc(15% - 1rem);
    height: 20vh;
    
    margin-right: 1rem;
    margin-bottom: 1rem;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

`

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

export const ItemLarge = styled.div`
    width: calc(50% - 1rem);
    height: 90vh;
    
    margin-right: 1rem;
    margin-bottom: 1rem;

    background: #333333;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* border-radius: 50%; */
    }

    :last-of-type{
        margin-right: 0;
    }

`;

export const Row = styled.div`
    width: 100%;
    height: ${props => props.height ?? ''}px;
    background: ${props => props.background ?? ''};
    position: ${props => props.position ?? ''};
    bottom: ${props => props.bottom ?? ''};
    left: ${props => props.left ?? ''};
    padding-top: ${props => props.paddingTop ?? ''}rem;

    display: flex;
    justify-content: center;
    align-items: center;

    > span{
        color: #ffffff;
        font-size: 1.8rem;
        font-weight: bold;
        letter-spacing: 1pt;
    }
`;

