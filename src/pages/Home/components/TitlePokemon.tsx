import { Skeleton, styled, Theme, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  getPokemonDetail,
  getPokemonDetailLoading,
} from '../../../redux/selectors';
import { changeBackgroundByType } from '../../../utils/changeBackgroundByType';

interface TitleProps {
  loading: boolean;
  name: string;
  iconsByType: () => void;
}

interface TypeImageProps {
  src: string;
  type: string;
}

const icons = {
  grass: '/images/icons/grass.svg',
  electric: '/images/icons/electric.svg',
  fire: '/images/icons/fire.svg',
  water: '/images/icons/water.svg',
  normal: '/images/icons/normal.svg',
  fighting: '/images/icons/fighting.svg',
  flying: '/images/icons/flying.svg',
  poison: '/images/icons/poison.svg',
  ground: '/images/icons/ground.svg',
  rock: '/images/icons/rock.svg',
  bug: '/images/icons/bug.svg',
  ghost: '/images/icons/ghost.svg',
  steel: '/images/icons/steel.svg',
  ice: '/images/icons/ice.svg',
  dragon: '/images/icons/dragon.svg',
  dark: '/images/icons/dark.svg',
  psychic: '/images/icons/psychic.svg',
  fairy: '/images/icons/fairy.svg',
};

export const TitlePokemon = (): JSX.Element => {
  const { id, types, name } = useSelector(getPokemonDetail);
  const loading = useSelector(getPokemonDetailLoading);

  const iconsByType = () => {
    if (types?.length > 0) {
      return (
        <TypeImage
          type={types[0].type.name}
          src={icons[types[0].type.name as keyof typeof icons]}
        />
      );
    }
  };

  return (
    <Container>
      <WrapperTitle variant="h1" fontSize={40} fontWeight={600}>
        <Title loading={loading} iconsByType={iconsByType} name={name} />
      </WrapperTitle>
      <ID variant="h2" fontSize={19} fontWeight={400}>
        {loading ? <Skeleton variant="text" width={40} /> : <>#{id}</>}
      </ID>
    </Container>
  );
};
const Title = ({ loading, name, iconsByType }: TitleProps): JSX.Element => {
  return (
    <>
      {loading ? (
        <>
          <SkeletonTitle variant="text" /> <SkeletonImage variant="circular" />
        </>
      ) : (
        <>
          {name}
          {iconsByType()}
        </>
      )}
    </>
  );
};

const TypeImage = ({ src, type }: TypeImageProps): JSX.Element => {
  return (
    <ContainerImage type={type}>
      <img src={src} alt="" />
    </ContainerImage>
  );
};

const SkeletonTitle = styled(Skeleton)(({ theme }) => ({
  height: 40,
  width: 200,
}));

const SkeletonImage = styled(Skeleton)(({ theme }) => ({
  height: 50,
  width: 50,
}));

const ID = styled(Typography)(({ theme }) => ({}));

const Container = styled('div')(({ theme }) => ({}));

const ContainerImage = styled('figure', {
  shouldForwardProp: (prop) => prop !== 'type',
})(({ theme, type }: { theme?: Theme; type: string }) => ({
  alignItems: 'center',
  background: changeBackgroundByType(type),
  borderRadius: 50,
  display: 'flex',
  height: 50,
  justifyContent: 'center',
  margin: 0,
  width: 50,
  img: {
    width: 30,
    zIndex: 3,
  },
}));

const WrapperTitle = styled(Typography)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: 10,
  textTransform: 'capitalize',
}));
