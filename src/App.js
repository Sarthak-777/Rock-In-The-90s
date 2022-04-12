import Dashboard from "./pages/Dashboard";
import useAuthListener from "./hooks/use-auth-listener";
import userContext from "./context/user";

function App() {
  const { user } = useAuthListener();
  return (
    <div className="m-0 p-0">
      <userContext.Provider value={{ user }}>
        <Dashboard />
      </userContext.Provider>
    </div>
  );
}

export default App;
