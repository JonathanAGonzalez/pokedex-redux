import { PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../api/types/collectionPokemons";
import { PokemonDetail } from '../../api/types/pokemonDetail';
import { InitialState } from "../slices/pokemonCollection";

interface State {
    isLoading: boolean;
    error: boolean;
    payload: Pokemon[];
}

interface ActionPayload {
    payload: PokemonDetail[];
    type: string;
}



const fetchPokemonCollectionIsLoading = (state: InitialState) => {
    state.isLoading = true
}

const fetchPokemonCollectionSuccess = (state: InitialState, action: ActionPayload) => {
    state.data = action.payload;
    state.isLoading = false;
}

const fetchPokemonCollectionError = (state: InitialState, action: PayloadAction<State>) => {
    state.error = true;
    state.isLoading = false;
}

const pokemonCollectionReducer = {
    fetchPokemonCollectionIsLoading,
    fetchPokemonCollectionSuccess,
    fetchPokemonCollectionError
}

export default pokemonCollectionReducer
