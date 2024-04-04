import { useEffect, useState } from 'react';
import './App.css';
import NavigationInshorts from './components/NavigationInshorts';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import apiKey from './components/data/config';


function App() {
  const [category, setCategory] = useState("General")
  const newsApi = async () => {

    // const apiKey = "3ae471fb7c974b6a836e38564e52626b"
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`)
      console.log(news.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => { newsApi() })
  return (
    <div className="App">
      <NavigationInshorts setCategory={setCategory} />
      <NewsContent />


    </div>
  );
}

export default App;
