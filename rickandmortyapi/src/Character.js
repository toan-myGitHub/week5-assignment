import React from 'react';
import './App.css';

export default class Character extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      data: {},
      isLoading: true
    }
  }

  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(data =>  {
        this.setState({
          data: data, 
          isLoading: false
        });
      });
  }
  render() {  
    if (this.state.isLoading) {
      return <div>loading ...</div>
    }
    if (this.state.data.name === 'Antenna Rick') {
      this.state.data.image = 'https://vignette.wikia.nocookie.net/rickandmorty/images/4/49/Antenna_Rick.png/revision/latest?cb=20161121231006';
    }
    return (
      <div class='Character-card'>          
        <img src={this.state.data.image} alt='' class='Character-img' />
        <div class="Character-container" >
          <br></br><b>Status</b>: {this.state.data.status}
          <br></br><b>Species</b>: {this.state.data.species}
          <br></br><b>Type</b>: {this.state.data.type}
          <br></br><b>Gender</b>: {this.state.data.gender} 
          
        </div>
      </div>
      );
  }
}     