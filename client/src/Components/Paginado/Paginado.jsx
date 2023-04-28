import style from "./Paginado.module.css"

const Paginado = ({ dogsPerPage, dogs, paginado, currentPage, prevPage, nextPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(dogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={style.contenedor}>

      <ul className={style.container}>
        <li>
          <button onClick={prevPage} disabled={currentPage === 1} className={style.boton}>
            {"<<"}
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={style.li}>
            <button onClick={() => paginado(number)} className={style.boton}>
              {number}
            </button>
          </li>
        ))}
        <li>
          <button onClick={nextPage} disabled={currentPage === Math.ceil(dogs / dogsPerPage)} className={style.boton}>
            {">>"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginado;