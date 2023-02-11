import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Pokemon } from "../../api/types/collectionPokemons";

export interface InitialState {
    pokemonCollection: Pokemon[];
    isLoading: boolean;
    error: boolean;
}

const initialState = {
    pokemonCollection: [],
    isLoading: false,
    error: false
} as InitialState

interface State {
    isLoading: boolean;
    error: boolean;
    payload: Pokemon[];
}

const pokemonSlice = createSlice({
    name: 'pokemonCollection',
    initialState,
    reducers: {
        fetchPokemonCollectionIsLoading(state: InitialState) {
            state.isLoading = true
        },
        fetchPokemonCollectionSuccess(state: InitialState, action: PayloadAction<Pokemon[]>) {
            state.pokemonCollection = action.payload;
            state.isLoading = false;
        },
        fetchPokemonCollectionError(state: InitialState, action: PayloadAction<State>) {
            state.error = true;
            state.isLoading = false;
        }
    }
})

export const fetchPokemonCollection = () => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchPokemonCollectionIsLoading());
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=15');
        dispatch(fetchPokemonCollectionSuccess(data.results));
    } catch (error: any) {
        dispatch(fetchPokemonCollectionError(error));
    }
}

const { fetchPokemonCollectionError, fetchPokemonCollectionIsLoading, fetchPokemonCollectionSuccess } = pokemonSlice.actions;
export default pokemonSlice.reducer