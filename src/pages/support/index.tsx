import type { NextPage } from 'next';
import Head from 'next/head';

import Menu from '../../components/Menu/Menu';
import { Footer } from '../../components/Footer';
import { Reserved } from './styles';
import { TbMessageCircle } from 'react-icons/tb';
import { FirstSection } from './styles';

const Support: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hurakall - Support</title>
        <meta name="description" content="hurakall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      {/* <Banner>
        <span>
          <Image
            src="/assets/home/logo-white.png"
            alt="Banner"
            height={100}
            width={600}
          />
          <h2>Simple Solutions for Complex Connections</h2>
        </span>
      </Banner> */}

      <FirstSection>

        <div className="section2">
          <div className="card">
            <p>Downloads firmwares</p>
            <span>Tipo de produto:</span>
            <div className="pdf">
              <a href="/assets/wirelles-router.pdf" target="_blank">
                FW 17-07-21-ZTE128_Z_Sa128H_V1.0.9_210717_11072_X000_WB.bin
              </a>
            </div>
          </div>
          <div className="card">
            <p>Manual de uso</p>
            <span>Tipo de produto:</span>
            <div className="pdf">
              <a href="/assets/manual.pdf" target="_blank">
                manual-routerac1200-hurakall-wr-135g-mesh.pdf
              </a>
            </div>
          </div>

          <div className="conteudo">
            <TbMessageCircle />
            <p>Perguntas ou problemas relacionados a firmwares?</p>
            <span>
              Entre em contato com o nosso <a href="">RMA</a>
            </span>
          </div>
        </div>
      </FirstSection>
      <Reserved>
        <h2>COPYRIGHT © HURAKALL RIGHT RESERVED</h2>
      </Reserved>

      <Footer />
    </div>
  );
};

export default Support;
