import React, { useState, useEffect, useContext } from 'react'
import {
  Layout,
  Typography,
  Input,
  Row,
  Col,
  Button,
  Card,
  Spin,
  Image
} from 'antd';
import { useHistory, Link } from 'react-router-dom';
import './styles.css'
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import folha from "../../../../assets/folha.svg";
import MenuComponent from '../../../../components/MenuComponent';

import { db } from '../../../../services/firebaseConnections';
import { getDocs, collection, query, where, documentId } from 'firebase/firestore';
import { AuthContext } from '../../../../services/auth';


const { Title, Text } = Typography;
const { Content } = Layout;

const Favoritos = () => {

  const history = useHistory();
  const { user } = useContext(AuthContext);

  const [plantafavoritada, setPlantaFavoritada] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const allPlantsMarkBook = collection(db, "catalogo");
  const userPlantsQuery = query(allPlantsMarkBook, where(documentId(), "in", user.favoritos));

  async function loadPlantasMarkBook() {
    const querySnapshot = await getDocs(userPlantsQuery)
      .then((snapshot) => {
        const lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            nome: doc.data().titulo,
            image: doc.data().image,
          })
        })
        if (snapshot.docs.size === 0) {
          console.log("Nenhuma Planta Encontrada")
          setLoading(false);
          return;
        }
        setPlantaFavoritada(lista);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })

  }
  useEffect(() => {
    loadPlantasMarkBook()
  }, []);

  const filteredPlantas = plantafavoritada.filter((planta) => {
    return planta.nome.toLowerCase().includes(searchTerm.toLowerCase());
  });


  return (
    <Layout className="layout" >
      <Row className='container_item' style={{ justifyContent: 'flex-start', marginBottom: '2rem', marginTop: '3rem' }}>
        <Col span={8}>
          <Button type='link' style={{ color: '#6D7970' }} onClick={history.goBack}>
            <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
          </Button>
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
              onChange={(e) => setSearchTerm(e.target.value)}
              suffix={<SearchOutlined />}
              size="large"
            />
          </Col>
        </Row>
        <Row className='container_item' style={{ margin: 0, justifyContent: 'start' }}>
          <Col>
            <Title level={4} className='titulo-catalogos' style={{ textAlign: "left" }}>Favoritas</Title>
          </Col>
        </Row>
        {loading ?
          <Spin tip="Carregando..." size="large" alignitems={'center'} className='loading' /> :
          plantafavoritada.length < 1 ?
            <div className='mensagem-jardim'>
              <Image
                src={folha}
                preview={false}
                className='img-folha'
              />
              <Text style={{ color: '#6D7970', marginBottom: '1rem' }}>Você ainda não adicionou nenhuma plantinha aos favoritos..</Text>
              <Row className='container_step' style={{ alignContent: 'center', marginBottom: '20px' }}>
                <Col>
                  <Button
                    type="primary"
                    className='button-catalogo'
                    onClick={history.goBack}
                  >
                    Ir para o Catálogo
                  </Button>
                </Col>
              </Row>
            </div>
            :
            <Row className='container_item' style={{ marginBottom: '6rem' }}>
              {filteredPlantas.map((item, index) => (
                <Col key={index} style={{ marginBottom: '1rem' }}>
                  <Link to={`/planta/${item.id}`}><Card className="card-catalogo-style-card" bordered={false} style={{ color: "FFFFFF", }}>
                    <img
                      src={item.image}
                      className='img-catalogo-card'
                    />
                    <Col>
                      <Text style={{ color: '#6D7970' }} className='nome-planta'>{item.nome}</Text>
                    </Col>
                  </Card></Link>
                </Col>
              ))}
            </Row>

        }
        <MenuComponent />
      </Content>
    </Layout >
  );
}
export default Favoritos;