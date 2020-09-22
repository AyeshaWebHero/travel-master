import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Blog = () => {
  return (
    <div>
      <h1>Places you need to discover while your stay in Bangladesh!</h1>
      <Container>
  <Row>
    <Col xs={6} >
      <Image src="https://isbsp.daffodilvarsity.edu.bd/wp-content/uploads/2018/11/rivers.jpg" thumbnail />
    </Col>
    <Col xs={5}>
      <Image src="https://cdn.pixabay.com/photo/2019/04/13/00/07/boy-4123600__340.jpg" fluid />
    </Col>
    <Col xs={6}>
      <Image src="https://avijatrik.org/wp-content/uploads/2019/06/28052066210_75de6a9fd5_o-870x555.jpg" thumbnail />
    </Col>
    <Col xs={6}>
      <Image src="https://live.staticflickr.com/5627/31199596321_7f295afcca_b.jpg" thumbnail />
    </Col>
  </Row>
</Container>
    </div>

    
  );
};

export default Blog;
