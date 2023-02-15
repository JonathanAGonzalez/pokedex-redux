import { CircularProgress, Input, styled, Theme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailPokemon } from '../../../redux/slices/pokemonDetail';
import { AlertCustom } from '../../../module/core/components/AlertCustom';
import {
  getPokemonDetailError,
  getPokemonDetailLoading,
} from '../../../redux/selectors';

interface InputSearchProps {
  error: boolean;
  theme?: Theme;
}

export const SearchInput = () => {
  const [value, setValue] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const errorFetch = useSelector(getPokemonDetailError);
  const loading = useSelector(getPokemonDetailLoading);

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getDetailPokemon(value.toLowerCase()) as any);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      setValue('');
      if (value === '') {
        setIsEmpty(true);
        return;
      }
      handleSearch();
    }
  };

  useEffect(() => {
    setIsEmpty(errorFetch);
  }, [errorFetch]);

  return (
    <InputSearch error={isEmpty}>
      <AlertCustom
        text={
          errorFetch
            ? ` oops! the pokemon you searched for was not found, please try again`
            : 'Oops you did not complete the search field'
        }
        onClose={() => setIsEmpty(false)}
        open={isEmpty}
      />
      <WrapperIcon>
        {loading ? <CircularProgress size={15} /> : <SearchIcon />}
      </WrapperIcon>
      <FieldSearch
        autoComplete="off"
        error={isEmpty}
        fullWidth
        disabled={loading}
        id="search"
        name="search"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search Pokémon"
        type="search"
        value={value}
      />
    </InputSearch>
  );
};

const WrapperIcon = styled('div')(({ theme }) => ({
  alignItems: 'center',
  background: theme.palette.brandColors.primary,
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: 50,
  svg: {
    color: theme.palette.brandColors.text,
  },
}));

const FieldSearch = styled(Input)(({ theme }) => ({
  height: '100%',
  paddingLeft: theme.spacing(2),
  width: '95%',
  '&::before': {
    display: 'none',
  },
}));

const InputSearch = styled('div', {
  shouldForwardProp: (prop) => prop !== 'error',
})(({ theme, error }: InputSearchProps) => ({
  alignItems: 'center',
  background: theme?.palette.grey[300],
  border: error ? `1px solid ${theme?.palette.error.light}` : 'none',
  borderRadius: 10,
  display: 'flex',
  height: 50,
  marginBottom: theme?.spacing(5),
  maxWidth: 300,
  overflow: 'hidden',
  width: '70%',
  zIndex: 1,
}));
