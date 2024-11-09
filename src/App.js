import './App.css';

const sentences = [
    "beavers build dams to create safe, stable habitats.",
    "strong teeth allow beavers to cut down trees.",
    "dam-building skills make beavers natural ecosystem engineers.",
    "beaver dams help prevent flooding in river areas.",
    "tail slaps on water serve as beaver communication.",
    "beaver activity peaks during early morning and evening.",
    "lodges built by beavers provide shelter and warmth.",
    "wetland biodiversity thrives around beaver-made habitats."
  ];

const NuggetImage = ({ className, height }) => {
  return (
    <img src="./nugget_types.svg" alt="cute typing beaver" className={className} style={{ height: height }} />
  );
};
  

const Header = () => {
  return (
    <div className="header">
      <div className="image-row">
        <NuggetImage className="nugget-image" height="100px" />
        <NuggetImage className="nugget-image main-nugget" height="250px" />
        <NuggetImage className="nugget-image right-nugget" height="100px" />
      </div>
      <h1>NuggetType</h1>
    </div>
  );
};
  

const App = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
