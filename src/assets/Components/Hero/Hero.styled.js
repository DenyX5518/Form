import styled from "styled-components";

export const StyledHero = styled.div`

  .wrapper {
    background-color: #16181f;
    max-width: 60%;
    height: 800px;
    box-shadow: rgb(0, 0, 0) 0 0 25px 2px;
    border-radius: 20px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;

    .item-1 {
      /* display: grid;
      align-items: start;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr; */

      .btns {
        display: flex;
        flex-direction: row-reverse;
        align-items: start;
        justify-content: center;
      }

      .main {
        display: flex;

        .form {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;
        }
      }
    }

    .item-2 {
      img {
        width: 100%;
        height: 100%;
        opacity: .7;
        border-radius: 0 20px 20px 0;
      }
    }
  }
`