/* eslint-disable react/prop-types */
import { Box, Grid, Skeleton } from '@mui/material';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { ReactElement, useEffect, useState } from 'react';
import Container from 'src/components/container';
import PokemonCard from 'src/components/pokemonCard';
import { useElementOnScreen } from 'src/hooks/useelementOnScreen';
import { HomePageProps, PokemonListResponse, SmallPokemon } from 'src/interfces';
import MainLayout from 'src/layouts/MainLayout';
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout<HomePageProps> = (props) => {
  const { pokemons = [] } = props;
  const [pokemosView, setPokemosView] = useState(pokemons);
  const [numberSearch, setNumberSearch] = useState(12);
  const [loading, setLoading] = useState(false);
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '10px',
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisible) {
      if (numberSearch < 151) {
        searchPokemons();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const searchPokemons = async () => {
    setLoading(true);
    const { data } = await axios.get<PokemonListResponse>(
      ` https://pokeapi.co/api/v2/pokemon?limit=${numberSearch}`
    );
    const url =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
    const pokemonsData: SmallPokemon[] = data?.results.map((poke, i) => ({
      ...poke,
      id: i + 1,
      img: `${url}${i + 1}.svg`,
    }));
    setPokemosView(pokemonsData);
    setNumberSearch((prevState) => prevState + 12);
    setLoading(false);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {pokemosView.length > 0 &&
          pokemosView.map((pokemon, i) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </Grid>
      {loading && (
        <>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </>
      )}
      <Box ref={containerRef} />
    </Container>
  );
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const { data } = await axios.get<PokemonListResponse>(
      ' https://pokeapi.co/api/v2/pokemon?limit=12'
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
  return <MainLayout title="home">{page}</MainLayout>;
};

export default HomePage;
