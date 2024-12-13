import "./App.css";
import Funcionarios from "./Funcionarios";
import jsonFunc from "./assets/funcionarios.json";

function App() {
  return (
    <>
      <Funcionarios
        nome={jsonFunc.funcionarios[0].nome_completo}
        setor={jsonFunc.funcionarios[0].setor}
        data={jsonFunc.funcionarios[0].data_admissao}
        salario={jsonFunc.funcionarios[0].salario_base}
        dependentes={jsonFunc.funcionarios[0].dependentes[0].nome}
      />
    </>
  );
}

export default App;
