import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import pokemonCollectionReducer from "../reducers/pokemonCollections.reducer";
import { PokemonDetail, } from '../../api/types/pokemonDetail';


export interface InitialState {
    data: PokemonDetail[];
    isLoading: boolean;
    error: boolean;
}

const initialState = {
    data: [],
    isLoading: false,
    error: false
} as InitialState


const pokemonCollection = createSlice({
    name: 'pokemonCollection',
    initialState,
    reducers: pokemonCollectionReducer
})

interface DataResponse {
    results: PokemonDetail[];
}


export const fetchPokemonCollection = () => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchPokemonCollectionIsLoading());
        const { data } = await axios.get<DataResponse>('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');

        const pokemonCollection = await Promise.all(data.results.map(async (pokemon: any) => {
            const r = await axios.get(pokemon.url);
            return r.data;
        }))
        dispatch(fetchPokemonCollectionSuccess(pokemonCollection));
    } catch (error: any) {
        dispatch(fetchPokemonCollectionError(error));
    }
}

const { fetchPokemonCollectionError, fetchPokemonCollectionIsLoading, fetchPokemonCollectionSuccess } = pokemonCollection.actions;
export default pokemonCollection.reducer