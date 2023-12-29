import usePokeData from "./usePokeData";

function PokeData(props: { pokeId: number }) {
  const { data, error, isLoading } = usePokeData(props.pokeId);

  if (error) return <div>failed to load </div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <p>{data.name}</p>
      <img src={data.sprites.front_default} alt={data.name} />
    </>
  );
}

export default PokeData;
