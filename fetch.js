// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(data=> renderFnc(data, 0, 51, document.body));
      
    

//       function renderFnc (arr, startNumber, endNumber, node){
//         arr.slice(startNumber, endNumber).forEach(item => {

//             const newItem = document.createElement("p");
//             // const itemBody = document.createElement('p');
//             // photo.src = item.thumbnailUrl 
//             // itemBody.textContent = item.title;
//             newItem.textContent = `   ${item.body}  `;
//             node.append( newItem);
            
//         })
//       }


// const API = 'https://jsonplaceholder.typicode.com/posts' 
// fetch(API)
// .then((data) => {
//   return data.json()
// })
// .then((dataJson) => {
//   console.log(dataJson)
// })
// .catch((err) => {
//   console.log(err);
// })

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
   data.forEach(post  => {
    const result = `<li><span>${post.id}</span><h3>${post.title}</h3><p>${post.body}</p></li>`
    // const postsNumber = `<span>${post.id}</span>`
    // const postsTitle = `<h3>${post.title}</h3>`
    // const postsBody = `<p>${post.body}</p>`

    document.querySelector('ul').insertAdjacentHTML('beforeend', result)
    
   });
  })
  .catch(err => console.log(err));