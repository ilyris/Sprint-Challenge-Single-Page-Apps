import React from "react";
import S from 'styled-components';

export default function CharacterCard(props) {
  const {id, gender, created, name, image, species, status} = props.characterData;
  return(
    <StyledCard>
      <StyledTitle>{name}</StyledTitle>
      <StyledImage src={image} />
      <StyledText>{gender}</StyledText>
      <StyledText>{species}</StyledText>
      <StyledText>{status}</StyledText>
      <StyledText>{created}</StyledText>
    </StyledCard>
  );
}


const StyledCard = S.div`
  width: 300px;
  background-color: #d6d6d6;
  border-radius: 20px;
  border: 1px solid #000;
  box-shadow: 0px 2px 2px 2px #e9e9e9;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`;
const StyledImage = S.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;
const StyledTitle = S.h2`
  font-size: 30px;
  font-weight: 600;
`;
const StyledText = S.p`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-top: 5px;
`;