import { Footer } from '../../components/Footer';
import Menu from '../../components/Menu/Menu';
import { CgArrowRightR } from 'react-icons/cg';
import Head from 'next/head';

//import img from 'next/image'

import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FouthSection,
  FifthSection,
  SixthSection,
} from './styles';

export default function Cleaver() {
  return (
    <>
      <Head>
        <title>Hurakall - Clivador</title>
        <meta name="description" content="hurakall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <FirstSection>
        <div className="section1">
          <img src="assets/clivador/FOTO.png" alt="Cabo óptico drop" />
        </div>
      </FirstSection>

      <SecondSection>
        <div className="title">
          <p>
            CLIVADOR DE ALTA PRECISÃO <strong>ftth</strong>
          </p>
        </div>
        <div className="conteudo">
          <article>
            <p>
              O Clivador de fibra HURAKALL é um modelo de alta qualidade, é
              semelhante ao CT-30T, fácil de operar e com lâmina de maior vida
              útil.
            </p>
            <p>
              É totalmente automático, a lâmina de fibra também pode girar
              automaticamente após cada corte, e sua caixa de coleta também pode
              abrir e fechar automaticamente junto com cada corte.
            </p>
          </article>
        </div>
      </SecondSection>

      <ThirdSection>
        <article>
          <p>Rotação automática da lâmina após cada clivagem de fibra.</p>
        </article>

        <CgArrowRightR size={50} />

        <img
          src="assets/clivador/cli.png"
          alt="Ilustração de um cabo contorcido, o que gera atenuação"
        />
      </ThirdSection>

      <FouthSection>
        <h1>ESPECIFICAÇÕES TÉCNICAS</h1>
        <table>
          <tbody>
            <tr>
              <td>Bare fiber diameter</td>
              <td>125µm</td>
            </tr>

            <tr>
              <td>Coatinh diameter</td>
              <td>0.25mm~0.9mm</td>
            </tr>
            <tr>
              <td>Fiber type</td>
              <td>Single core fiber</td>
            </tr>
            <tr>
              <td>Cleaved length</td>
              <td>5~16mm</td>
            </tr>
            <tr>
              <td>Cleaved angle</td>
              <td>0.5º</td>
            </tr>
            <tr>
              <td>Mode</td>
              <td>Manual</td>
            </tr>
            <tr>
              <td>Dimension</td>
              <td>103mm(w)x93mm(D)x47mm(H)</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>340g</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>Black</td>
            </tr>
            <tr>
              <td>Blade life</td>
              <td>52000 times</td>
            </tr>
            <tr>
              <td>Cutting angle</td>
              <td>0.5º</td>
            </tr>
            <tr>
              <td>Package</td>
              <td>Fiber Cleaver, Usermanual, Carrying Case</td>
            </tr>
          </tbody>
        </table>
      </FouthSection>

      <FifthSection>
        <div>
          <img src="assets/clivador/ERETR.png" alt="" />
        </div>
        <img src="/assets/clivador/foto1.png" alt="" />
        <img src="/assets/clivador/foto2.png" alt="" />
      </FifthSection>

      <SixthSection>
        <img src="/assets/images/logo.png" alt="" className="img-logo" />
        <p>By Storm</p>
      </SixthSection>

      <Footer />
    </>
  );
}
