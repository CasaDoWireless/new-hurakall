import { Footer } from '../../components/Footer';
import Menu from '../../components/Menu/Menu';
import Head from 'next/head';
import Image from 'next/image';


import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FouthSection,
  FifthSection,
  SixthSection,
  SeventhSection,
} from './styles';

export default function conector() {
  return (
    <>
      <Head>
        <title>Hurakall - Estação BCP</title>
        <meta name="description" content="hurakall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <FirstSection>
        <div className="section1">
          <Image src="/assets/estacao-BCP/carregador_bcp-AT2n.png" alt="" />
        </div>
      </FirstSection>

      <SecondSection>
        <div className="section2">
          <div className="title">
            <p>
            ESTAÇÃO DE RECARGA BCP-CT2N-P AC 22kM</p>
          </div>
          <Image src="/assets/estacao-BCP/3 Fotos.jpg" alt="" />
          <div className="conteudo">
            <p>
            Carregador Hurakall Smart EV Tipo 2 com cabo IP65 Estação de carregamento de veículos elétricos EV Wallbox com certificação CE
            </p>
          </div>
        </div>
      </SecondSection>

      <ThirdSection>
        <article>
          <p>
          O carregador Hurakall EV possui um case de design patenteado IP65 para uso interno e externo.

 

A personalização de todos os tipos de conectores de carregamento torna-o altamente flexível e compatível com todos os veículos elétricos.
          </p>
        </article>

        <div className="img1">
          <Image src="/assets/estacao-BCP/carregador_bcp-AT2n_dual.png" alt="" />
        </div>
      </ThirdSection>

      <FouthSection>
        <div className="section4">
          <div className="list">
            <ul>
              <li>Protecção Total</li>
              <li>Trifásico de 4,1kW a 22kW</li>
              <li>Monofásico de 3,7 kW a 7,4 kW</li>
            </ul>
          </div>
          <div className="vertical"></div>
          <div className="premium">
            <h1>Qualidade e carregamento de carros elétricos.</h1>
            
          </div>
        </div>
        <div className="two">
          <Image src="/assets/estacao-BCP/carregador_BCP.png" alt="" />
        </div>
        <p>
          <Image src="assets/conector/next.png" alt="" />
          Personalize todos os tipos de conectores
        </p>

        <p>
          <Image src="assets/conector/next.png" alt="" />
          Protocolo de ponto de carregamento aberto (opcional)
        </p>

        <p>
          <Image src="assets/conector/next.png" alt="" />
          Visualize dados e status de cobrança
        </p>

        <p>
          <Image src="assets/conector/next.png" alt="" />
          Atualização de firmware
        </p>
      </FouthSection>

      <FifthSection>
        <p>
        O design do carregador Hurakall AC tipo 2 incorpora um contator que isola o solo. Quando a linha PEN é desconectada, os contatores KM1 e KM2 são imediato e automaticamente desengatados. Apenas uma corrente de fuga mínima, inferior a 1mA, flui entre CP e PE para a linha L. Esta corrente de fuga está abaixo do limite da percepção humana, garantindo que não haja riscos de segurança para os indivíduos que utilizam o carregador.
        </p>
      </FifthSection>

      <SixthSection>
        <h1>Product Parameters</h1>
        <p>ESTAÇÃO DE RECARGA BCP-CT2N-P AC 22kM</p>
        <table>
          <tbody>
            <tr>
              <td>Capacidade de carregamento</td>
              <td>1,3 kW-7,4 kW / 4,1 kW-22 kW</td>
            </tr>

            <tr>
              <td>Modo de carga</td>
              <td>Modo 3 (IEC 61851-1)</td>
            </tr>
            <tr>
              <td>Potência de saída</td>
              <td>Selecionável monofásico ou trifásico, 230-400V 6A -32A, 50-60Hz</td>
            </tr>
            <tr>
              <td>Tipo de soquete</td>
              <td>Soquete Tipo 2</td>
            </tr>
            <tr>
              <td>RCD integrado</td>
              <td>Sensor de vazamento DC6mA integrado</td>
            </tr>
            <tr>
              <td>Soquete</td>
              <td>IP65, IK10</td>
            </tr>
            <tr>
              <td>Classificações de incêndio em habitações</td>
              <td>V0</td>
            </tr>
            <tr>
              <td>Temperatura de operação</td>
              <td>21,31 dBuA/m@3m de distância</td>
            </tr>
            <tr>
              <td>Conformidade</td>
              <td>IEC61851-1,IEC61851-21-2,IEC61000-4
              CE EMC EU/2014.CE Baixa Tensão EU/2014/35</td>
            </tr>
            <tr>
              <td>Autorização</td>
              <td>Padrão de inicialização automática/opção de cartão RFID</td>
            </tr>
            <tr>
              <td>Indicação de status</td>
              <td>Anel LED</td>
            </tr>
            <tr>
              <td>Protocolo de carregamento</td>
              <td>OCP 1.6J</td>
            </tr>
            <tr>
              <td>Comunicação WLAN</td>
              <td>Opção Wi-Fi/Bluetooth 4.2</td>
            </tr>
            <tr>
              <td>Habitação</td>
              <td>Policarbonato</td>
            </tr>
    
            <tr>
              <td>Dimensão</td>
              <td>L278 x A360 x D152 mm</td>
            </tr>
            <tr>
              <td>Montagem</td>
              <td>Parede ou poste</td>
            </tr>
            <tr>
              <td>Faixa de frequência operacional</td>
              <td>2.412 – 2.484 MHz</td>
            </tr>
            <tr>
              <td>Protocolos WI-FI</td>
              <td>IEEE 802.11b/g/n</td>
            </tr>
            <tr>
              <td>Canais</td>
              <td>13</td>
            </tr>
            <tr>
              <td>Potência TX</td>
              <td>20dbm</td>
            </tr>
            <tr>
              <td>EIRP</td>
              <td>0,459</td>
            </tr>
            <tr>
              <td>Largura de banda TX</td>
              <td>20 MHz/40 MHz</td>
            </tr>
            <tr>
              <td>Tipo de modulação</td>
              <td>OFDM e DSSS</td>
            </tr>
            <tr>
              <td>Sensibilidade @30,8% POR</td>
              <td>– 93 dBm</td>
            </tr>
            <tr>
              <td>Co-canal C/I</td>
              <td>+10db</td>
            </tr>
            <tr>
              <td>Faixa de controle de potência RF</td>
              <td>-12 ~ 9dbm</td>
            </tr>
            <tr>
              <td>Tipo de modulação</td>
              <td>PERGUNTAR</td>
            </tr>
            <tr>
              <td>Faixa de frequência operacional</td>
              <td>13,56 MHz</td>
            </tr>
            <tr>
              <td>Força do campo H</td>
              <td>21,31 dBuA/m@3m de distância</td>
            </tr>
            <tr>
              <td>Tipo de antena</td>
              <td>Antena Bobina</td>
            </tr>


          </tbody>
        </table>
      </SixthSection>

      <SeventhSection>
        <div className="container">
          <h1>Galeria</h1>
          <div className="manufacturing-images">
            <span className="Image">
              <Image src="assets/estacao-AC/1.png" alt="" />
            </span>
            <span className="Image">
              <Image src="assets/estacao-AC/2.png" alt="" />
            </span>
            <span className="Image">
              <Image src="assets/estacao-AC/3.png" alt="" />
            </span>
            <span className="Image">
              <Image src="assets/estacao-AC/4.jpg" alt="" />
            </span>
            <span className="Image">
              <Image src="assets/estacao-AC/5.jpg" alt="" />
            </span>
            <span className="Image">
              <Image src="assets/estacao-AC/6.png" alt="" />
            </span>
          </div>
        </div>
      </SeventhSection>

      <Footer />
    </>
  );
}
