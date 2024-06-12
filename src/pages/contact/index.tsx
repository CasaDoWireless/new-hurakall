import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../../components/Footer';
import Menu from '../../components/Menu/Menu';
import { Reserved } from '../styles';
import { ContactContainer } from './styles';
import { RiUploadCloud2Line } from 'react-icons/ri';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const MapWithNoSSR = dynamic(() => import('../../components/Map'), {
  ssr: false,
});

const Contact: NextPage = () => {
  const [message, setMessage] = useState('');

  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [subject, setSubject] = useState('');
  const [file, setFile] = useState<FileList | null>();
  // const [fileToSend, setFileToSend] = useState({
  //   base64: '',
  //   type: ''
  // })

  // const toBase64 = file => new Promise((resolve, reject) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => resolve(reader.result);
  //   reader.onerror = error => reject(error);
  // });
  const file2Base64 = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || '');
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSendMail = async (e: any) => {
    try {
      e.preventDefault();

      let base64ToSend = file ? await file2Base64(file[0]) : '';
      let typeToSend = file ? file[0].type : '';
      let fileToSend = {
        base64: base64ToSend,
        type: typeToSend,
      };
      setMessage('Enviando email...');
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/send-email`,
        {
          body: JSON.stringify({
            email,
            subject,
            name,
            telefone,
            content,
            file: fileToSend,
          }),
          method: 'POST',
        },
      );
      const body = await response.json();
      if (body.ok) {
        setMessage('Email enviado com sucesso!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Hurakall - Contact</title>
        <meta name="description" content="hurakall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      {/* <Container>
        <span>
          <Image
            src="/assets/home/logo-white.png"
            alt="Banner"
            height={100}
            width={600}
          />
          <h2>Simple Solutions for Complex Connections</h2>
        </span>
      </Container> */}

      <ContactContainer>
        <form>
          <h1>Fale Conosco</h1>
          <span className="span1">
            Preencha os campos abaixo e envie-nos sua mensagem
          </span>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="E-mail"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Telefone"
            name="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <h4>Assunto</h4>
          <input
            type="text"
            placeholder="Descreva sobre o assunto"
            name="mensagem"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            type="file"
            name="arquivos"
            className="inputFile"
            id="arquivos"
            accept="image/png, image/gif, image/jpeg"
            onChange={(e) => setFile(e.target.files)}
          />
          <h4>Observações</h4>
          <textarea
            name="observacao"
            cols={90}
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: '37rem' }}
          ></textarea>
          <div className="optionsButton">
            <label htmlFor="arquivos">
              <div className="fileButton">
                <RiUploadCloud2Line></RiUploadCloud2Line>
                <span>Anexar Arquivos</span>
              </div>
            </label>
            <button type="submit" onClick={handleSendMail}>
              Enviar
            </button>
          </div>
        </form>
        <p>{message}</p>
        <div className="localizacao" style={{ width: '39rem' }}>
          <h1>Localização</h1>
          <div className="mapa" style={{ width: '39rem' }}>
            <div className="colorLayer"></div>
            <MapWithNoSSR />
          </div>
        </div>
      </ContactContainer>

      <Reserved>
        <h2 style={{ marginTop: '1rem', marginBottom: 0 }}>
          COPYRIGHT © HURAKALL RIGHT RESERVED
        </h2>
      </Reserved>
      <Footer />
    </div>
  );
};

export default Contact;
