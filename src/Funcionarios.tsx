import "./Funcionarios.css";

interface FuncProps {
  nome: string;
  setor: string;
  data: string;
  salario: number;
  dependentes: string;
}

export default function Funcionario({
  nome,
  setor,
  data,
  salario,
  dependentes,
}: FuncProps) {
  return (
    <>
      <div className="nomefunc">Nome: {nome}</div>
      <div className="setor">Setor: {setor}</div>
      <div className="dataAdmissao">Data: {data}</div>
      <div className="salario">Salario: {salario.toLocaleString()}</div>
      <div className="nomeDependente">Nome do dependente: {dependentes}</div>
    </>
  );
}
