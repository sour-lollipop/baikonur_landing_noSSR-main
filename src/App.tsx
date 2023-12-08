import { GlobeComponent, Title, Header, CanvasComponent, Background, ScrollButton } from "./components";
import { History, Contact, Mission, Tourism, MobileApp } from "./pages";

function App() {
  return (
    <Background>
      <Header />
      <div className="Cmain">
        <div className="main">
          <div id='CH1' className="firstContent">
            <Title />
            <GlobeComponent />
          </div>

          <History />
          <Mission />
          <Tourism />
          <MobileApp />
          <Contact />
        </div>
      </div>
      <ScrollButton/>
    </Background>
  );
}

export default App;
