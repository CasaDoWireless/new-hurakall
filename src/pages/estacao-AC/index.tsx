import { Footer } from '../../components/Footer';
import Menu from '../../components/Menu/Menu';
import Head from 'next/head';

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
        <title>Hurakall - Estação AC</title>
        <meta name="description" content="hurakall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <FirstSection>
        <div className="section1">
          <img src="/assets/estacao-AC/carregador_AC_BCP_edit.png" alt="" />
        </div>
      </FirstSection>

      <SecondSection>
        <div className="section2">
          <div className="title">
            <p>
            ESTAÇÃO DE RECARGA AC BCP-CT2N-P SOLO</p>
          </div>
          <img src="/assets/estacao-AC/carregador_AC_BCP_edit_1.jpg" alt="" />
          <div className="conteudo">
            <p>
            Melhore a sua experiência de carregamento com o carregador AC EV montado no chão HURAKALL. Experimente uma interação sem esforço com sua interface de tela LCD de 5,0 polegadas. Assuma o controle do seu carregador por meio de um aplicativo inteligente e várias opções de conectividade.
            </p>
          </div>
        </div>
      </SecondSection>

      <ThirdSection>
        <article>
          <p>
          O carregador AC EV montado no piso HURAKALL possui um case de design patenteado IP54 para uso interno e externo.

A personalização de todos os tipos de conectores de carregamento torna-o altamente flexível e compatível com veículos totalmente elétricos.
          </p>
        </article>

        <div className="img1">
          <img src="/assets/estacao-AC/carregador_AC_BCP_edit.png" alt="" />
        </div>
      </ThirdSection>

      <FouthSection>
        <div className="section4">
          <div className="list">
            <ul>
              <li>Design Metálico</li>
              <li>2 Cartões RFID</li>
              <li>Cabo com 5 metros</li>
            </ul>
          </div>
          <div className="vertical"></div>
          <div className="premium">
            <h1>Qualidade e carregamento de carros elétricos.</h1>
            
          </div>
        </div>
        <div className="two">
          <img src="/assets/estacao-AC/foto_AC.png" alt="" />
        </div>
        <p>
          <img src="assets/conector/next.png" alt="" />
          Iniciar/parar carregamento remotamente.
        </p>

        <p>
          <img src="assets/conector/next.png" alt="" />
          Configuração de tempo de carregamento
        </p>

        <p>
          <img src="assets/conector/next.png" alt="" />
          Medição e relatórios de eletricidade
        </p>

        <p>
          <img src="assets/conector/next.png" alt="" />
          Atualização de firmware
        </p>
      </FouthSection>

      <FifthSection>
        <p>
        Utilizar carregadores EV da HURAKALL nunca foi tão fácil, mesmo quando não pelas unidades de carregamento, graças aos múltiplos ajustes e configurações que os clientes podem acessar através do aplicativo para download.
        </p>
      </FifthSection>

      <SixthSection>
        <h1>Product Parameters</h1>
        <p>CARREGADOR BCP-CT2N-P SOLO HURAKALL</p>
        <table>
          <tbody>
            <tr>
              <td>Model No.</td>
              <td>HK-SC6004</td>
            </tr>

            <tr>
              <td>Força maxima</td>
              <td>22kW</td>
            </tr>
            <tr>
              <td>Tensão de entrada/saída</td>
              <td>AC400V3-Fase</td>
            </tr>
            <tr>
              <td>Frequência de entrada</td>
              <td>50 Hz/60 Hz</td>
            </tr>
            <tr>
              <td>Metro</td>
              <td>Medidor elétrico embutido</td>
            </tr>
            <tr>
              <td>Display</td>
              <td>Tela LCD de cinco polegadas + luzes LED</td>
            </tr>
            <tr>
              <td>Protocolo de carregamento</td>
              <td>OCPP1.6-J</td>
            </tr>
            <tr>
              <td>Temperatura ambiente</td>
              <td>-30°C~+55°C</td>
            </tr>
            <tr>
              <td>Dimensão do carregador</td>
              <td>350mm*220mm*1422mm</td>
            </tr>
            <tr>
              <td>Altitude Máxima</td>
              <td>2000m</td>
            </tr>
            <tr>
              <td>RFID</td>
              <td>Sim</td>
            </tr>
            <tr>
              <td>Wi-fi</td>
              <td>Sim</td>
            </tr>
            <tr>
              <td>Bluetooth</td>
              <td>Sim</td>
            </tr>
            <tr>
              <td>Parada de emergência</td>
              <td>Sim</td>
            </tr>
    
            <tr>
              <td>Ethernet</td>
              <td>Sim</td>
            </tr>
            <tr>
              <td>DLB</td>
              <td>Sim</td>
            </tr>
            <tr>
              <td>Proteção contra sobretensão e subtensão</td>
              <td>Sim</td>
            </tr>
            <tr>
              <td>Proteção contra sobrecarga de corrente</td>
              <td>Sim</td>
            </tr>
            <tr>
              <td>Proteção contra curto-circuito de sinal CP</td>
              <td>Sim</td>
            </tr>
            <tr>
              <td>Proteção contra superaquecimento</td>
              <td>Sim</td>
            </tr>
            <tr>
              <td>Proteção contra raios</td>
              <td>Sim</td>
            </tr>
            <tr>
              <td>Proteção de adesão do contator</td>
              <td>Sim</td>
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
