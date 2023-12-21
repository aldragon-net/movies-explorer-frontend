import './NotFound.css';
import { useNavigate } from 'react-router-dom';


function NotFound () {
  const navigate = useNavigate();
  return (
    <div className="not-found">
    <div className="not-found__message">
      <span className="not-found__code">404</span>
      <h1 className="not-found__title">Страница не найдена</h1>
    </div>
    <span className="not-found__backlink" onClick={() => navigate(-1)}>Назад</span>
    </div>
  )
}

export default NotFound;