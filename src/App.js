import './App.css';
import HamburgerMenu from './HamburguerMenu';

function App() {
  return (
    <div className="App">
      <header>
        <HamburgerMenu /> {/* Agrega el menú de hamburguesa aquí */}
        
        <h1 className='Titulo'>Descubre Quién Soy</h1>
        <nav>
          {/* Aquí van tus enlaces de navegación */}
        </nav>
      </header>
      <main>
        {/* Contenido principal de tu página */}
      </main>
    </div>
  );
}

export default App;

