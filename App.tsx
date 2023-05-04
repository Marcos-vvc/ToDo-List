import { Home } from "./src/screens/Home";
import { Header } from "./src/Components/Header";
import { AppContextProvider } from "./src/Context/AppContext";

export default function App() {
  return (
    <AppContextProvider>
      <Header />
      <Home />
    </AppContextProvider>
  );
}
