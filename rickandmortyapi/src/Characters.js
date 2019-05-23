import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Character from './Character.js';

export default class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: {},
        isLoading: true
        }
    }
    
    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character/')
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
        const characters = Object.keys(this.state.data.results)
            .map((character, idx) => 
            
            <div class="Character-block" key={idx}>                      
               <img src={this.state.data.results[character].image} alt="Avatar" />  
                <div>
                    <h3>
                        {this.state.data.results[character].name}
                    </h3>   
                    <Router>                 
                        <Link to={`/character/${this.state.data.results[character].id}`}>Character Details</Link>
                        <Route path="/character/:id" component= {Character} />  
                    </Router>                                 
                </div>   
                 
            </div>
            );              
        return (           
          <div>   
            <h1>
                Characters
            </h1>
            {characters}
          </div>
        )
    }

}