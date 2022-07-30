import './App.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Card from './components/Card/Card'
import Data from './Data'
function App() {
	const data = Data.map(el => {
		return <Card key={el.id} {...el} />
	})
	return (
		<div>
			<NavBar />
			<Hero />
			<section className='container card__container'>{data}</section>
		</div>
	)
}

export default App
