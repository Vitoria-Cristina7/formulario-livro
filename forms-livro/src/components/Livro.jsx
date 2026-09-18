function Livro({ livro }) {
  return (
    <li className="livro">
      <strong>{livro.titulo}</strong> — {livro.autor} — {livro.anopublicacao} —{" "}
      {livro.genero}
    </li>
  );
}

export default Livro;
