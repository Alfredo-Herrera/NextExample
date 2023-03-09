// @mui
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ComingSoonIllustration from 'src/assets/illustrations/ComingSoonIllustration';
import Page from 'src/components/page';
// hooks

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

export default function ComingSoon() {
  return (
    <Page title="Coming Soon">
      <Container>
        <ContentStyle sx={{ textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            Coming Soon!
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            We are currently working hard on this page!
          </Typography>
          <ComingSoonIllustration sx={{ my: 10, height: 240 }} />
        </ContentStyle>
      </Container>
    </Page>
  );
}
