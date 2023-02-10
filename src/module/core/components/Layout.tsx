import { styled } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;

const Container = styled('div')({
  minHeight: '100vh',
});
