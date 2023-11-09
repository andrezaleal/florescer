import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Row,
  Col,
  Image,
  Card,
} from 'antd';

import './styles.css';
import cactus from "../../assets/cacto.png"
import cardVerde from "../../assets/crad-medio-verde.png"
import minhasPlantasIcon from '../../assets/minhas-plantas-icon.svg'

const CardPlanta = ({ nome }) => {
  const { Text } = Typography;
  return (
    <>
      <Row className='container_item' style={{ alignContent: 'center' }}>
        <Col>
          <Card className="card-catalogo-style" bordered={false} style={{ backgroundImage: `url(${cardVerde})`, color: "FFFFFF",}}>
            <Image
              src={minhasPlantasIcon}
              preview={false}
              className='icon-catalogo'
            />
            <Image
              src={cactus}
              preview={false}
              className='img-catalogo'
            />
          </Card>
          <Row className='container_item' style={{ alignContent: 'center' }}>
            <Col>
            <Text style={{ color: '#6D7970'}} className='nome-planta'>{nome}</Text>
            </Col>
            </Row>
        </Col>
      </Row>
    </>
  );
}

CardPlanta.propTypes = {
  nome: PropTypes.string.isRequired,
};

export default CardPlanta;