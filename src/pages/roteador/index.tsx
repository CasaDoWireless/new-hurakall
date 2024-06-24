import Image from 'next/image';
import { motion } from 'framer-motion';



import Head from 'next/head';
import rotea from '../../../public/assets/images/roteador/rotea.png';
import foto4 from '../../../public/assets/images/roteador/foto4.png';
import Globe from '../../../public/assets/ont/globe.png';
import ImageIcon from '../../../public/assets/ont/image.png';
import Mail from '../../../public/assets/ont/mail.png';
import Console from '../../../public/assets/ont/console.png';
import Film from '../../../public/assets/ont/film.png';
import UpDown from '../../../public/assets/ont/up_down.png';
import roteador2 from '../../../public/assets/images/roteador/roteador2.png';
import x5 from '../../../public/assets/images/roteador/x5.png';
import coffe from '../../../public/assets/images/roteador/coffe.png';
import conector from '../../../public/assets/images/roteador/conector.png';
import arrow from '../../../public/assets/images/roteador/arrow.png';
import jumping from '../../../public/assets/images/roteador/jumping.png';
import cloud from '../../../public/assets/images/roteador/cloud.png';
import uparrow from '../../../public/assets/images/roteador/uparrow.png';
import wifi from '../../../public/assets/images/roteador/wifi.png';
import icon from '../../../public/assets/images/roteador/icon.png';
import Smartphone from '../../../public/assets/ont/smartphone.png';
import Tv from '../../../public/assets/ont/tv.png';

import FOTO from '../../../public/assets/images/roteador/FOTO.png';

import FirstSection from './styles/FirstSection';
import SecondSection from './styles/SecondSection';
import ThirdSection from './styles/ThirdSection';
import FourthSection from './styles/FourthSection';
import FifthSection from './styles/FifthSection';
import SixthSection from './styles/SixthSection';
import SeventhSection from './styles/SeventhSection';

import { Footer } from '../../components/Footer';
import Menu from '../../components/Menu/Menu';

