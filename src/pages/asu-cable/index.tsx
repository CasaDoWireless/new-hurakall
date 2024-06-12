import { motion } from 'framer-motion';
import { Footer } from '../../components/Footer';
import Menu from '../../components/Menu/Menu';
import Head from 'next/head';

import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
  SeventhSection,
  Character,
  Word,
} from './styles';

export default function AsuCable() {
  const titles = {
    first: {
      title: 'CABO ÓPTICO ASU80/120',
    },
    fifth: {
      dimensions: 'DIMENSÕES',
      char: 'CARACTERÍSTICAS FÍSICAS',
    },
    sixth: {
      ident: 'IDENTIFICAÇÃO',
      log: 'LOGÍSTICA',
      cert: 'CERTIFICAÇÃO',
    },
  };

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const charAnimation = {
    hidden: {
      opacity: 0,
      y: `0.5em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
      },
    },
  };

  const cards = {
    initial: {
      opacity: 0,
      scale: 0.5,
      rotate: '15deg',
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
  };

  return (
    <>
      <Head>
        <title>Hurakall - Cabo óptico</title>
        <meta name="description" content="hurakall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <FirstSection>
        <motion.img
          initial={{ opacity: 0, x: -200, scale: 0.5 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src="/assets/images/asu-cable-imgs/FOTO.png"
          alt=""
        />
        <article>
          <h1>
            {titles.first.title.split(' ').map((word, index) => {
              return (
                <Word
                  aria-hidden="true"
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={wordAnimation}
                  transition={{
                    delayChildren: index * 0.25,
                    staggerChildren: 0.05,
                  }}
                >
                  {word.split('').map((character, index) => {
                    return (
                      <Character
                        aria-hidden="true"
                        key={index}
                        variants={charAnimation}
                      >
                        {character}
                      </Character>
                    );
                  })}
                </Word>
              );
            })}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            NÚCLEO SECO USO EXTERNO
          </motion.p>
        </article>
        <div className="shade"></div>
      </FirstSection>
      <SecondSection>
        <article>
          <p>
            O <strong>Cabo Óptico Hurakall Asu80/120</strong> para vãos de até
            80/120 metros, foi projetado com uma capa de alto revestimento em
            polietileno + material contra raios UV, especialmente para áreas
            externas, suportando intemperismos diários onde é exigido um cabocom
            uma maior qualidade e performance elevada.
          </p>
          <p>
            Contendo a tecnologia aplicada das loose tubes (tubos internos que
            proporcionam uma proteção adicional contra flexões exercidas
            sobreocabo, funcionando também como elemento antiesmagamento, dessa
            forma protegendo as fibras ópticas inseridas dentro das loose
            tubes). Possuindo uma fácil identificação das loose tubes e fibras
            ópticas por código de cores, seguindo as normas nacionais exigidas
            pela <strong>ANATEL</strong>.
          </p>
          <p>
            Constituído por fibra ópticas ITU-TG.652D (SingleMode) revestidas em
            acrilato, sendo posicionadas dentro das loose tubes com autilização
            de uma geleia para facilitar na locomoção das fibras ópticas em seu
            interior. Tecnologia utilizada de extrusão que proporciona nas
            fibras dentro das loose tubes uma grande flexibilidade e resistência
            em flexões exercidas no cabo Speed Star.
          </p>
          <p>
            Método único de controle devariações de longitude com excesso de
            fibra óptica, assegurando que o cabo possua excelentes propriedades
            mecânicas e ambientais.
          </p>
        </article>
      </SecondSection>
      <ThirdSection>
        <motion.div
          initial={{ opacity: 0, y: '8rem' }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/assets/images/asu-cable-imgs/asu-background-2.png"
            alt=""
          />
        </motion.div>
        <header>
          <article>
            <h1>CARACTERÍSTICAS ÓPTICAS</h1>
            <p>
              Constituído por fibras ópticas revestidas em acrilato curado com
              UV, tipo SM (Monomodo) ITU-TG.652D.
            </p>
          </article>
          <article>
            <h1>RESVESTIMENTO</h1>
            <p>Em acrilato</p>
          </article>
          <article>
            <h1>NÚMEROS DE FIBRAS ÓPTICAS</h1>
            <p>06F-12F</p>
          </article>
        </header>
        <main>
          <article>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              src="/assets/images/asu-cable-imgs/asu-draw.png"
              alt=""
            />
            <section>
              <h1>LOOSE TUBE</h1>
              <p>
                Elementos anti esmagamento. onde absorve o impacto e proporciona
                uma proteção adicional contra flexão excessiva do cabo e
                mudanças de temperatura, protegendo a fibra contra possiveis
                danos. Facilitando também a identificação das fibras.
              </p>

              <h1>GELEIA</h1>
              <p>
                Resistente a altas e baixas temperaturas, sua viscosidade reduz
                o impacto de movimentos bruscos na fibra, fazendo-a deslizar,
                dando-lhe a resistência mecânica e também protegendo-a contra o
                congelamento e contaminação por água, que provocam micro curvas
                de obstruções.
              </p>

              <h1>FIO DE RASGAMENTO (RIP CORD)</h1>
              <p>
                Auxilia no rompimento da capa externa, facilitando a instalação.
              </p>

              <h1>ELEMENTO DE TRAÇÃO</h1>
              <p>
                Filamentos de fibras dielétricas (aramida), aplicada ao redor da
                unidade básica (tubo), que proporciona estabilidade térmica e
                previne contra esforços de tração e contração no cabo óptico.
              </p>

              <h1>ELEMENTO CENTRAL DE FORÇA</h1>
              <p>
                Elemento de material dieléctrico posicionado no centro do núcleo
                para prevenir os esforços de contração do cabo. Como membro
                central se emprega um elemento em FRP (Fiber Reinforced
                Plastic).
              </p>

              <h1>CAPA DE PROTEÇÃO EXTERNA</h1>
              <p>
                Capa externa em material termoplástico, resistente aos raios UV.
                O termoplástico utilizado funciona como isolante elétrico,
                resistente a exposição de altas temperaturas. resistente a
                produtos quimicos e impermeável, assim tendo um aumento
                considerável em sua vida útil.
              </p>
            </section>
            <section>
              <motion.img
                initial={{ opacity: 0, scale: 0.5, y: -100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                src="/assets/images/asu-cable-imgs/asu-draw-colors.png"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.5, y: -100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                src="/assets/images/asu-cable-imgs/asu-draw-normas.png"
                alt=""
              />
            </section>
          </article>
        </main>
      </ThirdSection>
      <FourthSection />
      <FifthSection>
        <article>
          <header>
            <section className="dimensions">
              <h1>
                {titles.fifth.dimensions.split(' ').map((word, index) => {
                  return (
                    <Word
                      aria-hidden="true"
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      variants={wordAnimation}
                      transition={{
                        delayChildren: 0.25,
                        staggerChildren: 0.05,
                      }}
                    >
                      {word.split('').map((character, index) => {
                        return (
                          <Character
                            aria-hidden="true"
                            key={index}
                            variants={charAnimation}
                          >
                            {character}
                          </Character>
                        );
                      })}
                    </Word>
                  );
                })}
              </h1>
              <p>Quantidade Total de Fibras Ópticas</p>
              <p>02-36 | 48-72</p>
              <p>Diâmetro Externo (mm) Vão Máximo 80m AS80-S</p>
              <p>6,8+/-0,2 | 12+/-0,2</p>
            </section>
            <section className="feats">
              <h1>
                {titles.fifth.char.split(' ').map((word, index) => {
                  return (
                    <Word
                      aria-hidden="true"
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      variants={wordAnimation}
                      transition={{
                        delayChildren: index * 0.25,
                        staggerChildren: 0.05,
                      }}
                    >
                      {word.split('').map((character, index) => {
                        return (
                          <Character
                            aria-hidden="true"
                            key={index}
                            variants={charAnimation}
                          >
                            {character}
                          </Character>
                        );
                      })}
                    </Word>
                  );
                })}
              </h1>
              <div className="feats-text">
                <div>
                  <p>Quantidade Total de Fibras Ópticas</p>
                  <p>02-12 | 24-36 | 48-72</p>
                  <p>Revestimento Externo NR</p>
                  <p>81 | 95 | 119</p>
                </div>
                <div>
                  <p>Massa Nominal (Kg/Km)</p>
                  <p>Vão Máximo 80/120 AS80-S/AS120-S</p>
                </div>
              </div>
            </section>
          </header>
          <motion.main
            transition={{
              delayChildren: 1,
              staggerChildren: 0.05,
            }}
          >
            <section>
              <h1>
                Força de Traçaõ sem Ácrescimo <br /> de Atenuação (N)
              </h1>
              <motion.table
                initial="initial"
                whileInView="visible"
                transition={{ duration: 1 }}
                variants={cards}
              >
                <thead>
                  <tr>
                    <th>Vão (m)</th>
                    <th>Cargo Máximo de Operação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>80/120</td>
                    <td>1,5 x Peso do Cabo/Km</td>
                  </tr>
                </tbody>
              </motion.table>
            </section>
            <motion.section
              initial="initial"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={cards}
            >
              <h1>
                Carga <br />
                de Compressão (N)
              </h1>
              <div>
                1x Peso do Cabo/Km
                <br />
                (Mínimo 1000)
              </div>
            </motion.section>
            <motion.section
              initial="initial"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={cards}
            >
              <h1>
                Fluência projetada após
                <br />
                20 anos de instalação(%)
              </h1>
              <div>Máxima 0.2</div>
            </motion.section>
            <motion.section
              initial="initial"
              whileInView="visible"
              transition={{ duration: 1 }}
              variants={cards}
            >
              <h1>
                Raio mínimo de
                <br />
                curvatura (mm)
              </h1>
              <table className="radius">
                <thead>
                  <tr>
                    <th>Durante a instalação</th>
                    <th>Após a instalãção</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      20 x Diâmetro <br /> Externo do Cabo
                    </td>
                    <td>
                      10 x Diâmetro <br /> Externo do Cabo
                    </td>
                  </tr>
                </tbody>
              </table>
            </motion.section>
          </motion.main>
          <footer>
            <p>
              <strong>Temperatura de instalação</strong>: -10 °C a 55 °C
            </p>
            <p>
              <strong>Temperatura de armazanemanto</strong>: -20 °C a 65 °C
            </p>
            <p>
              <strong>Temperatura de operação</strong>: -20 °C a 65 °C
            </p>
          </footer>
        </article>
      </FifthSection>
      <SixthSection>
        <div className="container">
          <h1>
            {titles.sixth.ident.split(' ').map((word, index) => {
              return (
                <Word
                  aria-hidden="true"
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={wordAnimation}
                  transition={{
                    delayChildren: index * 0.25,
                    staggerChildren: 0.05,
                  }}
                >
                  {word.split('').map((character, index) => {
                    return (
                      <Character
                        aria-hidden="true"
                        key={index}
                        variants={charAnimation}
                      >
                        {character}
                      </Character>
                    );
                  })}
                </Word>
              );
            })}
          </h1>
          <article>
            <div>
              <h2>Quantidade Total de Fibras Ópticas</h2>
              <p>02 - 12</p>
              <p>24 - 36</p>
              <p>48 - 72</p>
            </div>
          </article>
          <h1>
            {titles.sixth.log.split(' ').map((word, index) => {
              return (
                <Word
                  aria-hidden="true"
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={wordAnimation}
                  transition={{
                    delayChildren: index * 0.25,
                    staggerChildren: 0.05,
                  }}
                >
                  {word.split('').map((character, index) => {
                    return (
                      <Character
                        aria-hidden="true"
                        key={index}
                        variants={charAnimation}
                      >
                        {character}
                      </Character>
                    );
                  })}
                </Word>
              );
            })}
          </h1>
          <article>
            <div>
              <h2>Embalagem:</h2>
              <p>Bobinas de madeira com proteção</p>
            </div>
            <div>
              <h2>Tamanhos (Quantidades):</h2>
              <p>
                Padrões de 3000 m, tolerância de até 1%.
                <br />
                Outros comprimentos sob consulta.
              </p>
            </div>
          </article>
          <article>
            <div className="info">
              <p>CFOA = Cabo de Fibra Óptica</p>
              <p>SM= Tipo de Fibra Óptica: Monomodo de Dispersão Normal</p>
              <p>AS Auto Sustentado (Vãos de 80/120 metros)</p>
              <p>
                Sou G = Cabo Óptica SECO &#171;S&#187; ou GELEADO &#171;G&#187;
              </p>
              <p>F = Quantidade de Fibra Ópticas</p>
              <p>F= Quantidade de Fibra Ópticas</p>
            </div>
          </article>
          <h1>
            {titles.sixth.cert.split(' ').map((word, index) => {
              return (
                <Word
                  aria-hidden="true"
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={wordAnimation}
                  transition={{
                    delayChildren: index * 0.25,
                    staggerChildren: 0.05,
                  }}
                >
                  {word.split('').map((character, index) => {
                    return (
                      <Character
                        aria-hidden="true"
                        key={index}
                        variants={charAnimation}
                      >
                        {character}
                      </Character>
                    );
                  })}
                </Word>
              );
            })}
          </h1>
          <article>
            <div>
              <h2>Descrição:</h2>
              <p>CFOA-SM-ASU-120-S-12FO-NR</p>
            </div>
            <div>
              <h2>Nº de Homologação</h2>
              <p>05357-19-10461</p>
            </div>
          </article>
          <article className="img-cont">
            <motion.img
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              src="/assets/images/anatel-acrylic-table-tent-with-wood-base.png"
              alt="Ilustração de trofeu de acrilico com base de madeira contendo a logo da Anatel"
            />
          </article>
        </div>
      </SixthSection>

      <SeventhSection />

      <Footer />
    </>
  );
}
