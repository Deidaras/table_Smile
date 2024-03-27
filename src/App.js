import './css/main.css';

var data = [
  {id: 1, name: 'Gob', value: '2'},
  {id: 2, name: 'Buster', value: '5'},
  {id: 3, name: 'George Michael', value: '4'}
];


function App() {
  return (
    <div>
      <header >
        Hello World! Привет, мир!
      </header>
      <p className="Table-header">Basic Table</p> 
      <Table1 data={data}/>
    </div>
  );
}

export default App;
