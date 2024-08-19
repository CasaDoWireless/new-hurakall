import type { NextPage } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';

import Image from 'next/image';
import ONT from '../../../public/assets/home/produtos_home/ont.png';
import Roteador from '../../../public/assets/home/produtos_home/roteador.png';
import Drop from '../../../public/assets/home/produtos_home/drop.png';
import Fibra from '../../../public/assets/home/produtos_home/fibra.png';
import Clivador from '../../../public/assets/home/produtos_home/clivador.png';
import Fusao from '../../../public/assets/home/produtos_home/fusao.png';
import ConectorRosca from '../../../public/assets/home/produtos_home/conector_rosca.png';
import ConectorClip from '../../../public/assets/home/produtos_home/conector_clip.png';
import carregadorEst from '../../../public/assets/home/produtos_home/carregador_estação.png';
import carregadorBCP from '../../../public/assets/home/produtos_home/carregador_bcp-AT2n.png';
import carregadorCCDF from '../../../public/assets/home/produtos_home/carregador_CCDC.png';
import carregadorAC from '../../../public/assets/home/produtos_home/carregador_AC_BCP_solo.png';


//import slider
import carregador1 from '../../../public/assets/home/slider/slider_carregador.png';



//
import Warranty from '../../../public/assets/images/products-image/prod-banner2-icon2.png';
import Chip from '../../../public/assets/images/products-image/prod-banner2-icon1.png';
import Support from '../../../public/assets/images/products-image/prod-banner2-icon3.png';

import conector from '../../../public/assets/images/products-image/prod-banner2-icon4.png';
import charge from '../../../public/assets/images/products-image/prod-banner2-icon5.png';
import rfid from '../../../public/assets/images/products-image/prod-banner2-icon6.png';

import { Footer } from '../../components/Footer';
import Menu from '../../components/Menu/Menu';
import { FirstSection, SecondSection } from './styles';
import Link from 'next/link';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

const Products: NextPage = () => {
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
    }
  ];

  const products2 = [
    {
      title: 'ESTAÇÃO DE RECARGA BCP-CT2N-P AC 22kM',
      description: '22kW - 2 conectores - 5M DE CABO',
      image: carregadorBCP,
      imageDescription: 'estacao-BCP',
      nav: '/estacao-BCP',
    },
    {
      title: 'ESTAÇÃO DE RECARGA AC BCP-CT2N-P SOLO',
      description: '2 CARTÕES RFID - 22kW - 2 CONECTORES',
      image: carregadorAC,
      imageDescription: 'estacao-AC',
      nav: '/estacao-AC',
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
      imageDescription: 'estacao-BDC',
      nav: '/estacao-BDC',
    },
  ];

  const carouselImages = [
    { src: carregador1, alt: 'carregadores' },
  ];

  return (
    <div>
      <Head>
        <title>Hurakall - Products</title>
        <meta name="description" content="hurakall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
 
      <FirstSection>
        {/* sessão de FTTH */}
        {/* Primeira Seção */}
        <div>
          <article>
            <section>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <header>
                  <h1>ONT XPON HÍBRIDA AC1200 GIGABIT</h1>
                  <p>
                    4 antenas com alcance de 5dBi e <br />
                    Velocidade de 1200mbps
                  </p>
                </header>
              </motion.div>
              <main>
                <figure className="icons">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.35 }}
                    viewport={{ once: true }}
                  >
                    <Image src={Chip} alt="chip" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Image src={Warranty} alt="garantia" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.65 }}
                    viewport={{ once: true }}
                  >
                    <Image src={Support} alt="suporte" />
                  </motion.div>
                </figure>
              </main>
            </section>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <section>
                <img
                  src="/assets/images/products-image/prod-banner1.png"
                  alt=""
                />
              </section>
            </motion.div>
          </article>
        </div>
        <SecondSection>
        <article>
          <header>
            <h1>
              Nossa missão é fornecer os produtos mais avançados com
              estabilidade e qualidade confiável e bom serviço para nossos
              clientes.
            </h1>
          </header>
          <main>
            {products.map((product, idx) => (
              <Link key={idx} href={product.nav}>
                <div>
                  <figure>
                    <Image src={product.image} alt={product.imageDescription} />
                  </figure>
                  <p>{product.title}</p>
                </div>
              </Link>
            ))}
          </main>
        </article>
      </SecondSection>
      </FirstSection>
            <div style={{ padding: '0px', textAlign: 'center', maxWidth: '100%', margin: 'auto' }}>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {carouselImages.map((image, idx) => (
            <div key={idx} >
              <Image src={image.src} alt={image.alt} layout="responsive" height={250} width={600} />
            </div>
          ))}
        </Carousel>
          </div>

    <FirstSection>
      {/* sessão de carregadores*/}
        {/* Segunda Seção */}
        <div>
          <article>
            <section>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <header>
                  <h1>ESTAÇÃO DE RECARGA DC BDC120-D</h1>
                  <p>
                  60kW e 120kW <br />
                  com 2 conectores
                  </p>
                </header>
              </motion.div>
              <main>
                <figure className="icons">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.35 }}
                    viewport={{ once: true }}
                  >
                    <Image src={conector} alt="chip" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Image src={charge} alt="garantia" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.65 }}
                    viewport={{ once: true }}
                  >
                    <Image src={rfid} alt="suporte" />
                  </motion.div>
                </figure>
              </main>
            </section>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <section>
                <img className='img1'
                  src="/assets/home/produtos_home/carregador_estação1.png"
                  alt=""
                />
              </section>
            </motion.div>
          </article>
        </div>
        <SecondSection>
        <article>
          <header>
            <h1>
            Soluções completas 
de recarga rápida e ultrarápida em 
residências, estações de serviço 
e rodovias.

            </h1>
          </header>
          <main>
            {products2.map((product2, idx) => (
              <Link key={idx} href={product2.nav}>
                <div>
                  <figure>
                    <Image src={product2.image} alt={product2.imageDescription} />
                  </figure>
                  <p>{product2.title}</p>
                </div>
              </Link>
            ))}
          </main>
        </article>
      </SecondSection> 
    </FirstSection>

    
    <FirstSection>
      {/* sessão de carregadores*/}
        {/* Segunda Seção */}
        <div>
          <article>
            <section>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <header>
                  <h1>Interruptores Inteligentes Hurakall</h1>
                  <p>Touch WI-FI<br />
                  (1,2,3,4e 6 Botões)
                  </p>
                </header>
              </motion.div>
              <main>
                <figure className="icons">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.35 }}
                    viewport={{ once: true }}
                  >
                    <Image src={conector} alt="chip" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Image src={charge} alt="garantia" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.65 }}
                    viewport={{ once: true }}
                  >
                    <Image src={rfid} alt="suporte" />
                  </motion.div>
                </figure>
              </main>
            </section>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <section>
                <img className='img1'
                  src="/assets/home/produtos_home/touch.png"
                  alt=""
                />
              </section>
            </motion.div>
          </article>
        </div>
        <SecondSection>
        <article>
          <header>
            <h1>
            Soluções completas 
de recarga rápida e ultrarápida em 
residências, estações de serviço 
e rodovias.

            </h1>
          </header>
          <main>
            {products2.map((product2, idx) => (
              <Link key={idx} href={product2.nav}>
                <div>
                  <figure>
                    <Image src={product2.image} alt={product2.imageDescription} />
                  </figure>
                  <p>{product2.title}</p>
                </div>
              </Link>
            ))}
          </main>
        </article>
      </SecondSection> 
    </FirstSection>


      


      <Footer />
    </div>
  );
};

export default Products;
