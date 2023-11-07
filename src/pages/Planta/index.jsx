import React, { useState, useEffect, useContext } from 'react'
import {
  Layout,
  Typography,
  Row,
  Col,
  Button,
  Image,
  Card,
  Collapse,
  message,
  Spin,
} from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import './styles.css'
import { ArrowLeftOutlined, DownOutlined } from '@ant-design/icons';
import calendar from "../../assets/calendar_icon.svg";
import adubagem from "../../assets/adubagem_icon.svg";
import vasos from "../../assets/vasos_icon.svg";
import clima from "../../assets/clima_icon.svg";
import favoritado from "../../assets/estrelaPreenchida.svg";
import favoritar from "../../assets/estrela.svg";
import MenuComponent from '../../components/MenuComponent';
import { db } from '../../services/firebaseConnections';
import { doc, getDoc, query, addDoc, getDocs, collection, where, deleteDoc, updateDoc } from 'firebase/firestore';
import { AuthContext } from '../../services/auth';

const { Title, Text } = Typography;
const { Content } = Layout;
const { Panel } = Collapse;

const genExtra = () => (
  <DownOutlined id='icon-collapse'
    onClick={() => {
      document.getElementById("icon-collapse").style.transform = "rotate(180deg);";
    }}
  />
);

const Planta = () => {
  const history = useHistory();
  const { id } = useParams();
  const [loadPlanta, setLoadPlanta] = useState(true);
  const { user, setUser } = useContext(AuthContext);
  const [plantasId, setPlantasId] = useState([]);
  const [favoritarPlanta, setFavoritarPlanta] = useState(false);

  async function bookMarkPlant(e) {
    const userDb = doc(db, "users", user.uid);
    if (!user.favoritos.includes(id)) {
      user.favoritos.push(id);
      await updateDoc(userDb, user)
        .then(() => {
          message.success("Sua plantinha foi adicionada aos favoritos!");
          setUser(user);
          setFavoritarPlanta(true);
        })
        .catch((error) => {
          console.error(error);
          message.error("Ocorreu um erro ao tentar adicionar sua planta aos favoritos.");
        });

    } else {
      const favoritado = user.favoritos.filter(fav => fav !== id)

      await updateDoc(userDb, { ...user, favoritos: favoritado })
        .then(() => {
          message.success("Sua plantinha foi removida dos favoritos!");
          setUser({ ...user, favoritos: favoritado });
          setFavoritarPlanta(false);
        })
        .catch((error) => {
          console.error(error);
          message.error("Ocorreu um erro ao tentar remover sua planta aos favoritos.");
        });
    }
    console.log(user);
  }

  async function loadPlantaId(id) {
    try {
      const plantaDoc = await getDoc(doc(db, 'catalogo', id));
      if (plantaDoc.exists()) {
        const plantaData = plantaDoc.data();
        setPlantasId(plantaData);
        setLoadPlanta(false);
      } else {
        console.log("Planta Não encontrada");
      }
    } catch (error) {
      console.error(error);
      setLoadPlanta(false);
    }
  }

  useEffect(() => {
    loadPlantaId(id)
    setFavoritarPlanta(user.favoritos.includes(id))
  }, [id, user])

  return (
    <Layout className="layout margin-page-planta" >
      <Row className='container_item' style={{ justifyContent: 'flex-start', marginBottom: "0" }}>
        <Col span={4}>
          <Button type='link' style={{ color: '#6D7970' }} onClick={history.goBack}>
            <ArrowLeftOutlined style={{ fontSize: '1.8rem', padding: 0 }} />
          </Button>
        </Col>

        <Col span={14}>
          <Title className='titulo' style={{ marginTop: "0", display: 'flex', justifyContent: 'center' }}>{plantasId.titulo}</Title>
        </Col>
        <Col span={6} style={{ margin: '0' }}>

          <Image
            src={!favoritarPlanta ? favoritar : favoritado}
            preview={false}
            className='icon-estrela'
            onClick={bookMarkPlant}
          />
        </Col>

      </Row>
      {loadPlanta ? <Spin tip="Carregando..." size="large" alignitems={'center'} className='loading' /> :
        <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
          <Row className='container_item'>
            <Col>
              <Card className='card-planta-style'>
                <Text className='text-planta'>{plantasId.curiosidade}</Text>
              </Card>
              <Image
                src={plantasId.catalogo_image}
                preview={false}
                className='planta'
              />
            </Col>
          </Row>
          <Row className='container_item' style={{ padding: '0 15px', textAlign: 'justify' }}>
            <Col>
              <Text className='sobre-planta'>{plantasId.descricao}</Text>
            </Col>
          </Row>
          <Row className='container_item' >
            <Collapse className='sobre-planta'
              bordered={false}
              expandIcon={() => <Image className='icon-collapse' src={calendar} />}
              style={{
                width: '100%',
                backgroundColor: 'transparent'
              }}>
              <Panel extra={genExtra()} header="Cronograma" key="1" >
                <Text className='sobre-planta'>{plantasId.cronograma}</Text>
              </Panel>
            </Collapse>
            <Collapse
              className='sobre-planta'
              bordered={false}
              expandIcon={() => <Image className='icon-collapse' src={adubagem} />}
              style={{
                width: '100%',
                backgroundColor: 'transparent'
              }}>
              <Panel extra={genExtra()} header="Adubagem" key="1" >
                <Text className='sobre-planta'>{plantasId.adubacao}</Text>
              </Panel>
            </Collapse>
            <Collapse
              className='sobre-planta'
              bordered={false}
              expandIcon={() => <Image className='icon-collapse' src={vasos} />}
              style={{
                width: '100%',
                backgroundColor: 'transparent'
              }}>
              <Panel extra={genExtra()} header="Vasos" key="1" >
                <Text className='sobre-planta'>{plantasId.vasos}</Text>
              </Panel>
            </Collapse>
            <Collapse
              className='sobre-planta'
              bordered={false}
              expandIcon={() => <Image className='icon-collapse' src={clima} />}
              style={{
                width: '100%',
                backgroundColor: 'transparent'
              }}>
              <Panel extra={genExtra()} header="Clima Ideal" key="1" >
                <Text className='sobre-planta'>{plantasId.clima}</Text>
              </Panel>
            </Collapse>

          </Row>
        </Content>
      }
      <MenuComponent />
    </Layout >
  );
};
export default Planta;

