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
      
      <ThirdSection>
        <article>
           <p>O Interruptor Wi-fi Touch Hurakall, pode ser utilizado em diversos pontos de sua casa, por exemplo, 
              em sua iluminação, onde você pode acender e apagas as luzes utilizando o seu Smartphone e ainda 
              pode programar o acendimento automático das mesmas pelo próprio aplicativo. Você pode programar 
              para que a iluminação acenda ou apague em um determinado horário de acordo com sua programação. Você
              também pode compartilhar o controle de sua residência com os demais moradores, alcançando até 6 Aparelhos,
              Smartfones ou Tablets ao mesmo tempo.</p>
        </article>

        <div className="img1">
          <img src="/assets/touch6btn/btn6.png" alt="touch-light-hurakall"/>
        </div>
      </ThirdSection>

      <FouthSection>
        <div className="section4">
          <div className="list">
            <ul>
              <li>SISTEMAS DE VOZ COMPATÍVEIS:</li>
              <li>Google Home</li>
              <li>Alexa</li>
              <li>Siri</li>
            </ul>
          </div>
          <div className="vertical"></div>
          <div className="premium">
            <h1>Qualidade e carregamento de carros elétricos.</h1>
            
          </div>
        </div>

        <div className="two">
          <img src="/assets/touch6btn/image-touch6btn.png" alt="" />
        </div>
        <p>
          <img src="assets/conector/next.png" alt="" />
          Toque para ON / OFF
          </p>

        <p>
          <img src="assets/conector/next.png" alt="" />
          App Remote ON / OFF
          </p>

        <p>
          <img src="assets/conector/next.png" alt="" />
          Temporizadores De Programação / Contagem Regressiva
          </p>

        <p>
          <img src="assets/conector/next.png" alt="" />
          Funciona com os principais assistentes de voz do mercado.
          </p>
          <p>
          <img src="assets/conector/next.png" alt="" />
          Trabalha Com O IFTTT
          </p>
      </FouthSection>

      <FifthSection>
        <p>
        O Interruptor Wi-fi Touch Hurakall, pode ser utilizado em diversos pontos de sua casa, por exemplo, 
        em sua iluminação, onde você pode acender e apagas as luzes utilizando o seu Smartphone e ainda 
        pode programar o acendimento automático das mesmas pelo próprio aplicativo. Você pode programar 
        para que a iluminação acenda ou apague em um determinado horário de acordo com sua programação. Você
        também pode compartilhar o controle de sua residência com os demais moradores, alcançando até 6 Aparelhos,
        Smartfones ou Tablets ao mesmo tempo.
        </p>
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
