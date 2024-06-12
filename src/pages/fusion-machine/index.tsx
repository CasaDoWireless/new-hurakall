import {
  Banner,
  Container,
  Reserved,
  Description,
  Features,
  ExtraFeatures,
  DetailedInformations,
  ExtraDetails,
} from './styles';
import { Footer } from '../../components/Footer';
import Head from 'next/head';
import Menu from '../../components/Menu/Menu';
import Image from 'next/image';
import { motion } from 'framer-motion';

import LogoCentral from '../../../public/assets/home/logo.png';
import Machine from '../../../public/assets/fusion-machine/FOTO.png';
import FotoD1 from '../../../public/assets/fusion-machine/FotoD1.png';
import FotoD2 from '../../../public/assets/fusion-machine/FotoD2.png';
import FotoD3 from '../../../public/assets/fusion-machine/FotoD3.png';
import FotoD4 from '../../../public/assets/fusion-machine/FotoD4.png';
import MachineTop from '../../../public/assets/fusion-machine/FOTO_TOP.png';
import alignmentIcon from '../../../public/assets/fusion-machine/alignment.png';
import letterVsIcon from '../../../public/assets/fusion-machine/letter-vs.png';
import motorIcon from '../../../public/assets/fusion-machine/motor.png';
import techSupportIcon from '../../../public/assets/fusion-machine/technical-support.png';
import acess1 from '../../../public/assets/fusion-machine/acess1.png';
import acess2 from '../../../public/assets/fusion-machine/acess2.png';
import acess3 from '../../../public/assets/fusion-machine/acess3.png';
import acess4 from '../../../public/assets/fusion-machine/acess4.png';
import acess5 from '../../../public/assets/fusion-machine/acess5.png';
import acess6 from '../../../public/assets/fusion-machine/acess6.png';
import acess7 from '../../../public/assets/fusion-machine/acess7.png';
import acess8 from '../../../public/assets/fusion-machine/acess8.png';
import acess9 from '../../../public/assets/fusion-machine/acess9.png';
import acess10 from '../../../public/assets/fusion-machine/acess10.png';
import desenho1 from '../../../public/assets/fusion-machine/desenho1.png';
import desenho2 from '../../../public/assets/fusion-machine/desenho2.png';

const specialChar = {
  aspas: '"',
};

