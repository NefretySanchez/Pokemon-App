import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faEdit,
  faTrash,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { RemovePokemon } from "../services/services";
import FormEditPokemon from "./form_edit";

interface TablePokemonInterface {
  setView: any;
}

const TablePokemon = ({ setView }: TablePokemonInterface) => {
  const [data, setData] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [dataEdit, setDataEdit] = useState([]);
  const [error, setError] = useState("");
  const [inputText, setInputText] = useState("");

  const onClickCreate = () => {
    setView(true);
  };

  const listPokemons = () => {
    axios
      .get("https://bp-pokemons.herokuapp.com/?idAuthor=1")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const removePokemon = (id: any) => {
    RemovePokemon(id);
  };

  const editPokemon = (data: any) => {
    setShowModal(true);
    setDataEdit(data);
  };

  const onSearchName = (value: any) => {
    setInputText(value.target.value);
  };

  const dataPokemons = data.filter((value) => {
    if (inputText === "") {
      return value;
    } else {
      return value.name.toLocaleLowerCase().includes(inputText);
    }
  });

  useEffect(() => {
    listPokemons();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="input-search">
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input type="search" placeholder="Buscar" onChange={onSearchName} />
          </div>
        </div>
        <div className="col">
          <button
            className="btn btn-primary btn-create"
            onClick={onClickCreate}
          >
            <FontAwesomeIcon icon={faPlus} /> Nuevo
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Ataque</th>
                <th>Defensa</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {dataPokemons.length > 0 &&
                dataPokemons?.map((pokemon, index) => {
                  return (
                    <>
                      <tr>
                        <td key={pokemon?.name}>{pokemon?.name}</td>
                        <td className="text-center" key={pokemon?.image}>
                          <a
                            href={pokemon?.image}
                            className="link-image-pokemon"
                            target="_blank"
                          >
                            {" "}
                            <FontAwesomeIcon icon={faImage} />
                          </a>
                        </td>
                        <td key={pokemon?.attack}>{pokemon?.attack}</td>
                        <td key={index + 1}>{pokemon?.defense}</td>
                        <td key={pokemon?.id} className="text-center">
                          <button
                            className="btn btn-table"
                            onClick={() => editPokemon(pokemon)}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button
                            className="btn btn-table"
                            onClick={() => removePokemon(pokemon.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      {showModal === true && (
        <FormEditPokemon setShow={setShowModal} dataPokemon={dataEdit} />
      )}
    </>
  );
};

export default TablePokemon;
