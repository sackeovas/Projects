const express = require('express');
const app = express();

// Define the port number
const PORT = process.env.PORT || 3000;

// Configure the application to listen on the port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
