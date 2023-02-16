import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDescription,
  getPokemonDetail,
  getPokemonDetailLoading,
} from '../../../redux/selectors';
import { getPokemonDescription } from '../../../redux/slices/pokemonDescription';
import { Skeleton, styled, Typography } from '@mui/material';
import { TypesPokemon } from './ImageAnimated';

export const DescriptionPokemon = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(getPokemonDetail);
  const loading = useSelector(getPokemonDetailLoading);
  const { flavor_text: description } = useSelector(getDescription);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getPokemonDescription(id) as any);
    }
  }, [id]);

  return (
    <WrapperDescription>
      <TitleDescription variant="h3" fontSize={25} fontWeight={600}>
        {loading ? <SkeletonTitle variant="text" /> : 'Description:'}
      </TitleDescription>
      <Description>
        {loading ? <LoadingDescription /> : <> {description} </>}
      </Description>
      <TypesPokemon />
    </WrapperDescription>
  );
};

const LoadingDescription = (): JSX.Element => {
  return (
    <>
      {[1, 2, 3, 4].map((_, index) => (
        <SkeletonDescription variant="text" key={index} />
      ))}
    </>
  );
};

const SkeletonDescription = styled(Skeleton)({});

const SkeletonTitle = styled(Skeleton)({
  width: 150,
});

const WrapperDescription = styled('div')(({ theme }) => ({
  height: '100%',
  marginTop: theme.spacing(5),
  padding: theme.spacing(2),
  width: '100%',
  zIndex: 1,
  backgroundColor: 'rgba(48, 47, 47, 0.5)',
  borderRadius: 10,
  color: theme.palette.common.white,
  [theme.breakpoints.up('md')]: {
    width: '70vw',
    backgroundColor: 'transparent',
    borderRadius: 0,
    color: theme.palette.common.black,
  },
  [theme.breakpoints.up('lg')]: {
    width: '38vw',
    borderRadius: 0,
    color: theme.palette.common.black,
  },
}));

const Description = styled(Typography)(({ theme }) => ({}));

const TitleDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
