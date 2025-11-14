import "./App.css";
import AuthDialog from "./components/auth/AuthDialog";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />;
      <AuthDialog />
    </>
  );
}

export default App;
