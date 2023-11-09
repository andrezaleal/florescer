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

const CardCatalogo = ({ nome, img, card }) => {
  const { Text } = Typography;
  return (
    <>
      <Row className='container_item' style={{ alignContent: 'center' }}>
        <Col>
          <Card className="card-catalogo-style" bordered={false} style={{ backgroundImage: `url(${card})`, color: "FFFFFF",}}>
            <Image
              src={img}
              preview={false}
              className='img-catalogo'
            />
             <Text style={{ color: '#6D7970'}} className='titulo-catalogo'>{nome}</Text>
          </Card>
        </Col>
      </Row>
    </>
  );
}

CardCatalogo.propTypes = {
  nome: PropTypes.string.isRequired,
  card: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CardCatalogo;