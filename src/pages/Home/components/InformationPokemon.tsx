import { styled } from '@mui/material';
import { DescriptionPokemon } from './Description';
import { TitlePokemon } from './TitlePokemon';

export const InformationPokemon = () => {
  return (
    <Container>
      <TitlePokemon />
      <DescriptionPokemon />
    </Container>
  );
};

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  margin: theme.spacing(4, 0),
}));
