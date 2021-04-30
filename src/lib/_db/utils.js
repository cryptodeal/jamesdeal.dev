const mongoose = require('mongoose');
mongoose.connect(import.meta.env.VITE_MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

