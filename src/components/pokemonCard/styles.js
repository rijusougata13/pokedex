import styled from "styled-components";

export const pokemonCard={};

pokemonCard.Card=styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 15rem;
    background-color: #fff;
    margin: 2rem;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    width: 20%;
    border-radius: 20px;
    overflow: hidden;
    :hover{
        transform: scale(1.2);
        transition: all .5s;
    }
`;
pokemonCard.Img=styled.img`
    height: auto;
    width: auto;
`
pokemonCard.ImgDiv=styled.div`
    background-color: #c2cbc2;
    width: 100%;
    display: flex;
    margin: auto auto;
    align-items: center;
    justify-content: center;
    height: auto;
    top: 0;
`;

pokemonCard.name=styled.div`
    display: flex;
    align-items: flex-start;
    font-family: 'Roboto', sans-serif;
    flex-direction: column;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
    padding: 0rem 1rem;
    color:gray;
    span{
        padding: 0.5rem 0;
        color:black;
        font-size: 1.5rem;
        font-weight: 400;
    }
`;

pokemonCard.Types=styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;
    font-size: 0.8rem;
    span{
        margin:0rem 1rem 0rem 0rem;
        padding:0.3rem;
        border-radius: 10px;
        background-color: gray;
        color:white;
    }

    .grass{
            background-color:#73ac30;
    }
    .poison{
        background-color: #8939bf;
    }
    .fire{
        background-color: #f2a410;
    }
    .flying{
        background-color: #62d5b4;
    }
    .bug{
        background-color: #83c54b;
    }
    .electric{
        background-color: #f6e651;
    }
    .ground{
        background-color: #8b6218;
    }
    .water{
        background-color: #5a8bcd;
    }
    .water{
        background-color: #5a8bcd;
    }

    
`;
