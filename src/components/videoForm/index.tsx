/* eslint-disable jsx-a11y/media-has-caption */
import { Button, Grid } from '@mui/material';
import { useEffect, useRef } from 'react';
import { GridContaineButton, GridContainerForm, GridContainerVideo } from './styles';

const VideoForm = () => {
  const videoRef = useRef();
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
          controls
          onClick={(event) => {
            console.log();
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
            const video = document.getElementById('1234');
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
