import { styled } from '@mui/material';

interface CardPokemonProps {
  src: string;
  alt: string;
  description: string;
  title: string;
}

export const CardPokemon = ({
  src,
  alt,
  description,
  title,
}: CardPokemonProps): JSX.Element => {
  return (
    <Container>
      <Picture>
        <Image src={src} alt={alt} />
      </Picture>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

const Description = styled('p')(({ theme: { palette } }) => ({
  textOverflow: 'ellipsis',
  margin: 0,
  fontSize: 14,
  color: palette.brandColors.textDark,
}));

const Title = styled('h4')(({ theme: { palette, spacing } }) => ({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  color: palette.brandColors.text,
  margin: spacing(2, 0),
}));

const Image = styled('img')({});

const Picture = styled('figure')({
  border: '2px solid white',
  margin: 0,
  height: 190,
  borderRadius: 8,
});

const Container = styled('article')(({ theme: { spacing, palette } }) => ({
  maxWidth: 250,
  height: 350,
  border: '2px solid white',
  borderRadius: 10,
  padding: spacing(3),
  background: palette.brandColors.cardBackground,
  overflow: 'hidden',
}));
