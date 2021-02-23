import { useEffect, useState } from 'react';
import './App.css';

const productStyle = {
  border: '3px solid yellow',
  backgroundColor: '#f5f5f5',
  width: '450px',
  height: '400px',
  float: 'left',
  padding: '15px',
  margin: '5px',
  borderRadius: '20px',
  color: 'black'

}

const names = [
  {name: 'muhib', job: 'doctor'},
  {name: 'muhib', job: 'teacher'},
  {name: 'muhib', job: 'engineer'},
  {name: 'muhib', job: 'pilot'},
  {name: 'muhib', job: 'farmer'}

];

const products = [
  {name: 'Premiere Pro', price: 'US$20.99/mo', description: 'Professional video and film editing.'},
  {name: 'Premiere Rush', price: 'US$9.99/mo', description: 'Create and share online videos. Fast and easy.'},
  {name: 'Illustrator', price: 'US$20.99/mo', description: 'Create precise designs, Illustrations, and vector graphics on desktop and iPad.'},
  {name: 'InDesign', price: 'US$80.99/mo', description: 'Page design and layout for print and digital media.'},
  {name: 'After Effects', price: 'US$50.99/mo', description: 'Create motion graphics and visual effects for film, TV, video, and web.'},
  {name: 'Lightroom (1TB)', price: 'US$40.99/mo', description: 'Edit, organize, store, and share photos from anywhere.'},
  {name: 'Adobe XD', price: 'US$30.99/mo', description: 'Design, prototype, and share user experiences.'},
  {name: 'Spark', price: 'US$70.99/mo', description: 'Create custom-branded graphics, web pages, and video stories in minutes.'},
  {name: 'Animate', price: 'US$64.99/mo', description: 'Design interactive vector animations for multiple platforms.'},
  {name: 'Dreamweaver', price: 'US$970.99/mo', description: 'Design and develop modern, responsive websites.'}
]

const defferentProducts = [
  {name: 'Premiere Pro', price: 'US$20.99/mo', description: 'Professional video and film editing.'},
  {name: 'Premiere Rush', price: 'US$9.99/mo', description: 'Create and share online videos. Fast and easy.'},
  {name: 'Illustrator', price: 'US$20.99/mo', description: 'Create precise designs, Illustrations, and vector graphics on desktop and iPad.'},
  {name: 'InDesign', price: 'US$80.99/mo', description: 'Page design and layout for print and digital media.'},
  {name: 'After Effects', price: 'US$50.99/mo', description: 'Create motion graphics and visual effects for film, TV, video, and web.'},
  {name: 'Lightroom (1TB)', price: 'US$40.99/mo', description: 'Edit, organize, store, and share photos from anywhere.'},
  {name: 'Adobe XD', price: 'US$30.99/mo', description: 'Design, prototype, and share user experiences.'},
  {name: 'Spark', price: 'US$70.99/mo', description: 'Create custom-branded graphics, web pages, and video stories in minutes.'},
  {name: 'Animate', price: 'US$64.99/mo', description: 'Design interactive vector animations for multiple platforms.'},
  {name: 'Dreamweaver', price: 'US$970.99/mo', description: 'Design and develop modern, responsive websites.'}
]
  

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
        {
          defferentProducts.map((product => <Defferent name={product.name} price={product.price} description={product.description}></Defferent>))
        }
       {
         products.map(pro => <Product product = {pro}></Product>)
       }
        {
          names.map(name => <CricketPlayer name={name}></CricketPlayer>)
        }
      </header>
    </div>
  );
}

function Users() {
  const [user, setUser] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return (
    <div>
      <h1>User Name: {user.length}</h1>
      {
        user.map(user =>  <li>{user.name}</li>)
      }
    </div>
  )
}

function Counter() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => {
    if (count <= 0 ) {
      setCount(0)
    } else {
      setCount(count - 1);
    }
  }}>Decrease Count</button>
    </div>
  )
}

function Defferent(props) {
  const {name, price, description} = props;
  return (
    <div style = {productStyle}>
      <h1>Name: {name}</h1>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <button>Buy Now</button> 
    </div>
  )
}


function Product(props) {
  const {productName, productPrice, productDescription} = props.product;
  return (
  <div style = { productStyle }> 
    <h1>Product Name: {productName}</h1>
    <p>Price: {productPrice}</p>
    <p>Description: {productDescription}</p>
    <button>Buy Now</button>
  </div>
  )
}

function CricketPlayer(props) {
  const playerStyle = {
    border: '1px solid yellow',
    margin: '10px',
    padding: '10px',
    borderRadius: '20px'
  }
  

  const {name, job} = props.name;
  return (
    <div style={playerStyle}>
      <h1>{name}</h1>
      <h3>{job}</h3>
    </div>
  );
}
export default App;
