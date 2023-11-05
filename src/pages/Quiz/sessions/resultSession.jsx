import React, { useEffect, useState } from 'react';
import {
  Row,
  Col,
  Button,
  Image,
  Layout,
  Typography,
  Spin,
} from 'antd';
import { Link } from 'react-router-dom';
import MenuComponent from '../../../components/MenuComponent';
import { db } from '../../../services/firebaseConnections';
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

const ResultSession = () => {
  const { Title, Text } = Typography;
  const { Content } = Layout;
  const [currentResponse, setCurrentResponse] = useState();
  const [resultado, setResultado] = useState();
  const [loading, setLoading] = useState(true);

  const allQuiz = collection(db, "user_responses");
  const userResponsesQuery = query(allQuiz, orderBy("createdAt", "desc"), limit(1));


  async function loadLatestUserResponse() {
    try {
      const querySnapshot = await getDocs(userResponsesQuery);

      if (querySnapshot.empty) {
        console.log("Nenhuma resposta de usuário encontrada");
        return;
      }
      const latestResponse = querySnapshot.docs[0].data().responses;
      console.log("Resposta mais recente de usuário:", latestResponse);

      setCurrentResponse(latestResponse);
    } catch (error) {
      console.error("Erro ao carregar a resposta mais recente de usuário:", error);
    }
  }

  async function loadResults() {
    if (currentResponse) {
      try {
        const resultadosQuery = collection(db, "resultados");
        const querySnapshot = await getDocs(resultadosQuery);

        const resultadosData = [];

        querySnapshot.forEach((doc) => {
          const resultadoData = doc.data();
          resultadosData.push({
            id: doc.id,
            plantas: resultadoData.plantas,
            message: resultadoData.message,
            image: resultadoData.image,
            map: resultadoData.map,
          });
        });

        if (resultadosData.length === 0) {
          console.log("Nenhuma pergunta encontrada");
          return;
        }
        let maior = 0;
        let similar = -1;
        const result = resultadosData.map((res, index) => {
          const oi = res.map ? res?.map.filter((m, i) => {
            return m == currentResponse[i]
          }) : []
          similar = oi.length > maior ? index : similar,
            maior = oi.length > maior ? oi.length : maior;
        });
        if (similar >= 0) {
          setResultado(resultadosData[similar]);
          setLoading(false);
        }

      } catch (error) {
        console.error("Erro ao carregar perguntas:", error);
      }
    }
  }

  useEffect(() => {
    loadLatestUserResponse();

  }, [])

  useEffect(() => {
    loadResults();
  }, [currentResponse])

  return (
    <Layout className="layout" >
      <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
        <Row className='container_step'>
          {loading ? <Spin tip="Carregando..." size="large" alignitems={'center'} className='loading' /> :
            <div>
              <Title className='titulo'>Resultado</Title>
              <Row className='container_step' style={{ padding: '0 15px', textAlign: 'center', alignContent: 'center' }}>
                <Text className='text-quiz'>Essa é as plantinha mais adequada para o seu perfil:</Text>
              </Row>
              <Row className='container_item'>
                <Col style={{ textAlign: 'center' }}>
                  <Image
                    src={resultado?.image}
                    preview={false}
                    className='img-resultado-quiz'
                  />
                </Col >
                <Row className='container_item'>
                  <Title level={3}>{resultado?.plantas}</Title>
                </Row>
                <Row className='container_item' style={{ margin: '0' }}>
                  <Text className='text-quiz' style={{ textAlign: 'justify', padding: '0 10px' }}>{resultado?.message}</Text>
                </Row>
              </Row>
              <Row className='container_step' style={{ alignContent: 'center', marginBottom: '20px' }}>
                <Col>
                  <Link to='/catalogo'
                  ><Button
                    type="primary"
                    className='button-catalogo'
                  >
                      Ir para o Catálogo
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>}
        </Row>
        <MenuComponent />
      </Content>
    </Layout>

  )
};
export default ResultSession;