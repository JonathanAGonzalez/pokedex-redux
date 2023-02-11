export interface Pokemons {
    data: Pokemon[];
    results?: Pokemon[];
}

export interface Pokemon {
    name: string;
    url: string;
}

export interface Data {
    data: Response;
}

export interface Response {
    count: number;
    next: string;
    previous: null;
    results: Pokemon[];
}

