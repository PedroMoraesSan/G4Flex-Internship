// Codiguin do Quizz 

function submitQuiz() {
    // Coletar nome do usuário
    let username = document.getElementById('username').value;

    // Criar array para armazenar as respostas
    let userAnswers = [];

    // Coletar respostas
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');
    let q6 = document.querySelector('input[name="q6"]:checked');
    let q7 = document.querySelector('input[name="q7"]:checked');
    let q8 = document.querySelector('input[name="q8"]:checked');
    let q9 = document.querySelector('input[name="q9"]:checked');
    let q10 = document.querySelector('input[name="q10"]:checked');
    let q11 = document.querySelector('input[name="q11"]:checked');
    let q12 = document.querySelector('input[name="q12"]:checked');

    // Respostas corretas
    let correctAnswers = {
        q1: "Cream",
        q2: "Tears in Heaven",
        q3: "Slowhand",
        q4: "1995",
        q5: "Suécia",
        q6: "Neoclássico",
        q7: "18",
        q8: "Rising Force",
        q9: "Frank Zappa",
        q10: "Passion and Warfare",
        q11: "Crossroads",
        q12: "Jem (Ibanez)"
    };

    // Verificar se todas as perguntas foram respondidas
    if (username && q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10 && q11 && q12) {
        // Adicionar o nome ao array
        userAnswers.push(`Nome do usuário: ${username}`);

        // Verificar cada resposta
        let questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];
        questions.forEach((question, index) => {
            let questionKey = `q${index + 1}`;
            if (question.value === correctAnswers[questionKey]) {
                userAnswers.push(`Resposta ${index + 1}: Correta (${question.value})`);
                document.querySelectorAll(`input[name="${questionKey}"]`).forEach(el => el.parentElement.style.color = 'black');
            } else {
                userAnswers.push(`Resposta ${index + 1}: Incorreta (${question.value}), Correta: ${correctAnswers[questionKey]}`);
                document.querySelectorAll(`input[name="${questionKey}"]`).forEach(el => el.parentElement.style.color = 'red');
            }
        });

        // Obter metadados do navegador e do dispositivo
        let userAgent = navigator.userAgent; // Informação sobre o navegador e o SO
        let language = navigator.language;   // Idioma do navegador
        let screenWidth = window.screen.width;  // Largura da tela
        let screenHeight = window.screen.height; // Altura da tela

        // Adicionar metadados ao arquivo
        userAnswers.push(`\n--- Metadados ---`);
        userAnswers.push(`Navegador e SO: ${userAgent}`);
        userAnswers.push(`Idioma do Navegador: ${language}`);
        userAnswers.push(`Resolução da Tela: ${screenWidth}x${screenHeight}`);

        // Adicionando Emoji em Texto heheheh
        userAnswers.push(`
                ⠀⠀⠀⠀⣀⡤⢤⣄⠀⣠⡤⣤⡀⠀⠀⠀
                ⠀⠀⢀⣴⢫⠞⠛⠾⠺⠟⠛⢦⢻⣆⠀⠀
                ⠀⠀⣼⢇⣻⡀⠀⠀⠀⠀⠀⠀⢸⡇⢿⣆⠀
                ⠀⢸⣯⢦⣽⣷⣄⡀⠀⢀⣴⣿⣳⣬⣿⠀
                ⢠⡞⢩⣿⠋⠙⠳⣽⢾⣯⠛⠙⢹⣯⠘⣷
                ⠀⠈⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠋⠁⠀⠀
            `)

        // Criar um Blob com as respostas e metadados
        let blob = new Blob([userAnswers.join('\n')], { type: 'text/plain' });

        // Criar um link para download
        let link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${username}_respostas.txt`;
        link.click();

        // Exibir mensagem de sucesso
        alert("Respostas enviadas com sucesso e arquivo gerado!");
    } else {
        alert("Por favor, responda todas as perguntas antes de enviar o quiz.");
    }
}
