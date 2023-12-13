import './NotFound.css';
import { useNavigate } from 'react-router-dom';


function NotFound () {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1>404</h1>
      <span onClick={() => navigate(-1)}>Назад</span>
    </div>
  )
}

export default NotFound;