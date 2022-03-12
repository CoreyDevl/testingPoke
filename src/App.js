import { useState } from "react";
import { Dropdown } from "./components/dropdown/Dropdown";


function App() {

  const [selectedPoke, setSelectedPoke] = useState(null);


  return (
    <div className="App">
      {selectedPoke &&
        <div>Você escolheu o: {selectedPoke}</div>
      }
      <Dropdown title="Selecione seu Pokémongo" options={['Bulbassaur', 'Squirt', 'Charmeleon']} onSelect={setSelectedPoke} />
    </div>
  );
}

export default App;
