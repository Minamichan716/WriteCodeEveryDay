
import './App.css';
import React, { useState } from 'react'

const title = '寿命カウンター'


function App() {
// 処理の内容を書く
// const [count,setCount] = useState(0)
const [age, setAge] = useState('');
const resetAge = () => {
  setAge('')
}
const calcAge = () => {
  setAge((age) => 88 - age )
  

}



  return (
    <>
        <div className="App">
      <h1>{title}</h1>
        <p>あなたの年齢を入力してください</p>

    <input value={age}
        onChange={(event) => setAge(event.target.value)} />&nbsp;歳<br></br>


      <h2>寿命は残り{age}年です</h2>
      <button onClick={resetAge}>リセット</button>
      <button onClick={calcAge}>計算する</button>
    </div>
    </>

  );
}




export default App;
