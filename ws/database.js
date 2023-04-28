const mongoose = require('mongoose');
const server = 'mongodb+srv://salaoUser:d90eCIbhMcKuLHT6@clusterdev.zb1rnyw.mongodb.net';
const database = 'clusterdev';

mongoose.connect(`${server}/${database}`,
   { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
   console.log("Banco de Dados MongoDB conectado.");
})
   .catch(err => {
      console.error("Erro na conexão com o Banco de Dados", err);
      process.exit();
   });
//mongoose.set('useNewUrlParser', true);
//mongoose.set('useFindAndModify', false);
//mongoose.set('useCreateIndex', true);
//mongoose.set('useUnifiedTopology', true);