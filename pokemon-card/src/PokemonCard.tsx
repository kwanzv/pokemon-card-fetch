interface Pokemon {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

export default function PokemonCard({
  data,
  error,
}: {
  data: Pokemon | null;
  error: string | null;
}) {
  if (error) {
    return (
      <div className="card">
        <figure>
          <img
            width="100px"
            height="100px"
            src="https://ui.dev/images/courses/pokemon-unknown.png"
            alt="Unknown Pokemon Image"
          />
          <figcaption>
            <h4>Oops.</h4>
            <h6>{error}</h6>
          </figcaption>
        </figure>
      </div>
    );
  }

  return (
    <div className="card">
      <figure>
        <img src={data?.sprites?.front_default} alt={data?.name} />
        <figcaption>NAME:{data?.name}</figcaption>
        <figcaption>TYPE:{data?.types[0]?.type.name}</figcaption>
        {data?.types[1] && <figcaption>{data?.types[1].type.name}</figcaption>}
        <figcaption>id:{data?.id}</figcaption>
      </figure>
    </div>
  );
}
