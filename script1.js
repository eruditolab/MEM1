        function renderMath() {
            if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
            }
        }
    const allQuestions = [
    {
        pregunta: `23 - (-3(5 - 1):(6 - 3)) + ( - ( - ( - 4 + 1) + 4 ) - 3)`,
        opciones: [
            "35",
            "21",
            "-6",
            "17"
        ],
        correcta: 3
    },
    {
        pregunta: `Sean x = 4 e y = 5, el resultado de 3x + 4y da como resultado:`,
        opciones: [
            "20",
            "32",
            "52",
            "28"
        ],
        correcta: 1
    },
    {
        pregunta: `Sean a = 15, e = -8 y o = 11, el resultado de 5ae - (-o) da como resultado:`,
        opciones: [
            "-570",
            "-598",
            "-589",
            "-611"
        ],
        correcta: 2
    },
    {
        pregunta: `Sabiendo que a es un valor negativo impar y b un valor positivo par. ¿Cuál de las siguientes expresiones permite obtener un número positivo par?`,
        opciones: [
            "2ab",
            "b - a",
            "3b - 6a",
            "b(a - b)"
        ],
        correcta: 2
    },
    {
        pregunta: `La diferencia de tiempo entre el inicio de la construcción de las Pirámides de Guiza (aproximadamente 2580 A.C.) y el inicio de la construcción de la Gran Muralla China (aproximadamente 221 A.C.) fue:`,
        opciones: [
            "2801 años.",
            "2259 años.",
            "2359 años.",
            "2809 años."
        ],
        correcta: 2
    },
    {
        pregunta: `La temperatura mínima de un día fue de -3 ºC y la máxima de 9 ºC. ¿Cuál fue la variación de la temperatura en el día?`,
        opciones: [
            "12°C.",
            "11°C.",
            "6°C.",
            "10°C."
        ],
        correcta: 0
    },
    {
        pregunta: `El perro de Jacinta tiene una condición particular. Solamente come 500 gramos de comida en el día. Un día, Jacinta le sirvió 125 gramos de comida en la mañana, 274 gramos de comida en la tarde y 219 gramos de comida en la noche. Si no comió nada más. ¿Cuánta comida le sobró al final del día?`,
        opciones: [
            "213 gramos.",
            "118 gramos.",
            "157 gramos.",
            "96 gramos."
        ],
        correcta: 1
    },
    {
        pregunta: `Don Segundo, es una persona que el año 2025 cumplirá de 92 años, el cual recuerda que en el año 1957 logró titularse de contador. ¿Qué edad tenía cuando se tituló?`,
        opciones: [
            "30 años.",
            "23 años.",
            "25 años.",
            "24 años."
        ],
        correcta: 3
    },
    {
        pregunta: `¿Cuál de las siguientes afirmaciones es siempre verdadera?`,
        opciones: [
            "Si la suma de dos números es par, entonces ambos son pares.",
            "La suma de todo número divisible por 3 con todo número divisible por 6, es divisible por 6.",
            "El cuadrado de todo número divisible por 3 es divisible por 6.",
            "El producto de todo número divisible por 4 con todo número divisible por 6, es divisible por 12."
        ],
        correcta: 3
    },
    {
        pregunta: `Si A, B, C y D son números enteros tales que A > B, C > D, B < D y C < A. El orden decreciente de ellos es:`,
        opciones: [
            "B D C A",
            "A C D B",
            "A C B D",
            "B D A C"
        ],
        correcta: 2
    },
    {
        pregunta: `Si a y b son números enteros y el antecesor de a es b y el sucesor de a es -9, entonces a + b =`,
        opciones: [
            "-21",
            "-20",
            "-19",
            "-17"
        ],
        correcta: 0
    },
    {
        pregunta: `El juego de la estrella mágica, consiste en rellenar los círculos con números, de modo que se siguen 2 reglas. Primero la suma de todas las líneas rectas da 26 y se pueden escribir números entre 1 y 12 sin repetirse.
        <p style="text-align: center;"><img src="https://i.postimg.cc/9fFjD0V3/P1-M1-1.jpg" alt="Estrella mágica" style="max-width: 100%; height: auto;"></p>
        <p>¿Cuál es el valor de ab?</p>`,
        opciones: [
            "30",
            "80",
            "156",
            "110"
        ],
        correcta: 0
    },
    {
        pregunta: `Un cuadro mágico cumple la condición de que cada columna, fila y diagonal suma la misma cantidad.
        <p style="text-align: center;"><img src="https://i.postimg.cc/g0B1rKNR/P2-M1-1.jpg" alt="Cuadro mágico" style="max-width: 100%; height: auto;"></p>
        <p>El valor de p es:</p>`,
        opciones: [
            "2",
            "-2",
            "-6",
            "4"
        ],
        correcta: 0
    },
    {
        pregunta: `En una frutería, se venden 2 kilogramos de manzanas por 2.100 pesos, 3 kilogramos de naranjas por 1.200 pesos y 5 kilogramos de peras por 2.600 pesos. Si Sebastián compró 10 kilogramos de peras, 8 kilogramos de manzanas y 15 kilogramos de naranjas, el total que pagó Sebastián fue:`,
        opciones: [
            "$19.400",
            "$18.800",
            "$19.600",
            "$20.200"
        ],
        correcta: 2
    },
    {
        pregunta: `Sebastián inventó un juego matemático, donde una persona elige un número mayor a 1, con solamente 2 reglas:<br>
        - Si el número es impar, se multiplica por 3 y se le suma 1<br>
        - Si el número es par, se divide por dos<br><br>
        Estos pasos se repiten, hasta tener el valor 1. Si Sebastián eligió el número 3, para iniciar el juego. ¿En cuantos pasos se dividió por 2, antes de finalizar el juego?`,
        opciones: [
            "5",
            "4",
            "2",
            "6"
        ],
        correcta: 0
    },
    {
        pregunta: `Se tiene el siguiente juego, donde la regla es que la casilla que está sobre las dos que le sirven de base, corresponde a la suma de sus casillas que están en su base. 
        <p style="text-align: center;"><img src="https://i.postimg.cc/3NjLjjCt/P3-M1-1.jpg" alt="Pirámide números" style="max-width: 100%; height: auto;"></p>
        <p>¿Cuál es el valor de a + b?</p>`,
        opciones: [
            "10",
            "14",
            "16",
            "21"
        ],
        correcta: 2
    },
    {
        pregunta: `Se eligen un número de 1 dígito, el cual, se duplica y luego se le resta 6. ¿Cuántos números cumplen con la condición de que el resultado será positivo?`,
        opciones: [
            "4",
            "5",
            "6",
            "7"
        ],
        correcta: 2
    },
    {
        pregunta: `Jasmine le gusta coleccionar cartas. En Marzo compró 5 sobres de 5 cartas y regaló 7 cartas; mientras que en Abril compró solo 1 sobre de 5 cartas y le regalaron 12 cartas. Si al final de Abril, Jasmine tenía 71. ¿Cuántas cartas tenía inicialmente (antes de las compras de marzo)?`,
        opciones: [
            "28",
            "30",
            "31",
            "36"
        ],
        correcta: 3
    },
    {
        pregunta: `El número 2.470.629`,
        opciones: [
            "Es divisible por 7.",
            "Es divisible por 5.",
            "Es divisible por 2.",
            "Es divisible por 10."
        ],
        correcta: 0
    },
    {
        pregunta: `Se tienen dos números enteros positivos, denominados a y b. Si se multiplican los sucesores de ambos números, y el resultado da un número impar, entonces los posibles valores de a y b pueden ser:`,
        opciones: [
            "a = 12 y b = 0",
            "a = 13 y b = 10",
            "a = 35 y b = 91",
            "a = 18 y b = 22"
        ],
        correcta: 3
    },
    {
        pregunta: `El sistema binario, se compone de dos números (0 y 1), para representar números del sistema decimal. Unos ejemplos serían:<br>
        00000 = 0<br>
        00001 = 1<br>
        00010 = 2<br>
        00011 = 3<br>
        00100 = 4<br><br>
        ¿Cuál de las siguientes opciones presenta una conversión incorrecta de sistema binario a sistema decimal?`,
        opciones: [
            "00101 = 6",
            "01001 = 9",
            "10101 = 21",
            "11010 = 26"
        ],
        correcta: 0
    },
    {
        pregunta: `Se tiene la siguiente secuencia de figuras formadas por triángulos<br>. 
        <p style="text-align: center;"><img src="https://i.postimg.cc/q7CxXXp2/P4-M1-1.jpg" alt="triángulos serie" style="max-width: 100%; height: auto;"></p>
        <p>¿Cuántos triángulos pequeños se tendrán para la figura 10?</p>`,
        opciones: [
            "10",
            "100",
            "150",
            "300"
        ],
        correcta: 1
    },
    {
        pregunta: `Javier nació el 20 de Junio de 1998, mientras que Javiera nació el 09 de Julio de 1998. ¿Cuántos días tienen de diferencia entre sus fechas de nacimiento?`,
        opciones: [
            "19 días",
            "20 días",
            "18 días",
            "21 días"
        ],
        correcta: 0
    },
    {
        pregunta: `Luis es un comediante conocido, el cual tiene la capacidad de generar una mucha risa entre su público. Su truco es generar un chiste cada 30 segundo, donde además cada 6 chistes, tiene un descanso de 1 minuto (para evitar que la gente muera de la risa) y luego nuevamente genera su ciclo de chistes.<br><br>
        ¿Cuántos chistes contó en 1 hora y 20 minutos?`,
        opciones: [
            "20",
            "120",
            "50",
            "170"
        ],
        correcta: 1
    },
    {
        pregunta: `Un trabajador, por contrato tiene una modalidad de 4 x 4, donde trabaja 10 horas diarias, durante 4 días seguidos y luego descansa 4 días seguidos. ¿Cuántas horas de trabajo, en total, tendrá acumuladas este trabajador, luego de 4 semanas, y considerando que comenzó a trabajar desde el primer día?`,
        opciones: [
            "40 horas",
            "200 horas",
            "160 horas",
            "120 horas"
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuántas veces se puede dividir por 3 el número 76.545, mientras esta división de un número entero?`,
        opciones: [
            "7",
            "8",
            "4",
            "5"
        ],
        correcta: 0
    },
    {
        pregunta: `Paulina decidió invitar a su grupo de trabajo, todos los viernes, a su departamento a tomar unas bebidas. Para ello, compró 5 jabas de 12 unidades cada una, en cada reunión que hubo durante el mes de febrero. Luego, a final de mes, le cobraría a cada persona la misma cantidad. Para calcular dicha deuda, realizó lo siguiente:<br><br>
        <p><strong>Paso 1:</strong> El precio de cada botella (a), se multiplica por 12, obteniendo 12a</p>
        <p><strong>Paso 2:</strong> Luego multiplica este valor por 5, obteniendo $60a</p>
        <p><strong>Paso 3:</strong> Luego multiplica este valor por 5, obteniendo $300a</p>
        <p><strong>Paso 4:</strong> Finalmente divide este valor por la cantidad de personas del grupo (m), obteniendo $300a/m que debe pagar cada compañero.</p>
        <p>¿En qué paso se equivocó Paulina?</p>`,
        opciones: [
            "Paso 1",
            "Paso 2",
            "Paso 3",
            "Paso 4"
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
