import { Music} from "./components/audio";
import { Header } from "./components/header";
import { Keyboard, right } from "./components/keyboard";

export default function App() {

  return (
      <div>
        <Header />
        <Music />
        <Keyboard />
        {right ? (<div className="block bg-red-700 h-10 w-10"><h1 className="font-bold text-2xl">consegui desgraça</h1></div>) : null}
      </div>  
    )
}

