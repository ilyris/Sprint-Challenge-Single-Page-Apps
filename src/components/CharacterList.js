import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import S from 'styled-components';
import SeachForm from './SearchForm';

export default function CharacterList() {
  const [state, setState] = useState({
    characters: [],
    searchfield: ''
  });


  const handleFilterSearch = (eveny) => {
    
  }
  useEffect(() => {
    const getRickAndMortyCharacters = () => {
      axios.get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {
          console.log(response.data);
          setState({...state, characters: response.data.results, searchfield: ''});
        })
        .catch(error => console.log(error));
    }
      getRickAndMortyCharacters();

  }, []);
  return (
    <CharacterListContainer>
      <SeachForm handleFilterSearch={handleFilterSearch}/>
      {state.characters.map((character, index) => {
        return (
          <CharacterCard
            characterData={character}
            key={index}
          />
        );
      })}
    </CharacterListContainer>
  );
}


const CharacterListContainer = S.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

`;