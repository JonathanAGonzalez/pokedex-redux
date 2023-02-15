import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDescription,
  getPokemonDetail,
  getPokemonDetailLoading,
} from '../../../redux/selectors';
import { getPokemonDescription } from '../../../redux/slices/pokemonDescription';
import { Skeleton, styled, Typography } from '@mui/material';
import { TypesPokemon } from './Types';

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
  width: '38vw',
}));

const Description = styled(Typography)(({ theme }) => ({}));

const TitleDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
