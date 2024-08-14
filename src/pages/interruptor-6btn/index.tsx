import { Footer } from '../../components/Footer';
import Menu from '../../components/Menu/Menu';
import Head from 'next/head';
//import img from 'next/image'


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
        <title>Hurakall - Estação BDC</title>
        <meta name="description" content="hurakall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <FirstSection>
        <div className="section1">
          <img src="/assets/home/produtos_home/6btn.png" alt="" />
        </div>
      </FirstSection>

      <SecondSection>
        <div className="section2">
          <div className="title">
            <p>
            ESTAÇÃO DE RECARGA DC BDC120-D</p>
          </div>
          <img src="/assets/estacao-BDC/3 Fotos.png" alt="" />
          <div className="conteudo">
            <p>
            O produto possui design de proteção múltipla e função de proteção ativa, que pode monitorar todos os dados de comunicação no processo de carregamento e avisar antecipadamente todos os tipos de carregamento anormal para garantir a segurança dos usuários e veículos.</p>
          </div>
        </div>
      </SecondSection>

      <ThirdSection>
        <article>
          <p>
          A estação de carregamento Hurakall DC EV tem capacidade de cálculo e processamento de dados mais poderosa, estratégia de despacho mais inteligente, melhor desempenho de dissipação de calor e menor ruído, e atende totalmente aos requisitos de carregamento DC de alta potência de veículos com interface DC padrão global.
          </p>
        </article>

        <div className="img1">
          <img src="/assets/estacao-BDC/carregador_estação_dual.png" alt="" />
        </div>
      </ThirdSection>

      <FouthSection>
        <div className="section4">
          <div className="list">
            <ul>
              <li>60 kW - 240 kW</li>
              <li>2 armas (CCS1, CCS2, Chademo opcional)</li>
              <li>Expositor</li>
            </ul>
          </div>
          <div className="vertical"></div>
          <div className="premium">
            <h1>Qualidade e carregamento de carros elétricos.</h1>
            
          </div>
        </div>
        <div className="two">
          <img src="/assets/estacao-BDC/carregador_BDC.png" alt="" />
        </div>
        <p>
          <img src="assets/conector/next.png" alt="" />
          Economia de tempo - Carregamento rápido
        </p>

        <p>
          <img src="assets/conector/next.png" alt="" />
          Economia de energia - Alta eficiência de conversão e baixo consumo de energia em espera
        </p>

        <p>
          <img src="assets/conector/next.png" alt="" />
          Alta Segurança - Dupla proteção para operação manual e veículos
        </p>

        <p>
          <img src="assets/conector/next.png" alt="" />
          Atualização de firmware
        </p>
      </FouthSection>

      <FifthSection>
        <p>
        Estação de carregamento de 2 armas DC 60kW-240kW BENY EV carregamento rápido        </p>
      </FifthSection>

      <SixthSection>
        <h1>Product Parameters</h1>
        <p>ESTAÇÃO DE RECARGA DC BDC120-D</p>
        <table>
          <tbody>
            <tr>
              <td>Material</td>
              <td>Aço carbono</td>
            </tr>

            <tr>
              <td>Dimensão</td>
              <td>800*800*2000(C*L*T)</td>
            </tr>
            <tr>
              <td>Peso</td>
              <td>≤350kg</td>
            </tr>
            <tr>
              <td>Método de instalação</td>
              <td>Tipo de suporte de chão</td>
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
              <td>Duplo (CCS1+CCS1)	 Duplo (CCS2+CCS2)	Duplo (CCS1+CCS2)</td>
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
              <td>60kW / 90kW / 120kW / 150kW / 180kW / 240kW</td>
            </tr>
            <tr>
              <td>Faixa de tensão de saída</td>
              <td>CCS1: 150 Vcc –1000 Vcc	CCS2: 150 Vcc –1000 Vcc	CCS1: 150 Vcc –1000 Vcc,
              CCS2: 150 Vcc –1000 Vcc</td>
            </tr>
            <tr>
              <td>Corrente de saída</td>
              <td>CCS1:0~250A	CCS2:0~250A	CCS1: 0~250A, CCS2: 0~250A</td>
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
              <td>Interior e exterior</td>
            </tr>
            <tr>
              <td>Latitude de trabalho</td>
              <td>2000m</td>
            </tr>
            <tr>
              <td>Temperatura de trabalho</td>
              <td>-30~ +55</td>
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
            
            
          </tbody>
        </table>
      </SixthSection>

      <SeventhSection>
        <div className="container">
          <h1>Galeria</h1>
          <div className="manufacturing-images">
            <span className="image">
              <img src="assets/estacao-AC/1.png" alt="" />
            </span>
            <span className="image">
              <img src="assets/estacao-AC/2.png" alt="" />
            </span>
            <span className="image">
              <img src="assets/estacao-AC/3.png" alt="" />
            </span>
            <span className="image">
              <img src="assets/estacao-AC/4.jpg" alt="" />
            </span>
            <span className="image">
              <img src="assets/estacao-AC/5.jpg" alt="" />
            </span>
            <span className="image">
              <img src="assets/estacao-AC/6.png" alt="" />
            </span>
          </div>
        </div>
      </SeventhSection>

      <Footer />
    </>
  );
}
