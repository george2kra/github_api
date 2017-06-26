import React, { Component } from 'react';
import RepoNames from './components/RepoNames'
import './App.css';


const classMates=
['alfredosorio',
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
  state= {
    error: null,
    repos: null
  }
    render() {
      const { error, repos } = this.state
    return (
      <div className="App">
      { !!error && <p>error.message </p>}
      { !!repos ? (
        <RepoNames items={repos}/>
      ) : (
        'Loading repos...'
      )}
        <h2>Total classmates {classMates.length}</h2>


      </div>
    );
  }
  componentDidMount() {
    fetch('https://api.github.com/users/george2kra/repos')
    .then(res => res.json())
    .then(repos => {
      this.setState({repos})
    })
    .catch(error => {
      this.setState({error})
    })

  }
}

export default App;
