import { Footer } from '../../components/Footer';
import Menu from '../../components/Menu/Menu';
import Head from 'next/head';
import Image from 'next/image'


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
        <title>Hurakall - Estação BBDC</title>
        <meta name="description" content="hurakall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <FirstSection>
        <div className="section1">
          <Image src="/assets/estacao-BBDC/carregador_CCDC.png" alt="" />
        </div>
      </FirstSection>

      <SecondSection>
        <div className="section2">
          <div className="title">
            <p>
            ESTAÇÃO DE RECARGA CC EV Hurakall 30kW</p>
          </div>
          <Image src="/assets/estacao-BBDC/3 Fotos.jpg" alt="" />
          <div className="conteudo">
            <p>
            Estação de carregamento Hurakall EV Carregamento rápido, economia de tempo e energia, alta segurança
            </p>
          </div>
        </div>
      </SecondSection>

      <ThirdSection>
        <article>
          <p>
          O carregador DC EV montado na parede possui design de proteção múltipla e função de proteção ativa, que pode monitorar todos os dados de comunicação no processo de carregamento e avisar antecipadamente todos os tipos de carregamento anormal para garantir a segurança dos usuários e veículos.


          </p>
        </article>

        <div className="Image1">
          <Image src="/assets/estacao-BBDC/carregador_BBDC.png" alt="" />
        </div>
      </ThirdSection>

      <FouthSection>
        <div className="section4">
          <div className="list">
            <ul>
              <li>20 kW - 40 kW</li>
              <li>Tomada de carregamento única CCS2</li>
              <li>Tela LCD de 9,1 polegadas</li>
            </ul>
          </div>
          <div className="vertical"></div>
          <div className="premium">
            <h1>Qualidade e carregamento de carros elétricos.</h1>
            
          </div>
        </div>
        <div className="two">
          <Image src="/assets/estacao-BBDC/carregador_BBDC_bg.png" alt="" />
        </div>
        <p>
          <Image src="assets/conector/next.png" alt="" />
          Economia de tempo - Carregamento rápido
        </p>

        <p>
          <Image src="assets/conector/next.png" alt="" />
          Economia de energia - Alta eficiência de conversão e baixo consumo de energia em espera
        </p>

        <p>
          <Image src="assets/conector/next.png" alt="" />
          Alta Segurança - Dupla proteção para operação manual e veículos
        </p>

        <p>
          <Image src="assets/conector/next.png" alt="" />
          Atualização de firmware
        </p>
      </FouthSection>

      <FifthSection>
        <p>
        A estação de carregamento Hurakall DC EV tem capacidade de cálculo e processamento de dados mais poderosa, estratégia de despacho mais inteligente, melhor desempenho de dissipação de calor e menor ruído, e atende totalmente aos requisitos de carregamento DC de alta potência de veículos com interface DC padrão global.
        </p>
      </FifthSection>

      <SixthSection>
        <h1>Product Parameters</h1>
        <p>ESTAÇÃO DE RECARGA CC EV BBDC 30kW</p>
        <table>
          <tbody>
            <tr>
              <td>Dimensão</td>
              <td>450*250*850(C*L*T)</td>
            </tr>

            <tr>
              <td>Peso</td>
              <td>≤65kG</td>
            </tr>
            <tr>
              <td>Método de instalação</td>
              <td>Montado na parede</td>
            </tr>
            <tr>
              <td>Roteamento de cabo</td>
              <td>Fiação de entrada inferior, fiação de saída superior</td>
            </tr>
            <tr>
              <td>Comprimento do cabo</td>
              <td>5 metros</td>
            </tr>
            <tr>
              <td>Tomadas de carregamento</td>
              <td>Único (CCS2/CCS2/GBT)</td>
            </tr>
            <tr>
              <td>Autorização de conectividade</td>
              <td>RFID, aplicativo</td>
            </tr>
            <tr>
              <td>Tela</td>
              <td>Tela LCD de 9,1 polegadas/luz LED</td>
            </tr>
            <tr>
              <td>Tensão de entrada CA</td>
              <td>AC380V±15% ,3P+N+PEAC</td>
            </tr>
            <tr>
              <td>Frequência de entrada</td>
              <td>50Hz/60Hz</td>
            </tr>
            <tr>
              <td>Potência nominal</td>
              <td>20KW	30KW	40 kW</td>
            </tr>
            <tr>
              <td>Faixa de tensão de saída</td>
              <td>CCS1/2: 150 Vcc –1000 Vcc</td>
            </tr>
            <tr>
              <td>Corrente de saída</td>
              <td>0~66,7A	0~100A	0~133A</td>
            </tr>
            <tr>
              <td>Eficiência</td>
              <td>≥95%</td>
            </tr>
    
            <tr>
              <td>Fator de potência</td>
              <td>≥0,99 (carga: 100%)</td>
            </tr>
            <tr>
              <td>Interface de usuário</td>
              <td>Botão de parada de emergência, indicador LED, passagem de cartão, tela sensível ao toque</td>
            </tr>
            <tr>
              <td>Suportes de carregamento</td>
              <td>IEC 61851-21-2:2021;IEC 61000-6-2:2019; EN61000-6-4:2019; IEC 61851-1:2019; EN 61851-23:2014; EN 61851-24:2014</td>
            </tr>
            <tr>
              <td>OCPP</td>
              <td>OCP 1.6</td>
            </tr>
            <tr>
              <td>Interface de rede</td>
              <td>Ethernet/4G</td>
            </tr>
            <tr>
              <td>Local de aplicação</td>
              <td>Interior exterior</td>
            </tr>
            <tr>
              <td>Latitude de trabalho</td>
              <td>2000m</td>
            </tr>
            <tr>
              <td>Temperatura de trabalho</td>
              <td>-30~ +50</td>
            </tr>
            <tr>
              <td>Umidade de trabalho</td>
              <td>5%~95%</td>
            </tr>
            <tr>
              <td>Nível de proteção</td>
              <td>IP55</td>
            </tr>
            <tr>
              <td>Resfriamento natural</td>
              <td>Resfriamento por ar forçado</td>
            </tr>
            
            <tr>
              <td>Projeto de segurança</td>
              <td>Proteção contra sobre/subtensão, proteção overlord, proteção contra vazamento de corrente,
              proteção de aterramento, proteção contra sobretemperatura, proteção contra surtos de iluminação</td>
            </tr>
            
          </tbody>
        </table>
      </SixthSection>

      <SeventhSection>
        <div className="container">
          <h1>Galeria</h1>
          <div className="manufacturing-images">
            <span className="image">
              <Image src="assets/estacao-AC/1.png" alt="" />
            </span>
            <span className="image">
              <Image src="assets/estacao-AC/2.png" alt="" />
            </span>
            <span className="image">
              <Image src="assets/estacao-AC/3.png" alt="" />
            </span>
            <span className="image">
              <Image src="assets/estacao-AC/4.jpg" alt="" />
            </span>
            <span className="image">
              <Image src="assets/estacao-AC/5.jpg" alt="" />
            </span>
            <span className="image">
              <Image src="assets/estacao-AC/6.png" alt="" />
            </span>
          </div>
        </div>
      </SeventhSection>

      <Footer />
    </>
  );
}
