import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './component/templates/FooterComponent';
import HeaderComponent from './component/templates/HeaderComponent';
import ListProdukComponent from './component/produk/ListProdukComponent';
import AddProdukComponent from './component/produk/AddProdukComponent';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <HeaderComponent />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/tambah-produk" element={<AddProdukComponent />} />
            <Route path="/list-produk" element={<ListProdukComponent />} />
            {/* Rute lainnya bisa ditambahkan di sini */}
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
