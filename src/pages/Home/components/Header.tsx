import { styled } from '@mui/material';
import { SearchInput } from './SearchInput';

export const Header = () => {
  return (
    <Container>
      <SearchInput />
    </Container>
  );
};

const Container = styled('header')();
