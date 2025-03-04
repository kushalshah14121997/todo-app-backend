import express from 'express';
import taskRoutes from './routes/taskRoutes';
import cors from 'cors';

const app = express();

// Remove credentials if not needed
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use('/api', taskRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
