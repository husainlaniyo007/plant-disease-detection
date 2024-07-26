const express = require('express');
const app = express();
const imageRoutes = require('./imageRoutes');

app.use('/api/images', imageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

