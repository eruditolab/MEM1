        function renderMath() {
            if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
            }
        }
    const allQuestions = [
    {
        pregunta: `Las soluciones de la ecuación x(x + 4) = 12 son:`,
        opciones: [
            `-6 y 2`,
            `-2 y -6`,
            `-2 y 6`,
            `2 y 6`
        ],
        correcta: 0
    },
    {
        pregunta: `Las soluciones de la ecuación x² – 19x + 17 = 1 – 2x son:`,
        opciones: [
            `0 y 1`,
            `-1 y -8`,
            `-1 y -15`,
            `-1 y -16`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Cuál de las siguientes gráficas corresponde a la función f(x) = x² + 2?`,
        opciones: [
            '<img src="https://i.ibb.co/1JmfvHYw/ME7-M1-P3-1.jpg" alt="Pregunta 3 ME7 R1" style="max-width: 200px; height: auto;">',
            '<img src="https://i.ibb.co/N2HzxLx2/ME7-M1-P3-2.jpg" alt="Pregunta 3 ME7 R2" style="max-width: 200px; height: auto;">',
            '<img src="https://i.ibb.co/ksKh9KY4/ME7-M1-P3-3.jpg" alt="Pregunta 3 ME7 R3" style="max-width: 200px; height: auto;">',
            '<img src="https://i.ibb.co/1tckvWbZ/ME7-M1-P3-4.jpg" alt="Pregunta 3 ME7 R4" style="max-width: 200px; height: auto;">'
        ],
        correcta: 1
    },
        {
        pregunta: `¿Cuál de las siguientes ecuaciones de segundo grado tiene como solución única el valor 8?`,
        opciones: [
            `x² + 8x – 64 = 0`,
            `–x² + 16x – 64 = 0`,
            `x² – 16x – 64 = 0`,
            `x² – 8x – 64 = 0`
        ],
        correcta: 1
    },
    {
        pregunta: `Los puntos en que la parábola 
        <p style="text-align: center;">f(x) = 2x² – 20x + 48</p>
        <p>Intersecta al eje de las abscisas son:</p>`,
        opciones: [
            `(6, 0) y (4, 0)`,
            `(8, 0) y (3, 0)`,
            `(12, 0) y (2, 0)`,
            `(–6, 0) y (–4, 0)`
        ],
        correcta: 0
    },
    {
        pregunta: `Sea la función 
        <p style="text-align: center;">f(x) = x² – 7x + 15</p>
        <p>¿Para qué valores de x la función toma el valor de 9?</p>`,
        opciones: [
            `1 y 8`,
            `1 y 2`,
            `1 y 6`,
            `1 y 9`
        ],
        correcta: 2
    },
    {
        pregunta: `Sea la función 
        <p style="text-align: center;">f(x) = x² – 3x – 4</p>
        <p>¿Cuál(es) es(son) el(los) punto(s) donde la función f(x) se cruza con la recta y = 6?</p>`,
        opciones: [
            `Los puntos son (6, 5) y (6, –3)`,
            `Los puntos son (6, 3) y (6, –3)`,
            `Los puntos son (–3, 6) y (3, 6)`,
            `Los puntos son (–3, 6) y (5, 6)`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Qué valor debe tener k en la función 
        <p style="text-align: center;">f(x) = –kx² + 4kx + 6</p>
        <p>para que una de las raíces de la función sea 3?</p>`,
        opciones: [
            `1`,
            `2`,
            `–2`,
            `–1`
        ],
        correcta: 2
    },
        {
        pregunta: `Se sabe que las raíces de una función cuadrática difieren en 4 unidades y que, al sumarlas, su suma da 8. Sabiendo solo esta información, solo es posible obtener:`,
        opciones: [
            `El vértice`,
            `La ecuación de la recta del eje de simetría`,
            `El discriminante`,
            `La expresión algebraica de la función`
        ],
        correcta: 1
    },
    {
        pregunta: `La función graficada podría corresponder a:
        <p style="text-align: center;"><img src="https://i.ibb.co/5xkKWQT4/ME7-M1-P10.jpg" alt="Pregunta 10 ME7" style="max-width: 200px; height: auto;"></p>`,
        opciones: [
            `f(x) = 2x² + 5x - 1`,
            `f(x) = -3x² + 5x - 1`,
            `f(x) = -2x² + 5x + 2`,
            `f(x) = 3x² - 7x + 1`
        ],
        correcta: 3
    },
    {
        pregunta: `¿Cuál de las siguientes funciones no intercepta al eje x?`,
        opciones: [
            `f(x) = x² + 5x + 6`,
            `f(x) = x² + x + 1`,
            `f(x) = 3x² + 5x – 2`,
            `f(x) = 15x² + x – 6`
        ],
        correcta: 1
    },
        {
        pregunta: `Se sabe que una función cuadrática, pasa por los puntos (0, 40), (3, 7) y (5, 15) como se presenta en la imagen:
        <p style="text-align: center;"><img src="https://i.ibb.co/svJXBWDh/ME7-M1-P12.jpg" alt="Pregunta 12 ME7" style="max-width: 200px; height: auto;"></p>`,
        opciones: [
            `f(x) = 2x² - 10x + 25`,
            `f(x) = 3x² - 20x + 40`,
            `f(x) = 2x² + 10x + 40`,
            `f(x) = 5x² - 10x + 40`
        ],
        correcta: 1
    },
            {
        pregunta: `En la producción de x unidades mensuales de cierto producto, una fábrica tiene un gasto, en millones de pesos, descrito por la función de segundo grado, representada en la figura adjunta. Entonces, el gasto mínimo, en millones de pesos, es:
        <p style="text-align: center;"><img src="https://i.ibb.co/kV4cLhW8/ME7-M1-P13.jpg" alt="Pregunta 13 ME7" style="max-width: 200px; height: auto;"></p>`,
        opciones: [
            `64,5`,
            `66`,
            `67,5`,
            `69`
        ],
        correcta: 1
    },
    {
        pregunta: `La ecuación del eje de simetría de la parábola 
        <p style="text-align: center;">f(x) = 5(x + 4)² – 6</p>
        <p>es:</p>`,
        opciones: [
            `x – 6 = 0`,
            `2x – 10 = 0`,
            `3x + 14 = 2`,
            `x + 6 = 3`
        ],
        correcta: 2
    },
    {
        pregunta: `La gráfica de la función 
        <p style="text-align: center;">f(x) = x² – x – 6</p>
        <p>se cruza con la recta x + 3 = 1 en el (los) punto(s):</p>`,
        opciones: [
            `(0, 1)`,
            `(–2, 0)`,
            `(2, 0) y (-2, 1)`,
            `(1, 0) y (0, -2)`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál de las siguientes afirmaciones relacionadas con la función 
        <p style="text-align: center;">f(x) = x² + 14x – 3</p>
        <p>es falsa?</p>`,
        opciones: [
            `Su eje de simetría corresponde a la recta x + 3 = –4`,
            `El dominio de la función corresponde a todos los reales`,
            `El vértice de la función corresponde a un máximo ubicado en el punto (–7, –52)`,
            `Su gráfica presenta dos puntos de corte con el eje de las abscisas`
        ],
        correcta: 2
    },
    {
        pregunta: `Respecto a la función cuadrática 
        <p style="text-align: center;">f(x) = x² + 2x + c</p>
        <p>¿cuál de las siguientes proposiciones es verdadera?</p>`,
        opciones: [
            `Si c > 1, no corta al eje x`,
            `Si c = 1, corta al eje x en dos puntos`,
            `Si c ≠ 1, siempre corta al eje x`,
            `Si c > 0, siempre corta al eje x`
        ],
        correcta: 0
    },
    {
        pregunta: `Se sabe que una pastelería presenta una función que representa sus ganancias (G), que depende de la cantidad de pasteles producidos (x):
        <p style="text-align: center;">G(x) = –0,2x² + 50x + 8</p>
        <p>¿Cuántas unidades le conviene producir a esta pastelería para maximizar sus ganancias?</p>`,
        opciones: [
            `100`,
            `85`,
            `25`,
            `125`
        ],
        correcta: 3
    },
    {
        pregunta: `La función
        <p style="text-align: center;">f(x) = –2x² + x – 2p</p>
        <p>no tiene raíces. ¿Qué condición asociada con p es verdadera?</p>`,
        opciones: [
            `p > 0,0625`,
            `p < 0,0625`,
            `p < 0,125`,
            `p > 0,125`
        ],
        correcta: 0
    },
    {
        pregunta: `Una persona decidió decorar para su cumpleaños con un arco de globos. Dicho arreglo tendrá forma parabólica, donde la función que representa al arco es
        <p style="text-align: center;">f(x) = –x²</p>
        <p>Si se desea lograr que la altura del arco sea de 4 metros, ¿cuál es la distancia que deben estar separadas las bases del arco?</p>`,
        opciones: [
            `1 m`,
            `2 m`,
            `3 m`,
            `4 m`
        ],
        correcta: 3
    },
    {
        pregunta: `Las raíces de una función cuadrática corresponden a 2 valores reales positivos distintos. 
        <p>¿Cuál de las siguientes funciones cumple con esa descripción?</p>`,
        opciones: [
            `f(x) = –3x² + 13x – 1`,
            `f(x) = 4x² + 14x – 7`,
            `f(x) = 5x² – 14x + 3`,
            `Ninguna de las anteriores`
        ],
        correcta: 2
    },
    {
        pregunta: `Una pelota de béisbol tiene una trayectoria parabólica, la cual se golpea inicialmente desde una altura de 1 metro, alcanza una altura máxima de 97 m a los 4 segundos. 
        <p>¿Cuál será la altura de la pelota a los 6 segundos?</p>`,
        opciones: [
            `1 m`,
            `73 m`,
            `43 m`,
            `91 m`
        ],
        correcta: 1
    },
    {
        pregunta: `Felipe tiene un conejo que al momento de saltar se puede graficar su salto con la función 
        <p style="text-align: center;">f(x) = –0,3x² + 0,39x + 0,4</p>
        <p>Donde f(x) representa la altura del conejo, y x representa el tiempo transcurrido. Con esta información, la función presenta su eje simétrico en:</p>`,
        opciones: [
            `y = 0,32`,
            `x = 0,6`,
            `x = 0,65`,
            `y = 0,55`
        ],
        correcta: 2
    },
    {
        pregunta: "¿Cuál de las siguientes funciones se grafica como una parábola que tiene su vértice en el punto (6, 5)?",
        opciones: [
            `y = 1,5(x – 4)² – 5`,
            `y = 8(x + 6)² – 5`,
            `y = –2(x – 6)² + 5`,
            `Ninguna de las anteriores`
        ],
        correcta: 2
    },
    {
        pregunta: `Alejandro tiene la función 
        <p style="text-align: center;">f(x) = –x² + 7 + 2x</p>
        <p>Con la cual decide ubicar el vértice de dicha función con su forma canónica. Para ello realizó los siguientes pasos:</p>
        <br>Paso 1: f(x) = –x² + 2x + 7</br>
        <br>Paso 2: f(x) = –x² + 2x + 1 – 1 + 7</br>
        <br>Paso 3: f(x) = –(x – 1)² – 1 + 7</br>
        <br>Paso 4: f(x) = –(x – 1)² + 6</br>
        <br>Paso 5: Vértice en (–1, 6)</br>
        ¿En qué paso se equivocó primero?`,
        opciones: [
            `Paso 1`,
            `Paso 2`,
            `Paso 3`,
            `Paso 4`,
            `Paso 5`
        ],
        correcta: 2
    },
    {
        pregunta: `Javier compró un chocolate con forma de cubo, sin embargo, se tropezó y este cayó al piso. Su trayectoria se describe mediante la función 
        <p style="text-align: center;">f(x) = –0,5x² – x + 1,7</p>
        <p>Donde f(x) representa la altura del chocolate (en metros) y x la distancia recorrida horizontalmente (en metros).</p>
        <p>¿Qué altura tenía el chocolate cuando comenzó a caerse?</p>`,
        opciones: [
            `1,5 metros`,
            `1,7 metros`,
            `0,5 metros`,
            `1 metro`
        ],
        correcta: 1
    },
    {
        pregunta: `Durante el ciclo ovárico, la hormona luteinizante (LH) entre los días 10 y 17 se puede modelar mediante 
        <p style="text-align: center;">LH(x) = –4,375(x – 14)² + 80</p> 
        <p>Donde LH(x) es la concentración (mUI/ml) y x el día del ciclo.</p>
        <p>¿Cuál es la mayor concentración de hormona LH dentro del dominio correspondiente?</p>`,
        opciones: [
            `80 mUI/ml`,
            `14 mUI/ml`,
            `4,375 mUI/ml`,
            `8,75 mUI/ml`
        ],
        correcta: 0
    },
    {
        pregunta: `La función f(x) = 3x² – 8x + 5 intersecta al eje x en los puntos:`,
        opciones: [
            `1 y 5`,
            `1 y 2`,
            `1 y 0,6`,
            `1 y <span class="math-expr"><span class="fraction"><span class="num">5</span><span class="den">3</span></span></span>`
        ],
        correcta: 3
    },
    {
        pregunta: `Al lanzar una pelota en un juego de golf, su altura en metros, desde que se lanza hasta que cae al suelo, se modela a través de la función H(t) = -0,86t(t – 6), donde t es la cantidad de segundos transcurridos desde que ésta fue lanzada. ¿Cuál de las siguientes afirmaciones es FALSA?`,
        opciones: [
            `La pelota cae al suelo a los 6 segundos de haber sido lanzada.`,
            `La máxima altura que alcanza la pelota es 3 metros.`,
            `La pelota se lanza desde el nivel del suelo.`,
            `La forma de su gráfica es no convexa.`
        ],
        correcta: 1
    },
    {
        pregunta: `¿Cuál de las siguientes funciones cuadráticas, con dominio el conjunto de los números reales, se representa por una parábola que tiene su vértice en el punto (- 2, - 9) y pasa por el punto (10, 135)?`,
        opciones: [
            `f(x) = 2x² + 5x - 7`,
            `g(x) = 3x² – 3x + 1`,
            `h(x) = 2x² – 24x - 3`,
            `k(x) = x² + 4x - 5`
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