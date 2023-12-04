import React, { useEffect, useState, useContext } from 'react'
import {
  Layout,
  Typography,
  Row,
  Col,
  Button,
  Spin
} from 'antd';
import { useHistory } from 'react-router-dom';
import './styles.css'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import MenuComponent from '../../components/MenuComponent';
import ModalInfo from '../../components/Modal/ModalInfo';
import { db } from '../../services/firebaseConnections';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { AuthContext } from '../../services/auth';

const { Title, Text } = Typography;
const { Content } = Layout;


const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [hasSelectedOption, setHasSelectedOption] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userResponses, setUserResponses] = useState([]);

  const history = useHistory();
  const { user } = useContext(AuthContext);
  

  const selectOption = (selectedOption) => {
    const updatedResponses = [...userResponses];
    updatedResponses[current] = selectedOption;
    setUserResponses(updatedResponses);
    setHasSelectedOption(true);
  };

  async function sendQuiz(e) {
    e.preventDefault();

    if (!hasSelectedOption) return setIsModalOpen(true);
    try {
      const responseRef = await addDoc(collection(db, "user_responses"), {
        id: user.uid,
        responses: userResponses,
        createdAt: new Date(),
      });
      console.log("Respostas do usuário gravadas com sucesso:", responseRef.id);
      history.replace('/resultado-quiz');
    } catch (error) {
      console.error("Erro ao gravar respostas do usuário:", error);
    }
  }

  const next = () => {
    if (!hasSelectedOption) return setIsModalOpen(true);
    if (current < questions.length) {
      setCurrentQuestion(questions[current + 1]);
      setCurrent(current + 1);
      setHasSelectedOption(false);
    }
  };

  const prev = () => {
    setCurrentQuestion(questions[current - 1]);
    setCurrent(current - 1);

  };

  const prev2 = () => {
    history.push(`/intro-quiz`);

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  async function loadQuestions() {
    try {
      const questionsQuery = collection(db, "quiz_questions");
      const querySnapshot = await getDocs(questionsQuery);

      const questionsData = [];

      querySnapshot.forEach((doc) => {
        const questionData = doc.data();
        questionsData.push({
          id: doc.id,
          question: questionData.question,
          options: questionData.options,
        });
      });

      if (questionsData.length === 0) {
        console.log("Nenhuma pergunta encontrada");
        return;
      }
      setQuestions(questionsData);
      console.log("Perguntas do Quiz:", questionsData);
      setCurrentQuestion(questionsData[0])
      setLoading(false);

    } catch (error) {
      console.error("Erro ao carregar perguntas:", error);
    }
  }

  useEffect(() => {
    loadQuestions();
  }, [])
  
  return (
    <Layout className="layout margin-page-quiz" >
      <Content className="site-layout-content" style={{ display: 'block', padding: 0 }} >
        {loading ? <Spin tip="Carregando..." size="large" alignitems={'center'} className='loading' /> :
          currentQuestion && (
            <Row className='container_step margin-page' >
              <Row className='container_step' style={{ justifyContent: 'flex-start' }}>
                <Col>
                  <Button type='link' style={{ color: '#6D7970' }} onClick={current <= 0 ? () => prev2() : () => prev()}>
                    <ArrowLeftOutlined style={{ fontSize: '26px', padding: 0 }} />
                  </Button>
                </Col>
              </Row>
              <Title className='titulo'>Quiz</Title>
              <Row className='container_step' style={{ padding: '0 15px', textAlign: 'justify' }}>
                <Text className='text-quiz'>{`${currentQuestion?.question}`}</Text>
              </Row>
              <Row className='container_item'>
                {
                  currentQuestion?.options.map((option, optionIndex) => {
                    return (<Button className='card-opcoes' key={optionIndex} onClick={() => selectOption(optionIndex)}>
                      {option}
                    </Button>
                    )
                  })
                }
              </Row>
            </Row>
          )
        }
        <div>
          {questions.length > 0 && current < questions.length - 1 && (
            <Row className='container_step' style={{ alignContent: 'end' }}>
              <Col>
                <Button type='link' style={{ color: '#74934D', fontSize: '1rem' }} onClick={() => next()}>
                  Avançar
                  <ArrowRightOutlined />
                </Button>
                <ModalInfo isOpen={isModalOpen} onClose={closeModal} />
              </Col>
            </Row>
          )}
          {questions.length - 1 == current && (
            <Row className='container_step button-quiz-enviar-row' >
              <Col>
                <Button
                  type="primary"
                  className='button-quiz-enviar'
                  onClick={sendQuiz}
                >
                  Enviar
                </Button>
                <ModalInfo isOpen={isModalOpen} onClose={closeModal} />
              </Col>
            </Row>
          )}
          {questions.length > 0 && current > 0 && current < questions.length - 1 && (
            <Row className='container_step' style={{ alignContent: 'start', position: 'absolute', marginTop: '-11%', width: '50%' }}>
              <Col>
                <Button type='link' style={{ color: '#74934D', fontSize: '1rem' }} onClick={() => prev()}>
                  <ArrowLeftOutlined />
                  Voltar
                </Button>

              </Col>
            </Row>
          )}
        </div>
        <MenuComponent />
      </Content>
    </Layout >
  );
};
export default Quiz;