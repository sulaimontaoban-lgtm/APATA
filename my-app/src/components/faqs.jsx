import React, { useState } from 'react';
import img from "../images/expo.png"
import { Col, Container, Row } from 'react-bootstrap';

// Data for the FAQs
const faqData = [
  {
    id: 1,
    question: "What is the best age to start kindergarten?",
    answer: "Lorem ipsum dolor sit amet consectetur. Mauris urna sapien semper nibh. Habitant interdum quisque pellentesque nulla elementum.",
  },
  {
    id: 2,
    question: "What is the best age to start kindergarten?",
    answer: "Lorem ipsum dolor sit amet consectetur. Mauris urna sapien semper nibh. Habitant interdum quisque pellentesque nulla elementum.",
  },
  {
    id: 3,
    question: "What is the best age to start kindergarten?",
        answer: "Lorem ipsum dolor sit amet consectetur. Mauris urna sapien semper nibh. Habitant interdum quisque pellentesque nulla elementum.",
    },
  {
    id: 4,
    question: "What is the best age to start kindergarten?",
    answer: "Lorem ipsum dolor sit amet consectetur. Mauris urna sapien semper nibh. Habitant interdum quisque pellentesque nulla elementum.",
  },
];

const Faqs = () => {
    
    
    const imageColumnStyle = {
        flex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        
    };
    const faqHeaderSmallStyle = {
        color: '#D12511',
        fontWeight: 400,
        fontSize: '20px',
        textDecoration: 'underline',
        marginBottom: '5px',
    };
    const faqHeaderMainStyle = {
        fontSize: '40px',
        fontWeight: 700,
        color: '#030065',
        marginBottom: '30px',
    };
    const faqItemBaseStyle = {
        border: '1px solid #ddd',
        borderRadius: '5px',
        marginBottom: '10px',
        overflow: 'hidden',
    };
    const questionContainerBaseStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 20px',
        cursor: 'pointer',
        backgroundColor: '#ffffff',
        fontWeight: '500',
        color: '#333',
    };
    
    const questionContainerOpenStyle = {
        backgroundColor: '#e6f7ff',
        borderLeft: '5px solid #007bff',
        paddingLeft: '15px', 
    };
    const openQuestionTextStyle = {
        color: '#333',
        fontWeight: 600,
    };
    const toggleIconStyle = {
        fontSize: '1.0em',
        color: '#D12511',
        border: "2px solid red",
        borderRadius: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "30px",
        height: "30px",
    };
    const answerTextStyle = {
        margin: 0,
        padding: '15px 20px',
        color: '#555',
        fontSize: '15px',
        lineHeight: '22px',
        backgroundColor: '#e6f7ff',
        borderTop: '1px solid #ccc',
    };


    const [openId, setOpenId] = useState(faqData[0].id);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };
    const FAQItem = ({ faq, isOpen, toggleFAQ }) => {
        const combinedQuestionStyle = {
            ...questionContainerBaseStyle,
            ...(isOpen ? questionContainerOpenStyle : {}),
        };

        return (
            <div style={faqItemBaseStyle}>
                <div 
                    style={combinedQuestionStyle} 
                    onClick={toggleFAQ}
                >
                    <div style={isOpen ? openQuestionTextStyle : {}}>
                        {faq.question}
                    </div>
                    <div style={toggleIconStyle} className='text-center'>
                        {isOpen ? '-' : '+'}
                    </div>
                </div>
                
                {isOpen && (
                    <p style={answerTextStyle}>
                        {faq.answer}
                    </p>
                )}
            </div>
        );
    };
    return (
        <Container style={{marginTop: "120px", marginBottom: "100px"}}>
             <p style={faqHeaderSmallStyle}>FAQs</p>
            <h2 style={faqHeaderMainStyle}>Frequently Asked Questions</h2>
            <Row>
                 
                <Col md={7}>
                <div>
                    {faqData.map((faq) => (
                        <FAQItem 
                            key={faq.id}
                            faq={faq}
                            isOpen={faq.id === openId}
                            toggleFAQ={() => toggleFAQ(faq.id)}
                        />
                    ))}
                </div>
            </Col>
            
            <Col md={5}>
            <div style={imageColumnStyle} className='align-items-start up'>
                <img src={img} style={{ width: '100%', height: 'auto', maxWidth: '400px' }} />
            </div>
            </Col>
            </Row>
        </Container>
    );
};

export default Faqs;