import React, { useState, useEffect, useContext } from 'react'
import {
  Layout,
  Typography,
  Input,
  Row,
  Col,
  Button,
  Tooltip,
  Image,
  Spin,
} from 'antd';
import { useHistory, Link } from 'react-router-dom';
import './styles.css';
import { ArrowLeftOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

import { getDocs, collection, doc, where, query } from 'firebase/firestore';
import { db } from '../../services/firebaseConnections';
import { AuthContext } from '../../services/auth';

import CardPlanta from '../../components/Card-Plantas';
import folha from "../../assets/folha.svg";
import MenuComponent from '../../components/MenuComponent';

const { Title, Text } = Typography;
const { Content } = Layout;

const allPlants = collection(db, "plantas");
const MinhasPlantas = () => {
  const { user } = useContext(AuthContext);
  const userPlantsQuery = query(allPlants, where("userId", "==", user.uid));
  const [plantas, setPlantas] = useState([]);
  const [loadPlantas, setLoadPlantas] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const history = useHistory();

  useEffect(() => {
    async function loadPlantas() {
      const querySnapshot = await getDocs(userPlantsQuery)
        .then((snapshot) => {
          const lista = [];
          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              nome: doc.data().nomePlanta,
              idade: doc.data().idade,
              createdAt: doc.data().createdAt,
            })
          })
          if (snapshot.docs.size === 0) {
            console.log("Nenhuma Planta Encontrada")
            setLoadPlantas(false);
            return;
          }
          lista.sort((a, b) => b.createdAt - a.createdAt);
          setPlantas(lista);
          setLoadPlantas(false);
        })
        .catch((error) => {
          console.log(error);
          setLoadPlantas(false);
        })   
    }
    loadPlantas()
  }, []);

  const filteredPlantas = plantas.filter((planta) => {
    return planta.nome.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Layout className="layout" >
      <Row className='container_item' style={{ justifyContent: 'flex-start', marginBottom: '2rem', marginTop: '3rem' }}>
        <Col span={6}>
          <Button type='link' style={{ color: '#6D7970' }} onClick={history.goBack}>
            <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
          </Button>
        </Col>
        <Col span={18}>
          <Title className='titulo' style={{ margin: "0", display: 'flex' }}>Minhas Plantas</Title>
        </Col>
      </Row>
      <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
        <Row className='container_item'>
          <Col>
            <Input
              placeholder="Pesquisar"
              value={searchTerm}
              style={{
                width: '85vw',
                background: 'none',
              }}
              onChange={(e) => setSearchTerm(e.target.value)}
              suffix={<SearchOutlined />}
              size="large"
            />
          </Col>
          <Row className='container_step' style={{ flexDirection: 'initial', justifyContent: 'start' }}>
            {
              loadPlantas ?
                <Spin tip="Carregando..." size="large" alignitems={'center'} className='loading' />
                : <>
                  {plantas.length < 1
                    ?
                    <div className='mensagem-jardim'>
                      <Image
                        src={folha}
                        preview={false}
                        className='img-folha'
                      />
                      <Text style={{ color: '#6D7970' }}>Você ainda não adicinou nenhuma plantinha ao seu jardim..</Text>
                    </div>
                    :
                    filteredPlantas.map((item, index) => (
                      <div key={index}>
                        <Link to={`/planta-id/${item.id}`}><CardPlanta nome={item.nome} /></Link>
                      </div>
                    ))}

                </>
            }
          </Row>
        </Row>
        <Tooltip title="add">
            <Link to="/adicionar planta">
              <Button className='button-add' type="primary" size="large" shape="circle" icon={<PlusOutlined className='icon-add' />} />
            </Link>
          </Tooltip>
      </Content >
      <MenuComponent/>
    </Layout >
  );
};

export default MinhasPlantas;

