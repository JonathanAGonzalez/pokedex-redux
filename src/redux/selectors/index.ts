import { PokemonDetail } from '../../api/types/pokemonDetail';
import { InitialStateDescription } from '../slices/pokemonDescription';
import { InitialStateDetail } from "../slices/pokemonDetail";

interface State {
    pokemonDetail: InitialStateDetail
}

interface StateDescription {
    pokemonDescription: InitialStateDescription
}

export interface Data {
    data: PokemonDetail[];
    isLoading: boolean;
    error: boolean;
}

interface StateCollection {
    pokemonCollection: Data
}

//Collection
export const getPokemonCollection = (state: StateCollection) => state.pokemonCollection.data
export const getPokemonCollectionLoading = (state: StateCollection) => state.pokemonCollection.isLoading
export const getPokemonCollectionError = (state: StateCollection) => state.pokemonCollection.error

//Detail
export const getPokemonDetail = (state: State) => state.pokemonDetail.data
export const getPokemonDetailLoading = (state: State) => state.pokemonDetail.isLoading
export const getPokemonDetailError = (state: State) => state.pokemonDetail.error

//Description
export const getDescription = (state: StateDescription) => state.pokemonDescription.data
export const getDescriptionLoading = (state: StateDescription) => state.pokemonDescription.isLoading
export const getDescriptionError = (state: StateDescription) => state.pokemonDescription.error