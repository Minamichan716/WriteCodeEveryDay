
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
        onChange={(event) => (setAge(event.target.value)*3)} />&nbsp;歳<br></br>


      <h2>{age}歳の残りの寿命は...?</h2>
      <h3>寿命は残り{age}日です</h3>
      <h3 >寿命は残り{ReaminAge}日です</h3>
      <button onClick={resetAge}>リセット</button>
      <button onClick={calcAge}>計算する</button>
    </div>
    </>

  );
}




export default App;
