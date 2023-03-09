import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { CardPokemonProps } from 'src/interfces';

export const PokemonCard: FC<CardPokemonProps> = ({ pokemon: { id, name, img } }) => {
  const router = useRouter();
  const Onclick = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid item xs={6} sm={3} md={2} xl={1} key={id}>
      <Card sx={{ maxWidth: 345 }} onClick={Onclick}>
        <CardActionArea>
          <CardMedia component="img" src={img} width="100%" height={140} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              name: {name} - id -{id}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
