import * as React from "react";
import PokemonCard from "./PokemonCard";
import "./App.css";

export default function App() {
  const [id, setId] = React.useState(1);
  const [pokemon, setPokemon] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const handleFetchPokemon = async () => {
      setPokemon(null);
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (response.ok === false) {
          throw new Error(`Error fetching pokemon #${id}`);
        }
        const data = await response.json();
        setPokemon(data);
        setIsLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        setError(e.message);
      }
    };

    handleFetchPokemon();
  }, [id]);

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
