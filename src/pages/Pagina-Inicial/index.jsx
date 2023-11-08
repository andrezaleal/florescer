import React, { useContext, useState, useEffect } from 'react'
import {
  Layout,
  Typography,
  Card,
  Row,
  Col,
  Image,
  Skeleton,
} from 'antd';
import { Link } from 'react-router-dom';
import { getDocs, collection, query, where, documentId } from 'firebase/firestore';
import { AuthContext } from '../../services/auth';
import { db } from '../../services/firebaseConnections';
import cardRosa from "../../assets/card-rosa.png";
import cardverde from "../../assets/card-verde.png"
import catalogoIcon from "../../assets/catalogo-icon.svg";
import minhasPlantasIcon from "../../assets/minhas-plantas-icon.svg";
import quizIcon from "../../assets/quiz-icon.svg";
import logoutIcon from "../../assets/logout-icon.svg";
import './styles.css'
import MenuComponent from '../../components/MenuComponent';


const { Title, Text } = Typography;
const { Content } = Layout;


const PaginaInicial = () => {

  const { user } = useContext(AuthContext);

  const { logout } = useContext(AuthContext);
  const [planta, setPlanta] = useState([]);
  const [loading, setLoading] = useState(true);
  const allPlants = collection(db, "catalogo");

  const [plantafavoritada, setPlantaFavoritada] = useState([]);
  const [loadingFavoritos, setLoadingFavoritos] = useState(true);
  const allPlantsMarkBook = collection(db, "catalogo");
  const userPlantsQuery = query(allPlantsMarkBook, where(documentId(), "in", user.favoritos));


  async function handleLogout() {
    await logout();
  }

  function shuffleArray(array) {
    const arrayCopy = [...array];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
  }

  async function loadPlantasPopulares() {
    try {
      const querySnapshot = await getDocs(allPlants);
      const lista = [];
      querySnapshot.forEach((doc) => {
        const popularidade = doc.data().popularidade;
        if (popularidade === 3) {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            image: doc.data().mini_image,
            planta: popularidade,
          });
        }
      });
      if (lista.length === 0) {
        console.log("Nenhuma planta foi encontrada");
        setLoading(false);
        return;
      }
      const listaEmbaralhada = shuffleArray(lista);
      const tresPlantas = listaEmbaralhada.slice(0, 3);

      setPlanta(tresPlantas);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  async function loadPlantasMarkBook() {
    const querySnapshot = await getDocs(userPlantsQuery)
      .then((snapshot) => {
        const lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            nome: doc.data().titulo,
            image: doc.data().mini_image,
          })
        })
        if (snapshot.docs.size === 0) {
          console.log("Nenhuma Planta Encontrada")
          setLoading(false);
          return;
        }
        const tresPlantas = lista.slice(0, 3);
        tresPlantas.sort((a, b) => b.createdAt - a.createdAt);
        setPlantaFavoritada(tresPlantas);
        setLoadingFavoritos(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingFavoritos(false);
      })
  }

  console.log(plantafavoritada);

  useEffect(() => {
    loadPlantasPopulares();
    loadPlantasMarkBook();
  }, []);


  return (
    <Layout className="layout margin-page">
      <Image
        src={logoutIcon}
        onClick={handleLogout}
        preview={false}
        className='icon-card'
        style={{ width: '1.5rem', marginRight: '15px' }}
      />
      <Title className='titulo-page'>FLORESCER</Title>
      <Content className="site-layout-content" style={{ overflow: 'hidden', padding: '0' }}>
        <div>
          <Row className='container_step'>
            <Row className='container_item'>
              <Col>
                <div className="site-card-border-less-wrapper" style={{ paddingTop: '0' }}>
                  <Link to='/catalogo'>
                    <Card className="card-style" bordered={false} style={{ backgroundImage: `url(${cardRosa})`, color: "FFFFFF" }}>
                      <Image
                        src={catalogoIcon}
                        preview={false}
                        className='icon-card'
                      />
                      <Title className="card-title" level={3} style={{ color: "#FFFFFF" }}>Catálogo</Title>
                      <Text className="descricao-card" style={{ color: "#FFFFFF" }}>Vasculhe alguns tipos de plantas</Text>
                    </Card>
                  </Link>
                  <Link to='/minhas plantas'><Card className="card-style" bordered={false} style={{ backgroundImage: `url(${cardverde})`, color: "FFFFFF" }}>
                    <Image
                      src={minhasPlantasIcon}
                      preview={false}
                      className='icon-card'
                    />
                    <Title className="card-title" level={3} style={{ color: "#FFFFFF" }}>Minhas Plantas</Title>
                    <Text className="descricao-card" style={{ color: "#FFFFFF" }}>Cuide, analise e conheça mais suas plantas</Text>
                  </Card>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row className='container_item' style={{ margin: 0, justifyContent: 'start' }}>
              <Col>
                <Title level={2} className='titulo-sessao' style={{ textAlign: "left", marginLeft: '2rem', marginBottom: '1rem' }}>PLANTAS POPULARES</Title>
              </Col>
            </Row>
            {loading ? < Skeleton active /> :
              <Row className='container_item row-mini-cards' >
                {planta.map((item, index) => (
                  <Col className='col-mini-card' key={index}>
                    <Link to={`/planta/${item.id}`}><Card className="card-mini" bordered={false} style={{ backgroundImage: `url(${item.image})`, backgroundSize: "30vw, 2vh, contain", backgroundRepeat: 'no-repeat' }} /></Link>
                    <Col>
                      <Text className='text-mini-card' style={{ color: '#6D7970' }}>{item.titulo}</Text>
                    </Col>
                  </Col>
                ))}
              </Row>
            }
            <Row className='container_item' style={{ margin: '0', marginBottom: '1rem' }}>
              <Col>
                <div className="site-card-border-less-wrapper">
                  <Link to="/intro-quiz"><Card className="card-style" bordered={false} style={{ backgroundImage: `url(${cardRosa})`, color: "FFFFFF" }}>
                    <Image
                      src={quizIcon}
                      preview={false}
                      className='icon-card'
                    />
                    <Title className="card-title" level={3} style={{ color: "#FFFFFF" }}>Quiz</Title>
                    <Text className="descricao-card" style={{ color: "#FFFFFF" }}>Descubra qual a melhor planta para a sua casa</Text>
                  </Card></Link>
                </div>
              </Col>
            </Row>
            <Row className='container_item' style={{ margin: '0', justifyContent: 'start' }}>
              <Col>
                <Title level={2} className='titulo-sessao' style={{ marginLeft: '2rem' }}>PLANTAS FAVORITAS</Title>
              </Col>
            </Row>
            {loadingFavoritos ? < Skeleton active /> :
            plantafavoritada.length < 1 ? 
            <div className='mensagem-jardim-favoritos'>
              <Text style={{ color: '#6D7970', marginBottom: '1rem' }}>Você ainda não adicionou nenhuma plantinha aos favoritos..</Text>
            </div> 
            :
              <Row className='container_item row-mini-cards'>
                {plantafavoritada.map((item, index) => (
                  <Col className='col-mini-card' key={index}>
                    <Link to={`/planta/${item.id}`}><Card className="card-mini" bordered={false} style={{ backgroundImage: `url(${item.image})`, backgroundSize: "30vw, 2vh, contain", backgroundRepeat: 'no-repeat' }} /></Link>
                    <Col>
                      <Text className='text-mini-card' style={{ color: '#6D7970' }}>{item.nome}</Text>
                    </Col>
                  </Col>
                ))}
              </Row>
            }
          </Row>
        </div>
        <MenuComponent />
      </Content>
    </Layout >
  )
};

export default PaginaInicial;