// import { useState } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import CustomCarousel from './Components/CustomCarousel/CustomCarousel';

// import Banner from './Components/Banner';

// import Slider from './Components/Slider/Slider';
// import { register } from 'swiper/element/bundle';

// register();
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import TesteCarousel from './Components/TesteCarousel/TesteCarousel';
// import BootstrapCarousel from './Components/BootstrapCarousel/BootstrapCarousel';
// import Carousel from './Components/Carousel/Carousel';
// import { slides } from './Data/CarouselData.json';

// import Tailwind from './Components/Tailwind/Tailwind';

// import reactLogo from './assets/react.svg'; exemplo de imagem 
// import viteLogo from '/vite.svg';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Slider /> */}
      {/* <Banner /> */}
      {/* <Carousel /> */}
        {/* <Header /> */}
        {/* <TesteCarousel /> */}
        {/* <BootstrapCarousel /> */}
        {/* <Tailwind /> */}
        {/* <CustomCarousel /> */}
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />}/>
            </Routes>
          </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App;


// import reactLogo from './assets/react.svg'; exemplo de imagem 
// import viteLogo from '/vite.svg';

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

// export default App;
