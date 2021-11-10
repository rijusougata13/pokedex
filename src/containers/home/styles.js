import styled from 'styled-components';

export const home={};

home.Wrapper=styled.div`
    background-color:#e3efe3;
    height: auto;
    
    display: flex;
    justify-content: center;
    align-items: center;

    .leftArrow{
        font-size: 2rem;
        margin: 1rem;
        position: fixed;
        left: 0;
        top:50%;
        :hover{
        transform: scale(1.2);
        transition: all .5s;
    }
    }
    .rightArrow{
        font-size: 2rem;
        margin: 1rem;
        position: fixed;
        right: 0;
        top:50%;
        :hover{
        transform: scale(1.2);
        transition: all .5s;
    }
    }
`;
