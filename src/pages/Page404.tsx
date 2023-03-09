import { m } from 'framer-motion';

// @mui
import { Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PageNotFoundIllustration from 'src/assets/illustrations/PageNotFoundIllustration';
import MotionContainer from 'src/components/animate/MotionContainer';
import { varBounce } from 'src/components/animate/variants';
import Page from 'src/components/page';
// components

// assets

// ----------------------------------------------------------------------

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

type Props = {
  message?: string;
  detailMessage?: string;
  linkReturn?: string;
  buttonName?: string;
};

export default function Page404({ message, detailMessage, linkReturn, buttonName }: Props) {
  return (
    <Page title="404 Page Not Found">
      <Container component={MotionContainer}>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <m.div variants={varBounce().in}>
            <Typography variant="h3" paragraph>
              {message ?? 'Sorry, not found!'}
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <Typography sx={{ color: 'text.secondary' }}>
              {detailMessage ?? 'Sorry, we couldn’t find what you’re looking for.'}
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <PageNotFoundIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
          </m.div>

          <Button href="/" size="large" variant="contained">
            {buttonName ?? 'Go to Home'}
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}
