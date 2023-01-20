import { useRouteError } from 'react-router-dom';
import './Error.scss';
const Error = () => {
  const { status, data } = useRouteError();

  return (
    <div className="error-container">
      <h3>{status}</h3>
      <h4>{data}</h4>
    </div>
  );
};

export default Error;
