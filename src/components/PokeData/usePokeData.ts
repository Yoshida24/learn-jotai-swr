import useSWR from "swr";
import { fetcher } from "./fetcher";

function usePokeData(id: number) {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const { data, error, isLoading } = useSWR(endpoint, fetcher);
  return { data, error, isLoading };
}

export default usePokeData;
