import { Link, useLocation, useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found__glow" />

      <div className="not-found__content">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Ruta no encontrada</h1>
        <p className="not-found__text">
          No pudimos encontrar <code className="not-found__path">{location.pathname}</code>.
          Puede que la página se haya movido o que el enlace esté roto.
        </p>

        <div className="not-found__actions">
          <button
            type="button"
            className="not-found__btn not-found__btn--secondary"
            onClick={() => navigate(-1)}
          >
            Regresar
          </button>
          <Link to="/" className="not-found__btn not-found__btn--primary">
            Ir al inicio
          </Link>
          <Link to="/getStartDocs/docs" className="not-found__btn not-found__btn--ghost">
            Ver documentación
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;