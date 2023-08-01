import Navbar from './components/Navbar';
import Location from './components/Location';
import data from './data';

function App() {
  // here we are mapping the data from data.js
  const location = data.map((item, id) => {
    return <Location key={id} item={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <section className="location-list">{location}</section>
    </div>
  );
}

export default App;
