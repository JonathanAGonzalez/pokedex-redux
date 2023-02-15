import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper';
import { styled } from '@mui/material';
import { PokemonDetail } from '../../../api/types/pokemonDetail';

interface CarrouselProps {
  collection: PokemonDetail[] | [];
}

const Carrousel = ({ collection }: CarrouselProps) => {
  return (
    <Slider
      slidesPerView={4}
      spaceBetween={1}
      loop={true}
      freeMode={true}
      pagination={{ clickable: false }}
      modules={[FreeMode, Pagination]}
    >
      {collection.map((pokemon) => (
        <SwiperSlider key={pokemon.name}>
          <Name>{pokemon.name}</Name>
          <img
            src={pokemon?.sprites?.other?.dream_world.front_default}
            alt={pokemon?.name}
          />
        </SwiperSlider>
      ))}
    </Slider>
  );
};

export default Carrousel;

const Name = styled('div')({
  fontSize: 40,
  fontWeight: 700,
  opacity: 0.3,
  position: 'absolute',
  rotate: '45deg',
  transform: 'translateX(-40px) translateY(-70px)',
  zIndex: 1,
});

const SwiperSlider = styled(SwiperSlide)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  justifyContent: 'center',
  maxWidth: 200,
  overflow: 'hidden',
  padding: 20,
  img: {
    width: '100%',
    zIndex: 2,
  },
}));

const Slider = styled(Swiper)(({ theme }) => ({
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  height: 320,
  margin: 0,
  marginTop: 20,
  width: '60%',
}));
