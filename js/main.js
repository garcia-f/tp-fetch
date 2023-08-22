// Referencia a botones, para esto se utilizó jsonplaceholder (documentacion)

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const imageContainer = document.querySelector('#image');

// obtener Datos de una API

const URL_API_JSON_PLACEHOLDER = 'https://jsonplaceholder.typicode.com/posts';
const URL_API_VIA_PLACEHOLDER = 'https://via.placeholder.com/150';
const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/';

const getFromApi = () => {

    fetch(URL_API_JSON_PLACEHOLDER,
        {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((post) => console.log(post.slice(0, 3)))
        .catch((error) => console.error(error))

}

btn1.addEventListener('click', () => {
    getFromApi();
})

// enviar Datos al Servidor

const postToApi = (newPost) => {
    fetch(URL_API_JSON_PLACEHOLDER,
        {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((post) => console.log(post))
        .catch((error) => console.error(error))
}

btn2.addEventListener('click', () => {
    const newPost = {
        title: 'Título',
        body: 'Cuerpo del post'
    }
    postToApi(newPost);
})

// descargar una Imagen

const imgRender = (url) => `
    <img src=${url}>
`;

const downloadImageFromApi = () => {
    fetch(CORS_ANYWHERE + URL_API_VIA_PLACEHOLDER,
        {
            method: 'GET'
        })
        .then((response) => response.blob())
        .then((image) => {
            const objectUrl = URL.createObjectURL(image);
            imageContainer.innerHTML = imgRender(objectUrl)

        })
        .catch((error) => console.error(error))
}

btn3.addEventListener('click', () => {
    downloadImageFromApi();
})