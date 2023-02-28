import Todo from "./components/Todo";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer position='top-center'  />
      <Todo/>
    </>
  );
}

export default App;
