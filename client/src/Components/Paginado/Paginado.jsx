const Paginado = ({ dogsPerPage, dogs, paginado }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(dogs / dogsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
              <button onClick={() => paginado(number)}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Paginado;