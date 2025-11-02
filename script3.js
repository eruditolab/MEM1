        function renderMath() {
            if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
            }
        }
    const allQuestions = [
    {
        pregunta: `<span class="math-expr">5<sup>3</sup> + 5<sup>3</sup> + 5<sup>3</sup> + 5<sup>3</sup> + <span class="fraction"><span class="num">5<sup>4</sup></span><span class="den">5</span></span> =</span>`,
        opciones: [
            `5<sup>3</sup>`,
            `5<sup>15</sup>`,
            `5<sup>4</sup>`,
            `5`
        ],
        correcta: 2
    },
    {
        pregunta: `<span class="math-expr">3<sup>4</sup> · 9<sup>2</sup> · 27<sup>4</sup> =</span>`,
        opciones: [
            `3<sup>9</sup>`,
            `3<sup>15</sup>`,
            `3<sup>20</sup>`,
            `3<sup>36</sup>`
        ],
        correcta: 2
    },
    {
        pregunta: `¿A cuánto es igual la tercera parte de <span class="math-expr">9<sup>4</sup></span> ?`,
        opciones: [
            `3<sup>4</sup>`,
            `3<sup>5</sup>`,
            `3<sup>7</sup>`,
            `3<sup>8</sup>`
        ],
        correcta: 2
    },
    {
        pregunta: `<span class="math-expr">(<span class="fraction"><span class="num">0,00035</span><span class="den">0,0007</span></span>)<sup>-3</sup> =</span>`,
        opciones: [
            `2 · 10`,
            `0,8 · 10`,
            `4 · 10<sup>2</sup>`,
            `5 · 10<sup>-3</sup>`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál de las siguientes expresiones es equivalente a <span class="math-expr">(x<sup>7</sup>) · (x<sup>-1</sup>)<sup>-3</sup></span>?`,
        opciones: [
            `x<sup>4</sup>`,
            `x<sup>-4</sup>`,
            `x<sup>8</sup>`,
            `x<sup>10</sup>`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Cuál de las siguientes expresiones es equivalente a <span class="math-expr">-4<sup>2</sup> · 4<sup>a</sup></span> ?`,
        opciones: [
            `-4<sup>a-2</sup>`,
            `-4<sup>a+2</sup>`,
            `16<sup>2a</sup>`,
            `(-16)<sup>a+2</sup>`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál de las siguientes expresiones es equivalente a <span class="math-expr">(<span class="fraction"><span class="num">1</span><span class="den">3</span></span>b<sup>-3</sup>)<sup>-2</sup></span>?`,
        opciones: [
            `<span class="fraction"><span class="num">1</span><span class="den">3</span></span>b<sup>6</sup>`,
            `<span class="fraction"><span class="num">1</span><span class="den">3</span></span>b<sup>-5</sup>`,
            `9b<sup>-5</sup>`,
            `9b<sup>6</sup>`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Cuál de las siguientes expresiones es equivalente a <span class="math-expr">p<sup>5</sup> + p<sup>5</sup> + p<sup>5</sup></span>?`,
        opciones: [
            `(3p)<sup>5</sup>`,
            `(3p)<sup>15</sup>`,
            `3p<sup>15</sup>`,
            `3p<sup>5</sup>`
        ],
        correcta: 3
    },
    {
        pregunta: `Si <span class="math-expr">a # b = <span class="fraction"><span class="num">b - a<sup>2</sup></span><span class="den">3</span></span></span>, <span class="math-expr">c*d = c<sup>d</sup></span>, <span class="math-expr">2*h = 64</span>, ¿cuál es el valor de <span class="math-expr">h # 3</span> ?`,
        opciones: [
            "−11",
            "−39",
            "11",
            "37"
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuál de las siguientes expresiones es equivalente a <img src="https://i.postimg.cc/QdfLtc72/P-10-3-Ra-ces.jpg" alt="Pregunta 10 Raíces" style="max-width: 20%; height: auto;"> ?`,
        opciones: [
            `<img src="https://i.postimg.cc/630CJ6gf/P-10-3-Ra-ces-R1.jpg" alt="Pregunta 10 Raíces Respuesta 1" style="max-width: 20%; height: auto;">`,
            `<img src="https://i.postimg.cc/cJWKxyQ9/P-10-3-Ra-ces-R2.jpg" alt="Pregunta 10 Raíces Respuesta 2" style="max-width: 20%; height: auto;">`,
            `<img src="https://i.postimg.cc/DwNT6qzq/P-10-3-Ra-ces-R3.jpg" alt="Pregunta 10 Raíces Respuesta 3" style="max-width: 20%; height: auto;">`,
            `<img src="https://i.postimg.cc/MHn07230/P-10-3-Ra-ces-R4.jpg" alt="Pregunta 10 Raíces Respuesta 4" style="max-width: 20%; height: auto;">`
        ],
        correcta: 1
    },
    {
        pregunta: `Si <span class="math-expr">5<sup>x</sup> = 125 · 125</span> , entonces ¿cuál es el valor de x?`,
        opciones: [
            "5",
            "6",
            "7",
            "8"
        ],
        correcta: 1
    },
    {
        pregunta: `Se sabe que un cultivo de bacterias se duplica cada 24 horas. Si al comienzo se partió este cultivo con 1.000 bacterias, ¿al cabo de cuántos días la cantidad inicial de bacterias se multiplicó 64?`,
        opciones: [
            "4",
            "5",
            "6",
            "7"
        ],
        correcta: 2
    },
    {
        pregunta: `Si <img src="https://i.postimg.cc/RV5hvx1k/P-13-3-Ra-ces-1.jpg" alt="Pregunta 13 Raíces 1" style="max-width: 7%; height: auto;">, entonces el valor de <img src="https://i.postimg.cc/d01t5svy/P-13-3-Ra-ces-2.jpg" alt="Pregunta 13 Raíces 2" style="max-width: 7%; height: auto;"> es:`,
        opciones: [
            "18",
            "20",
            "24",
            "36"
        ],
        correcta: 3
    },
    {
        pregunta: `¿Cuál de las siguientes alternativas representa el valor de <span class="math-expr"><span class="fraction"><span class="num">(<span class="fraction"><span class="num">2</span><span class="den">3</span></span>)<sup>-a</sup> · (<span class="fraction"><span class="num">3</span><span class="den">2</span></span>)<sup>a</sup></span><span class="den">(<span class="fraction"><span class="num">9</span><span class="den">4</span></span>)<sup>a</sup></span></span></span> ?`,
        opciones: [
            "1",
            `<span class="fraction"><span class="num">3</span><span class="den">2</span></span>`,
            `(<span class="fraction"><span class="num">3</span><span class="den">2</span></span>)<sup>2</sup>`,
            `(<span class="fraction"><span class="num">3</span><span class="den">2</span></span>)<sup>a²</sup>`
        ],
        correcta: 0
    },
    {
        pregunta: `Si <span class="math-expr">x = 1,777777...</span> . ¿Cuál es el valor de <img src="https://i.postimg.cc/d31vmrFh/P-15-3.jpg" alt="Pregunta 15 Raíces" style="max-width: 7%; height: auto;">?`,
        opciones: [
            `-<span class="fraction"><span class="num">1</span><span class="den">9</span></span>`,
            "−1",
            "1",
            `<span class="fraction"><span class="num">2</span><span class="den">9</span></span>`
        ],
        correcta: 2
    },
    {
        pregunta: `Si <span class="math-expr">p = 3<sup>3</sup> + 3<sup>3</sup> + 3<sup>3</sup></span> y <span class="math-expr">q = 9<sup>6</sup> + 9<sup>6</sup> + 9<sup>6</sup></span>, entonces <span class="math-expr"><span class="fraction"><span class="num">q</span><span class="den">p</span></span></span> es igual a:`,
        opciones: [
            `3<sup>3</sup>`,
            `3<sup>4</sup>`,
            `3<sup>9</sup>`,
            `3<sup>14</sup>`
        ],
        correcta: 2
    },
    {
        pregunta: `Tamara deja caer una pelota desde un edificio ubicado a 9 metros de altura. Cada vez que da un bote alcanza <span class="math-expr"><span class="fraction"><span class="num">2</span><span class="den">3</span></span></span> de la altura anterior. ¿A qué altura llegará luego del quinto bote?`,
        opciones: [
            `(<span class="fraction"><span class="num">2</span><span class="den">3</span></span>)<sup>5</sup> metros`,
            `<span class="fraction"><span class="num">2<sup>5</sup></span><span class="den">3<sup>3</sup></span></span> metros`,
            `9 · (<span class="fraction"><span class="num">2</span><span class="den">3</span></span>)<sup>4</sup> metros`,
            `9 · (<span class="fraction"><span class="num">1</span><span class="den">3</span></span>)<sup>5</sup> metros`
        ],
        correcta: 1
    },
    {
        pregunta: `<img src="https://i.postimg.cc/GmPNt90V/P-18-3-Ra-ces.jpg" alt="Pregunta 18 Raíces" style="max-width: 20%; height: auto;"> =`,
        opciones: [
            `-<span class="fraction"><span class="num">1</span><span class="den">12</span></span>`,
            `<span class="fraction"><span class="num">1</span><span class="den">12</span></span>`,
            `<span class="fraction"><span class="num">1</span><span class="den">6</span></span>`,
            `-<span class="fraction"><span class="num">1</span><span class="den">6</span></span>`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuál es el valor de <span class="math-expr"><span class="fraction"><span class="num">(3<sup>4</sup>)<sup>7</sup>(2<sup>14</sup>)<sup>2</sup></span><span class="den">(6<sup>5</sup>)<sup>5</sup></span></span>?`,
        opciones: [
            `2<sup>3</sup> · 3<sup>3</sup>`,
            `2<sup>3</sup> · 3<sup>2</sup>`,
            `2<sup>2</sup> · 3<sup>3</sup>`,
            `2<sup>2</sup> · 3<sup>2</sup>`
        ],
        correcta: 0
    },
    {
        pregunta: `Si x = y, con x distinto de cero, entonces, ¿cómo se puede expresar <span class="math-expr">x<sup>y</sup> · y<sup>x</sup></span>?`,
        opciones: [
            `x<sup>2x</sup>`,
            `(2x)<sup>2</sup>`,
            `(2x)<sup>x</sup>`,
            `(2x)<sup>2x</sup>`
        ],
        correcta: 0
    },
    {
        pregunta: `<img src="https://i.postimg.cc/523VGstX/P-21-3-Ra-ces.jpg" alt="Pregunta 21 Raíces" style="max-width: 13%; height: auto;"> =`,
        opciones: [
            `9<sup>2</sup>`,
            `3<sup>8</sup>`,
            `<span class="fraction"><span class="num">1</span><span class="den">3<sup>2</sup></span></span>`,
            `3<sup>-8</sup>`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Cuál es el valor de <img src="https://i.postimg.cc/zGpsp3dW/P-22-3-Ra-ces.jpg" alt="Pregunta 22 Raíces" style="max-width: 19%; height: auto;"> ?`,
        opciones: [
            "26",
            "21",
            "19",
            "16"
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuál de las siguientes igualdades es falsa?`,
        opciones: [
            `-25<sup>1/2</sup> = -5`,
            `4<sup>-1/2</sup> = <span class="fraction"><span class="num">1</span><span class="den">2</span></span>`,
            `32<sup>5/3</sup> = 8`,
            `8<sup>2/3</sup> = 4`
        ],
        correcta: 0
    },
    {
        pregunta: `<img src="https://i.postimg.cc/XvGsFvtn/P-24-3-Ra-ces.jpg" alt="Pregunta 24 Raíces" style="max-width: 13%; height: auto;">`,
        opciones: [
            `<img src="https://i.postimg.cc/wxVQ1J3h/P-24-3-Ra-ces-R1.jpg" alt="Pregunta 24 Raíces R1" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/X71K8bfq/P-24-3-Ra-ces-R2.jpg" alt="Pregunta 24 Raíces R2" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/vHYXhhCq/P-24-3-Ra-ces-R3.jpg" alt="Pregunta 24 Raíces R3" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/pVqKWH1C/P-24-3-Ra-ces-R4.jpg" alt="Pregunta 24 Raíces R4" style="max-width: 7%; height: auto;">`
        ],
        correcta: 1
    },
    {
        pregunta: `<img src="https://i.postimg.cc/JntMjjMG/P-25-3-Ra-ces.jpg" alt="Pregunta 25 Raíces" style="max-width: 13%; height: auto;">`,
        opciones: [
            `<img src="https://i.postimg.cc/P5hLYVcJ/P-25-3-Ra-ces-R1.jpg" alt="Pregunta 25 Raíces R1" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/d0VLSkJK/P-25-3-Ra-ces-R2.jpg" alt="Pregunta 25 Raíces R2" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/C1W51ckF/P-25-3-Ra-ces-R3.jpg" alt="Pregunta 25 Raíces R3" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/c4G6G5dh/P-25-3-Ra-ces-R4.jpg" alt="Pregunta 25 Raíces R4" style="max-width: 5%; height: auto;">`
        ],
        correcta: 1
    },
    {
        pregunta: `<img src="https://i.postimg.cc/h46TzrcQ/P-26-3-Ra-ces.jpg" alt="Pregunta 26 Raíces" style="max-width: 13%; height: auto;">`,
        opciones: [
            `3`,
            `3<sup>1/4</sup>`,
            `3<sup>3/4</sup>`,
            `3<sup>1/2</sup>`
        ],
        correcta: 2
    },
    {
        pregunta: `Si x > 0, entonces <img src="https://i.postimg.cc/nr47BX49/P-27-3-Ra-ces.jpg" alt="Pregunta 27 Raíces" style="max-width: 12%; height: auto;"> es igual a:`,
        opciones: [
            `<img src="https://i.postimg.cc/rwBVXfXc/P-27-3-Ra-ces-R1.jpg" alt="Pregunta 27 Raíces R2" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/GpvccvdD/P-27-3-Ra-ces-R2.jpg" alt="Pregunta 27 Raíces R2" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/Y9ktjjCs/P-27-3-Ra-ces-R3.jpg" alt="Pregunta 27 Raíces R2" style="max-width: 7%; height: auto;">`,
            `<img src="https://i.postimg.cc/wMjHcPJ5/P-27-3-Ra-ces-R4.jpg" alt="Pregunta 27 Raíces R2" style="max-width: 7%; height: auto;">`
        ],
        correcta: 2
    }
];

        const paesScores = [100, 170, 194, 216, 236, 256, 275, 292, 307, 321, 335, 350, 365, 380, 393, 403, 412, 422, 433, 446, 460, 474, 486, 495, 502, 509, 516, 527];

        let questions = [];
        let currentQuestion = 0;
        let userAnswers = {};


        function shuffleArray(array) {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        }


        function initQuiz() {
            questions = shuffleArray(allQuestions).slice(0, 27);
            currentQuestion = 0;
            userAnswers = {};
            document.getElementById('results').innerHTML = '';
            totalSeconds = 0;
            startTimer();
            renderQuestion();
        }

        function renderQuestion() {
            const question = questions[currentQuestion];
            const progress = ((currentQuestion + 1) / questions.length) * 100;
            document.getElementById('progressBar').style.width = `${progress}%`;

            let optionsHtml = '';
            question.opciones.forEach((option, index) => {
                if (typeof option === 'object' && option.type === 'image') {
                    optionsHtml += `
                        <div class="option ${userAnswers[currentQuestion] === index ? 'selected' : ''}"
                            onclick="selectOption(${index})">
                            <img src="${option.src}" alt="${option.alt}">
                        </div>
                    `;
                } else {
                    optionsHtml += `
                        <div class="option ${userAnswers[currentQuestion] === index ? 'selected' : ''}"
                            onclick="selectOption(${index})">
                            ${option}
                        </div>
                    `;
                }
            });

            const html = `
                <div class="question active">
                    <h3>Pregunta ${currentQuestion + 1} de ${questions.length}</h3>
                    <p>${question.pregunta}</p>
                    <div class="options">
                        ${optionsHtml}
                    </div>
                </div>
            `;

            document.getElementById('quizContent').innerHTML = html;
            updateNavigationButtons();
        }

        function selectOption(index) {
            userAnswers[currentQuestion] = index;
            renderQuestion();
        }

        function updateNavigationButtons() {
            document.getElementById('prevBtn').style.display = currentQuestion > 0 ? 'block' : 'none';
            const nextBtn = document.getElementById('nextBtn');
            if (currentQuestion === questions.length - 1) {
                nextBtn.textContent = 'Ver Resultados';
            } else {
                nextBtn.textContent = 'Siguiente';
            }
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                renderQuestion();
            }
        }

        function nextQuestion() {
            if (currentQuestion === questions.length - 1) {
                showResults();
            } else {
                currentQuestion++;
                renderQuestion();
            }
        }

        function showResults() {
            clearInterval(timerInterval);
            let correct = 0;
            let resultsHtml = '<div class="results">';
            
            questions.forEach((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correcta;
                if (isCorrect) correct++;
                

                const getUserAnswer = (answer) => {
                    if (typeof question.opciones[answer] === 'object' && question.opciones[answer].type === 'image') {
                        return `<img src="${question.opciones[answer].src}" alt="${question.opciones[answer].alt}" style="max-width: 200px;">`;
                    }
                    return question.opciones[answer];
                };
                
                    resultsHtml += `
                    <div class="${isCorrect ? 'correct' : 'incorrect'}">
                    <p style="color: black;"><strong>Pregunta ${index + 1}:</strong> ${question.pregunta}</p>
                    <p style="color: black;">Tu respuesta: ${getUserAnswer(userAnswer)}</p>
                    ${!isCorrect ? `<p style="color: black;">Respuesta correcta: ${getUserAnswer(question.correcta)}</p>` : ''}
                    </div>
                `;
                });

            const paesScore = paesScores[correct] || paesScores[paesScores.length - 1];
            const timeMessage = getTimeMessage();
            
            resultsHtml = `
                <div class="score-display">
                    <h3>Tu Puntaje PAES</h3>
                    <div class="score-number">${paesScore}</div>
                    <div class="score-description">Respuestas correctas: ${correct} de ${questions.length}</div>
                </div>
                ${timeMessage}
                ${resultsHtml}
                <div style="display: flex; gap: 10px; margin-top: 20px; justify-content: center; flex-wrap: wrap;">
            <button onclick="resetQuiz()">Reintentar Quiz</button>
            <button onclick="goToHome()" style="background-color: #34a853;">Volver al Inicio</button>
        </div>
    `;

            document.getElementById('quizContent').innerHTML = '';
            document.getElementById('results').innerHTML = resultsHtml;
            document.getElementById('prevBtn').style.display = 'none';
            document.getElementById('nextBtn').style.display = 'none';
        }

        function resetQuiz() {
            clearInterval(timerInterval);
            initQuiz();
            document.getElementById('nextBtn').style.display = 'block';
            setTimeout(renderMath, 100);
        }
        function goToHome() {
            window.location.href = 'index.html';
        }
        let startTime;
        let timerInterval;
        let totalSeconds = 0;

        function startTimer() {
            startTime = new Date();
            timerInterval = setInterval(updateTimer, 1000);
        }

        function updateTimer() {
            const currentTime = new Date();
            totalSeconds = Math.floor((currentTime - startTime) / 1000);
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            document.getElementById('timer').textContent = 
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        function getTimeMessage() {
            const minutes = Math.floor(totalSeconds / 60);
            let messageClass, message;

            if (minutes < 45) {
                messageClass = 'excellent-time';
                message = '¡Excelente tiempo!';
            } else if (minutes <= 60) {
                messageClass = 'good-time';
                message = '¡Muy buen tiempo!';
            } else {
                messageClass = 'warning-time';
                message = 'Ten cuidado con tu tiempo, lo recomendable es que puedas desarrollar estas preguntas en menos de 40 minutos';
            }

            return `<div class="time-message ${messageClass}">${message}</div>`;
        }


        initQuiz();
        setTimeout(renderMath, 100);