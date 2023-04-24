import style from "./Paginado.module.css"

const Paginado = ({ dogsPerPage, dogs, paginado }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(dogs / dogsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav className={style.contenedor}>
        <ul className={style.container}>
          {pageNumbers.map((number) => (
            <li key={number} className={style.li}>
              <button onClick={() => paginado(number)} className={style.boton}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Paginado;