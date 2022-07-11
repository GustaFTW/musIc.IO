import { Provider } from "urql";
import { Music} from "./components/audio";
import { Header } from "./components/header";
import { Keyboard } from "./components/keyboard";
import { client } from "./lib/urql";

export default function App() {

  return (
    <Provider value={client}>
      <div>
        <Header />
        <Music />
        <Keyboard />
      </div>  
    </Provider>
    )
}

