import Head from 'next/head';
import { FC } from 'react';
import { mainInterface } from 'src/interfces';

const MainLayout: FC<mainInterface> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="author" content="Alfredo Herrera" />
      <meta name="description" content="informacion sobre el pokemon" />
      <meta name="keywords" content={`${title}, pokemon, pokedex`} />
    </Head>

    
    <main style={{ padding: '0px 20px' }}>{children}</main>
  </>
);

export default MainLayout;
