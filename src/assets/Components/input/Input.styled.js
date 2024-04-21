import styled from 'styled-components';

const StyledInput = styled.div`
    input{
        color: white;
        margin-bottom: 20px;
        background-color: var(--five);
        border-inline: none;
        border: none;
        border-radius: 5px;
        display: flex;
        width: 370px;
        font-size: 18px;
        height: 60px;
        padding-left: 15px;
        padding-right: 15px;
    }
    input::placeholder{
        color: white;
        font-size: 15px;
        opacity: 0.6;
    }
    input:focus{
        border-left: 5px solid var(--six);
        /* border-right: 5px solid var(--six); */
        outline: none;
    }
    
`

export default StyledInput;