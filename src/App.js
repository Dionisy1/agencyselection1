import { Header } from './components/Header';
import './App.css';
import { SectionPlanet } from './components/SectionPlanet';
import { NewsLetter } from './components/NewsLetter';
import { Footer } from './components/Footer';
import { Boxes} from './components/Boxes';


function App() {
	return (
		<div>
		    <Header/>
			<SectionPlanet/>
			<NewsLetter/>
			<Boxes/>
			<Footer/>
		</div>
        
	);
}

export default App;
