// Atividade1
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => {
    console.log(data.name); 
  });
  
// Atividade2
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    // Filtra os 5 primeiros posts
    const firstFivePosts = data.slice(0, 5);
    // Exibe os títulos dos 5 primeiros posts no console
    firstFivePosts.forEach(post => {
      console.log(post.title);
    });
  })
  .catch(error => {
    console.error('Erro ao buscar os posts:', error);
  });

  
// Atividade3
fetch('https://picsum.photos/v2/list')
  .then(response => response.json())
  .then(data => {
    // Obtém a URL da primeira imagem
    const firstImageURL = data[0].download_url;
    // Exibe a URL da primeira imagem no console
    console.log(firstImageURL);
  })
  .catch(error => {
    console.error('Erro ao buscar a lista de imagens:', error);
  });

// Atividade4
fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
  .then(response => response.json())
  .then(data => {
    // Itera sobre os comentários e exibe os e-mails dos usuários no console
    data.forEach(comment => {
      console.log(comment.email);
    });
  })
  .catch(error => {
    console.error('Erro ao buscar os comentários:', error);
  });

  // Atividade5
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(data => {
    // Seleciona um comentário aleatório da lista
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomComment = data[randomIndex];
    // Exibe o comentário e o autor no console
    console.log(`Comentário: ${randomComment.body}`);
    console.log(`Autor: ${randomComment.name}`);
  })
  .catch(error => {
    console.error('Erro ao buscar o comentário:', error);
  });

 
