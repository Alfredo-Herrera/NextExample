import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from 'next/link';
import { ButtonContainer } from './styles';
import { namePages, Props } from './help';

const HideOnScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};


export default function Navbar(props: Props) {
  const { isMobile } = props;

  return (
    <Box sx={{ display: 'flex' }}>
      <HideOnScroll>
        <AppBar
          component="nav"
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
        >
          <Toolbar>
            <Link href="/">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="logoDesktop"
                width={100}
                height={100}
                style={{ marginLeft: isMobile ? '0px' : '20px' }}
              />
            </Link>

            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: {
                  sm: 'block',
                  marginLeft: '20px',
                },
              }}
            />
            {namePages.map((page) => (
              <ButtonContainer key={page.title}>
                <Link href={page.url}>
                  <Button>
                    <Typography
                      component="span"
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '20px',
                        lineHeight: '20px',
                        width: '116px',
                        height: '20px',
                        textAlign: 'center',
                        letterSpacing: '0.01em',
                        fontFeatureSettings: 'liga',
                      }}
                    >
                      {page.title}
                    </Typography>
                  </Button>
                </Link>
              </ButtonContainer>
            ))}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
}
