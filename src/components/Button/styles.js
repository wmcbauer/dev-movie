import styled, { css } from 'styled-components';

const buttonStyles = css`
border: 3px solid #ffffff;
background-color: transparent;
color: #ffffff;
border-radius: 30px;
padding: 10px 20px;
cursor: pointer;
font-weight: 700;


&:hover {
    color: #ff0000;
    background-color: #ffffff;
}
`;

export const ButtonWhite = styled.button`
${buttonStyles}`;

export const ButtonRed = styled.button`
${buttonStyles}

background: #ff0000;
border: 4px solid transparent;
-webkit-box-shadow: 0px 0px 31px 8px rgba(255,0,0,1);
-moz-box-shadow: 0px 0px 31px 8px rgba(255,0,0,1);
box-shadow: 0px 0px 31px 8px rgba(255,0,0,1);

&&:hover{
    -webkit-box-shadow: 0px 0px 31px 15px rgba(255,0,0,1);
-moz-box-shadow: 0px 0px 31px 15px rgba(255,0,0,1);
box-shadow: 0px 0px 31px 15px rgba(255,0,0,1);;
background: #ff0000;
color: #ffffff;
}

`;
