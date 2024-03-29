import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Image, Row, Col, Button } from 'antd';
import './style.css';
import folha from "../../assets/folha.svg"

const ModalInfo = ({ isOpen, onClose }) => {
  const handleOk = () => {
    onClose();
  };
  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal visible={isOpen} onOk={handleOk}
    onCancel={handleCancel}
    footer={[
      <Row style={{ justifyContent: 'center'}}>
      <Button key="ok" type="primary" onClick={handleOk} className='button-modal'>
        OK
      </Button>
      </Row>
    ]}
     >
      <Row style={{ justifyContent: 'center', marginBottom:'3rem' }}>
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
        <p className='mensagem'>É necessário que você selecione uma opção para avançar!</p>
        </Col>
      </Row>
    </Modal>
  );
};

ModalInfo.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  onClose: PropTypes.func.isRequired, 
};

export default ModalInfo;
