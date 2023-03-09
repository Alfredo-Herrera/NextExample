import { styled } from '@mui/material/styles';
import { m } from 'framer-motion';
// @mui
import { Button, Container, Typography } from '@mui/material';
// components

// assets
import SeverErrorIllustration from 'src/assets/illustrations/SeverErrorIllustration';
import MotionContainer from 'src/components/animate/MotionContainer';
import { varBounce } from 'src/components/animate/variants';
import Page from 'src/components/page';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 750,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------
type Props = {
  titleError?: string;
  detailError?: string;
  linkReturn?: string;
  buttonName?: string;
};
export default function Page500({ titleError, detailError, linkReturn, buttonName }: Props) {
  return (
    <Page title="500 Internal Server Error">
      <Container component={MotionContainer}>
        <ContentStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <m.div variants={varBounce().in}>
            <Typography variant="h3" paragraph>
              {titleError ?? '500 Internal Server Error'}
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <Typography sx={{ color: 'text.secondary' }}>
              {detailError ?? 'There was an error, please try again later.'}
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <SeverErrorIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
          </m.div>

          <Button href="/" size="large" variant="contained">
            {buttonName ?? 'Go to Home'}
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}
