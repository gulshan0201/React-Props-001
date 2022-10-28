import './App.css';
import Colors from './Colors';

function App() {

  return (
    <div>
      <div className="App">
        <main className='one'>
          <Colors color="#FF6663" colorHex="#FF6663" colorName="PINK"></Colors>
          <Colors color="#333333" colorHex="#333333" colorName="GRAY"></Colors>
          <Colors color="#000000" colorHex="#000000" colorName="BLACK"></Colors>
          <Colors color="#38BB14" colorHex="#38BB14" colorName="GREEN"></Colors>
          <Colors color="#C90B0B" colorHex="#C90B0B" colorName="RED"></Colors>
        </main>
        <br />
        <main className='one'>
          <Colors color="#FF8000" colorHex="#FF8000" colorName="ORANGE"></Colors>
          <Colors color="#FFF500" colorHex="#FFF500" colorName="YELLOW"></Colors>
          <Colors color="#CCCCCC" colorHex="#CCCCCC" colorName="LIGHT GRAY"></Colors>
          <Colors color="#7E41A2" colorHex="#7E41A2" colorName="PURPLE"></Colors>
          <Colors color="#C14911" colorHex="#C14911" colorName="BROWN"></Colors>
        </main>
      </div>
    </div >
  );
}

export default App;
