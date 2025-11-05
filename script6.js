        function renderMath() {
            if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
            }
        }
    const allQuestions = [
    {
    pregunta: `La solución de la inecuación 6x - 3 < 4x + 7 es:`,
    opciones: [
        `[5 , +∞[`,
        `]5, +∞[`,
        `] -∞, 5]`,
        `] -∞, 5[`
    ],
    correcta: 3
},
{
    pregunta: `Las edades de 2 hermanos difieren en 7 años. ¿Cuál es la máxima edad que puede tener el hermano menor, si su suma es menor que 20?`,
    opciones: [
        `5`,
        `6`,
        `7`,
        `8`
    ],
    correcta: 1
},
{
    pregunta: `El índice de masa corporal (IMC), se define como: 
    <p style="text-align: center;">IMC = <span class="math-expr"><span class="fraction"><span class="num">masa(en kilogramos)</span><span class="den">altura²(en metros)</span></span></span></p>
    Donde una persona con peso normal, debe tener un IMC entre 18,5 y 24,9. Sabiendo que Xavier mide 166 centímetros. ¿Cuál de las siguientes alternativas podría ser el peso (en kg) que tendría Xavier?`,
    opciones: [
        `]48 , 65]`,
        `]42 , 61[`,
        `]45 , 58]`,
        `]50 , 63]`
    ],
    correcta: 3
},
{
    pregunta: `Al resolver la inecuación <span class="math-expr"><span class="fraction"><span class="num">3x+273</span><span class="den">-5</span></span></span> < 0, se obtiene como solución:`,
    opciones: [
        `]91 , +∞[`,
        `]-∞ , 91[`,
        `]-91 , +∞[`,
        `]-∞ , -91[`
    ],
    correcta: 2
},
{
    pregunta: `¿A lo más, cuántos duraznos a 400 pesos cada uno, más dos sandías de 4.400 pesos cada una, se pueden comprar con un billete de 20.000 pesos?`,
    opciones: [
        `26`,
        `27`,
        `28`,
        `29`
    ],
    correcta: 2
},
{
    pregunta: `Luciana pesa 10 kilogramos más que su hija Pía, pero pesa el doble que su nieta Martina. Si entre las tres suman por lo menos 180 kilogramos, ¿cuál podría ser el peso de Martina?`,
    opciones: [
        `32`,
        `34`,
        `37`,
        `39`
    ],
    correcta: 3
},
{
    pregunta: `En una autopista, todo auto debe estar en movimiento, pero la máxima velocidad v permitida es de 120 km/h. Al expresar matemáticamente esta proposición, se tiene:`,
    opciones: [
        `0 < v ≤ 120`,
        `0 < v < 120`,
        `v > 120`,
        `v ≥ 120`
    ],
    correcta: 0
},
{
    pregunta: `Al resolver la inecuación <span class="math-expr"><span class="fraction"><span class="num">-x</span><span class="den">2</span></span></span> + <span class="math-expr"><span class="fraction"><span class="num">x</span><span class="den">8</span></span></span> ≤ 5 - <span class="math-expr"><span class="fraction"><span class="num">x</span><span class="den">4</span></span></span>, se obtiene como conjunto solución:`,
    opciones: [
        `{x ∈ ℝ / x ≥ 40}`,
        `{x ∈ ℝ / x ≤ 40}`,
        `{x ∈ ℝ / x ≥ -40}`,
        `{x ∈ ℝ / x ≤ -40}`,
        `∅`
    ],
    correcta: 2
},
{
    pregunta: `Si p es un número perteneciente al intervalo real [-4, 8] y q es un número entero no negativo y menor que 6, ¿cuál es el mínimo valor que puede tomar la expresión p·q?`,
    opciones: [
        `-32`,
        `-20`,
        `-18`,
        `-4`
    ],
    correcta: 1
},
{
    pregunta: `¿A cuál intervalo pertenecen los números reales que son mayores que su cuadrado?`,
    opciones: [
        `]-∞, 1[`,
        `]0, 1[`,
        `]0, +∞[`,
        `]-1, 0[`
    ],
    correcta: 1
},
{
    pregunta: `Don Carlos tiene un carrito donde vende sopaipillas. Las compra en 110 pesos cada una y las vende en 400 pesos cada una. Si en aceite gasta diariamente 2 botellas, cuyo precio es 1.800 pesos cada una, ¿cuántas sopaipillas como mínimo debería vender, si quiere que en una jornada sus ganancias sean mayores a 30.000 pesos?`,
    opciones: [
        `89`,
        `90`,
        `91`,
        `92`,
        `93`
    ],
    correcta: 3
},
{
    pregunta: `¿Cuántos son los números naturales que cumplen con la condición que su triple, disminuido en 15 unidades, es mayor que su cuádruple aumentado en 4 unidades?`,
    opciones: [
        `0`,
        `1`,
        `2`,
        `3`
    ],
    correcta: 0
},
{
    pregunta: `Si el quíntuple de un número no es mayor que el triple del mismo número, más dieciocho unidades, entonces ¿cuántos números naturales existen, que cumplan dicha condición?`,
    opciones: [
        `12`,
        `9`,
        `10`,
        `Infinitos`
    ],
    correcta: 1
},
{
    pregunta: `Un artesano tiene x collares que él mismo fabricó, vende 60 y le quedan más de la mitad. Tras esta venta, fabrica 5 collares más, vende 27 y le quedan menos de 40 collares. ¿Cuántos collares fabricó en total?`,
    opciones: [
        `121`,
        `122`,
        `125`,
        `126`
    ],
    correcta: 0
},
{
    pregunta: `¿De cuál de los siguientes sistemas es el par ordenado (0, -3) solución?`,
    opciones: [
        `<img src="https://i.ibb.co/Sq6XrCW/ME6-M1-P15-1.jpg" alt="Pregunta 15 ME6 R1" style="max-width: 100px; height: auto;">`,
        `<img src="https://i.ibb.co/Pz6nJ8Tr/ME6-M1-P15-2.jpg" alt="Pregunta 15 ME6 R2" style="max-width: 100px; height: auto;">`,
        `<img src="https://i.ibb.co/23NGpn1z/ME6-M1-P15-3.jpg" alt="Pregunta 15 ME6 R3" style="max-width: 100px; height: auto;">`,
        `<img src="https://i.ibb.co/7xfTcdhT/ME6-M1-P15-4.jpg" alt="Pregunta 15 ME6 R4" style="max-width: 100px; height: auto;">`
    ],
    correcta: 0
},
{
    pregunta: `Dado el sistema <img src="https://i.ibb.co/SDmjpWXn/ME6-M1-P16.jpg" alt="Pregunta 16 ME6" style="max-width: 100px; height: auto;"> la solución del sistema es:`,
    opciones: [
        `(-4, 8)`,
        `(4, -8)`,
        `(-4, 2)`,
        `(2, -4)`
    ],
    correcta: 2
},
{
    pregunta: `Dado el sistema <img src="https://i.ibb.co/6c25Hv8Q/ME6-M1-P17.jpg" alt="Pregunta 17 ME6" style="max-width: 100px; height: auto;"> el valor de y - x es:`,
    opciones: [
        `-31`,
        `33`,
        `0,37`,
        `12,45`
    ],
    correcta: 0
},
{
    pregunta: `Dado el sistema <img src="https://i.ibb.co/pS0tJD1/ME6-M1-P18.jpg" alt="Pregunta 18 ME6" style="max-width: 100px; height: auto;"> el valor de 21x es:`,
    opciones: [
        `25`,
        `0`,
        `12`,
        `75`
    ],
    correcta: 3
},
{
    pregunta: `Dado el sistema <img src="https://i.ibb.co/7tmKRSQD/ME6-M1-P19.jpg" alt="Pregunta 19 ME6" style="max-width: 100px; height: auto;"> entonces el valor de xy es:`,
    opciones: [
        `<span class="math-expr"><span class="fraction"><span class="num">1</span><span class="den">2</span></span></span>`,
        `-2`,
        `2`,
        `<span class="math-expr"><span class="fraction"><span class="num">-1</span><span class="den">2</span></span></span>`
    ],
    correcta: 2
},
{
    pregunta: `Si x + 3y = 15 y x es el doble de y, entonces ¿cuáles son los valores de x e y, respectivamente?`,
    opciones: [
        `6 y 3`,
        `4 y 2`,
        `2 y 1`,
        `10 y 5`
    ],
    correcta: 0
},
{
    pregunta: `Pedro ahorró dinero juntando en total 82 monedas entre monedas de 100 pesos y de 500 pesos. Si en total ahorró 18.600 pesos, ¿cuál de los siguientes sistemas permite encontrar la cantidad (y) de monedas de 500 pesos que ahorró, sabiendo que x es la cantidad de monedas de 100 pesos?`,
    opciones: [
        `<img src="https://i.ibb.co/kVbxyNff/ME6-M1-P21-1.jpg" alt="Pregunta 21 ME6 R1" style="max-width: 100px; height: auto;">`,
        `<img src="https://i.ibb.co/YBQfZ9p8/ME6-M1-P21-2.jpg" alt="Pregunta 21 ME6 R2" style="max-width: 100px; height: auto;">`,
        `<img src="https://i.ibb.co/k2CmXm54/ME6-M1-P21-3.jpg" alt="Pregunta 21 ME6 R3" style="max-width: 100px; height: auto;">`,
        `Ninguna de las anteriores`
    ],
    correcta: 1
},
{
    pregunta: `Tres pasteles y un chocolate cuestan 6.810 pesos. Un pastel y dos chocolates cuestan 3.670 pesos. ¿Cuánto cuesta un pastel?`,
    opciones: [
        `$1.620`,
        `$840`,
        `$1.990`,
        `$2.030`
    ],
    correcta: 2
},
{
    pregunta: `Entre dos ficheros A y B tengo 120 fichas. Si del fichero A saco 12 fichas y las coloco en el fichero B, ambos ficheros quedan con igual cantidad de fichas. ¿Cuántas fichas había inicialmente en A?`,
    opciones: [
        `72`,
        `60`,
        `54`,
        `48`
    ],
    correcta: 2
},
{
    pregunta: `Si un apoderado tuvo que comprar 2 libros para su hija y gastó 50.230 pesos. ¿Cuánto le costó el más barato, si se sabe que costó 14.910 pesos menos que el más caro?`,
    opciones: [
        `$32.510`,
        `$32.570`,
        `$17.320`,
        `$17.660`
    ],
    correcta: 3
},
{
    pregunta: `Las edades de Andrea y sus dos hijas gemelas suman 47 años, pero también se sabe que las gemelas nacieron cuando Andrea tenía 26 años. ¿Qué edad tendrá Andrea en 7 años más?`,
    opciones: [
        `40`,
        `32`,
        `33`,
        `43`
    ],
    correcta: 0
},
{
    pregunta: `El equipo campeón del torneo de fútbol pasado convirtió 60 goles, de los cuales 45 fueron convertidos por dos de sus máximos goleadores. ¿Cuántos goles convirtió el máximo goleador del equipo, si se sabe que superó en 7 goles al jugador que lo sucedió entre los goleadores del equipo?`,
    opciones: [
        `23`,
        `26`,
        `30`,
        `52`
    ],
    correcta: 1
},
{
    pregunta: `En un partido de basquetbol, el equipo ganador ganó con 99 puntos; mientras que el equipo contrario hizo 77 puntos. En el partido hubo 15 tiros libres en total, donde el equipo perdedor hizo 10 tiros libres; mientras que el equipo ganador no logró hacer ningún tiro. Sabiendo que el equipo ganador realizó 80 tiros en total, donde solamente la mitad se concretaron; entonces la cantidad de tiros de 2 puntos y de 3 puntos que realizó el equipo ganador fueron respectivamente:`,
    opciones: [
        `12 y 28`,
        `20 y 20`,
        `33 y 7`,
        `21 y 19`
    ],
    correcta: 3
},
{
    pregunta: `Para una tarea en la clase de matemática un estudiante desarrolla la inecuación 
<p style="text-align: center;">(x – 3)(x + 4) – 2x + 3 > x²</p>
<p>Realizando los siguientes pasos:</p>
<p>Paso 1: se desarrolla la multiplicación de los binomios con término común.</p>
<p style="text-align: center;">x² – x – 12 – 2x + 3 > x²</p>
<p>Paso 2: se restan x² a ambos lados de la desigualdad.</p>
<p style="text-align: center;">-x – 12 – 2x + 3 > 0</p>
<p>Paso 3: Se suman términos semejantes.</p>
<p style="text-align: center;">- 3x – 9 >0</p>
<p>Paso 4: Se suma 9 a ambos lados de la inecuación.</p>
<p style="text-align: center;">-3x > 9<p>
<p>Paso 5: Se divide por -3 a ambos lados de la inecuación.</p>
<p style="text-align: center;">x > - 3</p>
<p>¿En cuál de los pasos se equivocó primero el estudiante?</p>
`,
    opciones: [
        `12 y 28`,
        `20 y 20`,
        `33 y 7`,
        `21 y 19`
    ],
    correcta: 0
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
