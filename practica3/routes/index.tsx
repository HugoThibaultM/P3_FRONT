import AgregarAFavoritos from "../islands/AgregarAFavoritos.tsx";
import ListaFavoritos from "../islands/ListaFavoritos.tsx";

export default function Home() {
  const peliculas = ["Avengers", "Interstellar", "Matrix", "Superman"];

  return (
    <div>
      <h1>Películas</h1>

      <div>
        {peliculas.map((peli) => (
          <AgregarAFavoritos key={peli} pelicula={peli} />
        ))}
      </div>

      <ListaFavoritos />
    </div>
  );
}
