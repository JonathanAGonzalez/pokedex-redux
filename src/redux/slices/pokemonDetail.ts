import { createSlice, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { PokemonDetail } from '../../api/types/pokemonDetail';

export interface InitialStateDetail {
    data: PokemonDetail;
    isLoading: boolean;
    error: boolean;
}

const initialState = {
    data: {} as PokemonDetail,
    isLoading: false,
    error: false
}


const pokemonDetail = createSlice({
    name: 'pokemonDetail',
    initialState,
    reducers: {
        fetchPokemonDetailIsLoading(state: InitialStateDetail) {
            state.isLoading = true;
            state.error = false;
        },
        fetchPokemonDetailSuccess(state, action) {
            state.isLoading = false;
            state.data = action.payload;
        },
        fetchPokemonDetailError(state, action) {
            state.isLoading = false;
            state.error = true;
        }
    }

});


export const getDetailPokemon = (pokemon: string = 'bulbasaur') => async (dispatch: Dispatch) => {
    try {
        dispatch(fetchPokemonDetailIsLoading());
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        dispatch(fetchPokemonDetailSuccess(data));
    } catch (error: any) {
        dispatch(fetchPokemonDetailError(error));
    }
}




const { fetchPokemonDetailIsLoading, fetchPokemonDetailSuccess, fetchPokemonDetailError } = pokemonDetail.actions;
export default pokemonDetail.reducer;