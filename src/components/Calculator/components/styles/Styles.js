import styled from 'styled-components';

export const    CalculatorStyles = styled.div`
margin-top: 55px;
  background-color: #b6b6b6;
  width: 100%;
  min-height: 80vh;
  display: grid;
  justify-items: center;
  grid-template-rows: minmax(200px 350px) 1fr;
  grid-template-columns: 1fr;
  @media (max-width: 500px) {
    max-width: 90%;
    padding: 5%;
  }
  .display {
    font-family: 'Orbitron', serif;
    margin: 0 !important;
    width: 100%;
    @media (max-width: 500px) {
      width: 100%;
      max-height: 200px;
    }
    }
  }
  .number-pad {
    /* grid-area: numbers; */
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    padding: 0px 0px 30px;
    width: 450px;
    margin: 0 auto;
    @media (max-width: 500px) {
      width: 100%;
      margin: 0;
    }
    button {
      width: 100%;
      height: 70px;
      border-radius: 20px;
      border: 3px solid #B3CB03;
      font-size: 2rem;
      color: white;
      font-family: 'Orbitron', serif;
      background: #031361;
      &:focus {
        outline: none;
      }
      &:hover {
        border: 3px solid #dfe6e9;
        font-weight: 500;
      }
    }
    button.function-button {
      background-color: #2d3436;
    }
    button.white-button {
      color: #2d3436;
      background-color: white;
    }
  }
  .zero-button {
    grid-column: 1/3;
  }
`;
export const Logo = styled.img`
    width: 100px;
    height: 90px;
    margin:  0px 0px 0px 560px;
`;


export const DisplayStyles = styled.div`
  display: grid;
  grid-template-rows: 90px 50px;
  grid-template-columns: 1fr;
  border: 4px solid #B3CB03;
  max-width: 700px;
  margin: 10px auto;
  align-items: center;
  border-radius: 20px;
  background: #031361;
  @media (max-width: 500px) {
    width: 95%;
    grid-template-rows: 60px 40px;
  }
  h2,
  p {
    text-align: center;
    color: white;
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
    text-align: right;
    border-bottom: 4px solid #B3CB03;
    padding: 15px 20px;
    @media (max-width: 500px) {
      font-size: 1.5rem;
      padding: 10px;
    }
  }
  h2.long-main-display {
    font-size: 1.2rem;
  }
  p {
    margin: 5px 0;
    font-size: 1.3rem;
    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }
  p.long-stored-display {
    font-size: 0.5rem;
  }
`;