export default function Router() {
  return (
    <>
      <Head>
        <title>Hurakall - Roteador</title>
        <meta name="description" content="hurakall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <FirstSection>
        <div className="sectionDiv">
          <Image src={rotea} alt="Cabo óptico drop" />
        </div>
      </FirstSection>

      <SecondSection>
        <div>
          <div className="striped-bg"></div>

          <div className="white-bg">
            <article>
              <h1>
                ROTEADOR WIRELESS <br />
                <span> AC1200 GIGABIT Mesh</span>
              </h1>
            </article>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: '10vw' }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image src={foto4} alt="Cabo óptico drop" />
            </motion.div>
          </div>
        </div>
      </SecondSection>

      <ThirdSection>
        <div>
          <h1>
            O ROTEADOR WIRELESS AC1200 GIGABIT Meshes tá em conformidade com o
            padrão Wi-Fi IEEE 802.11ac trabalhando em 2,4GHz e 5GHz
            simultaneamente.
          </h1>
          <div className="speed-mbps-section">
            <div className="blue-section">
              <ul>
                <li>
                  <Image src={Globe} alt="Globo" />
                </li>
                <li>
                  <Image src={ImageIcon} alt="Imagem" />
                </li>
                <li>
                  <Image src={Mail} alt="Correspondência" />
                </li>
              </ul>
              <p>
                2.4 GHz<span> 300 </span>Mbps
              </p>
            </div>

            <div className="red-section">
              <ul>
                <li>
                  <Image src={Console} alt="Console" />
                </li>
                <li>
                  <Image src={Film} alt="Filme" />
                </li>
                <li>
                  <Image src={UpDown} alt="Setas" />
                </li>
              </ul>
              <p>
                5 GHz<span> 867 </span>Mbps
              </p>
            </div>
          </div>

          <div className="ont-back-section">
            <div className="ont-back-container">
              <div className="ont-back-Image">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 0 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Image src={roteador2} alt="ONT Traseira" />
                </motion.div>
                <div className="rectangles">
                  <span className="rectangle-3">
                    <div className="icon-text">
                      <div className="icon">
                        <Image src={Tv} alt="TV" />
                        <Image src={Smartphone} alt="Smartphone" />
                        <Image src={Console} alt="Console" />
                      </div>
                      <span className="text">TV/PC/Laptop/Game Device</span>
                    </div>
                  </span>
                  <span className="rectangle-2">
                    <div className="icon-text">
                      <div className="icon"></div>
                      <span className="text">1 Ports FXS</span>
                    </div>
                  </span>

                  <span className="rectangle-1">
                    <div className="icon-text">
                      <div className="icon"></div>
                      <span className="text">Fonte</span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThirdSection>

      <FourthSection>
        <div className="container">
          <h1>
            ESPECIFICAÇÕES TÉCNICAS
            <br />
            <span>Roteador Wireless AC1200 GIGABIT Mesh</span>
          </h1>
          <div className="specs">
            <div className="content-info">
              <table>
                <tbody>
                  <tr>
                    <td>Interface</td>
                    <th>
                      1x WAN Ethernet port <br /> 4x LAN Ethernet port <br /> 1x
                      Reset button
                    </th>
                  </tr>
                  <tr>
                    <td>CPU</td>
                    <th>MTK CPU MT7621D</th>
                  </tr>
                  <tr>
                    <td>Memory/Storage</td>
                    <th>128MB/8MB</th>
                  </tr>
                  <tr>
                    <td>Wi-Fi Antennas</td>
                    <th>
                      2× 2.4GHz <br /> 2× 5GHz
                    </th>
                  </tr>
                  <tr>
                    <td>Protocol</td>
                    <th>
                      External 5dBi gain <br />
                      IEEE 802.11a/b/g/n/ac
                    </th>
                  </tr>
                  <tr>
                    <td>Wi-Fi Speed</td>
                    <th>
                      2.4G WiFi(Speed300Mbps) <br /> 5G WiFi(Speed867Mbps)
                    </th>
                  </tr>
                  <tr>
                    <td>Ethernet Port</td>
                    <th>10/100/1000M</th>
                  </tr>
                  <tr>
                    <td>LEDs</td>
                    <th>Power/2.4wi-fi/5Gwi-fi indicator</th>
                  </tr>
                  <tr>
                    <td>Power Suply</td>
                    <th>DC12V/0.6A Adapter</th>
                  </tr>
                  <tr>
                    <td>Power Consumption</td>
                    <th> 6W </th>
                  </tr>
                  <tr>
                    <td>Operating Temperature</td>
                    <th>-10～50℃</th>
                  </tr>
                  <tr>
                    <td>Storage Temperature</td>
                    <th>-40～85℃</th>
                  </tr>
                  <tr>
                    <td>Dimension/Weight</td>
                    <th>160x110x30mm</th>
                  </tr>
                  <tr>
                    <td>Certificate</td>
                    <th>CE.ROHS, ANATEL</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </FourthSection>

      <FifthSection>
        <div className="container">
          <div className="icons">
            <div className="column">
              <div>
                <Image src={x5} alt={'gigabit'} />
                <p>Gigabit Ports</p>
              </div>
              <div>
                <Image src={arrow} alt={'description'} />
                <p>IPv6</p>
              </div>
              <div>
                <Image src={coffe} alt={'description'} />
                <p>Guest Wi-Fi</p>
              </div>
            </div>
            <div className="column">
              <div>
                <Image src={jumping} alt={'description'} />
                <p>Acess Contro</p>
              </div>
              <div>
                <Image src={cloud} alt={'description'} />
                <p>TR069</p>
              </div>
              <div>
                <Image src={uparrow} alt={'description'} />
                <p>OTA</p>
              </div>
            </div>
            <div className="column">
              <div>
                <Image src={icon} alt={'description'} />
                <p>Multicast</p>
              </div>

              <div>
                <Image src={wifi} alt={'description'} />
                <p>Dual-band Wi-Fi</p>
              </div>
              <div>
                <Image src={conector} alt={'description'} />
                <p>MU-MIMO</p>
              </div>
            </div>
          </div>
        </div>
      </FifthSection>
      <SixthSection>
        <div className="container">
          <div className="info-text">
            <h1>Beamforming Technology for Wi-Fi Focus</h1>
            <p>
              A tecnologia beamforming permite transmitir o sinal para as
              direções do outro terminais conectados sem fio, como telefones
              celulares. tablets e laptops, melhorando assim a eficiência de uso
              da largura de banda e reduzir os pontos mortoonts e a em torno de
              interferência de RF desnecessária.
            </p>
          </div>
          <span className="placeholder"></span>
          <div className="signal">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: '-30vw' }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image src={FOTO} alt="Signal" />
            </motion.div>
          </div>
        </div>
      </SixthSection>
      <SeventhSection>
        <div className="container">
          <h1>Manufacturing Technique</h1>
          <div className="manufacturing-images">
            <span className="image">
              <Image alt='video'
                src="/assets/ont/manufacturing_tech_1.png"
                style={{ margin: '5px' }}
              />
            </span>
            <span className="image">
              <Image alt='video'
                src="/assets/ont/manufacturing_tech_2.png"
                style={{ margin: '5px' }}
              />
            </span>
            <span className="image">
              <Image alt='video'
                src="/assets/ont/manufacturing_tech_3.png"
                style={{ margin: '5px' }}
              />
            </span>
            <span className="image">
              <Image alt='video'
                src="/assets/ont/manufacturing_tech_4.png"
                style={{ margin: '5px' }}
              />
            </span>
            <span className="image">
              <Image alt='video'
                src="/assets/ont/manufacturing_tech_5.png"
                style={{ margin: '5px' }}
              />
            </span>
            <span className="image">
              <Image alt='video'
                src="/assets/ont/manufacturing_tech_6.png"
                style={{ margin: '5px' }}
              />
            </span>
          </div>
        </div>
      </SeventhSection>
      <Footer />
    </>
  );
}
