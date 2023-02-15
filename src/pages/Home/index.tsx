import { useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { getDetailPokemon } from '../../redux/slices/pokemonDetail';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPokemonCollection,
  getPokemonDetail,
  getPokemonDetailLoading,
} from '../../redux/selectors';
import { Header } from './components';
import { InformationPokemon } from './components';
import { fetchPokemonCollection } from '../../redux/slices/pokemonCollection';
import { changeBackgroundByType } from '../../utils/changeBackgroundByType';
import { Layout } from '../../module/core/components';
import Carrousel from '../../module/core/components/Carrousel';
import { styled, Theme } from '@mui/material';

interface NamePokemonProps {
  isShort: boolean;
  theme?: Theme;
}

export const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const { sprites, types, name } = useSelector(getPokemonDetail);
  const collection = useSelector(getPokemonCollection);
  const loading = useSelector(getPokemonDetailLoading);
  const background = types && changeBackgroundByType(types[0]?.type?.name);
  const srcImage = sprites?.other?.dream_world?.front_default;

  useEffect(() => {
    dispatch(getDetailPokemon('pikachu') as any);
    dispatch(fetchPokemonCollection() as any);
  }, []);

  return (
    <Layout>
      <Container>
        <WrapperImage>
          {loading ? (
            <SkeletonImage variant="rounded" />
          ) : (
            <img src={srcImage} alt={name} placeholder="blur" />
          )}
        </WrapperImage>
        <WrapperInformation>
          <BackgroundLine background={background} />
          <NamePokemon zIndex={3} variant="h2" isShort={name?.length <= 8}>
            {loading ? <SkeletonNameText variant="text" /> : <>{name}</>}
          </NamePokemon>
          <Header />
          <WrapperInformationPokemon>
            <InformationPokemon />
          </WrapperInformationPokemon>
          <Carrousel collection={collection} />
        </WrapperInformation>
      </Container>
    </Layout>
  );
};

const SkeletonNameText = styled(Skeleton)(() => ({
  width: 400,
  height: 100,
}));

const SkeletonImage = styled(Skeleton)(() => ({
  position: 'absolute',
  zIndex: 1,
  width: 500,
  height: 500,
}));

const NamePokemon = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isShort',
})(({ theme, isShort }: NamePokemonProps) => ({
  fontSize: isShort ? 80 : 60,
  fontWeight: 700,
  position: 'absolute',
  textAlign: 'center',
  right: 110,
  maxWidth: '100%',
  textTransform: 'uppercase',
  opacity: 0.5,
  display: 'none',

  [theme?.breakpoints.up('md') || '']: {
    display: 'block',
  },
}));

const WrapperInformation = styled('div')(({ theme }) => ({
  background: theme.palette.common.white,
  borderRadius: 10,
  boxShadow: theme.shadows[20],
  height: '90vh',
  margin: 'auto',
  overflow: 'hidden',
  padding: theme.spacing(3),
  position: 'relative',
  width: '90vw',

  [theme.breakpoints.up('lg')]: {
    width: '70vw',
    padding: theme.spacing(7.5, 0, 7.5, 7.5),
  },
}));

const Container = styled('div')(({ theme }) => ({
  alignItems: 'center',
  background: theme.palette.brandColors.background,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
}));

const WrapperImage = styled('div')(({ theme }) => ({
  bottom: 0,
  position: 'absolute',
  right: 0,
  width: '50%',
  zIndex: 3,
  img: {
    width: '100%',
    height: '50%',
  },
  [theme.breakpoints.up('sm')]: {
    width: '30%',
    right: 0,
  },
  [theme.breakpoints.up('md')]: {
    width: '30%',
    right: 0,
  },
  [theme.breakpoints.up('lg')]: {
    right: 100,
    width: 400,
    height: 500,
    bottom: 'calc(40% - 500px / 2)',
    img: {
      height: '100%',
      width: '100%',
      animation: 'float 2s ease-in-out infinite',
    },
  },
  '@keyframes float': {
    '0%': {
      transform: 'translatey(0px)',
    },
    '50%': {
      transform: 'translatey(-20px)',
    },
    '100%': {
      transform: 'translatey(0px)',
    },
  },
}));

const BackgroundLine = styled('div', {
  shouldForwardProp: (prop) => prop !== 'background',
})(({ theme, background }: { theme?: Theme; background: string }) => ({
  position: 'absolute',
  background: background,
  height: 1300,
  width: 500,
  top: 34,
  transform: 'rotate(29deg)',
  right: -140,
  zIndex: 0,
  '&::before': {
    content: '""',
    backgroundImage: 'url(/images/pokeboll.png)',
    backgroundRepeat: 'repeat',
    backgroundSize: '80px',
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.5,
    filter: 'blur(3px) grayscale(1)',
  },
}));

const WrapperInformationPokemon = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  zIndex: 3,
  marginBottom: theme.spacing(5),
}));
