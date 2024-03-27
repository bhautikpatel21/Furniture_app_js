require('dotenv').config();
const express = require('express');
const app = express();                                           
const port = process.env.PORT;                                           
app.use(express.json());
const mongoose = require('mongoose');
const path = require('path');
const imagePath = path.join(__dirname,'images');
app.use('/images',express.static(imagePath));


const adminRoutes = require('./Src/Routes/Admin/index.routes');
app.use('/api/admin', adminRoutes);


const usersRoute = require('./Src/Routes/User/index.routes');
app.use('/api/user', usersRoute);


async function main() {
    await mongoose.connect(process.env.MONGO_DB);          
}
main()
.then(() => console.log('DB is connected...'))
.catch( err => console.log(err.message));

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});
