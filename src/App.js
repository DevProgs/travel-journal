import Navbar from './components/Navbar';
import Location from './components/Location';
// import './App.css';
// import './test.css';
import data from './data';

function App() {
  // here we are mapping the data from data.js
  const location = data.map((item) => {
    return <Location key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <section className="location-list">{location}</section>
    </div>
  );
}

export default App;
