import { favoritos } from "../utils/favoritos.ts";

export default function ListaFavoritos() {
  const eliminar = (pelicula: string) => {
    favoritos.value = favoritos.value.filter((p) => p !== pelicula);
  };

  return (
    <div>
      <h2>Lista de Favoritos</h2>
      {favoritos.value.length === 0 ? (
        <p>No hay películas en la lista.</p>
      ) : (
        <ul>
          {favoritos.value.map((pelicula) => (
            <li key={pelicula}>
              <span>{pelicula}</span>
              <button onClick={() => eliminar(pelicula)}>Quitar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
