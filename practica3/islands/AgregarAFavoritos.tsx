import { favoritos } from "../utils/favoritos.ts";

interface Props {
  pelicula: string;
}

export default function AgregarAFavoritos({ pelicula }: Props) {
  const agregar = () => {
    if (!favoritos.value.includes(pelicula)) {
      favoritos.value = [...favoritos.value, pelicula];
    }
  };

  return (
    <button onClick={agregar}>Agregar "{pelicula}"</button>
  );
}
