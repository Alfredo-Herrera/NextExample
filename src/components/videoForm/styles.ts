import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GridContainerVideo = styled(Grid)`
  display: grid;
  place-items: center;
  @media (max-width: 600px) {
  }
`;

export const GridContainerForm = styled(Grid)`
  display: grid;
  place-items: center;
  @media (max-width: 600px) {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
  }
`;

export const GridContaineButton = styled(Grid)`
  display: none;
  justify-content: center;
  @media (max-width: 600px) {
    display: flex;
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
`;
