const express = require('express');
const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../swagger');
const router = require('./routers/export-router');
const mongoose = require('mongoose');

const options = {
    customJs: '/custom.js'
  };

mongoose.connect('mongodb://127.0.0.1:27017/express-server', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

const app = express()
const port = process.env.PORT || 8080
app.use(express.json())
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.use('/scraps', router.scrapRouter)

app.listen(3000, () => {
    console.log('server on port ' + 3000)
})
