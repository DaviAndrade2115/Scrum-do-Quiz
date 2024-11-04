const steps = [
    { title: "Passo 1: Product Backlog", description: "Definir e priorizar as funcionalidades do quiz, incluindo tipos de perguntas e interface do usuário." },
    { title: "Passo 2: Planejamento do Sprint", description: "Selecionar as funcionalidades a serem implementadas no Sprint atual, como o layout do quiz e o sistema de pontuação." },
    { title: "Passo 3: Execução do Sprint", description: "Desenvolver a funcionalidade do quiz, incluindo codificação e testes iniciais." },
    { title: "Passo 4: Reuniões Diárias", description: "Realizar reuniões diárias breves para discutir o progresso e quaisquer obstáculos encontrados." },
    { title: "Passo 5: Revisão do Sprint", description: "Apresentar o quiz finalizado aos stakeholders para feedback." },
    { title: "Passo 6: Retrospectiva do Sprint", description: "Rever o Sprint para identificar sucessos e áreas de melhoria." }
];

function displaySteps() {
    const processStepsDiv = document.getElementById('process-steps');
    steps.forEach(step => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'step';
        stepDiv.innerHTML = `<h3>${step.title}</h3><p>${step.description}</p>`;
        processStepsDiv.appendChild(stepDiv);
    });
}

const sprintDetails = `
    <h3>Duração do Sprint:</h3>
    <p>Este Sprint durou dois dias e focou nas principais funcionalidades do quiz.</p>
    <h3>Tarefas Concluídas:</h3>
    <ul>
        <li>Desenvolvimento da interface do quiz</li>
        <li>Implementação da lógica das perguntas</li>
        <li>Realização de testes iniciais</li>
        <li>Coleta de feedback dos colegas</li>
    </ul>
`;

function displaySprintDetails() {
    const sprintDiv = document.getElementById('sprint-details');
    sprintDiv.innerHTML = sprintDetails;
}

document.addEventListener('DOMContentLoaded', () => {
    displaySteps();
    displaySprintDetails();
});
