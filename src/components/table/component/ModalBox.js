import React from 'react';
import App from "./modal-components/App";
import styled from "styled-components";
import Button from "./Button";

const Modal = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed; 
  z-index: 1; 
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.6);
  text-align: center;
 
`;

const Content = styled.div`
  border: 2px solid lightblue;
  display: inline-grid;
  margin: 0 auto;
  background-color: white;
  padding 10px;
`;
const Section = styled.div`
  border-bottom: 2px solid gray;
  margin:10px;
`;


const ModalBox = ({show, handleClose}) => {

    return (
        <Modal show={show} id='modal'>
            <Content>
                <Section>Select columns for the Grid</Section>
                <Section>
                    <App/>
                </Section>
                <div>
                    <Button type='button' onClick={handleClose} children='Close'/>
                </div>
            </Content>
        </Modal>
    );
};

export default ModalBox