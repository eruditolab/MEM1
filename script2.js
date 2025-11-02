        function renderMath() {
            if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
            }
        }
    const allQuestions = [
    {
        pregunta: `¿Cuál es le recíproco de <span class="fraction"><span class="frac-top">1</span><span class="frac-bottom">4</span></span> - ( <span class="fraction"><span class="frac-top">1</span><span class="frac-bottom">8</span></span> + 2 - <span class="fraction"><span class="frac-top">3</span><span class="frac-bottom">16</span></span> ) - 1<span class="fraction"><span class="frac-top">1</span><span class="frac-bottom">4</span></span> ?`,
        opciones: [
            "- <span class='fraction'><span class='frac-top'>15</span><span class='frac-bottom'>16</span></span>",
            "- <span class='fraction'><span class='frac-top'>16</span><span class='frac-bottom'>47</span></span>",
            "- <span class='fraction'><span class='frac-top'>16</span><span class='frac-bottom'>15</span></span>",
            "- <span class='fraction'><span class='frac-top'>47</span><span class='frac-bottom'>16</span></span>"
        ],
        correcta: 1
    },
    {
        pregunta: `La cuarta parte de la suma entre dos tercios y dos séptimos, es`,
        opciones: [
            "<span class='fraction'><span class='frac-top'>5</span><span class='frac-bottom'>21</span></span>",
            "<span class='fraction'><span class='frac-top'>20</span><span class='frac-bottom'>21</span></span>",
            "<span class='fraction'><span class='frac-top'>2</span><span class='frac-bottom'>5</span></span>",
            "<span class='fraction'><span class='frac-top'>1</span><span class='frac-bottom'>10</span></span>"
        ],
        correcta: 0
    },
    {
        pregunta: `En la recta numérica adjunta las marcas están espaciadas a igual distancia entre sí, ¿qué punto corresponde al resultado de 5<span class='fraction'><span class='frac-top'>3</span><span class='frac-bottom'>5</span></span> - 2<span class='fraction'><span class='frac-top'>1</span><span class='frac-bottom'>5</span></span> ?<br>
        <img src="https://i.postimg.cc/N0cYtNmH/P01-M1-2.jpg" alt="Recta numérica" style="max-width: 100%; height: auto;">`,
        opciones: [
            "Punto P",
            "Punto Q",
            "Punto R",
            "Punto S"
        ],
        correcta: 1
    },
    {
        pregunta: `En la recta numérica, ¿cuál de los siguientes números racionales se encuentra más alejado del número dos?`,
        opciones: [
            "<span class='fraction'><span class='frac-top'>7</span><span class='frac-bottom'>3</span></span>",
            "<span class='fraction'><span class='frac-top'>9</span><span class='frac-bottom'>4</span></span>",
            "<span class='fraction'><span class='frac-top'>11</span><span class='frac-bottom'>5</span></span>",
            "<span class='fraction'><span class='frac-top'>11</span><span class='frac-bottom'>6</span></span>"
        ],
        correcta: 0
    },
    {
        pregunta: `Una pelota se deja caer desde una altura de 100 cm. Después de cada rebote la altura máxima alcanzada por la pelota es <span class='fraction'><span class='frac-top'>4</span><span class='frac-bottom'>5</span></span> de la altura anterior. En el tercer rebote, ¿cuál es la altura máxima que alcanzará la pelota, aproximada al entero más cercano?`,
        opciones: [
            "51 cm",
            "64 cm",
            "80 cm",
            "96 cm"
        ],
        correcta: 0
    },
    {
        pregunta: `Dados los racionales x = <span class='fraction'><span class='frac-top'>5</span><span class='frac-bottom'>9</span></span>, y = 0,3<span style="text-decoration: overline;">6</span> y z = <span class='fraction'><span class='frac-top'>4</span><span class='frac-bottom'>11</span></span>, entonces se cumple que:`,
        opciones: [
            "y > z > x",
            "x > z > y",
            "x > y > z",
            "z > y > x"
        ],
        correcta: 2
    },
    {
        pregunta: `Una herencia de $ 7.200.000 será repartida entre los 6 hijos de un matrimonio en partes iguales. Si uno de estos hijos a su vez repartirá su parte entre sus 5 hijos de manera equitativa, ¿cuánto recibirán 3 de estos nietos del matrimonio?`,
        opciones: [
            "$ 720.000",
            "$ 240.000",
            "$ 480.000",
            "$ 600.000"
        ],
        correcta: 0
    },
    {
        pregunta: `Si el precio de un artículo que es $ 300.000 se aumenta en sus dos tercios y el nuevo precio se disminuye en su quinta parte, entonces el precio final es`,
        opciones: [
            "$ 20.000",
            "$ 40.000",
            "$ 100.000",
            "$ 400.000"
        ],
        correcta: 3
    },
    {
        pregunta: `La cuarta parte del doble del 20% de 375 es`,
        opciones: [
            "75",
            "50",
            "37,5",
            "25"
        ],
        correcta: 2
    },
    {
        pregunta: `El 15% del 5% de 20.000 es`,
        opciones: [
            "150",
            "400",
            "1500",
            "4000"
        ],
        correcta: 0
    },
    {
        pregunta: `Si A es el 25% de B y B es el 66,<span style="text-decoration: overline;">6</span>% de C, ¿Qué parte es A de C?`,
        opciones: [
            "<span class='fraction'><span class='frac-top'>1</span><span class='frac-bottom'>4</span></span>",
            "<span class='fraction'><span class='frac-top'>1</span><span class='frac-bottom'>3</span></span>",
            "<span class='fraction'><span class='frac-top'>1</span><span class='frac-bottom'>6</span></span>",
            "<span class='fraction'><span class='frac-top'>2</span><span class='frac-bottom'>5</span></span>"
        ],
        correcta: 2
    },
    {
        pregunta: `En un corral hay pavos blancos y pavos castellanos. Si <span class='fraction'><span class='frac-top'>3</span><span class='frac-bottom'>8</span></span> son blancos, ¿qué porcentaje son los pavos blancos de los pavos castellanos?`,
        opciones: [
            "37,5 %",
            "40 %",
            "60 %",
            "62,5 %"
        ],
        correcta: 2
    },
    {
        pregunta: `Tres amigos, Alberto, Bernardo y Carlos, tienen $ 80, $ 100 y $ 120 respectivamente. Al comparar entre ellos estas cantidades, afirman:<br><br>
        Alberto: "Bernardo tiene 20% más de lo que yo tengo"<br>
        Bernardo: "Carlos tiene 20% más de lo que yo tengo"<br>
        Carlos: "Yo tengo 50% más de lo que tiene Alberto"<br><br>
        ¿Quién(es) ha(n) hecho una afirmación matemática correcta?`,
        opciones: [
            "Solo Alberto",
            "Solo Bernardo",
            "Alberto y Bernardo",
            "Bernardo y Carlos"
        ],
        correcta: 3
    },
    {
        pregunta: `Una dueña de casa cortó una torta en 5 pedazos iguales y luego dividió uno de estos pedazos en 5 trozos iguales y de menor tamaño. Si se comió dos de estos trozos más pequeños, ¿qué porcentaje de la torta se comió?`,
        opciones: [
            "4%",
            "8%",
            "16%",
            "20%"
        ],
        correcta: 1
    },
    {
        pregunta: `El precio de un artículo es $ C. Si este se aumenta en un 15% y luego se rebaja en un 10%, ¿por qué número se debe multiplicar C para obtener el nuevo precio?`,
        opciones: [
            "1,005",
            "1,035",
            "1,35",
            "1,09"
        ],
        correcta: 1
    },
    {
        pregunta: `Si el numerador de una fracción disminuye en un 40% y el denominador en un 60% se obtiene el mismo resultado que si la fracción se multiplica por`,
        opciones: [
            "0,5",
            "1,2",
            "1,3",
            "1,5"
        ],
        correcta: 3
    },
    {
        pregunta: `El abuelo Jorge prestó a su nieto Patricio $ 30.000, quedándose con $ 90.000. ¿Con qué porcentaje del dinero se quedó el abuelo?`,
        opciones: [
            "80%",
            "75%",
            "72%",
            "25%"
        ],
        correcta: 1
    },
    {
        pregunta: `Las edades de tres hermanas: Francisca, Carmen y Lucía, son entre sí como 2 : 5 : 3, respectivamente. Si sus edades suman 30 años, entonces la edad de Lucía es`,
        opciones: [
            "15 años",
            "9 años",
            "6 años",
            "3 años"
        ],
        correcta: 1
    },
    {
        pregunta: `La razón entre el número de preguntas de una prueba y la cantidad de minutos asignados para responderla es 14 : 27. Si la prueba consta de 70 preguntas, ¿cuántos minutos son los asignados para responderla?`,
        opciones: [
            "27",
            "36",
            "82",
            "135"
        ],
        correcta: 3
    },
    {
        pregunta: `Un comerciante compra una cantidad de naranjas a razón de 3 kilogramos por $ 600 y las vende todas a razón de 4 kilogramos por $ 1.000. Si obtuvo una ganancia de $ 3.000, ¿cuántos kilogramos de naranjas compró?`,
        opciones: [
            "8",
            "12",
            "25",
            "60"
        ],
        correcta: 3
    },
    {
        pregunta: `En un instituto con solo dos carreras de 1.400 alumnos, por cada cinco alumnos que estudian Turismo hay dos que estudian Administración de Empresas. Si en Turismo la relación entre hombres y mujeres es 3 : 2, respectivamente, entonces ¿cuántos alumnos hombres hay en Turismo?`,
        opciones: [
            "200",
            "300",
            "400",
            "600"
        ],
        correcta: 3
    },
    {
        pregunta: `En la tabla adjunta, A y B son magnitudes directamente proporcionales, entonces x² - y =<br>
        <p style="text-align: center;"><img src="https://i.postimg.cc/g0s9WGGC/P02-M1-2.jpg" alt="Tabla proporcionalidad directa" style="max-width: 100%; height: auto;"></p>`,
        opciones: [
            "−34",
            "−1",
            "1",
            "7"
        ],
        correcta: 2
    },
    {
        pregunta: `Las variables x e y de la figura adjunta, son inversamente proporcionales, entonces 3m − 2n es igual a<br>
        <p style="text-align: center;"><img src="https://i.postimg.cc/NFyZmTRt/P03-M1-2.jpg" alt="Tabla proporcionalidad inversa" style="max-width: 100%; height: auto;"></p>`,
        opciones: [
            "10,5",
            "14,0",
            "17,5",
            "21,0"
        ],
        correcta: 3
    },
    {
        pregunta: `Bajo ciertas condiciones, la cantidad de kilómetros recorridos por un automóvil es directamente proporcional a la cantidad de litros de combustible que consume. Si un automóvil que cumple estas condiciones recorre 90 kilómetros con 15 litros de bencina, ¿cuántos kilómetros puede recorrer este automóvil con 25 litros de bencina?`,
        opciones: [
            "54",
            "60",
            "135",
            "150"
        ],
        correcta: 3
    },
    {
        pregunta: `Si 15 obreros construyen un edificio en 8 meses, ¿cuánto tiempo se demorarían 10 obreros en construir un edificio similar, trabajando el mismo número de horas al día y en igualdad de condiciones de trabajo?`,
        opciones: [
            "5,3 meses",
            "9 meses",
            "10 meses",
            "12 meses"
        ],
        correcta: 3
    },
    {
        pregunta: `Las cantidades a² y b son inversamente proporcionales. Si para a = 2, se obtiene b = 3, ¿cuál sería el valor de a asociado a b = 27?`,
        opciones: [
            "<span class='fraction'><span class='frac-top'>4</span><span class='frac-bottom'>9</span></span>",
            "<span class='fraction'><span class='frac-top'>1</span><span class='frac-bottom'>2</span></span>",
            "<span class='fraction'><span class='frac-top'>2</span><span class='frac-bottom'>3</span></span>",
            "<span class='fraction'><span class='frac-top'>3</span><span class='frac-bottom'>4</span></span>"
        ],
        correcta: 2
    },
    {
        pregunta: `¿Cuál es el valor numérico de la expresión <span class='fraction'><span class='frac-top'>n - m</span><span class='frac-bottom'>mn</span></span>, si se sabe que <span class='fraction'><span class='frac-top'>m</span><span class='frac-bottom'>n</span></span> = <span class='fraction'><span class='frac-top'>3</span><span class='frac-bottom'>2</span></span> y n³ = 64?`,
        opciones: [
            "1",
            "- <span class='fraction'><span class='frac-top'>5</span><span class='frac-bottom'>6</span></span>",
            "- <span class='fraction'><span class='frac-top'>1</span><span class='frac-bottom'>6</span></span>",
            "- <span class='fraction'><span class='frac-top'>1</span><span class='frac-bottom'>12</span></span>"
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