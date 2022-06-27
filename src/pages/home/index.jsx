import React from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
import IconButton from '../../components/IconButton';
import SectionTitle from '../../components/SectionTitle';
import Card from '../../components/Card';
import Button from '../../components/Button';

import minhaFoto from '../../assets/images/minha-foto.jpg';
import projeto1 from '../../assets/images/projetos.jpg';

import './styles.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="meu-perfil" id="inicio">
          <div className="meu-perfil-imagem">
            <img src={minhaFoto} alt="Foto de Luiz Fernando" />
          </div>
          <div className="meu-perfil-informacoes">
            <div className="meu-perfil-informacoes-titulo">
              <p>OLÁ! EU SOU</p>
              <h2>Luiz Fernando</h2>
            </div>
            <div className="meu-perfil-informacoes-descricao">
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            </div>
            <div className="meu-perfil-informacoes-social">
              <IconButton icon={<FaLinkedinIn />} link="https://linkedin.com" />
              <IconButton icon={<FaTwitter />} link="https://twitter.com" />
            </div>
          </div>
        </div>

        <SectionTitle title="Sobre Mim" />
        <div className="sobre-mim" id="sobre">
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
        </div>

        <SectionTitle title="Projetos" />
        <div className="projetos" id="projetos">
          <Card
            image={projeto1}
            alt="Imagem de Projeto 1"
            title="Lorem Ipsum"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."
            tech="HTML, CSS e JavaScript"
            buttons={
              <>
                <Button title="Prévia" link="http://google.com" />
                <Button title="GitHub" />
              </>
            }
          />

          <Card
            image={projeto1}
            alt="Imagem de Projeto 2"
            title="Lorem Ipsum"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."
            tech="HTML, CSS e JavaScript"
            buttons={
              <>
                <Button title="Prévia" link="http://google.com" />
                <Button title="GitHub" />
              </>
            }
          />

          <Card
            image={projeto1}
            alt="Imagem de Projeto 3"
            title="Lorem Ipsum"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."
            tech="HTML, CSS e JavaScript"
            buttons={
              <>
                <Button title="Prévia" link="http://google.com" />
                <Button title="GitHub" />
              </>
            }
          />

          <Card
            image={projeto1}
            alt="Imagem de Projeto 4"
            title="Lorem Ipsum"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."
            tech="HTML, CSS e JavaScript"
            buttons={
              <>
                <Button title="Prévia" link="http://google.com" />
                <Button title="GitHub" />
              </>
            }
          />
        </div>
      </Container>
    </>
  )
}