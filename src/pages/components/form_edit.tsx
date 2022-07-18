import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faSave } from "@fortawesome/free-solid-svg-icons";
import InputRange from "./inputRange";
import { EditPokemon } from "../services/services";

interface FormEditPokemonInterface {
  setShow: any;
  dataPokemon: any;
}

const FormEditPokemon = ({
  setShow,
  dataPokemon,
}: FormEditPokemonInterface) => {
  const onInputRange = (e: any) => {
    let target = e.target;
    const min = target.min;
    const max = target.max;
    const val = target.value;
    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
  };

  const closeModal = () => {
    setShow(false);
  };

  const onSubmitEdit = (e: any) => {
    const data_form = {
      name: e.target[0].value,
      attack: e.target[1].value,
      image: e.target[2].value,
      defense: e.target[3].value,
      type: e.target[4].value,
      hp: e.target[5].value,
      idAuthor: 1,
    };
    EditPokemon(dataPokemon.id, data_form);
    e.preventDefault();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header text-center">Editar Pokemon</div>
        <div className="modal-body">
          <div className="row">
            <div className="col">
              <form onSubmit={onSubmitEdit}>
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <div className="form-group ml-20">
                          <label htmlFor="">Nombre: </label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={dataPokemon.name}
                            required
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group"></div>
                        <div className="form-group float-rigth">
                          <label htmlFor="" className="mr-7">
                            Ataque:{" "}
                          </label>
                          0{" "}
                          <InputRange
                            name="attack"
                            min={0}
                            max={100}
                            step={1}
                            defaultValue={dataPokemon.attack}
                            onInput={onInputRange}
                            required
                          />
                          100
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group ml-20">
                          <label htmlFor="">Imagen: </label>
                          <input
                            type="url"
                            name="image"
                            placeholder="url"
                            className="ml-4"
                            defaultValue={dataPokemon.image}
                            required
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group float-rigth">
                          <label htmlFor="">Defensa: </label>0{" "}
                          <InputRange
                            name="defense"
                            min={0}
                            max={100}
                            step={1}
                            defaultValue={dataPokemon.defense}
                            onInput={onInputRange}
                            required
                          />
                          100
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group ml-20">
                          <label htmlFor="">Tipo: </label>
                          <input
                            type="text"
                            name="type"
                            className="ml-24"
                            defaultValue={dataPokemon.type}
                            required
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group float-rigth">
                          <label htmlFor="">Puntos de vida: </label>0{" "}
                          <InputRange
                            name="hp"
                            min={0}
                            max={100}
                            step={1}
                            defaultValue={dataPokemon.hp}
                            onInput={onInputRange}
                            required
                          />
                          100
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="modal-footer text-center">
                  <button className="btn btn-primary btn-save" type="submit">
                    <FontAwesomeIcon icon={faSave} /> Guardar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={closeModal}
                  >
                    <FontAwesomeIcon icon={faXmark} /> Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditPokemon;
