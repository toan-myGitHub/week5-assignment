import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
super(props);
this.state = {data: {},
isLoading: true

}
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/')
      .then(response => {
        return response.json();
      })
      .then(data =>  {
        this.setState({
          data: data.message, 
          isLoading: false
        });

      }
      );


  }


render () {

if (this.state.isLoading) {
return <div>loading ...</div>
}


  const breeds = Object.keys(this.state.data);
  breeds.map((breed, idx) => <li key={idx}>{breed}</li>);

{/*
  
  console.log(breeds);
*/}



  return (
    <div>

<h2>Rick and Morty API</h2>
{/*

  {JSON.stringify(this.state)}
*/}
<ul>


    {breeds}


</ul>
    

    </div>
  );
}
}

export default App;
