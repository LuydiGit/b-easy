const mongoose = require('mongoose');
const URI = '';

mongoose.set ('useNewUrlParser', true);
mongoose.set ('useFindAndModify', true);
mongoose.set ('useCreateIndex', true);
mongoose.set ('useUnifiedTopology', true);

mongoose
    .connect(URI)
    .ther(() => console.log ('DB is up!'))
    .catch(() => console.log(err));