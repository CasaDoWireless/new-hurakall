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
import { motion } from 'framer-motion';

export default function screw() {
  return (
    <div className="over-Hidden">
      <Head>
        <title>Hurakall - Conector Fast</title>
        <meta name="description" content="hurakall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <FirstSection>
        <div className="section1">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="assets/screw-connector/FOTO.png" alt="" />
          </motion.div>
        </div>
      </FirstSection>

      <SecondSection>
        <div className="section2">
          <div className="title">
            <p>CONECTOR HURAKALL FAST CLICK SC/APC ou UPC</p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <img src="/assets/screw-connector/FOTO-PICADO.png" alt="" />
          </motion.div>
          <div className="conteudo">
            <p>
              Projetado para cabos drop de até 3mm de espessura, pode ser
              reutilizado até 5 vezes. Além disso, possui padrão SC com
              polimento APC. É indicado para utilização na conexão com ONU,
              conectores ópticos, OLT e outros equipamentos de fibra óptica.
            </p>
          </div>
        </div>
      </SecondSection>

      <ThirdSection>
        <article>
          <p>
            Produzidos com matérias primas de alta qualidade, permite uma
            conectorização com mínima perda em db.
          </p>
        </article>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="img1">
            <img src="assets/screw-connector/CONECTOR1.png" alt="" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="img2">
            <img src="assets/screw-connector/CONECTOR2.png" alt="" />
          </div>
        </motion.div>
      </ThirdSection>

      <FouthSection>
        <div className="section4">
          <div className="list">
            <ul>
              <li>Baixa perda de Inserção</li>
              <li>Instalação fácil e rápida</li>
              <li>Custo benefício</li>
            </ul>
          </div>
          <div className="vertical"></div>
          <div className="premium">
            <h1>The best connector in the world.</h1>
            <img src="assets/conector/premium.png" alt="" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="two">
            <img src="assets/conector/ferrolho.png" alt="" />
          </div>
        </motion.div>
        <p>
          <img src="assets/conector/next.png" alt="" />
          Corpoem material termo plástico e ferrolho em cerâmica(zircônica).
        </p>

        <p>
          <img src="assets/conector/next.png" alt="" />
          Reutilizável até 5 vezes desde que mantido as características de
          inserção.
        </p>

        <p>
          <img src="assets/conector/next.png" alt="" />
          Possuem um polimento adequado que garante o alto desempenho na
          transmissão de dados.
        </p>

        <p>
          <img src="assets/conector/next.png" alt="" />
          Eliminam a necessidade de ferramentas especiais, aplicação de epóxis
          ou polimento.
        </p>
      </FouthSection>

      <FifthSection>
        <p>
          Pre-treated fiber in the ferrule, no fusion and polishing Stable
          optical performance and reliable environmental performance length is
          less than 55mm.
        </p>
      </FifthSection>

      <SixthSection>
        <h1>Product Parameters</h1>
        <p>CONECTOR HURAKALL FAST CLICK SC/APC ou UPC</p>
        <table>
          <tbody>
            <tr>
              <td>Model No.</td>
              <td>HK-SC6004</td>
            </tr>

            <tr>
              <td>Connector Type</td>
              <td>UPC/APC</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>60mm</td>
            </tr>
            <tr>
              <td>Applicable for</td>
              <td>Drop cable.Indoorcable</td>
            </tr>
            <tr>
              <td>Fiber mode</td>
              <td>Single mode or Multi mode</td>
            </tr>
            <tr>
              <td>Operation time</td>
              <td>(About50s(nofibercut</td>
            </tr>
            <tr>
              <td>Insertion Loss</td>
              <td>0.3dB≥</td>
            </tr>
            <tr>
              <td>Insertion Loss Typical value</td>
              <td>0.2dB</td>
            </tr>
            <tr>
              <td>Success Rate of first Assembly</td>
              <td>97%≤</td>
            </tr>
            <tr>
              <td>Return Loss</td>
              <td>50dB UPC ≥55dB APC≤ </td>
            </tr>
            <tr>
              <td>Fastening strength of naked fiber</td>
              <td>5N≤</td>
            </tr>
            <tr>
              <td>Tensile strength</td>
              <td>50N≤</td>
            </tr>
            <tr>
              <td>Reusable</td>
              <td>times 10≤</td>
            </tr>
            <tr>
              <td>Operating Temperature</td>
              <td>℃+85～-40</td>
            </tr>
          </tbody>
        </table>
      </SixthSection>

      <SeventhSection>
        <div className="container">
          <h1>Production Workshop</h1>
          <div className="manufacturing-images">
            <span className="image">
              <img src="assets/conector/szhet.png" alt="" />
            </span>

            <span className="image">
              <img src="assets/conector/dsgs.png" alt="" />
            </span>

            <span className="image">
              <img src="assets/conector/6.png" alt="" />
            </span>

            <span className="image">
              <img src="assets/conector/dgdg.png" alt="" />
            </span>

            <span className="image">
              <img src="assets/conector/dsfg.png" alt="" />
            </span>

            <span className="image">
              <img src="assets/conector/dsg.png" alt="" />
            </span>
          </div>
        </div>
      </SeventhSection>

      <Footer />
    </div>
  );
}
