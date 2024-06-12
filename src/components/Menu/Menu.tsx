import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../../public/assets/home/logo.png';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

import { Header, Sidebar } from './styles';

const Menu: NextPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Header id="scroll">
      <span>
        <Image src={Logo} alt="Vercel Logo" />
      </span>
      <button className="btn-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>
      <Sidebar toggle={menuOpen}>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <MdClose />
        </button>
        <ul>
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>

          <li>
            <Link href="/products">
              <a>PRODUCTS</a>
            </Link>
          </li>
          <li>
            <Link href="/galery">
              <a>GALLERY</a>
            </Link>
          </li>
          <li>
            <Link href="/support">
              <a>SUPPORT</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>
          <Image src={Logo} alt="Vercel Logo" />
        </ul>
      </Sidebar>

      <div>
        <ul>
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>PRODUCTS</a>
            </Link>
          </li>
          <li>
            <Link href="/galery">
              <a>GALLERY</a>
            </Link>
          </li>
          <li>
            <Link href="/support">
              <a>SUPPORT</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
      </div>
    </Header>
  );
};

export default Menu;
