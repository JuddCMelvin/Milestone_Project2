import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Games from './components/MyGames'
import Home from './components/Home'
import { Fragment } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { useState, useEffect } from 'react'

function App() {

  let [search, setSearch] = useState('')
	let [message, setMessage] = useState('Search for Games')
	let [data, setData] = useState([])

	const API_URL = 'http://localhost:3004/games/search?query='

	useEffect(() => {
		if(search) {
			const fetchData = async () => {
				document.title = `${search} Games`
				const response = await fetch(API_URL + search)
				const resData = await response.json()
				if (resData.results.length > 0) {
					return setData(resData.results)
				} else {
					return setMessage('Not Found')
				}
			}
			fetchData()
		}
	}, [search])
	
	const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
	}

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">GameTracker</h1>
          <div className="navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Games">Games</Link>
              </li>
              <li>
                <Link to="/MyGames">MyGames</Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={
              <Fragment>
                <SearchBar handleSearch = {handleSearch}/>
							  <Gallery data={data} />
              </Fragment>
            } />
            {/* <Route path="/packages" render={() => <MyGames games={games}/>}  /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;





