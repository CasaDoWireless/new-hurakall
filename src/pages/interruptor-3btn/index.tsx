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
          <img src="/assets/home/produtos_home/4btn.png" alt="" />
        </div>
      </FirstSection>

      <ThirdSection>
        <article>
           <p>

                O Interruptor Wi-fi Touch Hurakall, pode ser utilizado em diversos pontos de sua casa, por exemplo, 
                em sua iluminação, onde você pode acender e apagas as luzes utilizando o seu Smartphone e ainda 
                pode programar o acendimento automático das mesmas pelo próprio aplicativo. Você pode programar 
                para que a iluminação acenda ou apague em um determinado horário de acordo com sua programação. Você
                também pode compartilhar o controle de sua residência com os demais moradores, alcançando até 6 Aparelhos,
                Smartfones ou Tablets ao mesmo tempo.

              </p>
        </article>

        <div className="img1">
          <img src="/assets/touch6btn/btn4.png" alt="touch-light-hurakall"/>
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
        </div>

        <div className="two">
          <img src="/assets/touch6btn/image-touch4btn.png" alt="" />
        </div>
        <p className="desc">
          <img src="assets/conector/next.png" alt="" />
          Toque para ON / OFF
        </p>

        <p className="desc">
          <img src="assets/conector/next.png" alt="" />
          App Remote ON / OFF
        </p>

        <p className="desc">
          <img src="assets/conector/next.png" alt="" />
          Temporizadores De Programação / Contagem Regressiva
        </p>

        <p className="desc">
          <img src="assets/conector/next.png" alt="" />
          Funciona com os principais assistentes de voz do mercado.
          </p>
          <p className="desc">
          <img src="assets/conector/next.png" alt="" />
          Trabalha Com O IFTTT
          </p>
          <br />
          <br />
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
        <p>INTERRUPTOR TOUCH WI-FI 6 BOTÕES 4X4</p>
        <table>
          <tbody>
            <tr>
              <td>Fonte de Alimentação:</td>
              <td>100 A 240 Volts AC - Bivolt</td>
            </tr>

            <tr>
              <td>Potência Max</td>
              <td>120v 300w / 240v 550w por saída</td>
            </tr>
            <tr>
              <td>Padrão Sem Fio</td>
              <td>802.11 B/G/N</td>
            </tr>

            <tr>
              <td>Mecanismo De Segurança:</td>
              <td>WPA-PSK/WPA2-PSK</td>
            </tr>

            <tr>
              <td> WiFi</td>
              <td>2.4GHz & 802.11 B/G/N</td>
            </tr>

            <tr>
              <td>Compatível Com O Padrão</td>
              <td>5 metros</td>
            </tr>

            <tr>
              <td>Dimensões</td>
              <td>120mm x 72mm x 40mm (C x L x A)</td>
            </tr>
        
          </tbody>
        </table>
      </SixthSection>

      <SeventhSection>
        <div className="container">
          <h1>Galeria</h1>
          <div className="manufacturing-images">
            <span className="image">
              <img src="assets/touch6btn/t1.jpg" alt="touch-light-wifi" />
            </span>
            <span className="image">
              <img src="assets/touch6btn/t2.jpg" alt="touch-light-wifi" />
            </span>
            <span className="image">
              <img src="assets/touch6btn/t3.jpg" alt="touch-light-wifi" />
            </span>
            <span className="image">
              <img src="assets/touch6btn/t4.jpg" alt="touch-light-wifi" />
            </span>
            <span className="image">
              <img src="assets/touch6btn/t5.jpg" alt="touch-light-wifi" />
            </span>
            <span className="image">
              <img src="assets/touch6btn/t6.png" alt="touch-light-wifi" />
            </span>
          </div>
        </div>
      </SeventhSection>

      <Footer />
    </>
  );
}
