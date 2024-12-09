import { useEffect, useState } from 'react';
import { getProyectos } from '../services/api';

const ProyectosPage = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const data = await getProyectos();
        setProyectos(data);
      } catch (error) {
        console.error('Error al obtener proyectos:', error);
      }
    };

    fetchProyectos();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Proyectos</h2>
      <ul className="list-group">
        {proyectos.map((proyecto) => (
          <li key={proyecto.id_proyecto} className="list-group-item">
            {proyecto.nombre_proyecto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProyectosPage;
