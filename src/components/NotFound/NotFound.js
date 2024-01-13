import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound () {
  const navigate = useNavigate();
  return (
    <main className="not-found">
      <div className="not-found__message">
        <p className="not-found__code">404</p>
        <h1 className="not-found__title">Страница не найдена</h1>
      </div>
      <span className="not-found__backlink" onClick={() => navigate(-1)}>Назад</span>
    </main>
  )
}

export default NotFound;
