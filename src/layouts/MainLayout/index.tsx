import Head from 'next/head';
import { FC } from 'react';
import FloatButton from 'src/components/FloatButton';
import Navbar from 'src/components/Navbar';
import { mainInterface } from 'src/interfces';

const MainLayout: FC<mainInterface> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="author" content="Alfredo Herrera" />
      <meta name="description" content="informacion sobre el pokemon" />
      <meta name="keywords" content={`${title}, pokemon, pokedex`} />
    </Head>

    <Navbar />
    <main style={{ padding: '0px 60px', marginTop: "80px" }}>{children}</main>
    <FloatButton />
  </>
);

export default MainLayout;
