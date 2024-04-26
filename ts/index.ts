const form = document.querySelector('#search-form > form');
const input: HTMLInputElement | null = //Especificar que o input é um elemento ou nulo
  document.querySelector('#input-localizacao');

  const sectionTempoInfos = document.querySelector('#tempo-info')

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if(!input || !sectionTempoInfos) return;

  const localizacao = input.value;

  if(localizacao.length < 3){
    alert('O local precisa ter, pelo menos, 3 letras!');
    return; 
  }

const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=c41246845e62d9a4a0fda468290036d3&lang=pt_br&units=metric`);
const dados = await response.json();



const infos = {
  temperatura: Math.round(dados.main.temp),
  local: dados.name,
  icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
};

  sectionTempoInfos.innerHTML = `
  <div class="tempo-dados">
  <h2>${infos.local}</h2>
  <span>${infos.temperatura}ºC</span>
</div>

<img src="${infos.icone}" />
  `;
});