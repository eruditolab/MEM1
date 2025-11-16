        function renderMath() {
            if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
            }
        }
    const allQuestions = [
    {
        pregunta: `Se tiene un triángulo equilátero, cuyo perímetro es √27 centímetros. Con esta información, se sabe que su altura es:`,
        opciones: [
            "4 centímetros",
            "4,5 centímetros",
            "5 centímetros",
            "6 centímetros"
        ],
        correcta: 1
    },
    {
        pregunta: `Antonella es una pastelera que realiza pasteles rectangulares de 36 cm de largo por 20 cm de ancho y una altura de 6 cm. Un cliente le solicitó que necesita que la base se reduzca en un 10% y que este nuevo pastel se corte en 8 trozos con forma de triángulos congruentes. ¿Qué área basal tendrá cada trozo de pastel?`,
        opciones: [
            "40 cm²",
            "57 cm²",
            "77 cm²",
            "81 cm²",
            "90 cm²"
        ],
        correcta: 3
    },
    {
        pregunta: `Una empresa de diseño de jardines construye un estanque circular con radio de 7 metros. Dentro del estanque, se inscribe un triángulo equilátero para colocar tres fuentes en sus vértices. ¿Cuál es el perímetro total del triángulo formado por las fuentes?`,
        opciones: [
            "21π m",
            "42 m",
            "21√3 cm",
            "14√3 cm"
        ],
        correcta: 1
    },
    {
        pregunta: `En un parque infantil, se instala un columpio, que visto de manera frontal, posee forma de trapecio isósceles. Las bases miden 1,2 m (superior) y 2 m (inferior), y la altura entre bases es 2,0 m. ¿Qué área ocuparía dicho columpio visto de manera frontal?
        <p style="text-align: center;"><img src="https://i.ibb.co/vCQyqb2n/ME8-M1-P4.jpg" alt="Pregunta 4" style="max-width: 300px; height: auto;"></p>`,
        opciones: [
            "3 m²",
            "3,5 m²",
            "3,2 m²",
            "2,8 m²"
        ],
        correcta: 2
    },
    {
        pregunta: `Una empresa de repostería apila bandejas circulares que tienen sus radios en forma decreciente. Cada bandeja superior reduce su radio en 0,5 cm, con respecto a su bandeja inferior. Si inicialmente, el perímetro de la primera bandeja es de 200π cm. ¿Cuál es área de la bandeja número 101?`,
        opciones: [
            "2500π cm²",
            "2450,25π cm²",
            "5625π cm²",
            "3025π cm²"
        ],
        correcta: 0
    },
    {
        pregunta: `<p>Se tiene una estrella de 6 puntas, la cual, al dividir en triángulos congruentes, se tiene la siguiente imagen:</p>
        <p style="text-align: center;"><img src="https://i.ibb.co/6RkL9n6Q/ME8-M1-P6.jpg" alt="Pregunta 6" style="max-width: 220px; height: auto;"></p>
        <p>Si se sabe que el área de uno de los triángulos pequeños es √3 cm², entonces el perímetro de la estrella de 6 puntas es:</p>`,
        opciones: [
            "12√3 cm",
            "12 cm",
            "24 cm",
            "24√3 cm"
        ],
        correcta: 2
    },
    {
        pregunta: `<p>Isidora inventó un logo compuesto por dos triángulos equiláteros, los cuales, al superponerse uno sobre otro, forma una estrella de 6 puntas, el cual se encuentra inscrito en un círculo, cuyo diámetro es 8√3 cm.</p>
        <p style="text-align: center;"><img src="https://i.ibb.co/FL53B5kS/ME8-M1-P7.jpg" alt="Pregunta 7" style="max-width: 220px; height: auto;"></p>
        <p>Si se sabe que, los triángulos superpuestos generan 12 triángulos equiláteros congruentes. ¿Cuál de las siguientes alternativas presenta correctamente el área verde de la figura?</p>`,
        opciones: [
            "12(π - √3) cm²",
            "24(π - √3) cm²",
            "36(π - √3) cm²",
            "48(π - √3) cm²"
        ],
        correcta: 3
    },
    {
        pregunta: `Fabricio trabaja en un teatro, donde una de sus funciones es alumbrar correctamente a las actrices y actores en el escenario. Como regla, para poder alumbrar correctamente a alguien en el escenario, según la altura de la persona, se le agrega 50 centímetros de diámetro al círculo que deben alumbrar. Si una persona mide 1,82 metros. ¿Cuál deberá ser el área aproximada de la luz que debe alumbrar a esa persona? Considere π=3.`,
        opciones: [
            "3,9662 m²",
            "4,0368 m²",
            "4,1798 m²",
            "16,1472 m²"
        ],
        correcta: 1
    },
    {
        pregunta: `Francisca compró una torta clásica con forma cilíndrica. Para poder colocarla torta en una base circular, esta debe tener un grosor del 5% extra en su diámetro. Sabiendo esta información, entonces el aumento de área entre la torta y su base es:`,
        opciones: [
            "5 %",
            "7,5 %",
            "10 %",
            "10,25 %"
        ],
        correcta: 3
    },
    {
        pregunta: `<p>Para el cálculo del área de una elipse, se calcula como la multiplicación del valor π por el semieje horizontal (<i>a</i>) por el semieje vertical (<i>b</i>).</p>
        <p>A = π∙a∙b</p>
        <p>Con esto presente, el área de la mitad de la elipse que se presenta a continuación es:</p>
        <p style="text-align: center;"><img src="https://i.ibb.co/7tfW6mwV/ME8-M1-P10.jpg" alt="Pregunta 10" style="max-width: 220px; height: auto;"></p>`,
        opciones: [
            "20π cm²",
            "40π cm²",
            "50π cm²",
            "80π cm²"
        ],
        correcta: 0
    },
    {
        pregunta: `<p>Para el cálculo del área de una elipse, se calcula como la multiplicación del valor π por el semieje horizontal (<i>a</i>) por el semieje vertical (<i>b</i>).</p>
        <p>A = π∙a∙b</p>
        <p>Si se sabe que el área de una elipse es 14π cm². ¿Cuál es el área del triángulo inscrito en la elipse, sabiendo que las medidas de los semiejes son números naturales?</p>
        <p style="text-align: center;"><img src="https://i.ibb.co/JWR0LwTt/ME8-M1-P11.jpg" alt="Pregunta 11" style="max-width: 220px; height: auto;"></p>`,
        opciones: [
            "12 cm²",
            "14 cm²",
            "28 cm²",
            "28π cm²"
        ],
        correcta: 1
    },
    {
        pregunta: `<p>Para el cálculo del área de una elipse, se calcula como la multiplicación del valor π por el semieje horizontal (<i>a</i>) por el semieje vertical (<i>b</i>).</p>
        <p>A = π∙a∙b</p>
        <p>Dorian es un dibujante amateur que está aprendiendo a dibujar ojos. Para ello, debe dibujar un círculo inscrito en una elipse, que es tangente en dos puntos a la elipse, como se muestra en la figura.</p>
        <p style="text-align: center;"><img src="https://i.ibb.co/xtkxH4Zm/ME8-M1-P12.jpg" alt="Pregunta 12" style="max-width: 220px; height: auto;"></p>
        <p>Si se sabe que el área del círculo es 36π cm². ¿Cuál es el área de la elipse, si se sabe que el eje horizontal es 8 unidades mayor que el eje vertical de la elipse?</p>`,
        opciones: [
            "24π cm²",
            "40π cm²",
            "56π cm²",
            "60π cm²"
        ],
        correcta: 3
    },
    {
        pregunta: `Carlos quiere vender omelettes gigantes. Para ello, él sabe que cuando utiliza 1 huevo, puede generar un omelette circular, de área 25π cm². Si quisiera armar un omelette de diámetro 1,2 m. ¿Cuántos huevos necesitaría?`,
        opciones: [
            "288 huevos",
            "216 huevos",
            "144 huevos",
            "12 huevos"
        ],
        correcta: 2
    },
    {
        pregunta: `<p>Un restaurant corta el pan que ofrece, de modo que forman cuadrados. Las distancias de este pan, se dividen en 5 partes, donde todos sus lados están distribuidos equitativamente.</p>
        <p style="text-align: center;"><img src="https://i.ibb.co/DHN2pgdX/ME8-M1-P14.jpg" alt="Pregunta 14" style="max-width: 220px; height: auto;"></p>
        <p>¿Cuál será la suma de las áreas de las zonas identificadas como 3 y 5?</p>`,
        opciones: [
            "20 cm²",
            "36 cm²",
            "48 cm²",
            "56 cm²",
            "60 cm²"
        ],
        correcta: 3
    },
    {
        pregunta: `<p>Un cuadrado, se divide en 2 partes iguales. Luego, en una de esas partes, se generó un triángulo equilátero con el lado más largo.</p>
        <p>¿Cuál es el perímetro del triángulo equilátero formado, sabiendo que el área de una de las mitades generadas es de 98 cm²?</p>`,
        opciones: [
            "21 cm",
            "28 cm",
            "15 cm",
            "42 cm",
            "39 cm"
        ],
        correcta: 3
    },
    {
        pregunta: `Si en un terreno rectangular de √72 de ancho por 30 m de largo, cerrado con alambres, amarramos una vaca a un poste que está ubicado exactamente al centro del terreno, con una soga de 4 metros de largo, ¿cuánto es la superficie máxima de pasto que la vaca podría comer si la soga no se enrolla al girar en torno al poste? (Considera π = 3)`,
        opciones: [
            "28 m²",
            "36 m²",
            "40 m²",
            "48 m²"
        ],
        correcta: 3
    },
    {
        pregunta: `<p>Dave tiene una empresa de repostería, que apila bandejas circulares decrecientes. La bandeja del piso <i>k</i> tiene diámetro dado por la siguiente expresión.</p>
        <p style="text-align: center;"><img src="https://i.ibb.co/6Rn9PyTw/ME8-M1-P17.jpg" alt="Pregunta 17" style="max-width: 220px; height: auto;">
        <p>¿Cuál es el área de la bandeja del tercer piso?</p>`,
        opciones: [
            "225π cm²",
            "196π cm²",
            "144π cm²",
            "64π cm²"
        ],
        correcta: 2
    },
    {
        pregunta: `Un hexágono regular, cuyos lados miden 5 cm, su área es:`,
        opciones: [
            '<span class="math-expr"><span class="fraction"><span class="num">5√3</span><span class="den">2</span></span></span> cm²',
            '<span class="math-expr"><span class="fraction"><span class="num">5√3</span><span class="den">4</span></span></span> cm²',
            '<span class="math-expr"><span class="fraction"><span class="num">25√3</span><span class="den">4</span></span></span> cm²',
            '<span class="math-expr"><span class="fraction"><span class="num">150√3</span><span class="den">2</span></span></span> cm²',
            '<span class="math-expr"><span class="fraction"><span class="num">75√3</span><span class="den">2</span></span></span> cm²'       
        ],
        correcta: 4
    },
    {
        pregunta: `Francisca tiene una foto muy importante de su madre. La foto presenta las dimensiones de 11,7 cm x 14,3 cm. Ella decide crear un cuadro para su foto, la cual tendrá un borde de 3 cm. ¿Cuál será el área del borde del cuadro creado?`,
        opciones: [
            "192 cm²",
            "187 cm²",
            "149,1 cm²",
            "96 cm²"
        ],
        correcta: 0
    },
    {
        pregunta: `<p>El área de la figura es:</p>
        <p style="text-align: center;"><img src="https://i.ibb.co/9kM3vYrm/ME8-M1-P20.jpg" alt="Pregunta 20" style="max-width: 500px; height: auto;"></p>`,
        opciones: [
            '3x²+9xy+2y²',
            '3x²+<span class="math-expr"><span class="fraction"><span class="num">3</span><span class="den">2</span></span></span>y²+3xy',
            '<span class="math-expr"><span class="fraction"><span class="num">9</span><span class="den">2</span></span></span>y²+<span class="math-expr"><span class="fraction"><span class="num">3</span><span class="den">2</span></span></span>xy+3x²',
            '<span class="math-expr"><span class="fraction"><span class="num">9</span><span class="den">2</span></span></span>xy+3x²+<span class="math-expr"><span class="fraction"><span class="num">3</span><span class="den">2</span></span></span>y²'
        ],
        correcta: 3
    },
    {
        pregunta: `<p>De la figura adjunta, se sabe que AF = GB = 2 cm; FGCE es un cuadrado de lado 4 cm.</p>
        <p style="text-align: center;"><img src="https://i.ibb.co/35b5d36y/ME8-M1-P21.jpg" alt="Pregunta 21" style="max-width: 220px; height: auto;"></p>
        <p>Si se sabe que el área total de la figura completa es de 36 cm², entonces la altura del triángulo ECD, con base EC es:</p>`,
        opciones: [
            "1 cm",
            "2 cm",
            "3 cm",
            "4 cm"
        ],
        correcta: 1
    },
    {
        pregunta: `<p>Alejandro realizará cajitas de cartón sin tapa para iniciar un emprendimiento. Para ello usará láminas cuadradas de cartón que cortará en cada esquina para formar la caja, tal como se muestra en la figura.</p>
        <p style="text-align: center;"><img src="https://i.ibb.co/G1p4WCM/ME8-M1-P22.jpg" alt="Pregunta 22" style="max-width: 500px; height: auto;"></p>
        <p>Si el área ocupada en cada cajita fue de 240 cm², ¿cuánto mide la longitud de cada lado de una lámina de cartón?</p>`,
        opciones: [
            "10 cm",
            "14 cm",
            "16 cm",
            "18 cm"
        ],
        correcta: 2
    },
    {
        pregunta: `<p>Se tiene un rectángulo inscrito en un círculo, los cuales son concéntricos y tiene 4 puntos tangentes con el círculo como se muestra en la figura:</p>
        <p style="text-align: center;"><img src="https://i.ibb.co/WN1JZZwV/ME8-M1-P23.jpg" alt="Pregunta 23" style="max-width: 220px; height: auto;"></p>
        <p>Javiera quiere saber las medidas del rectángulo, donde solamente sabe lo siguiente:</p>
        <ul>
            <li>El perímetro del círculo es 17π cm</li>
            <li>El lado mayor del rectángulo supera a su lado menor en 7 cm.</li>
        </ul>
        <p>Con esta información el lado mayor mide:</p>`,
        opciones: [
            "12 cm",
            "14 cm",
            "15 cm",
            "17 cm"
        ],
        correcta: 2
    },
    {
        pregunta: `<p>En la figura adjunta, AB = BC =13, CD =5 y DA =12.</p>
        <p style="text-align: center;"><img src="https://i.ibb.co/1tvJXMFq/ME8-M1-P24.jpg" alt="Pregunta 24" style="max-width: 200px; height: auto;"></p>
        <p>El área del cuadrilátero ABCD es:</p>`,
        opciones: [
            '30 + <span class="math-expr"><span class="fraction"><span class="num">13√3</span><span class="den">2</span></span></span> cm²',
            '30 + <span class="math-expr"><span class="fraction"><span class="num">169√3</span><span class="den">2</span></span></span> cm²',
            '30 + <span class="math-expr"><span class="fraction"><span class="num">169√3</span><span class="den">4</span></span></span> cm²',
            '108 cm²'
        ],
        correcta: 2
    },
    {
        pregunta: `<p>En la figura adjunta, ¿cuánto suman los perímetros de todos los cuadrados ubicados sobre la hipotenusa del triángulo rectángulo de catetos 20 cm y 21 cm?</p>
        <p style="text-align: center;"><img src="https://i.ibb.co/rf4K8tDR/ME8-M1-P25.jpg" alt="Pregunta 25" style="max-width: 200px; height: auto;"></p>`,
        opciones: [
            "120 cm",
            "116 cm",
            "125 cm",
            "130 cm"
        ],
        correcta: 1
    },
    {
        pregunta: `Las diagonales de un trapecio isósceles miden 13 cm y su altura mide 5 cm. ¿Cuál es el área de este trapecio?`,
        opciones: [
            "60 cm²",
            "64 cm²",
            "65 cm²",
            "80 cm²"
        ],
        correcta: 0
    },
    {
        pregunta: `El perímetro de un triángulo isósceles de base <i>b</i> y lados <i>a</i>, mide 36 cm. ¿Cuál es el área de este triángulo, si se sabe que <i>a</i> – <i>b</i> = 3 cm?`,
        opciones: [
            "48 cm²",
            "60 cm²",
            "65 cm²",
            "120 cm²"
        ],
        correcta: 1
    },
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