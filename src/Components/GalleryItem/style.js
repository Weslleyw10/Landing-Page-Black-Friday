import styled from "styled-components";



export const Item = styled.div`
    width: ${props => props.large ? '50%' : '33%'};
    height: ${props => props.large ? '50vh' : '33vh'};

    background: #333333

`