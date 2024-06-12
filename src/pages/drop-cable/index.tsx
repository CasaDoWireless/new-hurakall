import Image from 'next/image';
import { CgArrowRightR } from 'react-icons/cg';

import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FouthSection,
  FifthSection,
  SixthSection,
} from './styles';

import Cable from '../../../public/assets/images/cable.png';
import Drop_Cable from '../../../public/assets/images/drop-cable.png';
import CableAttenuation from '../../../public/assets/images/cable-attenuation.png';
import AcrylicTable from '../../../public/assets/images/anatel-acrylic-table-tent-with-wood-base.png';
import CableDrawing from '../../../public/assets/images/cable-drawing.png';
import Composition from '../../../public/assets/images/composition.png';
import MoreThan9000 from '../../../public/assets/images/more-than-9000.png';
import Logo from '../../../public/assets/images/logo.png';
import Product1 from '../../../public/assets/images/product-01.png';
import Product2 from '../../../public/assets/images/product-02.png';
import Product3 from '../../../public/assets/images/product-03.png';

import { Footer } from '../../components/Footer';
import { motion } from 'framer-motion';
import Menu from '../../components/Menu/Menu';
import Head from 'next/head';

export default function DropCable() {
  return (
    <>
      <Head>
        <title>Hurakall - Cabo Drop</title>
      </Head>
      <Menu />
      <FirstSection>
        <article>
          <h1>
            CABO ÓPTICO <br />
            DROP FLAT 01FO
          </h1>
          <p>COMPACTO METÁLICO</p>
        </article>
        <div className="shade" />
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Image src={Cable} alt="Cabo óptico drop" className="" />
        </motion.div>
      </FirstSection>

      <SecondSection>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 60 }}
        >
          <figure>
            <Image
              src={Drop_Cable}
              alt="Cabo óptico drop desencapado"
              className=""
              layout="fill"
              objectFit="contain"
            />
          </figure>
        </motion.div>
        <article>
          <p>
            Atualmente, o cabo conhecido como,drop flat é o mais utilizado
            devido à sua facilidade de instalação, compatibilidade
            erepetitividade com conectores de campo que permite mais rapidez de
            instalação, em comparação à solução por fusão.
          </p>
          <p>Nas versões:</p>
          <ul>
            <li>
              <span>1 km</span>
            </li>
            <li>
              <span>2 km</span>
            </li>
          </ul>
        </article>
      </SecondSection>

      <ThirdSection>
        <article>
          <h1>
            Bend <br />
            Insensitive <br />
            Fiber <br />
          </h1>
          <p>
            Mais flexível, adequado para uso interno <br />
            Menos atenuação, projetado para desempenho
          </p>
        </article>

        <CgArrowRightR size={50} />

        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: -60 }}
        >
          <figure>
            <Image
              src={CableAttenuation}
              alt="Ilustração de um cabo contorcido, o que gera atenuação"
              className=""
              layout="fill"
              objectFit="contain"
            />
          </figure>
        </motion.div>
      </ThirdSection>

      <FouthSection>
        <h1>ESPECIFICAÇÕES TÉCNICAS</h1>
        <h2>FIBRA</h2>
        <article>
          <div>
            <p>Monomodo</p>
            <p>Atenuação máxima da fibra no cabo dB/Km</p>
            <p>PMDq</p>
          </div>
          <div>
            <p>ZTT Fiber ITU.T-SM G.657 A/B- Baixa sensibilidade a curvatura</p>
            <p>1310nm: 0.4&1550nm: 0.3</p>
            <p>0.1ps/√km≥</p>
          </div>
        </article>
        <h2>PARÂMETROS</h2>
        <article>
          <div>
            <ul>
              <li>Modelo: CFOAC-BLI A/B-CM-01-CO-COG</li>
              <li>Cabo de fibras ópticas de acesso</li>
              <li>Compacto metálico</li>
              <li>Número de fibra óptica: 01</li>
              <li>Classe de atrito: CO (Convencional)</li>
              <li>Classificação do comportamento frente à chama: COG</li>
              <li>Tipo de fibra óptica: G.657 A - BLI/AB</li>
              <li>Modelo de fibra óptica: SM (monomodo)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Proteção Anti-UV</li>
              <li>Cordoalha de aço</li>
              <li>Bobina com 1000 mts</li>
              <li>Diâmetro do cabo com cordoalha: 5 mm</li>
              <li>Diâmetro do cabo com cordoalha: 3 mm</li>
              <li>Diâmetro da cordoalha sem capa: 1 mm</li>
              <li>Diâmetro da cordoalha sem capa: 2 mm</li>
              <li>Peso: 19 Kg</li>
            </ul>
          </div>
        </article>

        <h2>COMPRIMENTOS PADRÕES</h2>
        <article>
          <div>
            <p>Bobinas de: 1000 metros e 2000 metros</p>
            <p>Modelo de embalagem: Carretel Flange Plástica</p>
            <p>Capacidade (m) 1.000/2.000</p>
            <p>Dimensional(mm) 360x360x265</p>
            <p>PesoBruto (Kg 24)</p>
          </div>
        </article>

        <h2>
          Cabo LSZH <br />
          (Low Smoke Zero Halogen)
        </h2>
        <article>
          <p>
            Este modelo de cabo possuimaterial resistente a<br />
            flamabilidade,com baixa emissão de fumaça e<br />
            nenhuma emissão de gás tóxico, protegendo os
            <br />
            indivíduos em uma eventual ocorrência.
          </p>
        </article>

        <div className="img">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: -60 }}
          >
            <Image
              className=""
              src={AcrylicTable}
              alt="Ilustração de trofeu de acrilico com base de madeira contendo a logo da Anatel"
            />
          </motion.div>
        </div>
      </FouthSection>

      <FifthSection>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 40 }}
          >
            <Image src={CableDrawing} alt="" className="" />
          </motion.div>
          <p>Imagem ilustrativa - fora de Escala*</p>
        </div>
        <Image src={Composition} alt="" />
      </FifthSection>

      <SixthSection>
        {/* <h2>
          Somos um dosmaiores importadorese distribuidors deequipamentos
          detelecomunicação do <br />
          <h1>
            Bra<span>sil.</span>
          </h1>
        </h2>

        <h2>
          Já foram mais de
          <h1>
            <span>86.000</span> mil Km&rsquo;s
          </h1>
          de Fibras Ópticas distribuídas por todo o Brasil.
        </h2> */}
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1.1 }}
          style={{ width: '30rem' }}
        >
          <Image src={MoreThan9000} alt="" className=" img-map" />
        </motion.div>
        <Image src={Logo} alt="" className="img-logo" />
        <p>By Storm</p>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <figure>
            <Image
              src={Product1}
              alt="Produtos hurakall 1"
              className=""
              layout="fill"
              objectFit="contain"
            />
          </figure>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <figure>
            <Image
              src={Product2}
              alt="Produtos hurakall 2"
              className=""
              layout="fill"
              objectFit="contain"
            />
          </figure>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <figure>
            <Image
              src={Product3}
              alt="Produtos hurakall 3"
              className=""
              layout="fill"
              objectFit="contain"
            />
          </figure>
        </motion.div>
      </SixthSection>
      <Footer />
    </>
  );
}
