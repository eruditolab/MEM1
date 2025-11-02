        function renderMath() {
            if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
            }
        }
    const allQuestions = [
    {
        pregunta: `¿Cuál es el valor de pq, si se sabe que <span class="math-expr">(p + q)<sup>2</sup> = 35</span> y <span class="math-expr">(p - q)<sup>2</sup> = 15</span>?`,
        opciones: [
            `3`,
            `5`,
            `10`,
            `15`
        ],
        correcta: 1
    },
    {
        pregunta: `Si la suma de 3 números consecutivos es 54, entonces la suma del número menor con el número mayor es:`,
        opciones: [
            `30`,
            `28`,
            `36`,
            `40`
        ],
        correcta: 2
    },
    {
        pregunta: `En estos momentos estoy en una de las filas del banco. Soy la persona número 25, contando desde el principio de la fila y la número 12 contando desde el final de la fila. ¿Cuántas personas hay en la fila?`,
        opciones: [
            `35`,
            `36`,
            `37`,
            `38`
        ],
        correcta: 1
    },
    {
        pregunta: `Si la suma de los enteros positivos impares, menores que 50, se resta de la suma de los enteros positivos pares menores o igual a 50, se obtiene como resultado:`,
        opciones: [
            `20`,
            `23`,
            `25`,
            `28`
        ],
        correcta: 2
    },
    {
        pregunta: `<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">4</span></span>x<sup>2</sup> - <span class="fraction"><span class="num">4</span><span class="den">49</span></span>y<sup>2</sup> =</span>`,
        opciones: [
            `<span class="math-expr">(x<sup>2</sup> - y<sup>2</sup>)(2x + 7y)</span>`,
            `<span class="math-expr">(<span class="fraction"><span class="num">1</span><span class="den">4</span></span>x + <span class="fraction"><span class="num">1</span><span class="den">7</span></span>y)(<span class="fraction"><span class="num">1</span><span class="den">4</span></span>x - <span class="fraction"><span class="num">1</span><span class="den">7</span></span>y)</span>`,
            `<span class="math-expr">(<span class="fraction"><span class="num">2</span><span class="den">7</span></span>y + <span class="fraction"><span class="num">1</span><span class="den">4</span></span>x)(<span class="fraction"><span class="num">1</span><span class="den">4</span></span>x - <span class="fraction"><span class="num">2</span><span class="den">7</span></span>y)</span>`,
            `<span class="math-expr">(<span class="fraction"><span class="num">2</span><span class="den">7</span></span>x - <span class="fraction"><span class="num">1</span><span class="den">4</span></span>x)(<span class="fraction"><span class="num">2</span><span class="den">7</span></span>x + <span class="fraction"><span class="num">1</span><span class="den">4</span></span>x)</span>`
        ],
        correcta: 2
    },
    {
        pregunta: `Si <span class="math-expr">(b - 2a)(2b - a) = n</span>, entonces el producto <span class="math-expr">(a - 2b)(3b - 6a)</span> es siempre igual a:`,
        opciones: [
            `3n`,
            `2n`,
            `-2n`,
            `-3n`
        ],
        correcta: 2
    },
    {
        pregunta: `<span class="math-expr">x(a - b) - y(b - a) =</span>`,
        opciones: [
            `<span class="math-expr">(a - b)(-xy)</span>`,
            `<span class="math-expr">(x - y)(a - b)</span>`,
            `<span class="math-expr">(x + y)(a + b)</span>`,
            `<span class="math-expr">(x + y)(a - b)</span>`
        ],
        correcta: 3
    },
    {
        pregunta: `Con el objetivo de evaluar el dominio de contenidos que tienen sus alumnos, un profesor comete un error deliberadamente, en el desarrollo de la expresión <span class="math-expr">(3x - 4y)<sup>2</sup> - (3x - 4y)(3x + 4y)</span>.<br>
        Paso 1: <span class="math-expr">9x<sup>2</sup> - 12xy + 16y<sup>2</sup> - (3x - 4y)(3x + 4y)</span><br>
        Paso 2: <span class="math-expr">9x<sup>2</sup> - 12xy + 16y<sup>2</sup> - (9x<sup>2</sup> - 16y<sup>2</sup>)</span><br>
        Paso 3: <span class="math-expr">9x<sup>2</sup> - 12xy + 16y<sup>2</sup> - 9x<sup>2</sup> + 16y<sup>2</sup></span><br>
        Paso 4: <span class="math-expr">32y<sup>2</sup> - 12xy</span><br>
        ¿En cuál de los pasos efectuados por el profesor se cometió un error?`,
        opciones: [
            `Paso 1`,
            `Paso 2`,
            `Paso 3`,
            `Paso 4`
        ],
        correcta: 3
    },
    {
        pregunta: `Constanza se matriculó en una carrera de una universidad ubicada en Santiago, cuyo campus se ubica en la comuna de San Joaquín. Para movilizarse, por motivos de seguridad y rapidez, solo utilizará el metro. Si una corredora le da 4 opciones de arrendamiento: opción 1 cercana a estación Toesca, opción 2 cercana a estación Villa Frei, opción 3 cercana a estación San Miguel y opción 4 cercana a estación Santa Isabel. 
        <p style="text-align: center;"><img src="https://i.postimg.cc/pV8Fcwfk/P-9-4-Algebra.jpg" alt="Pregunta 9 álgebra" style="max-width: 60%; height: auto;"></p>
        <p>¿Cuál es la mejor opción para Constanza, pensando en la menor cantidad de estaciones desde el departamento hasta la estación San Joaquín?</p>`,
        opciones: [
            `Opción 1`,
            `Opción 2`,
            `Opción 3`,
            `Opción 4`
        ],
        correcta: 3
    },
    {
        pregunta: `<span class="math-expr">(5x + 2y)<sup>2</sup> - (3x - 7y)<sup>2</sup> =</span>`,
        opciones: [
            `<span class="math-expr">2x + 9y</span>`,
            `<span class="math-expr">16x<sup>2</sup> - 45y<sup>2</sup></span>`,
            `<span class="math-expr">(8x + 5y)(2x + 9y)</span>`,
            `<span class="math-expr">(8x - 5y)(2x + 9y)</span>`
        ],
        correcta: 3
    },
    {
        pregunta: `<span class="math-expr">3y<sup>2</sup> - 5y - 2(1 - y + y<sup>2</sup>) =</span>`,
        opciones: [
            `<span class="math-expr">5y<sup>2</sup> + 7y - 2</span>`,
            `<span class="math-expr">y<sup>2</sup> + 3y - 2</span>`,
            `<span class="math-expr">y<sup>2</sup> - 3y - 2</span>`,
            `<span class="math-expr">3y<sup>2</sup> - y - 2</span>`
        ],
        correcta: 2
    },
    {
        pregunta: `Al factorizar <span class="math-expr">m<sup>2</sup> - n<sup>2</sup> - m - n</span> se obtiene:`,
        opciones: [
            `<span class="math-expr">(m - n)(m<sup>2</sup> + n<sup>2</sup>)</span>`,
            `<span class="math-expr">(m + n)(m - n - 1)</span>`,
            `<span class="math-expr">(m - n)(m - n - 1)</span>`,
            `<span class="math-expr">(m + n)(m - n + 1)</span>`
        ],
        correcta: 1
    },
    {
        pregunta: `Max gana mensualmente $x y cada dos meses gasta $y. ¿En cuántos meses Max ahorrará $xy?`,
        opciones: [
            `<span class="math-expr"><span class="fraction"><span class="num">2xy</span><span class="den">2x - y</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">xy</span><span class="den">x - y</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">xy</span><span class="den">x - 2y</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">2xy</span><span class="den">x - 2y</span></span></span>`
        ],
        correcta: 0
    },
    {
        pregunta: `Una factorización de <span class="math-expr">5(s + t) - a(s + t)</span> es:`,
        opciones: [
            `<span class="math-expr">(5 - a)(s + t)</span>`,
            `<span class="math-expr">(s + t)(5 + a)</span>`,
            `<span class="math-expr">5a(s + t)</span>`,
            `<span class="math-expr">st(5 - a)</span>`
        ],
        correcta: 0
    },
    {
        pregunta: `Un terreno se compone del área edificada y el área no edificada. Sabiendo que el área edificada es 16 [m<sup>2</sup>] y que el área total del terreno es <span class="math-expr">x<sup>2</sup> - 8x</span> [m<sup>2</sup>], entonces el área no edificada tiene la forma de:`,
        opciones: [
            `<span class="math-expr">x<sup>2</sup> + 8x + 16</span>`,
            `<span class="math-expr">(x + 4)<sup>2</sup></span>`,
            `<span class="math-expr">x<sup>2</sup> - 8x - 16</span>`,
            `<span class="math-expr">(x - 4)<sup>2</sup></span>`
        ],
        correcta: 2
    },
    {
        pregunta: `La diferencia entre <span class="math-expr">(x + 3)(x - 3)</span> y <span class="math-expr">(x + 1)(x + 2)</span> es:`,
        opciones: [
            `<span class="math-expr">3x - 6</span>`,
            `<span class="math-expr">3x - 11</span>`,
            `<span class="math-expr">-12 - 3x</span>`,
            `<span class="math-expr">-3x - 11</span>`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuál es el valor de <span class="math-expr"><span class="fraction"><span class="num">a</span><span class="den">(-2a<sup>2</sup> + 9)<sup>2</sup></span></span></span>, sabiendo que <span class="math-expr">a = 1</span>?`,
        opciones: [
            `<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">49</span></span></span>`,
            `<span class="math-expr">-<span class="fraction"><span class="num">1</span><span class="den">49</span></span></span>`,
            `<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">7</span></span></span>`,
            `<span class="math-expr">-<span class="fraction"><span class="num">1</span><span class="den">7</span></span></span>`
        ],
        correcta: 0
    },
    {
        pregunta: `Si <span class="math-expr">n<sup>2</sup> = 2024</span>, entonces ¿cuál es el valor de <span class="math-expr">(n + 2)(n - 2)</span>?`,
        opciones: [
            `2028`,
            `2026`,
            `2022`,
            `2020`
        ],
        correcta: 3
    },
    {
        pregunta: `<img src="https://i.postimg.cc/YCBmwb3k/P19-4-Algebra.jpg" alt="Pregunta 19 Álgebra" style="max-width: 20%; height: auto;">`,
        opciones: [
            `<span class="math-expr">x - <span class="fraction"><span class="num">1</span><span class="den">4</span></span></span>`,
            `<span class="math-expr">x<sup>2</sup> - <span class="fraction"><span class="num">1</span><span class="den">4</span></span></span>`,
            `<span class="math-expr">(x - 0,5)<sup>2</sup></span>`,
            `<span class="math-expr">x - (<span class="fraction"><span class="num">1</span><span class="den">4</span></span>)<sup>2</sup></span>`
        ],
        correcta: 0
    },
    {
        pregunta: `¿Cuál es el valor de <img src="https://i.postimg.cc/mDkPSqb3/P20-4-Algebra.jpg" alt="Pregunta 20 Álgebra" style="max-width: 13%; height: auto;">?`,
        opciones: [
            `1`,
            `-1`,
            `0`,
            `2`
        ],
        correcta: 1
    },
    {
        pregunta: `Para poder realizar un trabajo se necesitan <span class="math-expr">(2x<sup>2</sup> + 20x + 50)</span> horas. Si se logra optimizar el método de trabajo, se logra realizar dicho trabajo en la mitad del tiempo. ¿Cuál de las siguientes expresiones representa dicho tiempo optimizado?`,
        opciones: [
            `<span class="math-expr">(x<sup>2</sup> + 10x + 40)</span>`,
            `<span class="math-expr">(x + 3)<sup>2</sup></span>`,
            `<span class="math-expr">(2x + 10)<sup>2</sup></span>`,
            `<span class="math-expr">(x + 5)<sup>2</sup></span>`
        ],
        correcta: 3
    },
    {
        pregunta: `<span class="math-expr">(4a + 3b)(4a - 3b) =</span>`,
        opciones: [
            `<span class="math-expr">4a<sup>2</sup> - 3b<sup>2</sup></span>`,
            `<span class="math-expr">4a<sup>2</sup> + 3b<sup>2</sup></span>`,
            `<span class="math-expr">16a<sup>2</sup> - 9b<sup>2</sup></span>`,
            `<span class="math-expr">16a<sup>2</sup> + 6b<sup>2</sup></span>`
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuál de las siguientes expresiones es igual a <span class="math-expr">x<sup>2</sup> + 6x - 16</span>?`,
        opciones: [
            `<span class="math-expr">(x + 6)(x - 3)</span>`,
            `<span class="math-expr">(x - 2)(x + 10)</span>`,
            `<span class="math-expr">(x + 4)(x - 6)</span>`,
            `<span class="math-expr">(x - 8)(x + 2)</span>`
        ],
        correcta: 3
    },
    {
        pregunta: `A un cliente, se le da de regalo 0,3 kg de alimento para gato, por cada 2 kg de alimento de gato comprado. Si el cliente compró 12 sacos de 17 kg. ¿Cuántos gramos de alimento le regalarán?`,
        opciones: [
            `28.800 g`,
            `30.200 g`,
            `29.800 g`,
            `30.600 g`
        ],
        correcta: 3
    },
    {
        pregunta: `<span class="math-expr">3x + 2y - {2x - [3x - (2y - 3x) - 2x] - y} =</span>`,
        opciones: [
            `<span class="math-expr">5x + 5y</span>`,
            `<span class="math-expr">5x + y</span>`,
            `<span class="math-expr">-7x + 5y</span>`,
            `<span class="math-expr">7x - 5y</span>`
        ],
        correcta: 1
    },
    {
        pregunta: `La semi diferencia entre <span class="math-expr">3a + 4b</span> y <span class="math-expr">a - 2b</span> es:`,
        opciones: [
            `<span class="math-expr">2a + 6b</span>`,
            `<span class="math-expr">a + 3b</span>`,
            `<span class="math-expr">a + b</span>`,
            `<span class="math-expr">a + 2b</span>`
        ],
        correcta: 1
    },
    {
        pregunta: `La expresión <span class="math-expr">a<sup>8</sup> - b<sup>8</sup></span> se puede escribir como:`,
        opciones: [
            `<span class="math-expr">(a - b)<sup>8</sup></span>`,
            `<span class="math-expr">(a + b)<sup>4</sup>(a - b)<sup>4</sup></span>`,
            `<span class="math-expr">(a<sup>7</sup> - b<sup>7</sup>)(a + b)</span>`,
            `<span class="math-expr">(a<sup>4</sup> + b<sup>4</sup>)(a<sup>2</sup> + b<sup>2</sup>)(a<sup>2</sup> - b<sup>2</sup>)</span>`
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