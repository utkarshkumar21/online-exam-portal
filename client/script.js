
// Sample questions (replace with SQL data if backend connected)
const questions = [
    {
        question: "What is the capital of India?",
        options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
        answer: 0
    },
    {
        question: "2 + 2 = ?",
        options: ["3", "4", "5", "6"],
        answer: 1
    }
];

function loadExam() {
    const container = document.getElementById("exam-container");
    container.innerHTML = "";
    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.classList.add("question");
        div.innerHTML = `<p>${i + 1}. ${q.question}</p>` +
            q.options.map((opt, j) => 
                `<label class="option"><input type="radio" name="q${i}" value="${j}"> ${opt}</label><br>`
            ).join("");
        container.appendChild(div);
    });
}

function submitExam() {
    let score = 0;
    questions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) score++;
    });
    document.getElementById("result").innerText = `Your Score: ${score} / ${questions.length}`;
}

loadExam();
