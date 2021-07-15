import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex: ${props => props.flex ?? ''};
    flex-flow: row wrap;
    padding: 5rem 2rem 0 2rem;
`


export const ItemSmall = styled.div`
    width: calc(10% - 1rem);
    height: 10vh;
    
    margin-right: 1rem;
    margin-bottom: 1rem;

    background: #333333;

    :last-child{
        margin-right: 0;
    }

`

export const ItemMedium = styled.div`
    width: calc(33% - 1rem);
    height: 45vh;
    
    margin-right: 1rem;
    margin-bottom: 1rem;

    background: #333333;

    :last-child{
        margin-right: 0;
    }

`;

export const ItemLarge = styled.div`
    width: calc(50% - 1rem);
    height: 45vh;
    
    margin-right: 1rem;
    margin-bottom: 1rem;

    background: #333333;

    :last-child{
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
