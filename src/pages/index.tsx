import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Menu from '../components/Menu/Menu';

import LogoCentral from '../../public/assets/home/logo-white.png';
import ONT from '../../public/assets/home/produtos_home/ont.png';
import Roteador from '../../public/assets/home/produtos_home/roteador.png';
import Drop from '../../public/assets/home/produtos_home/drop.png';
import Fibra from '../../public/assets/home/produtos_home/fibra.png';
import Clivador from '../../public/assets/home/produtos_home/clivador.png';
import Fusao from '../../public/assets/home/produtos_home/fusao.png';
import ConectorRosca from '../../public/assets/home/produtos_home/conector_rosca.png';
import ConectorClip from '../../public/assets/home/produtos_home/conector_clip.png';
//new image
import carregadorEst from '../../public/assets/home/produtos_home/carregador_estação.png';
import carregadorBCP from '../../public/assets/home/produtos_home/carregador_bcp-AT2n.png';
import carregadorCCDF from '../../public/assets/home/produtos_home/carregador_CCDC.png';
import carregadorAC from '../../public/assets/home/produtos_home/carregador_AC_BCP_solo.png';


import { Banner, Container, Description, Products, Reserved } from './styles';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  const products = [
    {
      title: 'ONT XPON HÍBRIDA AC1200 GIGABIT',
      description: '4 antenas com alcance de 5dBi e Velocidade de 1200 mbps',
      image: ONT,
      imageDescription: 'ONT',
      nav: '/ont',
    },
    {
      title: 'ROTEADOR WIRELESS AC1200 DUAL BAND',
      description: 'GIGABIT EASY MESH',
      image: Roteador,
      imageDescription: 'Roteador',
      nav: '/roteador',
    },
    {
      title: 'CABO ÓPTICO DROP FLAT 01FO',
      description: 'COMPACTO METÁLICO',
      image: Drop,
      imageDescription: 'Drop',
      nav: '/drop-cable',
    },
    {
      title: 'CABO ÓPTICO ASU80/120',
      description: 'NÚCLEO SECO USO EXTERNO',
      image: Fibra,
      imageDescription: 'Fibra',
      nav: '/asu-cable',
    },
    {
      title: 'CLIVADOR DE ALTA PRECISÃO',
      description: 'FTTH LÂMINA DE DIAMANTE',
      image: Clivador,
      imageDescription: 'Clivador',
      nav: '/high-press-cleaver',
    },
    {
      title: 'MÁQUINA DE FUSÃO ÓPTICA HURAKALL',
      description: '6 MOTORES, 3 EIXOS',
      image: Fusao,
      imageDescription: 'Fusao',
      nav: '/fusion-machine',
    },
    {
      title: 'CONECTOR ROSCA SC/APC OU UPC',
      description: 'FERROLHO PATENTEADO',
      image: ConectorRosca,
      imageDescription: 'ConectorRosca',
      nav: '/screw-connector',
    },
    {
      title: 'CONECTOR FAST CLICK SC/APC OU UPC',
      description: 'FERROLHO PATENTEADO',
      image: ConectorClip,
      imageDescription: 'ConectorClip',
      nav: '/conector-click',
    },
    {
      title: 'ESTAÇÃO DE RECARGA AC BCP-CT2N-P SOLO',
      description: '2 CARTÕES RFID - 22kW - 2 CONECTORES',
      image: carregadorAC,
      imageDescription: 'estacao-AC',
      nav: '/estacao-AC',
    },
    {
      title: 'ESTAÇÃO DE RECARGA BCP-CT2N-P AC 22kM',
      description: '22kW - 2 conectores - 5M DE CABO',
      image: carregadorBCP,
      imageDescription: 'estacao-BCP',
      nav: '/estacao-BCP',
    },
    {
      title: 'ESTAÇÃO DE RECARGA CC EV BBDC 30kW',
      description: 'AC - 30kW - 2 conectores',
      image: carregadorCCDF,
      imageDescription: 'estacao-BBDC',
      nav: '/estacao-BBDC',
    },
    {
      title: 'ESTAÇÃO DE RECARGA DC BDC120-D',
      description: 'AC - 60kW e 120kW - 2 conectores',
      image: carregadorEst,
      imageDescription: 'estacao-DC-BDC',
      nav: '/conector-click',
    },
  ];


  return (
    <Container>
      <Head>
        <title>Hurakall - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <Banner>
        <span>
          <Image src={LogoCentral} alt="Banner" />
          <h2>Simples Solutions for Complex Connections</h2>
        </span>
      </Banner>

      <Description>
        <span>
          {/*&apos; representa aspas simples*/}
          <h1>
            After several years&apos; development, Hurakall products are broadly
            acknow ledged and trusted by different clients around the Brazil.
            We&apos;re looking for partners all over the world.
            <br />
          </h1>
        </span>
      </Description>

      <Products>
        <h1>Best sellers of all time</h1>

        {products.map((product, idx) => (
          <div key={idx} className={`${!(idx % 2 == 0) && 'left'} productDiv`}>
            <motion.div
              initial={
                idx % 2 === 0 ? { opacity: 0, x: -10 } : { opacity: 0, x: 10 }
              }
              transition={{ duration: 1, delay: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.75 }}
            >
              <figure>
                <Image
                  src={product.image}
                  alt={product.imageDescription}
                  layout="fill"
                  objectFit="contain"
                />
              </figure>
            </motion.div>
            <span>
              <h2>{product.title}</h2>
              <h3>{product.description}</h3>
              <Link href={product.nav}>
                <a>mais informações sobre este produto</a>
              </Link>
            </span>
          </div>
        ))}
      </Products>

      <Reserved>
        <h2>COPYRIGHT © HURAKALL RIGHT RESERVED</h2>
      </Reserved>

      <Footer />
      {/* <FloatingButton /> */}
    </Container>
  );
};

export default Home;
