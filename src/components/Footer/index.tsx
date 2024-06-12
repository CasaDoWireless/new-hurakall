import { Container } from './styles';

import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiSkypeLine,
} from 'react-icons/ri';

import { FiYoutube } from 'react-icons/fi';

import Logo from '../../../public/assets/home/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <Container>
      <div>
        <section>
          <Image src={Logo} alt="Vercel Logo" layout="fixed" />

          <p>FOLLOW US</p>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/casadowireless"
              >
                <RiFacebookBoxLine size={35} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/hurakall/"
              >
                <RiInstagramLine size={35} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCgO91QB-eFSULAqXhx6T-Gg"
              >
                <FiYoutube size={35} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/casa-do-wireless/"
              >
                <RiLinkedinBoxLine size={35} />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.skype.com/">
                <RiSkypeLine size={35} />
              </a>
            </li>
          </ul>
        </section>
        <section>
          <nav>
            <a target="_blank" href="/">
              COMPANY
            </a>
            <Link href="/products">
              <a>PRODUCTS</a>
            </Link>
            <Link href="/support">
              <a>SUPPORT</a>
            </Link>
          </nav>
        </section>
      </div>
      <span>
        COPYRIGHT© 2020-2022 HURAKALL TECHNOLOGY Co.,Ltd. I ALL RIGHTRESERVED
      </span>
    </Container>
  );
}
