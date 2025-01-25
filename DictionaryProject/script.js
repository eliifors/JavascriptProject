const searchInput = document.getElementById('search');
const button = document.querySelector('button');
const translate = document.getElementById('translate');
const title = document.getElementById('title');
const meaning = document.getElementById('meaning');
const audio = document.getElementById('audio');


 async function fetchApi() {

    translate.style.display = 'none';
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput.value}`;
    const result = await fetch(url).then((res) => res.json());
    console.log(result);
    if(result.title)
        {
    } 
    else {
        translate.style.display = 'block';
        title.textContent = result[0].word;
        meaning.textContent = result[0].meanings[0].definitions[0].definition;
        audio.src = result[0].phonetics[0].audio;
    }
}

button.addEventListener('click', fetchApi) ;