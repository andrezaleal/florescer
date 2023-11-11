import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Image, Row, Col, Button, message } from 'antd';
import './style.css';
import { useHistory, useParams } from 'react-router-dom';
import { doc, deleteDoc } from 'firebase/firestore';
import folha from "../../assets/folha.svg"
import { db } from '../../services/firebaseConnections';


const ModalExcluir = ({ isOpen, onClose }) => {
  const { id } = useParams();
  const history = useHistory();

  async function excluirPlantaPorId(idPlanta) {
    const plantaRef = doc(db, 'plantas', idPlanta);

    try {
      await deleteDoc(plantaRef);
      message.success('Sua plantinha foi removida do seu jardim com sucesso!');
      history.replace('/minhas plantas');
    } catch (error) {
      message.error('Ocorreu um erro ao tentar excluir sua planta. Tente novamente mais tarde.');
      console.error(`Erro ao excluir a planta com ID`, error);
    }
  }

  const handleOk = () => {
    onClose();
    excluirPlantaPorId(id);
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal visible={isOpen} onOk={handleOk} onCancel={handleCancel}
      footer={[
        <Row style={{ justifyContent: 'center' }}>
          <Button key="sim" type="text" onClick={handleOk} className='button-modal-confirm'>
            Sim
          </Button>
          <Button key="Cancelar" type="text" onClick={handleCancel} className='button-modal-cancel'>
            Cancelar
          </Button>
        </Row>
      ]}
    >
      <Row style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
        <Col>
          <Image
            src={folha}
            preview={false}
            className='img-folha'
          />
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
        <Col>
          <p className='mensagem'>Vamos sentir falta da sua plantinha... Tem certeza que deseja excluir?</p>
        </Col>
      </Row>
    </Modal>
  );
};
ModalExcluir.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalExcluir;
