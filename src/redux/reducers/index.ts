import { combineReducers } from "@reduxjs/toolkit";
import pokemonDetail from '../slices/pokemonDetail';
import pokemonDescription from '../slices/pokemonDescription';
import pokemonCollection from '../slices/pokemonCollection';


export default combineReducers({
    pokemonCollection,
    pokemonDetail,
    pokemonDescription
})