import React, { Component } from 'react';
import RepoNames from './components/RepoNames'
import './App.css';

const names = [
              'alfredosorio',
              'ifollowedthewhiterabbit',
              'Livia-Santos',
              'Jay-Aye',
              'Chris-Robertson',
              'CharleyFarley',
              'george2kra',
              'teck7',
              'Reynolds15',
              'cjpillette',
              'vinnym342',
              'paigerichards',
              'Confidenceman02',
              'melvourne',
              'C-lockwood',
              'Samseppiol',
              'AnnSiapno',
              'vkalfieri',
              'dsaleem',
              'Csthy93',
              'madzc97'
              ]


class App extends Component {
  state = {
    error: null,
    repos: null,
    classMates: null
  }

  render() {
    const {error, repos} = this.state
      return (
      <div className="App">
       {
         names.map((name) => (
           <li>
            <a onClick={() => this.handleClick(name)} style={{cursor: 'pointer'}} >{name}</a>
           </li>
         ))
       }
       { !!error && <p> {error.message}</p>}
       { !!repos ? ( <RepoNames items= {repos} /> ) : ( '' ) }
      </div>
    );
  }

  handleClick = (classMates) => {
    fetch(`https://api.github.com/users/${classMates}/repos`)
    .then(res => res.json())
    .then(repos => {
      this.setState({repos, classMates})
    })
    .catch(error => {
      this.setState({error})
    })

  }


}


export default App;
