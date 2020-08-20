import React from 'react';
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
  width: 840px;
  height: 455px;
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

  componentDidMount() {
    window.addEventListener('keydown', this.handleMove)
  }

  handleMove = (event) => {      
    console.log('pressionado');
    if (event.key === "ArrowDown") {
      this.setState({position: [this.state.position[0], this.state.position[1] + 35], side: '0 0px'});
    }
    if (event.key === "ArrowUp") {
      this.setState({position: [this.state.position[0], this.state.position[1] - 35], side: '0 70px'});
    }
    if (event.key === "ArrowRight") {
      this.setState({position: [this.state.position[0] + 35, this.state.position[1]], side: '0 105px'});
    }
    if (event.key === "ArrowLeft") {
      this.setState({position: [this.state.position[0] - 35, this.state.position[1]], side: '0 35px'});
    }
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