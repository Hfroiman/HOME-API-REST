import { InitMongoDB } from './src/Daos/MongoDB/connection.js'
import Express from 'express';
import Peoplesrouter from './src/Routes/people.router.js';
import homeworkrouter from './src/Routes/homework.router.js';

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({extended:true}));
app.use('/Users', Peoplesrouter);
app.use('/Homeworks', homeworkrouter);
InitMongoDB();
const PORT = 8080;
app.listen(PORT, () => console.log(`Server up on PORT ${PORT}`)); //*backticks ALT+96*/