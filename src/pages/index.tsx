import "./styles/grid.css";
import "./styles/grid.css";
import "./styles/form.css";
import "./styles/styles.css";
import "./styles/table.css";
import "./styles/modal.css";
import FormCreatePokemon from "./components/form_create";
import TablePokemon from "./components/table_pokemon";
import { useState } from "react";

const AppPokemon = () => {
  const [viewForm, setViewForm] = useState(false);
  return (
    <div className="container">
      <div className="row">
        <h3>Listado de Pokemon</h3>
        <TablePokemon setView={setViewForm} />
        <br />
        {viewForm === true && <FormCreatePokemon setForm={setViewForm} />}
      </div>
    </div>
  );
};

export default AppPokemon;
