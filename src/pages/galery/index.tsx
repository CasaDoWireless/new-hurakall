import { Footer } from '../../components/Footer';
import Menu from '../../components/Menu/Menu';
import { IoMdPlayCircle } from 'react-icons/io';


import LogoCentral from '../../../public/assets/images/galeria/logo-white.png';
//import img from 'next/image';

import { FirstSection, SecondSection, ThirdSection } from './styles';
//@ts-ignore
import ImageViewer from 'react-simple-image-viewer';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import Head from 'next/head';

const MapWithNoSSR = dynamic(() => import('../../components/Map'), {
  ssr: false,
});

export default function DropCable() {
  function getImgFromUrl(url: any) {
    const id = url.split('v=')[1]?.split('&')[0];
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
  }

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    'assets/images/galeria/2.JPG',
    'assets/images/galeria/3.JPG',
    'assets/images/galeria/6.JPG',
    'assets/images/galeria/10.jpeg',
    'assets/images/galeria/20.jpeg',
    'assets/images/galeria/1-2.jpg',
    'assets/images/galeria/4.JPG',
    'assets/images/galeria/5.JPG',
    'assets/images/galeria/7.JPG',
    'assets/images/galeria/8.jpeg',
    'assets/images/galeria/9.jpeg',
    'assets/images/galeria/11.jpeg',
    'assets/images/galeria/12.jpeg',
    'assets/images/galeria/13.jpeg',
    'assets/images/galeria/14.jpeg',
    'assets/images/galeria/15.jpeg',
    'assets/images/galeria/16.jpeg',
    'assets/images/galeria/19.jpeg',
  ];

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Head>
        <title>Hurakall - Galeria</title>
        <meta name="description" content="Hurakall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <FirstSection>
        <span>
          <img className='img1' src='/assets/images/galeria/logo-white.png' alt="Banner" />
          <h2>Simple Solutions for Complex Connections</h2>
        </span>
      </FirstSection>

      <SecondSection>
        <div className="container">
          <h1>Fotos</h1>
          <div className="manufacturing-images">
            <div className="image">
              {images.map((src, index) => (
                <img
                  src={src}
                  onClick={() => openImageViewer(index)}
                  width="300"
                  key={index}
                  style={{ margin: '5px' }}
                  alt=""
                />
              ))}
            </div>
            {isViewerOpen && (
              <ImageViewer
                src={images}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            )}
          </div>
          <h1>Videos</h1>

          <div className="manufacturing-videos">
            <div className="row">
              <a
                className="image"
                href="https://www.youtube.com/watch?v=fcm_YW42MlE&t=2s"
              >
                <IoMdPlayCircle />
                <img alt='video'
                  src={getImgFromUrl(
                    'https://www.youtube.com/watch?v=fcm_YW42MlE&t=2s',
                  )}
                  className="containerVideo"
                />
              </a>

              <a
                className="image"
                href="https://www.youtube.com/watch?v=0OaOF6x4G6U"
              >
                <IoMdPlayCircle />
                <img alt='video'
                  src={getImgFromUrl(
                    'https://www.youtube.com/watch?v=0OaOF6x4G6U',
                  )}
                  className="containerVideo"
                />
              </a>

              <a
                className="image"
                href="https://www.youtube.com/watch?v=HQJm3kqODS4"
              >
                <IoMdPlayCircle />
                <img alt='video'
                  src={getImgFromUrl(
                    'https://www.youtube.com/watch?v=HQJm3kqODS4',
                  )}
                  className="containerVideo"
                />
              </a>
            </div>

            <div className="row">
              <a
                className="image"
                href="https://www.youtube.com/watch?v=7pjh61mWC9Q"
              >
                <IoMdPlayCircle />
                <img alt='video'
                  src={getImgFromUrl(
                    'https://www.youtube.com/watch?v=7pjh61mWC9Q',
                  )}
                  className="containerVideo"
                />
              </a>

              <a
                className="image"
                href="https://www.youtube.com/watch?v=oim1lnqcjYo"
              >
                <IoMdPlayCircle />
                <img alt='video'
                  src={getImgFromUrl(
                    'https://www.youtube.com/watch?v=oim1lnqcjYo',
                  )}
                  className="containerVideo"
                />
              </a>

              <a
                className="image"
                href="https://www.youtube.com/watch?v=4Odv7fB98g8"
              >
                <IoMdPlayCircle />
                <img alt='video'
                  src={getImgFromUrl(
                    'https://www.youtube.com/watch?v=4Odv7fB98g8',
                  )}
                  className="containerVideo"
                />
              </a>
            </div>

            <div className="row">
              <a
                className="image"
                href="https://www.youtube.com/watch?v=_P7ZK2cE0a8"
              >
                <IoMdPlayCircle />
                <img alt='video'
                  src={getImgFromUrl(
                    'https://www.youtube.com/watch?v=_P7ZK2cE0a8',
                  )}
                  className="containerVideo"
                />
              </a>

              <a
                className="image"
                href="https://www.youtube.com/watch?v=BA9Qkc9mIiM"
              >
                <IoMdPlayCircle />
                <img alt='video'
                  src={getImgFromUrl(
                    'https://www.youtube.com/watch?v=BA9Qkc9mIiM',
                  )}
                  className="containerVideo"
                />
              </a>
            </div>
          </div>
        </div>
      </SecondSection>

      <ThirdSection>
        <div className="container">
          <div className="localizacao">
            <h1>Localização</h1>
            <div className="mapa">
              <div className="colorLayer"></div>
              <MapWithNoSSR />
            </div>
          </div>
        </div>
      </ThirdSection>

      <Footer />
    </>
  );
}
