import Image from 'next/image';
import { motion } from 'framer-motion';

import Head from 'next/head';
import OntXponHibrida from '../../../public/assets/ont/ont_xpon_hibrida_ac1200_gigabit.png';
import MainOnt from '../../../public/assets/ont/ont.png';
import Globe from '../../../public/assets/ont/globe.png';
import ImageIcon from '../../../public/assets/ont/image.png';
import Mail from '../../../public/assets/ont/mail.png';
import Console from '../../../public/assets/ont/console.png';
import Film from '../../../public/assets/ont/film.png';
import UpDown from '../../../public/assets/ont/up_down.png';
import OntTraseira from '../../../public/assets/ont/ont_traseira.png';
import Config from '../../../public/assets/ont/config.png';
import Security from '../../../public/assets/ont/security.png';
import Web from '../../../public/assets/ont/web.png';
import Wifi from '../../../public/assets/ont/wifi.png';
import Homologado from '../../../public/assets/ont/homologado.png';
import Smartphone from '../../../public/assets/ont/smartphone.png';
import Tv from '../../../public/assets/ont/tv.png';
import Usb from '../../../public/assets/ont/usb.png';
import Warranty from '../../../public/assets/ont/warranty.png';
import Support from '../../../public/assets/ont/support.png';
import Chipset from '../../../public/assets/ont/chipset.png';
import LowEnergy from '../../../public/assets/ont/low_energy.png';
import IPv6 from '../../../public/assets/ont/ipv6.png';
import TR069 from '../../../public/assets/ont/tr069.png';
import Signal from '../../../public/assets/ont/signal.png';
import ManufacturingTech1 from '../../../public/assets/ont/manufacturing_tech_1.png';
import ManufacturingTech2 from '../../../public/assets/ont/manufacturing_tech_2.png';
import ManufacturingTech3 from '../../../public/assets/ont/manufacturing_tech_3.png';
import ManufacturingTech4 from '../../../public/assets/ont/manufacturing_tech_4.png';
import ManufacturingTech5 from '../../../public/assets/ont/manufacturing_tech_5.png';
import ManufacturingTech6 from '../../../public/assets/ont/manufacturing_tech_6.png';

import FirstSection from './styles/FirstSection';
import SecondSection from './styles/SecondSection';
import ThirdSection from './styles/ThirdSection';
import FourthSection from './styles/FourthSection';
import FifthSection from './styles/FifthSection';
import SixthSection from './styles/SixthSection';
import SeventhSection from './styles/SeventhSection';
import EighthSection from './styles/EighthSection';

import { Footer } from '../../components/Footer';
import Menu from '../../components/Menu/Menu';

