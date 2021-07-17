import styled from "styled-components";

import bg from '../../Assets/images/bg.png'

export const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 3.78%, rgba(0, 0, 0, 0.324) 100%), url(${bg}); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: ${props => props.position ?? ''};

    .content {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        .header-title {
            width: 100%;
            padding: 0 4rem;

            h1 {
                font-weight: bold;
                color: #ffffff;
                text-align: center;
                text-transform: uppercase;
                line-height: .8;
                font-size: 5rem;
                margin-bottom: 3rem;
            }

            p {
                max-width: 500px;
                font-size: 1.5rem;
                color: #ffffff;
                align-self: flex-start;
                margin-bottom: 1rem;

            }
        }

        

        form {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    .blur {
        width: 100%;
        height: 30px;
        background: linear-gradient(0deg, #212020 50%, rgba(33, 32, 32, 0) 78.4%);
        position: absolute;
        bottom: 0;
        left: 0;
    }

`;

export const Logo = styled.img`
    /* width: 200px; */
`;

export const Row = styled.div`
    width: 100%;
    height: ${props => props.height ?? ''}px;
    background: ${props => props.background ?? ''};
    position: ${props => props.position ?? ''};
    bottom: ${props => props.bottom ?? ''};
    left: ${props => props.left ?? ''};
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

export const Input = styled.input`
    width: 80%;
    height: 60px;
    padding: 1rem;
    background: rgba(255, 253, 253, 0.74);
    border-radius: 12px;
    border: 0;
    margin: .3rem 0;
    font-size: 1rem;
    outline: none; 
`;

export const Button = styled.button`
    width: 80%;
    height: 70px;
    background: linear-gradient(270deg, #7AAAC6 21.39%, #59798A 72.06%);
    border-radius: 12px;
    border: 0;
    color: #ffffff;
    font-size: 1.5rem;
    cursor: pointer;
    margin-top: .5rem;

`;


