/* eslint-disable react/prop-types */
import { Box, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { ReactElement } from 'react';
import { Pokemon } from 'src/interfces/pokemon.interface';
import MainLayout from 'src/layouts/MainLayout';
import { NextPageWithLayout } from '../_app';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPageWithLayout<Props> = ({ pokemon }) => (
  <Grid container sx={{ marginTop: '5px' }} gap={2}>
    <Grid xs={12} md={5}>
      <Card sx={{ padding: '30px' }}>
        <CardActionArea>
          <Box sx={{ padding: "20px", display: "flex", align: "center", justifyContent: "center" }}>
            <Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'} width={200} height={240} alt={pokemon.name} />
          </Box>
        </CardActionArea>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {pokemon.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    <Grid xs={12} md={5}>
      <Card>
        <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
        <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
        <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
      </Card>
    </Grid>
  </Grid>
);

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pathPokemons = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: pathPokemons.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { id } = params as { id: string };
    const { data } = await axios.get<Pokemon>(` https://pokeapi.co/api/v2/pokemon/${id}`);
    return {
      props: {
        pokemon: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        pokemons: [],
      },
    };
  }
};

PokemonPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="home">{page}</MainLayout>;
};

export default PokemonPage;
