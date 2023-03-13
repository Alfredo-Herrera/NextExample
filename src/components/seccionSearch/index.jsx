import { useCallback, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material"
import Container from 'src/components/container';
import dynamic from 'next/dynamic'
import { urlSearch } from "./help";
import Form from "./form";


const SeccionSearch = () => {
    const [pokemon, setData] = useState([]);
    const search = useCallback(async (text, typeSearch) => {
        const url = `${urlSearch[typeSearch]}${text}`
        try {
            const { data } = await axios.get(
                url
            );
            const urlImg =
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';
            if (typeSearch === "type") {
                const pokemons = data?.pokemon.map((poke, i) => {
                    let urlDivider = poke.pokemon.url.split('/');
                    urlDivider= urlDivider[6]
                    return {
                    pokemon: {...poke.pokemon, img: `${urlImg}${urlDivider}.svg`, id:urlDivider, },
                    id:urlDivider,
                }
                });
                return setData(pokemons);
            }
            const poke = [{ pokemon: {...data, img: `${urlImg}${data.id}.svg`}, id: data.id, type: typeSearch }]
            return setData(poke);
        } catch (error) {
            console.log(error);
            return setData([])
        };
    }, [])

    const PokemonCard = pokemon.length > 0 && dynamic(() => import('../pokemonCard/index'))

    
    return (
        <Grid container spacing={2} gap={4}>
            <Grid item md={12} sx={{ height: "200px", display: "grid", placeItems: "center" }}>
                <Form search={search} />
            </Grid>
                <Container>
            <Grid container spacing={3}>
                {pokemon.length > 0 && PokemonCard &&
                pokemon.map((poke) => <PokemonCard {...poke} key={poke.id} md={poke?.type ? 3 : 0 } />)}
            </Grid>
        </Container>
        </Grid>
    )
}

export default SeccionSearch