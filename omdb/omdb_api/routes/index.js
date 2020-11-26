var express = require('express');
var router = express.Router();
var axios = require('axios')

url = 'http://www.omdbapi.com';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("OK")
});

router.get('/search', async function(req, res, next) {
  try{
    const page = req.query.page
    const movie = req.query.movie

    const options = {
      baseURL: url,
      method: 'GET',
      params: {
        apiKey: 'faf7e5bb',
        s: movie,
        page,
      },
    }

    const response = await axios(options)
    res.send(response.data)
  }catch (error) {
    res.send(error)
  }
})

router.get('/detail/:id', async function(req, res, next) {
  try {
    const id = req.params.id
    const options = {
      baseURL: url,
      method: 'GET',
      params: {
        i: id,
        apiKey: 'faf7e5bb'
      },
    }
    
    const response = await axios(options)
    res.send(response.data)
  } catch(error) {
    res.send(error)
  }
})

module.exports = router;
