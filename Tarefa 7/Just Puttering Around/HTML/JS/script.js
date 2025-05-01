
// // --------------------------- Quiz com a função de adicionar as informações obtidas dentro de uma array em uma div oculta --------------------- //

// function submitQuiz() {
//     // Criar array para armazenar as respostas
//     let userAnswers = [];

//     // Coletar respostas
//     let q1 = document.querySelector('input[name="q1"]:checked');
//     let q2 = document.querySelector('input[name="q2"]:checked');
//     let q3 = document.querySelector('input[name="q3"]:checked');

//     // Verificar se todas as perguntas foram respondidas
//     if (q1 && q2 && q3) {
//         // Adicionar as respostas à array
//         userAnswers.push(q1.value);
//         userAnswers.push(q2.value);
//         userAnswers.push(q3.value);

//         // Exibir as respostas na div oculta
//         let userDataDiv = document.getElementById('user-data');
//         let nome =  document.getElementById('username').value;
//         userDataDiv.innerHTML += `<p>${nome} respondeu: ${userAnswers.join(', ')}</p>`;

//         // Exibir mensagem de sucesso
//         alert("Olhe as respostas na Div oculta, utilizando o comando de inspecionar elementos.");
//     } else {
//         alert("Por favor, responda todas as perguntas para continuar.");
//     }
// }




// ------------------------- Quiz comum que identifica as informações preenchidas pelo usuário e cria um doumento de texto baixado no momento de envio ----------

// // script js

// function submitQuiz() {
//     // Coletar nome do usuário
//     let username = document.getElementById('username').value;

//     // Criar array para armazenar as respostas
//     let userAnswers = [];

//     // Coletar respostas
//     let q1 = document.querySelector('input[name="q1"]:checked');
//     let q2 = document.querySelector('input[name="q2"]:checked');
//     let q3 = document.querySelector('input[name="q3"]:checked');

//     // Verificar se todas as perguntas foram respondidas
//     if (username && q1 && q2 && q3) {
//         // Adicionar o nome e as respostas à array
//         userAnswers.push(`Nome: ${username}`);
//         userAnswers.push(`Resposta 1: ${q1.value}`);
//         userAnswers.push(`Resposta 2: ${q2.value}`);
//         userAnswers.push(`Resposta 3: ${q3.value}`);

//         // Criar um Blob com as respostas
//         let blob = new Blob([userAnswers.join('\n')], { type: 'text/plain' });

//         // Criar um link para download
//         let link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = `${username}_respostas.txt`;
//         link.click();

//         // Exibir mensagem de sucesso
//         alert("Respostas enviadas com sucesso e arquivo gerado!");
//     } else {
//         alert("Por favor, preencha seu nome e responda todas as perguntas.");
//     }
// }


// // ------------------------------------------- Adicionando uma função que identifica se as informações selecionadas forma corretas ou não --------------------

// function submitQuiz() {
//     // Coletar nome do usuário
//     let username = document.getElementById('username').value;

//     // Criar array para armazenar as respostas
//     let userAnswers = [];

//     // Coletar respostas
//     let q1 = document.querySelector('input[name="q1"]:checked');
//     let q2 = document.querySelector('input[name="q2"]:checked');
//     let q3 = document.querySelector('input[name="q3"]:checked');

//     // Respostas corretas
//     let correctAnswers = {
//         q1: "Brasília",
//         q2: "Azul",
//         q3: "Uma linguagem de programação"
//     };

//     // Verificar se todas as perguntas foram respondidas
//     if (username && q1 && q2 && q3) {
//         // Adicionar o nome ao array
//         userAnswers.push(`Nome do usuário: ${username}`);

//         // Verificar resposta 1
//         if (q1.value === correctAnswers.q1) {
//             userAnswers.push(`Resposta 1: Correta (${q1.value})`);
//             document.querySelectorAll('input[name="q1"]').forEach(el => el.parentElement.style.color = 'black');
//         } else {
//             userAnswers.push(`Resposta 1: Incorreta (${q1.value}), Correta: ${correctAnswers.q1}`);
//             document.querySelectorAll('input[name="q1"]').forEach(el => el.parentElement.style.color = 'red');
//         }

//         // Verificar resposta 2
//         if (q2.value === correctAnswers.q2) {
//             userAnswers.push(`Resposta 2: Correta (${q2.value})`);
//             document.querySelectorAll('input[name="q2"]').forEach(el => el.parentElement.style.color = 'black');
//         } else {
//             userAnswers.push(`Resposta 2: Incorreta (${q2.value}), Correta: ${correctAnswers.q2}`);
//             document.querySelectorAll('input[name="q2"]').forEach(el => el.parentElement.style.color = 'red');
//         }

//         // Verificar resposta 3
//         if (q3.value === correctAnswers.q3) {
//             userAnswers.push(`Resposta 3: Correta (${q3.value})`);
//             document.querySelectorAll('input[name="q3"]').forEach(el => el.parentElement.style.color = 'black');
//         } else {
//             userAnswers.push(`Resposta 3: Incorreta (${q3.value}), Correta: ${correctAnswers.q3}`);
//             document.querySelectorAll('input[name="q3"]').forEach(el => el.parentElement.style.color = 'red');
//         }
//     }
//         // Obter metadados do navegador e do dispositivo
//         let userAgent = navigator.userAgent; // Informação sobre o navegador e o SO
//         let language = navigator.language;   // Idioma do navegador
//         let screenWidth = window.screen.width;  // Largura da tela
//         let screenHeight = window.screen.height; // Altura da tela

//         // Adicionar metadados ao arquivo
//         userAnswers.push(`\n--- Metadados ---`);
//         userAnswers.push(`Navegador e SO: ${userAgent}`);
//         userAnswers.push(`Idioma do Navegador: ${language}`);
//         userAnswers.push(`Resolução da Tela: ${screenWidth}x${screenHeight}`);

//         // Adicionando Emoji em Texto heheheh
//         userAnswers.push(`
//                 ⠀⠀⠀⠀⣀⡤⢤⣄⠀⣠⡤⣤⡀⠀⠀⠀
//                 ⠀⠀⢀⣴⢫⠞⠛⠾⠺⠟⠛⢦⢻⣆⠀⠀
//                 ⠀⠀⣼⢇⣻⡀⠀⠀⠀⠀⠀⠀⢸⡇⢿⣆⠀
//                 ⠀⢸⣯⢦⣽⣷⣄⡀⠀⢀⣴⣿⣳⣬⣿⠀
//                 ⢠⡞⢩⣿⠋⠙⠳⣽⢾⣯⠛⠙⢹⣯⠘⣷
//                 ⠀⠈⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠋⠁⠀⠀
//             `)

//         // Criar um Blob com as respostas e metadados
//         let blob = new Blob([userAnswers.join('\n')], { type: 'text/plain' });

//         // Criar um link para download
//         let link = document.createElement('a');
//         link.href = URL.createObjectURL(blob);
//         link.download = `${username}_respostas.txt`;
//         link.click();

//         // Exibir mensagem de sucesso
//         alert("Respostas enviadas com sucesso e arquivo gerado!");
//     } 


