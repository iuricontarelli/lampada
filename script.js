// Obtendo referências para os elementos HTML com os quais iremos interagir
const turnOnOff = document.getElementById("turnOnOff"); // Botão para ligar/desligar a lâmpada
const lamp = document.getElementById("lamp"); // Imagem da lâmpada

// Função para verificar se a lâmpada está quebrada
function isLampBroken() {
	// Verifica se o src da imagem contém a palavra "quebrada", se sim retorna true, se nao retorna false
	return lamp.src.indexOf("quebrada") > -1;
}

// Função para ligar a lâmpada
function lampOn() {
	// Verifica se a lâmpada não está quebrada
	if (!isLampBroken()) {
		// Altera o src da imagem para a lâmpada acesa
		lamp.src = "./img/ligada.jpg";
	}
}

// Função para desligar a lâmpada
function lampOff() {
	// Verifica se a lâmpada não está quebrada
	if (!isLampBroken()) {
		// Altera o src da imagem para a lâmpada apagada e o texto do botão para "Ligar"
		lamp.src = "./img/desligada.jpg";
		turnOnOff.textContent = "Ligar";
	}
}

// Função para quebrar a lâmpada
function lampBroken() {
	// Altera o src da imagem para a lâmpada quebrada
	lamp.src = "./img/quebrada.jpg";
}

// Função para ligar ou desligar a lâmpada quando o botão é clicado
function lampOnOff() {
	// Verifica se o texto do botão é "Ligar"
	if (turnOnOff.textContent == "Ligar") {
		// Se sim, liga a lâmpada, muda o texto do botão para "Desligar"
		lampOn();
		turnOnOff.textContent = "Desligar";
	} else {
		// Se não, desliga a lâmpada, muda o texto do botão para "Ligar"
		lampOff();
		turnOnOff.textContent = "Ligar";
	}
}

// Adicionando event listener para o clique no botão de ligar/desligar
turnOnOff.addEventListener("click", lampOnOff);

// Adicionando event listener para passar o mouse sobre a lâmpada e ligá-la
lamp.addEventListener("mouseover", lampOn);

// Adicionando event listener para retirar o mouse de cima da lâmpada e desligá-la
lamp.addEventListener("mouseleave", lampOff);

// Adicionando event listener para duplo clique na lâmpada para quebrá-la
lamp.addEventListener("dblclick", lampBroken);
