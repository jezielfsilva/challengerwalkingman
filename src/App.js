import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import jhonny from './assets/sprite.png';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Level = styled.div`
  position: relative;
  width: 700px;
  height: 350px;
  background-color: #a35409;
`;

const Npc = styled.div`
  position: absolute;
  top: ${props => props.position[1]}px;
  left: ${props => props.position[0]}px;
  width: 35px;
  height: 35px;
  background: url(${jhonny});
  background-position: ${props => props.side};
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    // cada posição do personagem tem 35px de tamanho
    // para mover o boneco para baixo: background-position: 0 0
    // para mover o boneco para cima: background-position: 0 70px
    // para mover o boneco para a esquerda: background-position: 0 35px
    // para mover o boneco para a direita: background-position: 0 105px

    
    this.state = {
      position: [0, 0],
      side: '0 105px'
    };
  }

  render() {
    const { position, side } = this.state;

    return (
      <Container>
        <Level>
          <Npc position={position}
               side={side}
          ></Npc>
        </Level>
      </Container>
    );
  }
}

export default App;