import React from "react";
import S from 'styled-components';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <StyledHeader>
      <StyledNavigationContainer>
        <StyledNavigation>
          <StyledUL>
            <StyledLi>
              <StyledLink to="/">Home</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/characters">Characters</StyledLink>
            </StyledLi>
          </StyledUL>
        </StyledNavigation>
      </StyledNavigationContainer>
    </StyledHeader>
  );
}


const StyledHeader = S.header`
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

const StyledNavigationContainer = S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 62%;
`;
const StyledNavigation = S.nav`
    display: flex;
    align-items: center;
`;

const StyledUL = S.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const StyledLi = S.li`
    list-style: none;
    margin: 0 5px;
    display: flex;
    align-items: center;
`;
const StyledLink = S(Link)`
    display: flex;
    height: 20px;
    text-transform: uppercase;
    font-weight: 600;
    align-items: center;
    font-size: 16px;
    color: ${props => props.secondary ? '#fff' : '#000'};
    height: 2rem;
    padding: 1rem 2.4rem;
    border-radius: 20px;
    text-decoration: none;
    background-color: ${props => props.secondary ? '#0077ff' : 'transparent'}
    transition: all ease-in-out 120ms;
    :hover {
        background-color: ${props => props.secondary ? '#003c80' : 'rgba(194, 194, 194, 0.4)'}
    }
    :active {
        box-shadow: 0px 2px 5px 0px #464545;
        transform: scale(1.1);
    }
`;