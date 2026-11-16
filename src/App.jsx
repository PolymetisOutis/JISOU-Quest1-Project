import { useState } from 'react';
import './App.css';
import { TestList } from './components/TestList';
import { Input } from './components/Input';
import { Output } from './components/Output';

function App() {
  const [pLearningContents, setPLearningContents] = useState('');
  const [pLearningTime, setPLearningTime] = useState(0);
  const [records, setRecords] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState("");
  const [timeRecords, setTimeRecords] = useState([]);
  const [timeTotal, setTimeTotal] = useState(0);
  const registerActivity = () => {
    setRecords([...records, {title: pLearningContents, time: pLearningTime}]);
    setTimeTotal((timeTotal) => {return timeTotal + parseInt(pLearningTime)});
    console.log(timeTotal);
    setTimeRecords([...timeRecords, parseInt(pLearningTime)]);
    setIsRegistered(true);
    if (pLearningContents == "" || pLearningTime == 0 || pLearningTime == "") {
      setError("入力されていない項目があります！");
    } else {
      setError("");
    }
  }
  return (
    <div>
      {error && <p>{error}</p> }
      <Input onChangeContents={setPLearningContents} onChangeTime={setPLearningTime} onChangeRegistry={setIsRegistered} isRegistered={isRegistered}/>
      <Output pLearningContents={pLearningContents} pLearningTime={pLearningTime}/>
      <button onClick={registerActivity}>登録</button>
      <h1>学習記録一覧</h1><h2>合計時間{timeTotal}時間</h2><h2>合計時間{timeRecords.reduce((acc, n) => acc + n, 0)}時間</h2>
      {error ||
      <TestList records={records}/>}
    </div>
  )
}

export default App
