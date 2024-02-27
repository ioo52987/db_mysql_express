import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  /* FIELD VALUES */
  //let [fieldValues, setFieldValues] = useState({ accessionID: '', sampleYear: '', sampleType: '' });

  // get ngs_samples from the db
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/samples`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [])

  return data ?
    <div style={{ padding: "50px" }}>
      <div>You are looking at the frontend (client-side). Port 3000.</div>
      <br></br>
      <table>
        <thead>
          <th>ID</th>
          <th>AccessionID</th>
          <th>sampleYear</th>
          <th>sampleType</th>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.accession_id}</td>
              <td>{d.sample_year}</td>
              <td>{d.sample_type}</td></tr>
          ))}
        </tbody>
      </table>
    </div> : null;

}

export default App;