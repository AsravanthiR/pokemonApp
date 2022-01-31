import React from "react";
import { useParams } from "react-router-dom";

const PokeSingle = () => {
  let { pokemonName } = useParams();
  return <div>Single Pokemons will be {pokemonName}</div>;
};

export default PokeSingle;
