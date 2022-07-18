import axios from "axios";

export const AddPokemons = (data: any) => {
  axios
    .post("https://bp-pokemons.herokuapp.com/?idAuthor=1", data)
    .then((response) => {
      if (response?.data?.data) {
        alert("Error al guardar los datos " + response.data.data);
      } else {
        alert("Se guardaron los datos correctamente");
        window.location.reload();
      }
    });
};

export const RemovePokemon = (data: any) => {
  axios.delete(`https://bp-pokemons.herokuapp.com/${data}`).then((response) => {
    if (response?.data?.type === "pokemon_removed") {
      alert("Pokemon Eliminado");
      window.location.reload();
    } else {
      alert("Error en eliminacion");
    }
  });
};

export const EditPokemon = (id: any, data: any) => {
  axios
    .put(`https://bp-pokemons.herokuapp.com/${id}`, data)
    .then((response) => {
      if (response?.data?.data) {
        alert("Error al guardar los datos " + response.data.data);
      } else {
        alert("Se editaron los datos correctamente");
        window.location.reload();
      }
    });
};
