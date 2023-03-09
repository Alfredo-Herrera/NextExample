// @mui
import { Box, Card, Container, Stack, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// hooks

// components
import Logo from 'src/components/logo/Logo';

// sections
import Image from 'next/image';
import Page from 'src/components/page';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
  '@media (max-width: 600px)': {
    display: 'none',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <Page title="Login">
      <RootStyle>
        <HeaderStyle>
          <Logo />
        </HeaderStyle>

        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 16, mb: 5 }}>
            Hi, Welcome Back
          </Typography>
          <Image
            src="/assets/illustrations/illustration_login.png"
            alt="login"
            width={400}
            height={400}
            priority
          />
        </SectionStyle>

        <Container maxWidth="sm">
          <ContentStyle>
            <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  Sign in to Aviva
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
              </Box>

              <Tooltip title="Login" placement="right">
                <Image
                  src="/logo/AvivaLogoWithoutCreditWord.svg"
                  width={100}
                  alt="logo"
                  height={100}
                  priority
                />
              </Tooltip>
            </Stack>
            {/* <LoginForm /> */}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
