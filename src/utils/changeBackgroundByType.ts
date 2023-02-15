const colorsBackground = {
    rock: '#b8a038',
    ghost: '#705898',
    bug: '#a8b820',
    poison: '#a040a0',
    normal: '#a8a878',
    fairy: '#ee99ac',
    fire: '#f08030',
    water: '#6890f0',
    grass: '#78c850',
    electric: '#f8d030',
    psychic: '#f85888',
    ice: '#98d8d8',
    dragon: '#7038f8',
    dark: '#705848',
    steel: '#b8b8d0',
    fighting: '#c03028',
    flying: '#a890f0',
};

export const changeBackgroundByType = (type: string): string => {
    return colorsBackground[type as keyof typeof colorsBackground] || '#fff';
};