async function buscarClima() {

const cidade = document.getElementById("cidade").value
const resultado = document.getElementById("resultado")

resultado.innerHTML = "⏳ Carregando..."

const apiKey = "3e27fe2d748565d70e545919213c176d"

const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`

try{

const resposta = await fetch(url)
const dados = await resposta.json()

if(dados.cod == 404){
resultado.innerHTML = "❌ Cidade não encontrada"
return
}

resultado.innerHTML = `
<h2>${dados.name}</h2>
<p>🌡️ Temperatura: ${dados.main.temp}°C</p>
<p>☁️ Clima: ${dados.weather[0].description}</p>
<p>💧 Umidade: ${dados.main.humidity}%</p>
`

}catch{

resultado.innerHTML = "⚠️ Erro ao buscar dados"

}

}