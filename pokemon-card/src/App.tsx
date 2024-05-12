import * as React from "react";
import PokemonCard from "./PokemonCard";
import useFetch from "./useFetch";
import "./App.css";

export default function App() {
  const [id, setId] = React.useState(1);
  const {
    data: pokemon,
    isLoading,
    error,
  } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  interface ButtonGroupProps {
    setPokemonId: React.Dispatch<React.SetStateAction<number>>;
  }

  function ButtonGroup({ setPokemonId }: ButtonGroupProps) {
    const handlePreviousClick = () => setPokemonId((id) => Math.max(1, id - 1));
    const handleNextClick = () => setPokemonId((id) => id + 1);

    return (
      <div className="button-group">
        <button onClick={handlePreviousClick}>←</button>
        <button onClick={handleNextClick}>→</button>
      </div>
    );
  }

  return (
    <>
      <div>
        {isLoading && <div className="card">Loading...</div>}
        {!isLoading && pokemon && <PokemonCard data={pokemon} error={error} />}
        <ButtonGroup setPokemonId={setId} />
      </div>
    </>
  );
}
