// bunsa.js
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");

const responses = {
    hello: "Hi there! I'm Bunsa, your personal assistant.",
    projects: "Sai has worked on an Exam System, Data Analysis, and a Message Encoder.",
    resume: "You can download the resume above.",
    skills: "Sai knows Python, Django, Data Analysis, and more.",
    default: "I'm still learning. Ask me something else!"
};

chatInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const userMsg = chatInput.value.toLowerCase();
        const reply = responses[Object.keys(responses).find(k => userMsg.includes(k))] || responses.default;

        chatBody.innerHTML += `<div class='user-msg'>${chatInput.value}</div>`;
        chatBody.innerHTML += `<div class='bunsa-msg'>${reply}</div>`;
        chatInput.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});
