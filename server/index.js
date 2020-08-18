const express = require('express');

const homeRouter = require('./routes/home');
const godsRouter = require('./routes/gods');
const aphroditeBoonsRouter = require('./routes/aphroditeBoons');
const aresBoonsRouter = require('./routes/aresBoons');
const artemisBoonsRouter = require('./routes/artemisBoons');
const athenaBoonsRouter = require('./routes/athenaBoons');
const chaosBoonsRouter = require('./routes/chaosBoons');
const demeterBoonsRouter = require('./routes/demeterBoons');
const dionysusBoonsRouter = require('./routes/dionysusBoons');
const hermesBoonsRouter = require('./routes/hermesBoons');
const poseidonBoonsRouter = require('./routes/poseidonBoons');
const zeusBoonsRouter = require('./routes/zeusBoons');

const app = express();
const port = 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', homeRouter);
app.use('/gods', godsRouter);
app.use('/aphroditeBoons', aphroditeBoonsRouter);
app.use('/aresBoons', aresBoonsRouter);
app.use('/artemisBoons', artemisBoonsRouter);
app.use('/athenaBoons', athenaBoonsRouter);
app.use('/chaosBoons', chaosBoonsRouter);
app.use('/demeterBoons', demeterBoonsRouter);
app.use('/dionysusBoons', dionysusBoonsRouter);
app.use('/hermesBoons', hermesBoonsRouter);
app.use('/poseidonBoons', poseidonBoonsRouter);
app.use('/zeusBoons', zeusBoonsRouter);
app.use(express.static(__dirname + '/db/imgs'));
app.use(express.static(__dirname + '/db/imgs/symbols'));

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));