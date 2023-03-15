import { Box, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { CardPokemonProps } from 'src/interfces';

const PokemonCard: FC<CardPokemonProps> = ({ pokemon: { id, name, img } }, isFirst = false) => {
  const router = useRouter();
  const Onclick = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid item md={0}>
      <Card onClick={Onclick}>
        <CardActionArea>
          <Box sx={{ padding: '20px', display: 'flex', align: 'center', justifyContent: 'center' }}>
            <Image src={img} width={200} height={240} alt={name} />
          </Box>
          <CardContent sx={{ display: 'flex', align: 'center', justifyContent: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              name: {name} - id -{id}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
