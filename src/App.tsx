import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import { Home } from './components/home';
import { FunnyForm } from './components/funnyForm';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import { funInfo } from './types/funInfoType';
function App() {
  const [data , setData ] = useState([
    {
      "id": 1,
      "reporter": "محمد یوسفیان",
      "subject": "راضیم",
      "description": "بدون شرح"
    },
    {
      "id": 2,
      "reporter": "شهنام فیضیان",
      "subject": "خدایا",
      "description": "بدون شرح"
    },
    {
      "id": 2,
      "reporter": "وحید عقیل پور",
      "subject": "سید اس کیو ال سرور",
      "description": "بدون شرح"
    }
  ]);
  
  const checkIdExistanceBefore = (id: number): boolean => {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (element.id === id) {
        return false;
      }
    }
    return true;
  }
  const generateUniqueId = (): number => {
    let r = Math.floor((Math.random() * 100000) + 1);
    while (!checkIdExistanceBefore(r)) {
      r = Math.floor((Math.random() * 100000) + 1);
    }
    return r;

  }
  const addNew = (item: funInfo): void => {
    const uniqueId: number = generateUniqueId();
    let newObject: funInfo = {
      id: uniqueId,
      subject: item.subject,
      description: item.description,
      reporter: item.reporter
    };
    let newData:funInfo[] = data;
    newData.push(newObject);
    setData(newData);
    console.log("state data is : " , data);
  };
  return (
    <div className="App container">
      {/* <FunnyForm /> */}
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Home data={data} />} />
          <Route path='/funnyform' element={<FunnyForm onAdd={addNew} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
