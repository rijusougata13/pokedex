import styled from "styled-components";

export const pokemonDetails={};

pokemonDetails.Wrapper=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
`;
pokemonDetails.Heading=styled.div`
    padding: 2rem;
    font-size: 2rem;
    text-transform: uppercase;
`;
pokemonDetails.CardWrapper=styled.div`
    display: flex;
    width: 80%;
    height: 80%;
    padding: 2rem;
    margin: 2rem;
    background-color: #f2f2f2;

 
    @media(max-width:800px){
        flex-direction: column;
    }

    @media(max-width:500px){
        padding: 1rem;
        margin: 1rem;
    }
`;

pokemonDetails.ImgWrapper=styled.div`
    background-color: #c2cbc2;
    display: flex;
    justify-content: center;
    top: 0;
    flex-direction: column;
    align-content: center;
    flex: 1;
    .frontImg{
        flex:1;
        display: flex;
        justify-content: center;
        align-content: center;
        img{

        }
    }
    .backImg{
        flex:1;
        display: flex;
        justify-content: center;
        align-content: center;
        img{
            height: auto;
        }
    }
`;

pokemonDetails.DetailsWrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex: 1;
    @media(max-width:500px){
        width: 100%;
    }
`;

pokemonDetails.PhysicalWrapper=styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #4aa8d7;
    border-radius: 20px;
    margin: 2rem;
    
    span{
        margin: 2rem;
        box-sizing: border-box;
        padding:0.3rem;
        p{
            font-size: 1.3rem;
        }
        h3{
            color:white;
            font-weight: 300;
        }
    }
   
`;

pokemonDetails.Stats=styled.div`
    display: flex;
    align-items:flex-start;
    padding: 1rem 1rem;
    justify-content: center;
    flex-direction: column;
    background-color: #4aa8d7;
    border-radius: 20px;
    margin: 2rem;
    span{
        display: flex;
        justify-content: space-around;
        height: auto;
        width: auto;
        padding: 0.5rem;
    
    h3{
        font-size: 1.4rem;
        color: white;
        font-weight:500;
    }
    p{
        font-size: 1.2rem;
        padding: 0 1rem;
        
    }
    }
`;

pokemonDetails.Types=styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    padding: 1rem 3rem;
    font-size: 1rem;
    span{
        margin:0rem 1rem 0rem 0rem;
        padding:0.9rem;
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