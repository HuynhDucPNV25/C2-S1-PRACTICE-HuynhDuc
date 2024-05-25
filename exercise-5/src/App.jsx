import "../src/assets/style.css";
import { Card } from "./components/Card";
import { USERS } from "./data.js";
function App() {
  return (
    <>
      <header>
        <h1>My Items</h1>
      </header>
      <div className="cards-view">
        <div className="cards-grid">
          {USERS.map((User) => (
            <Card key={User.id} user={User} />
          ))}
        </div>
      </div>
    </>
  );
}
export default App;