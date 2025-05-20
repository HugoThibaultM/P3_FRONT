import { favoritos } from "../utils/favoritos.ts";

export default function ListaFavoritos() {
  const eliminar = (pelicula: string) => {
    favoritos.value = favoritos.value.filter((p) => p !== pelicula);
  };

  return (
    <div class="mt-6">
      <h2 class="text-xl font-bold mb-2">Lista de Favoritos</h2>
      {favoritos.value.length === 0 ? (
        <p>No hay películas en la lista.</p>
      ) : (
        <ul class="space-y-2">
          {favoritos.value.map((pelicula) => (
            <li key={pelicula} class="flex justify-between items-center">
              <span>{pelicula}</span>
              <button
                class="text-red-500 hover:text-red-700"
                onClick={() => eliminar(pelicula)}
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
