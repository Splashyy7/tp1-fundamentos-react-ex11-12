import React, { useState, useEffect } from 'react';


const App = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData(){
    try {
      const response = await fetch('https://fakestoreapi.com/products')
         if(!response.ok){
           throw new Error('Erro na requisição');
         }

    const data = await response.json();
    setProdutos(data);
    } catch (error) {
      console.error("Erro no processo de fetch:",error);
    }finally {
      setLoading(false);
    }

  };
  useEffect(() => {
    fetchData();
  }, [])


  return (
      <div>
        <h1>Chamando API - 11 e 12</h1>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <ul>
            {produtos.map((produto) => (
              <li key={produto.id}>
                <h2>{produto.title}</h2>
                <p>{produto.description}</p>
                <p><strong>Preço:</strong> ${produto.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default App;