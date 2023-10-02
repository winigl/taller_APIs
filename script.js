async function fetchCharacters() {
  const url = 'https://rickandmortyapi.com/api/character';
  
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Error en la solicitud. Código de estado: ' + response.status);
      }
      const data = await response.json();
      const characters = data.results;

      const resultadosDiv = document.getElementById('resultados');
      const ul = document.createElement('ul');

      characters.forEach(character => {
          const li = document.createElement('li');
          li.innerHTML = `
              <p>Nombre: ${character.name}</p>
              <p>Especie: ${character.species}</p>
              <img src="${character.image}" alt="${character.name}">`;

          ul.appendChild(li);
      });

      resultadosDiv.appendChild(ul);
  } catch (error) {
      console.error('Error: ' + error);
  }
}

// Llama a la función para obtener y mostrar los personajes
fetchCharacters();

