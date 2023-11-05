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
  const { user } = useContext(AuthContext);
  const [plantasId, setPlantasId] = useState([]);
  const [favoritarPlanta, setFavoritarPlanta] = useState(false);

  async function bookMarkPlant(e) {
    const favoritosRef = query(
      collection(db, "favoritos"),
      where("userId", "==", user.uid),
      where("nomePlanta", "==", plantasId.titulo)
    );

    const favoritosSnap = await getDocs(favoritosRef);
    const numeroDeFavoritos = favoritosSnap.size;

    if (numeroDeFavoritos === 0) {
      await addDoc(collection(db, "favoritos"), {
        nomePlanta: plantasId.titulo,
        image_mini: plantasId.mini_image,
        image: plantasId.image,
        userId: user.uid,
        plantaId: id,
        createdAt: new Date(),
      })
        .then(() => {
          message.success("Sua plantinha foi adicionada aos favoritos!");
          updateBookMarkPlant(true); // Atualize o estado para "true"
        })
        .catch((error) => {
          console.error(error);
          message.error("Ocorreu um erro ao tentar adicionar sua planta aos favoritos.");
        });

    } else {
      const docId = favoritosSnap.docs[0].id;
      const favoritoDocRef = doc(db, "favoritos", docId);

      await deleteDoc(favoritoDocRef)
        .then(() => {
          message.success("Sua plantinha foi removida dos favoritos!");
          updateBookMarkPlant(false); // Atualize o estado para "false"
        })
        .catch((error) => {
          console.error(error);
          message.error("Ocorreu um erro ao remover sua planta dos favoritos!");
        });
    }
   
  }

  async function loadPlantaId(id) {
    try {
      const plantaDoc = await getDoc(doc(db, 'catalogo', id));
      if (plantaDoc.exists()) {
        const plantaData = plantaDoc.data();
        const lista = {
          id: id,
          titulo: plantaData.titulo,
          adubacao: plantaData.adubacao,
          clima: plantaData.clima,
          cronograma: plantaData.cronograma,
          favoritado: plantaData.favoritado,
          curiosidade: plantaData.curiosidade,
          descricao: plantaData.descricao,
          facil_cuidado: plantaData.facil_cuidado,
          image: plantaData.catalogo_image,
          mini_image: plantaData.mini_image,
          pequena: plantaData.pequena,
          popularidade: plantaData.popularidade,
          vasos: plantaData.vasos,
        };
        setPlantasId(plantaData);
        setFavoritarPlanta(plantaData.favoritado);
        setLoadPlanta(false);
      } else {
        console.log("Planta Não encontrada");
      }
    } catch (error) {
      console.error(error);
      setLoadPlanta(false);
    }
  }

  const updateBookMarkPlant = async (newFavoritado) => {
    setFavoritarPlanta(newFavoritado);

    const plantaRef = doc(db, 'catalogo', id);
    if (user) {
      try {
        await updateDoc(plantaRef, {
          favoritado: newFavoritado,
        });
        console.log(`A planta ${plantasId.titulo} foi favoritada. Estado atual: ${newFavoritado}`);
      } catch (error) {
        console.error('Erro ao atualizar o favorito no banco de dados:', error);
      }
    }
  };

  useEffect(() => {
    loadPlantaId(id)
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

