// Componente que recebe um aluno via props e mostra os dados dele.
function Livro({ livro }) {
  return (
    <li className="livro">
      <strong>{livro.titulo}</strong> — {livro.autor} — {livro.ano} —{" "}
      {livro.genero}
    </li>
  );
}

export default Livro;
