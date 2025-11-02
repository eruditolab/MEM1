        function renderMath() {
            if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
            }
        }
    const allQuestions = [
            {
        pregunta: `Dos números pares consecutivos son tales que el triple del mayor excede en 6 al doble del menor. ¿Cuál es la suma de los números?`,
        opciones: [
            `0`,
            `2`,
            `4`,
            `6`
        ],
        correcta: 1
    },
    {
        pregunta: `Si el quíntuplo de un número P es 60, ¿cuál es el valor de los dos tercios de P?`,
        opciones: [
            `8`,
            `12`,
            `18`,
            `24`
        ],
        correcta: 0
    },
    {
        pregunta: `De una población de abejas perece dos séptimos del total más nueve, sobreviviendo solo cuatro séptimos del total. ¿Cuántas abejas murieron?`,
        opciones: [
            `18`,
            `9`,
            `27`,
            `36`
        ],
        correcta: 0
    },
    {
        pregunta: `La distancia recorrida por un barco es seis veces la distancia recorrida por una canoa. Si la distancia total recorrida por ambos es 700 km, ¿cuánto recorrió la canoa?`,
        opciones: [
            `600 km`,
            `450 km`,
            `150 km`,
            `100 km`
        ],
        correcta: 3
    },
    {
        pregunta: `A una persona le aumentan el sueldo en <span class="math-expr"><span class="fraction"><span class="num">7</span><span class="den">20</span></span></span> de lo que ganaba. Si su nuevo sueldo es $216.000, ¿en cuánto fue aumentado?`,
        opciones: [
            `$160.000`,
            `$140.000`,
            `$75.600`,
            `$56.000`
        ],
        correcta: 0
    },
    {
        pregunta: `La suma de tres números enteros impares consecutivos es 57. ¿Cuál es el producto entre el menor y el mayor?`,
        opciones: [
            `195`,
            `221`,
            `323`,
            `357`
        ],
        correcta: 3
    },
    {
        pregunta: `En la ecuación (x + 4)(x - 4) = x(x + 2), ¿cuál es el valor de x?`,
        opciones: [
            `-8`,
            `-4`,
            `0 y -2`,
            `-4 y 4`
        ],
        correcta: 0
    },
    {
        pregunta: `Si se resuelve la ecuación 3(x - 6) + 2(x - 3) - 5(x + 1) = 9, se llega a la conclusión que:`,
        opciones: [
            `No tiene solución`,
            `Tiene infinitas soluciones reales posibles`,
            `Tiene dos soluciones posibles y -23 es una de ellas`,
            `Si x = -2 se indefine la ecuación`
        ],
        correcta: 0
    },
    {
        pregunta: `Si f(x) = 2x - 1, ¿cuál de las siguientes relaciones es verdadera?`,
        opciones: [
            `f(1) = f(-1)`,
            `f(0) < f(1)`,
            `f(1) < f(-3)`,
            `f(-2) > f(1)`
        ],
        correcta: 1
    },
    {
        pregunta: `Si f(x) = 3x - 1, ¿cuál es el valor de f(-1)?`,
        opciones: [
            `-4`,
            `-2`,
            `2`,
            `3`
        ],
        correcta: 0
    },
    {
        pregunta: `Dada la función f(x) = x - 4, entonces el valor de f(4) + f(-4) =`,
        opciones: [
            `-4`,
            `-2`,
            `-8`,
            `0`
        ],
        correcta: 2
    },
    {
        pregunta: `Sea la función real f: <span class="math-expr">ℝ → ℝ</span> definida por f(x) = 5. Entonces: f(-1) + f(1) =`,
        opciones: [
            `0`,
            `1`,
            `5`,
            `10`
        ],
        correcta: 3
    },
    {
        pregunta: `Sea la función f(x) = x - 2kx + 5. Si f(-1) = 2, entonces k =`,
        opciones: [
            `-1`,
            `0`,
            `1`,
            `2`
        ],
        correcta: 0
    },
    {
        pregunta: `Si f(x) = 4 y h(x) = x, entonces ¿cuál es el valor de la expresión f(0,5) · h(4)?`,
        opciones: [
            `3`,
            `4,5`,
            `6`,
            `16`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Cuál de las siguientes afirmaciones es correcta respecto a la función lineal?`,
        opciones: [
            `Es siempre creciente`,
            `Es siempre constante`,
            `Su dominio es el conjunto de los reales`,
            `Pasa siempre por el punto (1, 1)`
        ],
        correcta: 2
    },
    {
        pregunta: `Si f(x) es una función lineal tal que f(4) = 12, ¿cuál es el valor de a si f(a + 1) - f(2a) = 0?`,
        opciones: [
            `-2`,
            `-1`,
            `1`,
            `3`
        ],
        correcta: 2
    },
    {
        pregunta: `Si f(x) = (a - 3)x, entonces f(a + 3) =`,
        opciones: [
            `<span class="math-expr">a<sup>2</sup> + 9</span>`,
            `<span class="math-expr">a<sup>2</sup> - 9</span>`,
            `<span class="math-expr">a<sup>2</sup> - 6a + 9</span>`,
            `<span class="math-expr">3a<sup>2</sup> - 7</span>`
        ],
        correcta: 1
    },
    {
        pregunta: `Si f(x) = 3x - 2, entonces un punto que pertenece a la función es:`,
        opciones: [
            `(4, 2)`,
            `(-2, -4)`,
            `(0, 0)`,
            `(2, 4)`
        ],
        correcta: 3
    },
    {
        pregunta: `Sea la función f(x) = x + 1. ¿Para qué valor de a se cumple que f(2a) + f(3) = f(a + 1)?`,
        opciones: [
            `-4`,
            `-3`,
            `-2`,
            `Para ningún valor de a`
        ],
        correcta: 1
    },
    {
        pregunta: `Dada la función f con dominio ℝ definida por f(x) = 2 - 0,5x. ¿Cuál de las siguientes alternativas es verdadera?`,
        opciones: [
            `Su gráfica es una recta creciente.`,
            `Su gráfica pasa por el punto (2, 2).`,
            `Su gráfica pasa por el origen.`,
            `Su recorrido son todos los reales.`
        ],
        correcta: 3
    },
    {
        pregunta: `El costo de arrendar una casa de veraneo es $15.000 fijo, más $22.500 por semana. Una función que permite calcular el costo de arrendar la casa durante n semanas es:`,
        opciones: [
            `C(n) = (15.000 + 22.500) · n`,
            `C(n) = 2n · (15.000 + 22.500)`,
            `C(n) = 15.000 + 22.500 · n`,
            `C(n) = 15.000 · n + 22.500`
        ],
        correcta: 2
    },
    {
        pregunta: `La ganancia semanal p de una pista para patinaje sobre hielo, depende del número de patinadores por semana, n. La función que aproxima la ganancia es: 
        <p style="text-align: center;">p(n) = 8n - 600</p>
        <p>Para 0 ≤ n ≤ 400. Si una semana la ganancia fue 1.080 ¿Cuántos fueron los patinadores en esa semana?</p>`,
        opciones: [
            `4020`,
            `210`,
            `60`,
            `50`
        ],
        correcta: 1
    },
    {
        pregunta: `Una persona, el mes pasado, pagó por su plan de telefonía móvil para llamadas internacionales $24.600. Si el cargo fijo es $12.000 y el cobro por minuto o fracción de él es $150, entonces ¿cuánto tiempo utilizó dicho mes?`,
        opciones: [
            `1 hora y 45 minutos`,
            `1 hora y 40 minutos`,
            `1 hora y 12 minutos`,
            `1 hora y 24 minutos`
        ],
        correcta: 3
    },
    {
        pregunta: `Un taxista gasta mensualmente $80.000 en la mantención de su auto. Él sabe que el rendimiento de su auto es de 10 litros de bencina por cada 100 km recorridos y que el litro cuesta $540. Una expresión que nos permite calcular el gasto total (G) mensual, en pesos, en función de un número x de kilómetros recorridos en el mes es:`,
        opciones: [
            `G = 540·10x + 80.000`,
            `G = 540(x - 10) + 80.000`,
            `G = 54(x - 10) + 80.000`,
            `G = 54x + 80.000`
        ],
        correcta: 3
    },
    {
        pregunta: `Considera la función f, cuyo dominio es el conjunto de los números reales y cuya gráfica se muestra en la figura adjunta. ¿Cuál de las siguientes expresiones representa a la función f?
        <p style="text-align: center;"><img src="https://i.postimg.cc/J7DPk4NQ/P-23-5-Funciones.jpg" alt="Pregunta 25 funciones" style="max-width: 400px; height: auto;"></p>`,
        opciones: [
            `<span class="math-expr">f(x) = 3x - 4</span>`,
            `<span class="math-expr">f(x) = -4x + 3</span>`,
            `<span class="math-expr">f(x) = <span class="fraction"><span class="num">4</span><span class="den">3</span></span>x - 4</span>`,
            `<span class="math-expr">f(x) = <span class="fraction"><span class="num">4</span><span class="den">3</span></span>x + 3</span>`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuál es la ecuación de la recta L representada en la figura adjunta?
        <p style="text-align: center;"><img src="https://i.postimg.cc/nhjF8mBD/P-26-5-Funciones.jpg" alt="Pregunta 26 Funciones" style="max-width: 300px; height: auto;"></p>`,
        opciones: [
            `4x + 3y = 12`,
            `4x - 3y = 12`,
            `3x + 4y = 12`,
            `3x - 4y = 12`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuál es la ecuación de la recta que representa el gráfico de la figura adjunta?<p style="text-align: center;"><img src="https://i.postimg.cc/W3fYPdMd/P-27-5-Funciones.jpg" alt="Pregunta 27 funciones" style="max-width: 400px; height: auto;"></p>`,
        opciones: [
            `6x - 5y = 15`,
            `6x - 5y = 30`,
            `5x - 6y = 15`,
            `5x - 6y = -30`
        ],
        correcta: 3
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