export default function fusionMachine() {
  return (
    <Container>
      <Head>
        <title>Hurakall - Máquina de Fusão</title>
        <meta name="description" content="hurakall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <Banner>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div>
            <figure className="logo">
              <Image src={LogoCentral} alt="logo" />
            </figure>
            <p>MÁQUINA DE FUSÃO</p>
            <p>ÓPTICA HURAKALL I9</p>
            <span>+ ACESSÓRIOS</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <figure className="imgMaquina">
            <Image
              src={Machine}
              alt="Foto da Maquina"
              layout="fill"
              objectFit="contain"
            ></Image>
          </figure>
        </motion.div>
      </Banner>

      <Description>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p>
            A máquina usa CPU quad-core industrial, resposta rápida, é
            atualmente uma das máquinas de emenda de fibra mais rápidas do
            mercado; com tela de alta resolução de 5 polegadas 800x480, a
            operação é simples e intuitiva; e ampliações de foco de até 300
            vezes, tornando muito fácil observar a fibra a olho nu. Emenda de
            alinhamento de núcleo de velocidade de 6 segundos, aquecimento de 15
            segundos, a eficiência de trabalho aumentou 50% em comparação com
            máquinas de emenda comuns.
          </p>
        </motion.div>
      </Description>

      <Features>
        <p className="lessOpacity">
          for trunk line construction, FTTHproject, security monitoring etc.
        </p>
        <div className="features">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span>
                <figure className="icon">
                  <Image
                    src={alignmentIcon}
                    alt="featureIcon"
                    layout="fill"
                    objectFit="contain"
                  ></Image>
                </figure>
              </span>
            </motion.div>
            <p className="featDescription">ALINHAMENTO PELO NÚCLEO</p>
          </div>
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.35 }}
            >
              <span>
                <figure className="icon">
                  <Image
                    src={letterVsIcon}
                    alt="featureIcon"
                    layout="fill"
                    objectFit="contain"
                  ></Image>
                </figure>
              </span>
            </motion.div>
            <p className="featDescription">V-GROOVE ATIVO</p>
          </div>
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span>
                <figure className="icon">
                  <Image
                    src={motorIcon}
                    alt="featureIcon"
                    layout="fill"
                    objectFit="contain"
                  ></Image>
                </figure>
              </span>
            </motion.div>
            <p className="featDescription">6 MOTORES</p>
          </div>
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.65 }}
            >
              <span>
                <figure className="icon">
                  <Image
                    src={techSupportIcon}
                    alt="featureIcon"
                    layout="fill"
                    objectFit="contain"
                  ></Image>
                </figure>
              </span>
            </motion.div>
            <p className="featDescription">ASSISTÊNCIA TÉCNICA LOCAL</p>
          </div>
        </div>
        <figure>
          <Image src={MachineTop} alt="Vista de cima da máquina"></Image>
        </figure>
        <p>6 segundos de emenda rápida</p>
        <p> 15 segundos de aquecimento rápido</p>
      </Features>

      <ExtraFeatures>
        <p>Acompanha:</p>
        <div>
          <span>1</span>
          <p className="featText">POWER METER</p>
        </div>
        <div>
          <span className="p2">2</span>
          <p className="featText">VFL</p>
        </div>
      </ExtraFeatures>

      <DetailedInformations>
        <div className="info">
          <h4>
            Meça efetivamente a perda de conexão, verifique a continuidade a
            ajude a avaliar o link de fibra e qualidade de transmissão.
          </h4>
          <div className="infoList">
            <h3>FONTE DE LUZ VÍSIVEL</h3>
            <ul>
              <li>Conectores: todos</li>
              <li>Potência de Saída: 15mw, 2Hz</li>
              <li>Modos de Luz Visível: Luz contínua ou pulsante</li>
            </ul>
            <h3>POWER METER</h3>
            <ul>
              <li>
                Comprimento de Onda: 850nm, 1300nm, 1310nm, 1490nm, 1550nm,
                1625nm
              </li>
              <li>Range Dinâmico: -70~+6dB</li>
              <li>Perda de Inserção: 0.3dB</li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ alignSelf: 'center' }}
          >
            <div className="imagesInfo">
              <figure className="fotoD1">
                <Image
                  src={FotoD1}
                  layout="fill"
                  objectFit="contain"
                  alt="Imagens da Máquina"
                ></Image>
              </figure>
              <figure className="fotoD2">
                <Image
                  src={FotoD2}
                  layout="fill"
                  objectFit="contain"
                  alt="Imagens da Máquina"
                ></Image>
              </figure>
              <figure className="fotoD3">
                <Image
                  src={FotoD3}
                  layout="fill"
                  objectFit="contain"
                  alt="Imagens da Máquina"
                ></Image>
              </figure>
              <figure className="fotoD4">
                <Image
                  src={FotoD4}
                  layout="fill"
                  objectFit="contain"
                  alt="Imagens da Máquina"
                ></Image>
              </figure>
            </div>
          </motion.div>
        </div>
        <ExtraDetails>
          <div className="container">
            <h3>ACESSÓRIOS</h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="acessorios">
                <div>
                  <figure>
                    <Image
                      src={acess1}
                      alt="Imagem dos Acessórios"
                      layout="fill"
                      objectFit="contain"
                    ></Image>
                  </figure>
                  <p>Fiber Cleaver</p>
                </div>
                <div>
                  <figure>
                    <Image
                      src={acess2}
                      alt="Imagem dos Acessórios"
                      layout="fill"
                      objectFit="contain"
                    ></Image>
                  </figure>
                  <p>Spare electrode</p>
                </div>
                <div>
                  <figure>
                    <Image
                      src={acess3}
                      alt="Imagem dos Acessórios"
                      layout="fill"
                      objectFit="contain"
                    ></Image>
                  </figure>
                  <p>Wire stripping pliers</p>
                </div>
                <div>
                  <figure>
                    <Image
                      src={acess4}
                      alt="Imagem dos Acessórios"
                      layout="fill"
                      objectFit="contain"
                    ></Image>
                  </figure>
                  <p>Miller stripper</p>
                </div>
                <div>
                  <figure>
                    <Image
                      src={acess5}
                      alt="Imagem dos Acessórios"
                      layout="fill"
                      objectFit="contain"
                    ></Image>
                  </figure>
                  <p>Hex Key</p>
                </div>
                <div>
                  <figure>
                    <Image
                      src={acess6}
                      alt="Imagem dos Acessórios"
                      layout="fill"
                      objectFit="contain"
                    ></Image>
                  </figure>
                  <p>Fiber for ARC calibration</p>
                </div>
                <div>
                  <figure>
                    <Image
                      src={acess7}
                      alt="Imagem dos Acessórios"
                      layout="fill"
                      objectFit="contain"
                    ></Image>
                  </figure>
                  <p>Strap</p>
                </div>
                <div>
                  <figure>
                    <Image
                      src={acess8}
                      alt="Imagem dos Acessórios"
                      layout="fill"
                      objectFit="contain"
                    ></Image>
                  </figure>
                  <p>Power Adapter</p>
                </div>
                <div>
                  <figure>
                    <Image
                      src={acess9}
                      alt="Imagem dos Acessórios"
                      layout="fill"
                      objectFit="contain"
                    ></Image>
                  </figure>
                  <p>Alcohol Bottle</p>
                </div>
                <div>
                  <figure>
                    <Image
                      src={acess10}
                      alt="Imagem dos Acessórios"
                      layout="fill"
                      objectFit="contain"
                    ></Image>
                  </figure>
                  <p>Brush</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="container desenhoContainer">
            <h3>DESENHO</h3>
            <div className="desenho">
              <div>
                <figure>
                  <Image
                    src={desenho1}
                    alt="Imagens dos desenhos"
                    layout="fill"
                    objectFit="contain"
                  ></Image>
                </figure>
                <p>
                  Produto: <span>2,08kg</span>
                </p>
              </div>
              <div>
                <figure>
                  <Image
                    src={desenho2}
                    alt="Imagens dos desenhos"
                    layout="fill"
                    objectFit="contain"
                  ></Image>
                </figure>
                <p>
                  Caixa: <span>2,08kg</span>
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <h3>FICHA TÉCNICA</h3>
            <ul>
              <li>Fibras Aplicadas: SM, MM, NZDS</li>
              <li>Modo de Foco: Auto-foco</li>
              <li>Alinhamento: Núcleo e Casca</li>
              <li>Tempo de Emenda: 5 segundos</li>
              <li>Tempo de Aquecimento: 15 segundos</li>
              <li>Perda de Retorno: 60dB</li>
              <li>Protetor de Emenda: 60 ou 40mm</li>
              <li>Teste de Tensão: 2N</li>
              <li>Diâmetro da Fibra: Revestimento 80-150µm / 100-1000µm</li>
              <li>Perda de Emenda: 0,025dB(SM), 0,01dB(MM), 0,04dB(DS/NZDS)</li>
              <li>
                Condições de funcionamento: Temperatura-15 ~ +50ºC | Umidade:
                até 95%
              </li>
              <li>Tela: Display TFT de 5,1{specialChar.aspas} </li>
              <li>Armazenamento de Registro: Nuvem ilimitado</li>
              <li>Bateria: 7800mA</li>
              <li>Fonte: AC:100-240V 50/60HZ | DC: 13.5V 4.8A</li>
              <li>Localizador visual de falhas: Potência-15mw, 2Hz</li>
              <li>Contém: Fonte de Luz Visível e PowerMeter</li>
            </ul>
          </div>
        </ExtraDetails>
      </DetailedInformations>

      <Reserved>
        <div>
          <figure>
            <Image src={LogoCentral} alt="Logo"></Image>
          </figure>
          <h2>By Storm</h2>
        </div>
      </Reserved>

      <Footer />
    </Container>
  );
}
