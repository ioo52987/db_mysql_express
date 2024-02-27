import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  /* FIELD VALUES */
  //let [fieldValues, setFieldValues] = useState({ accessionID: '', sampleYear: '', sampleType: '' });

  // get ngs_samples from the db
  let [NGSsamples, setNGSsamples] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/get`)
      .then(response => {
        let data = response.data;
        setNGSsamples({data});
      })
      .catch(function (error) { console.log(error); });
  }, [])

  NGSsamples.map(function(item, i){
    return <li>{item.sampleYear}</li>;
  });
}

export default App;