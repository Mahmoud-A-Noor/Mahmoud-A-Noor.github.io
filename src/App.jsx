import "@preact/signals-react/auto";

import useLocalizeDocumentAttributes from "./States/LanguageSwitcher"
import { themeSignal } from "./States/ThemeSwitcher"

import Navbar from "./components/Navbar/Navbar"

function App() {
  
  useLocalizeDocumentAttributes()  
  // useSignals()

  
  return (
    <div className={`w-100 h-100 ${themeSignal}-primary vw-100 vh-100`}>
      <Navbar />
    </div>
  )
}

export default App
