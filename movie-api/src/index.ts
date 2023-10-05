import * as env from 'dotenv'
import express from 'express'
import axios from 'axios';

env.config();

const app = express()

app.get('/api/v1/search/:movie', async (req, res) => {
  const omdb_url = process.env.OMDB_API || '';
  const omdb_api_key = process.env.OMDB_API_KEY || '';
  const omdb_api = `${omdb_url}`;

  const movieName = req.params.movie;
  try {                                         //i=tt3896198&apikey=3644891e
                                                //i=tt3896198&apikey=3644891e
    const { data, status } = await axios.get(omdb_api, {
      headers: {
        Accept: 'application/json'
      },
      params: {
        t: movieName,
        apikey: omdb_api_key
      }
    });

    res.json(data);
  } catch (e) {
    console.log(e);
    res.end();
  }
  

  
})

app.listen(8000, () => {
  console.log('run server')
})