export default function Ont() {
  return (
    <>
      <Head>
        <title>Hurakall - ONT</title>
        <meta name="description" content="hurakall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <FirstSection>
        <div className="sectionDiv">
          <article>
            <h1>
              ONT XPON HÍBRIDA <br />
              AC1200 GIGABIT
            </h1>
            <p>
              4 antenas com alcance de 5dBi e <br />
              Velocidade de 1200mbps
            </p>
          </article>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image src={OntXponHibrida} alt="Cabo óptico drop" />
          </motion.div>
        </div>
      </FirstSection>

      <SecondSection>
        <div>
          <div className="striped-bg"></div>

          <div className="white-bg">
            <article>
              <h1>
                ONT XPON HÍBRIDA <br />
                <span>AC1200 GIGABIT</span>
              </h1>
              <p>
                A ONT XPON HÍBRIDA AC1200 GIGABIT DUAL BAND <br />
                <span>
                  conta com a tecnologia AC para melhor performance e velocidade
                  na conexão de rede sem fio para seu cliente. Com ótimo custo
                  benefício é ideal para ofertar planos resdenciais com serviços
                  VoIP, games online e Streaming de filmes e vídeos em HD.
                </span>
              </p>
            </article>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: '10vw' }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image src={MainOnt} alt="Cabo óptico drop" />
            </motion.div>
          </div>
        </div>
      </SecondSection>

      <ThirdSection>
        <div>
          <h1>
            A ONT XPON AC1200 HURAKALL está em conformidade com o padrão
            Wi-FiEEE802.11ac trabalhando em 2.4GHz e GHz simultaneamente
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
              <div className="info">
                <ul>
                  <li>
                    <Image src={Wifi} alt="Wifi" /> 2,4 e 5GHz
                  </li>
                  <li>
                    <Image src={Config} alt="Engrenagens" /> WPA2
                  </li>
                  <li>
                    <Image src={Security} alt="Segurança" /> Easy Setup
                  </li>
                  <li>
                    <Image src={Web} alt="Internet" /> Ipv6
                  </li>
                </ul>
              </div>
              <div className="ont-back-Image">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 0 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Image src={OntTraseira} alt="ONT Traseira" />
                </motion.div>
                <div className="rectangles">
                  <span className="rectangle-1">
                    <div className="icon-text">
                      <div className="icon"></div>
                      <span className="text">PON</span>
                    </div>
                  </span>
                  <span className="rectangle-2">
                    <div className="icon-text">
                      <div className="icon"></div>
                      <span className="text">2 Ports FXS</span>
                    </div>
                  </span>
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
                  <span className="rectangle-4">
                    <div className="icon-text">
                      <span className="text">USB Port</span>
                    </div>
                    <div className="icon">
                      <Image src={Usb} alt="Usb" />
                    </div>
                  </span>
                </div>
              </div>
              <div className="ont-back-homologado">
                <Image src={Homologado} alt="Homologado" />
              </div>
              <div className="warranty-support">
                <Image src={Warranty} alt="Garantia" />
                <Image src={Support} alt="Suporte" />
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
            <span>Software</span>
          </h1>
          <div className="specs">
            <div className="left">
              <ul>
                <li>Layer 2 wire speed switching</li>
                <li>Suporte a VLAN TAG/UNTAG, tradução VLAN</li>
                <li>Suporte a link detection</li>
                <li>Suporte a storm control</li>
                <li>Suporte a Auto-negotiation e MDI/MDIX</li>
                <li>Suporte a Loopback na UNI</li>
                <li>
                  Suporte a VLAN tagged label processing, táflico e filtro de
                  pacotes, STP/RSTP
                </li>
                <li>Suporte a DHCP Option60 e PPPoE+</li>
                <li>Suporte a H.248 e protocolo SIP</li>
                <li>Suporte a AES-128</li>
                <li>Suporte a Dynamic Bandwith Allocation (DBA)</li>
                <li>Configurações de gerência</li>
                <li>Interface OMCi</li>
                <li>Suporte TR069 e gerência WEB</li>
                <li>
                  Monitor de status, configuração de gerência, gerência de
                  alarme, gerência de Log
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="hardware-info">
                <ul>
                  <li>
                    <Image src={Chipset} alt="Chipset" />
                    <span>CHIPSET ZTE HIGH SPEED</span>
                  </li>
                  <li>
                    <Image src={LowEnergy} alt="Baixo consumo de energia" />
                    <span>LOW POWER CONSUMPTION</span>
                  </li>
                </ul>
              </div>
              <div className="content-info">
                <table>
                  <thead>
                    <tr>
                      <th>Conteúdo do Kit</th>
                      <th>Quantidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ONU GW24AC</td>
                      <td>1 un.</td>
                    </tr>
                    <tr>
                      <td>Fonte de Energia AC</td>
                      <td>1 un.</td>
                    </tr>
                    <tr>
                      <td>Guia rápido</td>
                      <td>1 un.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </FourthSection>

      <FifthSection>
        <div className="container">
          <div className="title">
            <h1>1 ANO DE GARANTIA</h1>
            <p>
              EM CASO DE DEFEITO DE FABRICAÇÃO NO EQUIPAMENTO, REALIZAMOS A
              TROCA EXPRESSA DO EQUIPAMENTO ESTRAGADO NA HORA ENQUANTO O SEU
              EQUIPAMENTO FICA EM NOSSO SUPORTE TÉCNICO PARA REPARO
            </p>
          </div>
          <div className="features">
            <div className="features-list">
              <h2>CARACTERÍSTICAS</h2>
              <ul>
                <li>Compatível com padrão ITU-T G.984 e G.988</li>
                <li>Taxa de 2.5Gbps Downstream e 1.25Gbps Upstream</li>
                <li>Suporte a PPPoE+ e DHCP</li>
                <li>Distância máxima de transmissão: 20Km</li>
                <li>Interface OMCi</li>
                <li>Suporte a TR069 e gerência WEB</li>
                <li>Padrões 802.11 a/b/g/n/ ac com velocidade até 1200 Mbps</li>
                <li>
                  Segurança wireless de 64/128 bit WEP, 802.1x, WPA e WPA2
                </li>
              </ul>
            </div>
            <div className="features-table">
              <table>
                <thead>
                  <tr className="transparent-red">
                    <th>Performance PON</th>
                    <th>
                      <li>Comprimento de onda: Tx 1310nm, Rx 1490nm</li>
                      <li>Potência Tx: 0.5~5dBm</li>
                      <li>Sensibilidade Rx: -28dBm</li>
                      <li>Conector tipo SC/APC</li>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Distância (GPON)</td>
                    <td>20km</td>
                  </tr>
                  <tr className="transparent-red">
                    <td>Alcance sinal WiFi</td>
                    <td>até 100m</td>
                  </tr>
                  <tr>
                    <td>Temperatura da operação</td>
                    <td>0 a 50 &#8451;</td>
                  </tr>
                  <tr className="transparent-red">
                    <td>Massa(peso)</td>
                    <td>0,3kg</td>
                  </tr>
                  <tr>
                    <td>Temperatura de armazenamento</td>
                    <td>-40 a 85 &#8451;</td>
                  </tr>
                  <tr className="transparent-red">
                    <td>Umidade da operação</td>
                    <td>10% a 90% (sem condensação)</td>
                  </tr>
                  <tr>
                    <td>Umidade de armazenamento</td>
                    <td>10% a 90% (sem condensação)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </FifthSection>
      <SixthSection>
        <div className="container">
          <div className="feature">
            <div className="icon">
              <Image src={IPv6} alt="IPv6" />
            </div>
            <div className="feature-info">
              <h1>Support IPv6</h1>
              <p>
                Contrastando com outros roteadores tradicionais. a ONT XPON
                AC1200 HURAKALL tem vantagem em seu IPv6 (PPPOE/DHCP/IP
                Estático). Um roteador IPv6 seria mais compatível com o futuro
                acesso à Internet.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">
              <Image src={TR069} alt="TR069" />
            </div>
            <div className="feature-info">
              <h1>TR069 for better Management</h1>
              <p>
                O TRO69 é usado para gerenciamento remoto centralizado de
                gateway, roteador, set-top box e outros dispositivos na rede
                doméstica do lado da rede, tem excelente supervisão e testando
                funções
              </p>
            </div>
          </div>
        </div>
      </SixthSection>
      <SeventhSection>
        <div className="container">
          <div className="signal">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: '-30vw' }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image src={Signal} alt="Signal" />
            </motion.div>
          </div>
          <span className="placeholder"></span>
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
        </div>
      </SeventhSection>
      <EighthSection>
        <div className="container">
          <h2>
            Nossa missão é fornecer os produtos mais avançados com estabilidade
            e qualidade confiável e bom serviço para nossos clientes
          </h2>
          <h1>Manufacturing Technique</h1>
          <div className="manufacturing-images">
            <span className="image">
              <Image
                style={{ margin: '5px' }}
                src="/assets/ont/manufacturing_tech_1.png"
                alt="Manufacturing Technique 1"
              />
            </span>
            <span className="image">
              <Image
                style={{ margin: '5px' }}
                src="/assets/ont/manufacturing_tech_2.png"
                alt="Manufacturing Technique 2"
              />
            </span>
            <span className="image">
              <Image
                style={{ margin: '5px' }}
                src="/assets/ont/manufacturing_tech_3.png"
                alt="Manufacturing Technique 3"
              />
            </span>
            <span className="image">
              <Image
                style={{ margin: '5px' }}
                src="/assets/ont/manufacturing_tech_4.png"
                alt="Manufacturing Technique 4"
              />
            </span>
            <span className="image">
              <Image
                style={{ margin: '5px' }}
                src="/assets/ont/manufacturing_tech_5.png"
                alt="Manufacturing Technique 5"
              />
            </span>
            <span className="image">
              <Image
                style={{ margin: '5px' }}
                src="/assets/ont/manufacturing_tech_6.png"
                alt="Manufacturing Technique 6"
              />
            </span>
          </div>
        </div>
      </EighthSection>
      <Footer />
    </>
  );
}
