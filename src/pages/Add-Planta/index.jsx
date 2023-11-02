import React, { useState, useContext } from 'react'
import {
  Layout,
  Typography,
  Row,
  Col,
  Button,
  Image,
  Input,
  message,
} from 'antd';
import { useHistory } from 'react-router-dom';
import locale from 'antd/es/date-picker/locale/pt_BR';
import './styles.css'
import { ArrowLeftOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import MenuComponent from '../../components/MenuComponent';
import cacto from "../../assets/cacto.png";
import { db } from '../../services/firebaseConnections';
import { addDoc, collection } from 'firebase/firestore';
import { AuthContext } from '../../services/auth';


const { Title, Text } = Typography;
const { Content } = Layout;

const AddPlanta = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const history = useHistory();
  const { user } = useContext(AuthContext);

  async function handleRegisterPlant(e) {
    e.preventDefault();
    if (nome != '' && idade != '') {
      await addDoc(collection(db, "plantas"), {
        nomePlanta: nome,
        idade: idade,
        userId: user.uid,
        createdAt: new Date(),
      }).then(() => {
        setNome('');
        setIdade('');
        message.success("Sua plantinha foi adicionada ao jardim!");
      }).catch((error) => {
        console.log(error);
        message.error("Ocorreu um erro ao adicionar sua planta!");
      })

    } else {
      message.info("Preencha todos os campos para adicionar sua plantinha!");
    }
  }

  return (
    <Layout className="layout margin-page-add-planta" >
      <Row className='container_item' style={{ justifyContent: 'flex-start', alignItems: 'center', marginBottom: "0" }}>
        <Col span={6}>
          <Button type='link' style={{ color: '#6D7970' }} onClick={history.goBack}>
            <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
          </Button>
        </Col>
        <Col span={18}>
          <Title className='titulo' style={{ margin: "0", display: 'flex' }}>Adicionar Planta</Title>
        </Col>
      </Row>

      <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
        <Row className='container_item'>
          <Col>
            <Image
              src={cacto}
              preview={false}
              className='planta'
            />
          </Col>
        </Row>
        <Row className='container_item' style={{ textAlign: 'left', justifyContent: 'start', borderBottom: 'solid #75B47B' }}>
          <Col>
            <Text className='informações'>Informações</Text>
          </Col>
        </Row>
        <div>
          <form onSubmit={handleRegisterPlant}>
            <Row className='container_item row-input'>
              <Text style={{ fontSize: '1rem', color: '#6D7970' }}>Nome</Text><br />
              <Input type="text"
                size="large"
                value={nome}
                placeholder='Abigail'
                onChange={(e) => setNome(e.target.value)}
                style={{
                  width: '85vw',
                  color: '#6D7970',
                  borderRadius: '16px',
                  border: '1px solid #6D7970'
                }}
              />
            </Row>
            <Row className='container_item row-input'>
              <Text style={{ fontSize: '1rem', color: '#6D7970' }}>Idade</Text><br />
              <Input
                size="large"
                placeholder='Selecione uma data'
                locale={locale}
                onChange={(e) => setIdade(e.target.value)}
                type="text"
                value={idade}
                style={{
                  width: '85vw',
                  color: '#6D7970',
                  borderRadius: '16px',
                  border: '1px solid #6D7970',
                  backgroundColor: 'transparent'
                }}
              />
            </Row>

            <Row className='container-item' style={{ marginTop: '2rem', justifyContent: 'center' }}>
              <Col>
                <button
                  type="submit"
                  style={{
                    background: '#EA7E84',
                    border: 'none',
                    borderRadius: '16px',
                    width: '44vw',
                    height: '3rem',
                    boxShadow: '1px 3px 3px 1px #EA7E84',
                    fontSize: '1.2rem',
                    color: 'white',
                  }}
                >
                  Adicionar
                </button>
              </Col>

            </Row>
          </form>
        </div>
      </Content>
      <MenuComponent />
    </Layout >
  );
};


export default AddPlanta;

