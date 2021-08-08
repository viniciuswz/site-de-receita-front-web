import Head from 'next/head';
import { Container } from '../styles/pages/Home';

import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Início | Site de receitas</title>
      </Head>
      <Container>
        <Header />
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel facere,
          ut omnis id a voluptatum nulla recusandae quod animi iste ipsam
          facilis, eos quisquam. Expedita eligendi dolor mollitia minus commodi?
        </div>
      </Container>
    </>
  );
};

export default Home;
