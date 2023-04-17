/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/media-has-caption */
import { Button, Grid } from '@mui/material';
import { useEffect } from 'react';
import { GridContaineButton, GridContainerForm, GridContainerVideo } from './styles';

const VideoForm = () => {
  useEffect(() => {
    const video = document.getElementById('1234');
    video!.addEventListener('ended', (event) => {
      const buttonContainer = document.getElementById('buttonContainer');
      buttonContainer!.style.display = 'flex';
    });
  }, []);

  return (
    <>
      <GridContainerVideo item md={6} xs={12}>
        <video
          id="1234"
          src="/video.mp4"
          width="100%"
          height="100%"
          autoPlay
          webkit-playsinline
          playsInline
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
            transform: 'scale(1, 3.1)',
          }}
        />
      </GridContainerVideo>
      <GridContainerForm item md={6} xs={12}>
        <Grid>
          <h1>hola soy el cuestionario</h1>
        </Grid>
        <Grid>
          <Button variant="outlined" color="secondary">
            hola soy el button
          </Button>
        </Grid>
      </GridContainerForm>
      <GridContaineButton id="buttonContainer">
        <Button
          onClick={() => {
            const video = document.getElementById('1234') as HTMLVideoElement;
            video!.play();
            const buttonContainer = document.getElementById('buttonContainer');
            buttonContainer!.style.display = 'none';
          }}
        >
          play
        </Button>
      </GridContaineButton>
    </>
  );
};

export default VideoForm;
