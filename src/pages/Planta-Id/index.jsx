import React, { useState, useContext, useEffect } from 'react'
import {
  Layout,
  Typography,
  Row,
  Col,
  Button,
  Image,
  Input,
  Skeleton,
  message,

} from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import locale from 'antd/es/date-picker/locale/pt_BR';
import './styles.css'
import { ArrowLeftOutlined } from '@ant-design/icons';
import { FiTrash2 } from "react-icons/fi";
import "antd/dist/antd.css";
import MenuComponent from '../../components/MenuComponent';
import cacto from "../../assets/cacto.png";
import { db } from '../../services/firebaseConnections';
import { updateDoc, doc, getDoc } from 'firebase/firestore';
import { AuthContext } from '../../services/auth';
import ModalExcluir from '../../components/Modal/ModalExcluir';


const { Title, Text } = Typography;
const { Content } = Layout;

const PlantaId = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const [loadPlanta, setLoadPlanta] = useState(true);
  const { user } = useContext(AuthContext);
  const [nomePlantaSelected, setNomePlantaSelected] = useState('');
  const [idadePlanta, setIdadePlanta] = useState('')


  async function loadId(id) {
    try {
      const plantaDoc = await getDoc(doc(db, 'plantas', id));
      if (plantaDoc.exists()) {
        const plantaData = plantaDoc.data();
        const lista = {
          id: id,
          nome: plantaData.nomePlanta,
          idade: plantaData.idade,
          createdAt: plantaData.createdAt,
        };
        setNomePlantaSelected(plantaData.nomePlanta);
        setIdadePlanta(plantaData.idade);
        setLoadPlanta(false);
      } else {
        console.log("Planta Não encontrada");
      }
    } catch (error) {
      console.error(error);
      setLoadPlanta(false);
    }
  }

  async function updatePlant(e) {
    e.preventDefault(); 
    if (nomePlantaSelected != '' && idadePlanta != '') {
      const docRef = doc(db, "plantas", id)
      await updateDoc(docRef, {
        nomePlanta: nomePlantaSelected,
        idade: idadePlanta,
        userId: user.uid
      },)
      
        .then(() => {
          message.success('Os dados da sua plantinha foram atualizados com sucesso!');
          history.replace('/minhas plantas');
        })
        .catch((error) => {
          message.error("Ocorreu um erro ao tentar atualizar os dados da sua plantinha!");
          console.log(error);
        })
    } else {
      message.info("Você não pode deixar nenhum campo em branco!");
    }
  }

  useEffect(() => {

    loadId(id);
  }, [id]);


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };


  return (
    <Layout className="layout margin-page-add-planta" >
      <Row className='container_item' style={{ justifyContent: 'flex-start', alignItems: 'center', marginBottom: "0" }}>
        <Col span={6}>
          <Button type='link' style={{ color: '#6D7970' }} onClick={history.goBack}>
            <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
          </Button>
        </Col>
        <Col span={18}>
          <Title className='titulo' style={{ margin: "0", display: 'flex' }}>Configurações</Title>
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
            <Text className='informações'>Editar Informações</Text>
          </Col>
        </Row>
        <div className='div-form'>
          <form onSubmit={updatePlant}>
            {loadPlanta ? <Skeleton active /> :
              <div>
                <Row className='container_item row-input'>
                  <Text style={{ fontSize: '1rem', color: '#6D7970' }}>Nome</Text><br />
                  <Input type="text"
                    size="large"
                    value={nomePlantaSelected}
                    placeholder='Abigail'
                    onChange={(e) => setNomePlantaSelected(e.target.value)}
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
                    onChange={(e) => setIdadePlanta(e.target.value)}
                    type="text"
                    value={idadePlanta}
                    style={{
                      width: '85vw',
                      color: '#6D7970',
                      borderRadius: '16px',
                      border: '1px solid #6D7970',
                      backgroundColor: 'transparent'
                    }}
                  />
                </Row>
              </div>
            }
            <Row className='container-item' style={{ marginTop: '2rem', justifyContent: 'center' }}>
              <Col>
                <button type="submit" className='button-alteracoes'>Salvar Alterações</button>
              </Col>
            </Row>
          </form>
        </div>
        <Row className='container_item' style={{ textAlign: 'left', justifyContent: 'start', borderBottom: 'solid #75B47B' }}>
          <Col>
            <Text className='informações'>Excluir planta</Text>
          </Col>
        </Row>
        <Row className='container_item row-excluir' onClick={openModal}>
          <Col style={{ display: 'flex' }}>
            <FiTrash2 className='icon-delete' />
            <Text className='text-delete'>Não tenho mais essa planta</Text>
          </Col>
        </Row>
      </Content>
      <ModalExcluir isOpen={isModalOpen} onClose={closeModal} />
      <MenuComponent />
    </Layout >
  );
};


export default PlantaId;

