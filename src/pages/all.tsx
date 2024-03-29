/* eslint-disable react/prop-types */
import { Grid } from '@mui/material';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { ReactElement } from 'react';
import Container from 'src/components/container';
import PokemonCard from 'src/components/pokemonCard';
import { HomePageProps, PokemonListResponse, SmallPokemon } from 'src/interfces';
import MainLayout from 'src/layouts/MainLayout';
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout<HomePageProps> = (props) => {
  const { pokemons = [] } = props;

  return (
    <Container>
      <Grid container spacing={3}>
        {pokemons.length > 0 &&
          pokemons.map((pokemon, i) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} isFirst={i === 0} />
          ))}
      </Grid>
    </Container>
  );
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const { data } = await axios.get<PokemonListResponse>(
      ' https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    const url =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
    const pokemons: SmallPokemon[] = data?.results.map((poke, i) => ({
      ...poke,
      id: i + 1,
      img: `${url}${i + 1}.svg`,
    }));
    return {
      props: {
        pokemons,
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

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="home 2">{page}</MainLayout>;
};

export default HomePage;
