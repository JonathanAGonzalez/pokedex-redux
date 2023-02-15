import { useSelector } from 'react-redux';
import { styled } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import {
  getPokemonDetail,
  getPokemonDetailLoading,
} from '../../../redux/selectors';

const LoadingImage = () => {
  return (
    <ContainerLoadingImage>
      <Skeleton
        sx={{ display: 'block' }}
        width={40}
        height={40}
        variant="rectangular"
      />{' '}
      <Skeleton
        sx={{ display: 'block' }}
        width={40}
        height={40}
        variant="rectangular"
      />
    </ContainerLoadingImage>
  );
};

export const TypesPokemon = () => {
  const { sprites } = useSelector(getPokemonDetail);
  const loading = useSelector(getPokemonDetailLoading);

  const srcFront =
    sprites?.versions?.['generation-v']['black-white']?.animated?.front_default;
  const srcBack =
    sprites?.versions?.['generation-v']['black-white']?.animated?.back_default;

  return (
    <WrapperTypePokemon>
      <TypePokemon>
        {loading ? (
          <LoadingImage />
        ) : (
          <>
            <img src={srcFront} alt="Picture front" />
            <img src={srcBack} alt="Picture back" />
          </>
        )}
      </TypePokemon>
    </WrapperTypePokemon>
  );
};

const ContainerLoadingImage = styled('div')({
  alignItems: 'center',
  display: 'flex',
  gap: 10,
});

const WrapperTypePokemon = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: theme.spacing(3),
  width: '38vw',
  zIndex: 3,
}));

const TypePokemon = styled('div')(({ theme }) => ({
  minWidth: '50%',
}));
