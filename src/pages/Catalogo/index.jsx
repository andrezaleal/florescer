import React, { useState } from 'react'
import {
  Layout,
  Typography,
  Input,
  Row,
  Col,
  Button,
} from 'antd';

import { useHistory, Link } from 'react-router-dom';
import './styles.css'
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import espada from "../../assets/espada-sao-jorge.svg";
import samambaia from "../../assets/samba.svg";
import cardRosa from "../../assets/card-medio-rosa.svg";
import cardVerde from "../../assets/card-medio-verde.svg";
import cactus from "../../assets/cacto.png"
import pacova from "../../assets/pacova.svg"
import "antd/dist/antd.css";
import MenuComponent from '../../components/MenuComponent';
import CardCatalogo from '../../components/Card-Catalogo';

const { Title } = Typography;
const { Content } = Layout;

const Catalogo = () => {
  const [searchText, setSearchText] = useState('');

  const cardsData = [
    { nome: 'Favoritas', card: cardRosa, img: cactus, rota: '/favoritos' },
    { nome: 'A-Z', card: cardVerde, img: samambaia, rota: '/AZ' },
    { nome: 'Fácil Cuidado', card: cardVerde, img: espada, rota: '/facilCuidado' },
    { nome: 'Pequenas', card: cardVerde, img: pacova, rota: '/pequenas' },
  ];

  const filteredCards = cardsData.filter((card) =>
    card.nome.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = (text) => {
    setSearchText(text);
  };


  return (
    <Layout className="layout margin-catalogo" style={{overflowX:'hidden'}}>
      <Row className='container_item' sstyle={{ justifyContent: 'flex-start', marginBottom: '2rem', marginTop: '3rem' }}>
        <Col span={8}>
          <Link to='/pagina inicial'>
            <Button type='link' style={{ color: '#6D7970' }} >
              <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
            </Button>
          </Link>
        </Col>
        <Col span={16}>
          <Title className='titulo' style={{ marginTop: "0", display: 'flex', }}>Catálogo</Title>
        </Col>
      </Row>
      <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
        <Row className='container_item'>
          <Col>
            <Input
              placeholder="Pesquisar"
              style={{
                width: '85vw',
                background: 'none',
              }}
              suffix={<SearchOutlined />}
              size="large"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </Col>

          <Row className='container_step' style={{ flexDirection: 'initial', justifyContent: 'start' }}>
            {filteredCards.map((card, index) => (
              <Col key={index}>
                <Link to={card.rota}>
                  <CardCatalogo nome={card.nome} card={card.card} img={card.img} />
                </Link>
              </Col>
            ))}
          </Row>
        </Row>
      </Content>
      <MenuComponent />
    </Layout >
  );
};

export default Catalogo;

