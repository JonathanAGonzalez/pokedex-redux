import { InitialState } from "../pokemonSlice";

interface State {
    pokemonSlice: InitialState;
}


export const getPokemonCollection = (state: State) => state.pokemonSlice.pokemonCollection
export const getPokemonCollectionLoading = (state: State) => state.pokemonSlice.isLoading;
export const getPokemonCollectionError = (state: State) => state.pokemonSlice.error;