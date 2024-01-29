import React,{lazy,Suspense} from 'react';
import { Header } from './componennts/Header/Header';
import {Route, Routes } from 'react-router-dom'
const Main = lazy(()=>import('./componennts/Main/Main').then(({Main})=>({default:Main})))
const Catalog = lazy(()=>import('./componennts/Catalog/Catalog').then(({Catalog})=>({default:Catalog})))
const Calculate = lazy(()=>import('./componennts/Calculate/Calculate').then(({Calculate})=>({default:Calculate})))
const Contact = lazy(()=>import('./componennts/Contact/Contact').then(({Contact})=>({default:Contact})))
const Guarantees = lazy(()=>import('./componennts/Guarantees/Guarantees').then(({Guarantees})=>({default:Guarantees})))
const AboutUS = lazy(()=>import('./componennts/AboutUS/AboutUS').then(({AboutUS})=>({default:AboutUS})))
const ItemPage = lazy(()=>import('./componennts/ItemPage/ItemPage').then(({ItemPage})=>({default:ItemPage})))
const Cooperation = lazy(()=>import('./componennts/Cooperation/Cooperation').then(({Cooperation})=>({default:Cooperation})))


function App() {
  //___
  return (
    <div className='flex flex-col items-center  bg-[#f1f1f6] font-sanf overflow-x-hidden'>
      <Header/>
      <Suspense >
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/calalog' element={<Catalog/>}/>
          <Route path='/calculate' element={<Calculate/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/guarantees' element={<Guarantees/>}/>
          <Route path='/car/:carID' element={<ItemPage/>}/>
          <Route path='/car/*' element={<ItemPage/>}/>
          <Route path='/about' element={<AboutUS/>}/>
          <Route path='/cooperation' element={<Cooperation/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
