import AddUser from "./pages/add-user";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <AddUser />
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <div className="pdf-container">
        <div className="header">Bussines</div>
        <div className="bill">
          <div>Item name</div>
          <div>Jodi</div>
          <div>Box</div>
          <div>Box</div>
        </div>
      </div>
    </div>
  );
}
