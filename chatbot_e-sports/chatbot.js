const equipe = {
    nome: "Team Phoenix",
    fundacao: "2018",
    jogadores: [
        { nome: "PlayerOne", função: "Capitão" },
        { nome: "AceShot", função: "Atirador" },
        { nome: "ShieldWall", função: "Tanque" }
    ],
    jogos: ["League of Legends", "Valorant"],
    titulos: ["Campeão Nacional 2022", "Finalista Internacional 2023"]
};

function sendMessage() {
    const inputField = document.getElementById("userInput");
    const userText = inputField.value;
    addMessage("Você: " + userText);
    inputField.value = "";

    const botResponse = getBotResponse(userText);
    addMessage("Bot: " + botResponse);
}

function addMessage(message) {
    const chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<div>${message}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("nome")) {
        return `O nome da equipe é ${equipe.nome}.`;
    } else if (input.includes("fundação") || input.includes("fundada")) {
        return `A equipe foi fundada em ${equipe.fundacao}.`;
    } else if (input.includes("jogadores") || input.includes("membros")) {
        return `Os jogadores são: ${equipe.jogadores.map(j => j.nome + " (" + j.função + ")").join(", ")}.`;
    } else if (input.includes("jogos")) {
        return `A equipe joga: ${equipe.jogos.join(", ")}.`;
    } else if (input.includes("títulos") || input.includes("conquistas")) {
        return `Principais conquistas: ${equipe.titulos.join(", ")}.`;
    } else {
        return "Desculpe, não entendi. Pergunte sobre o nome, fundação, jogadores, jogos ou títulos.";
    }
}
