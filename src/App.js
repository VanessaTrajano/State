import React, { Component } from 'react'

import foto from './moranguinho.jpg'

class State extends Component{
  state = {
    nome: "Vanessa",
    idade: 17,
    comidaFav: "Estrogonofe",
    musicas:["I'm Yours", "Fly me to the moon", "I will survive"] 
  }
  render(){
    return(
      <div>
        <h1>Meu nome: {this.state.nome}</h1>
        
        <h2>Miha idade: {this.state.idade}</h2>
        
        <h3>Minha comida favorita: {this.state.comidaFav}</h3>

        <p>Minhas músicas favoritas:</p>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
        
        <p>Minha fruta favorita:</p>
        <img src={foto} alt="fotinha de morango" />
      </div>
    )
  }
}

export default State