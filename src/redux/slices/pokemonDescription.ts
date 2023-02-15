import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { PokemonDescription } from '../../api/types/pokemonDescription';

export interface InitialStateDescription {
    data: {
        flavor_text: string
    };
    isLoading: boolean;
    error: any;
}

const initialState = {
    data: {},
    isLoading: false,
    error: null,
}

const pokemonDescription = createSlice({
    name: 'pokemonDescription',
    initialState,
    reducers: {
        fetchPokemonDescriptionIsLoading: (state) => {
            state.isLoading = true;
        },
        fetchPokemonDescriptionSuccess: (state, action: PayloadAction<PokemonDescription>) => {
            state.data = action.payload.flavor_text_entries.filter(text => text.language.name === 'es')[3];
            state.isLoading = false;
            state.error = null;
        },
        fetchPokemonDescriptionError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});


export const getPokemonDescription = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchPokemonDescriptionIsLoading());
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        dispatch(fetchPokemonDescriptionSuccess(data));
    } catch (error: any) {
        dispatch(fetchPokemonDescriptionError(error));
    }

}




export const { fetchPokemonDescriptionError, fetchPokemonDescriptionIsLoading, fetchPokemonDescriptionSuccess } = pokemonDescription.actions;
export default pokemonDescription.reducer;

