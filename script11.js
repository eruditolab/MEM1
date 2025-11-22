        function renderMath() {
            if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
            }
        }
    const allQuestions = [
    {
        pregunta: `Las áreas de tres cuadrados son 9, 64 y 256. Si se considera un solo lado de cada cuadrado. ¿Cuál es el promedio (media aritmética) de estas tres longitudes?`,
        opciones: ['7', '8', '9', '10'],
        correcta: 2
    },
    {
        pregunta: `<p>De un grupo de 200 personas consultadas por su nivel educacional se obtuvo la siguiente tabla:</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Nivel educacional</th><th>Personas</th></tr>
            <tr><td>Educación Básica</td><td>40</td></tr>
            <tr><td>Educación Media</td><td>80</td></tr>
            <tr><td>Técnico Profesional</td><td>60</td></tr>
            <tr><td>Universitaria</td><td>20</td></tr>
        </table>
        <p>El gráfico circular que representa la información dada en la tabla es</p>`,
        opciones: ['<img src="https://i.ibb.co/G3308SzX/ME11-M1-P2-1.jpg" alt="Pregunta 2-1" style="max-width: 150px; height: auto;">',
            '<img src="https://i.ibb.co/TBkL2Yx8/ME11-M1-P2-2.jpg" alt="Pregunta 2-2" style="max-width: 150px; height: auto;">',
            '<img src="https://i.ibb.co/zgW4BWv/ME11-M1-P2-3.jpg" alt="Pregunta 2-3" style="max-width: 150px; height: auto;">',
            '<img src="https://i.ibb.co/ns9tBXHJ/ME11-M1-P2-4.jpg" alt="Pregunta 2-4" style="max-width: 150px; height: auto;">'],
        correcta: 2
    },
    {
        pregunta: `<p>Carlos y José deciden escalar un monte por separado, pero por el mismo sendero, llegando ambos a la cima que está a 1.300 m. El gráfico de la figura adjunta muestra la distancia recorrida, en función del tiempo, por cada uno hasta la cima.</p>
        <p style="text-align:center;"><img src="https://i.ibb.co/Cp992C0q/ME11-M1-P3.jpg" alt="Pregunta 3" style="max-width: 350px; height: auto;"></p>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) siempre verdadera(s)?</p>
        <p>I) José demoró en llegar a la cima 210 minutos.</p>
        <p>II) Carlos se detuvo 1 hora.</p>
        <p>III) José y Carlos demoraron el mismo tiempo en llegar a la cima.</p>`,
        opciones: ['Solo I', 'Solo I y II', 'Solo II y III', 'I, II y III'],
        correcta: 1
    },
    {
        pregunta: `<p>En la tabla adjunta se muestra la distribución de kilometraje de los vehículos seminuevos que están a la venta en una automotora.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Kilometraje</th><th>Frecuencia</th></tr>
            <tr><td>]0, 5]</td><td>2</td></tr>
            <tr><td>]5, 10]</td><td>7</td></tr>
            <tr><td>]10, 15]</td><td>6</td></tr>
            <tr><td>]15, 20]</td><td>9</td></tr>
            <tr><td>]20, 25]</td><td>11</td></tr>
        </table>
        <p>Con respecto a la tabla, ¿cuál de las siguientes afirmaciones es verdadera?</p>`,
        opciones: [
            'Los intervalos se ordenan de menor a mayor frecuencia.',
            'El 20% de los vehículos a la venta pertenecen al segundo intervalo.',
            'Hay 11 vehículos que marcan como mínimo 20 km y como máximo 25 km.',
            'Nueve vehículos muestran menos de 10 kilómetros recorridos.'
        ],
        correcta: 1
    },
    {
        pregunta: `<p>El histograma adjunto presenta los sueldos mensuales de los empleados de una agencia publicitaria, en intervalos de la forma [a, b[.</p>
        <p style="text-align:center;"><img src="https://i.ibb.co/7dvjcnrN/ME11-M1-P5.jpg" alt="Pregunta 5" style="max-width: 350px; height: auto;"></p>
        <p>Con los datos disponibles se puede concluir que:</p>`,
        opciones: [
            'Hay 26 empleados en la agencia publicitaria.',
            'El 60% de los empleados gana a lo más $500.000 mensualmente.',
            'El 25% de los empleados gana a lo menos $1.000.000 mensualmente.',
            'Dos empleados ganan más de $2.000.000 mensuales.'
        ],
        correcta: 2
    },
    {
        pregunta: `<p>En una escuela con 400 alumnos fue hecha una encuesta para verificar cuál era el deporte favorito de los alumnos, pudiendo dar solo una respuesta. Los resultados aparecen representados en la tabla adjunta.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Deporte</th><th>Frecuencia Absoluta</th><th>Frecuencia Relativa</th></tr>
            <tr><td>Fútbol</td><td>155</td><td>38,75%</td></tr>
            <tr><td>Basquetbol</td><td>74</td><td></td></tr>
            <tr><td>Atletismo</td><td>91</td><td>22,75%</td></tr>
            <tr><td>Tenis</td><td>56</td><td></td></tr>
            <tr><td>Natación</td><td></td><td></td></tr>
        </table>
        <p>¿Cuál de las afirmaciones es FALSA?</p>`,
        opciones: [
            'Atletismo es preferido por 91 alumnos.',
            'Seis de cada 100 alumnos prefieren natación.',
            'Los alumnos que prefieren tenis son el 14% de los encuestados.',
            'Fútbol es el deporte preferido por más de 160 alumnos.'
        ],
        correcta: 3
    },
    {
        pregunta: `<p>¿Cuál de los siguientes gráficos representa el histograma que se puede formar con los datos de la tabla adjunta?</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Datos</th><th>Frecuencia</th></tr>
            <tr><td>[0, 10[</td><td>4</td></tr>
            <tr><td>[10, 20[</td><td>8</td></tr>
            <tr><td>[20, 30[</td><td>10</td></tr>
            <tr><td>[30, 40[</td><td>18</td></tr>
            <tr><td>[40, 50[</td><td>24</td></tr>
        </table>`,
        opciones: ['<img src="https://i.ibb.co/8LTXBBJ1/ME11-M1-P7-1.jpg" alt="Pregunta 7-1" style="max-width: 150px; height: auto;">',
            '<img src="https://i.ibb.co/Kc1vCXKv/ME11-M1-P7-2.jpg" alt="Pregunta 7-2" style="max-width: 150px; height: auto;">',
            '<img src="https://i.ibb.co/BH1PzjVL/ME11-M1-P7-3.jpg" alt="Pregunta 7-3" style="max-width: 150px; height: auto;">',
            '<img src="https://i.ibb.co/JwDGvW67/ME11-M1-P7-4.jpg" alt="Pregunta 7-4" style="max-width: 150px; height: auto;">'],
        correcta: 1
    },
    {
        pregunta: `<p>En la tabla adjunta se muestra la distribución de la frecuencia de las edades de los alumnos del 4°A del colegio Mountain.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Edad en años</th><th>Frecuencia</th><th>Frecuencia acumulada</th></tr>
            <tr><td>16</td><td></td><td>8</td></tr>
            <tr><td>17</td><td></td><td>12</td></tr>
            <tr><td>18</td><td>3</td><td></td></tr>
            <tr><td>19</td><td>5</td><td></td></tr>
        </table>
        <p>¿Cuál de las siguientes afirmaciones es verdadera?</p>`,
        opciones: [
            'El 25% de los alumnos tiene 17 años',
            'Los alumnos de 19 años son mayoría.',
            'Los datos que faltan en la segunda columna suman 20.',
            'El 40% de los alumnos tiene 16 años.'
        ],
        correcta: 3
    },
    {
        pregunta: `<p>Se realizó el experimento de lanzar dos dados 200 veces, anotando la suma de los puntos obtenidos.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Suma</th><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>
            <tr><th>Frecuencia</th><td>10</td><td>18</td><td>13</td><td>19</td><td>26</td><td>24</td><td>25</td><td>16</td><td>20</td><td>17</td><td>12</td></tr>
        </table>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p>
        <p>I) El primer cuartil es 5 puntos.</p>
        <p>II) El percentil 60 es 8 puntos.</p>
        <p>III) El percentil 54 es 7 puntos.</p>`,
        opciones: ['Solo I', 'Solo II', 'Solo I y II', 'Solo II y III', 'I, II y III'],
        correcta: 4
    },
    {
        pregunta: `<p>A un grupo de mujeres se le preguntó acerca de su masa corporal. Sus respuestas se resumen en el histograma de la figura adjunta.</p>
        <p style="text-align:center;"><img src="https://i.ibb.co/fV8gPFyg/ME11-M1-P10.jpg" alt="Pregunta 10" style="max-width: 350px; height: auto;"></p>
        <p>Según la información del gráfico es verdadero que,</p>`,
        opciones: [
            '7 mujeres fueron entrevistadas en total.',
            'exactamente, un 50% de las mujeres entrevistadas tiene una masa corporal que está en el intervalo [64, 70[.',
            'la mediana de las masas corporales está en el intervalo [66, 68[.',
            'las modas de las masas corporales son 65 kg y 71 kg.'
        ],
        correcta: 2
    },
    {
        pregunta: `<p>Se tiene una urna con 4 bolitas numeradas del 1 al 4. Se saca una bolita al azar, se repone y se repite el experimento cierta cantidad de veces obteniéndose los resultados que se muestran en la tabla adjunta. Si la media de los resultados es 2,45, ¿cuántas veces se realizó el experimento?</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Número</th><th>Frecuencia</th></tr>
            <tr><td>1</td><td>5</td></tr>
            <tr><td>2</td><td>n</td></tr>
            <tr><td>3</td><td>4</td></tr>
            <tr><td>4</td><td>5</td></tr>
        </table>`,
        opciones: ['6', '12', '20', '22'],
        correcta: 2
    },
    {
        pregunta: `Para calcular la nota final de una asignatura, las tres pruebas del semestre se ponderan con un 30%, 30% y 40%, respectivamente. Isabel tiene un 5 y un 4 en las dos primeras. Si su nota final fue 5,1 entonces en la tercera prueba obtuvo un:`,
        opciones: ['5,1', '5,2', '6,0', '6,3'],
        correcta: 2
    },
    {
        pregunta: `<p>De acuerdo con la información de la siguiente tabla adjunta, la media de la distribución es aproximadamente:</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Variable</th><th>Frec. Abs.</th><th>Frec. rel.</th><th>Frec. Abs. Ac.</th></tr>
            <tr><td>2</td><td></td><td></td><td>6</td></tr>
            <tr><td>4</td><td></td><td>0,5</td><td></td></tr>
            <tr><td>6</td><td>5</td><td></td><td></td></tr>
            <tr><td>8</td><td>7</td><td></td><td></td></tr>
        </table>`,
        opciones: ['3,2', '3,8', '4,7', '5'],
        correcta: 2
    },
    {
        pregunta: `<p>En la tabla adjunta se muestra la distribución de todos los datos de ausentismo laboral que se registra durante un año en una empresa.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Cantidad de días</th><th>Cantidad trabajadores</th><th>Frecuencia relativa</th></tr>
            <tr><td>[0, 3[</td><td>15</td><td>Q</td></tr>
            <tr><td>[3, 6[</td><td>5</td><td>0,2</td></tr>
            <tr><td>[6, 9[</td><td>P</td><td>0,12</td></tr>
            <tr><td>[9, 12]</td><td>2</td><td>R</td></tr>
        </table>
        <p>Según los datos de la tabla, ¿cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p>
        <p>I) Hubo un total de 25 ausencias durante ese año.</p>
        <p>II) Un 60% de los trabajadores se ausentó menos de 3 días ese año.</p>
        <p>III) 20 trabajadores faltaron menos de 6 días a su trabajo ese año.</p>`,
        opciones: ['Solo I', 'Solo II', 'Solo III', 'Solo I y II', 'Solo II y III'],
        correcta: 4
    },
    {
        pregunta: `<p>En una muestra de trabajadores de una empresa, se tiene la siguiente distribución de cargas familiares:</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Cargas familiares</th><th>Trabajadores</th></tr>
            <tr><td>0</td><td>6</td></tr>
            <tr><td>1</td><td>9</td></tr>
            <tr><td>2</td><td>12</td></tr>
            <tr><td>3</td><td>7</td></tr>
            <tr><td>4</td><td>4</td></tr>
            <tr><td>5</td><td>2</td></tr>
        </table>
        <p>La media, la mediana y la moda son, respectivamente:</p>`,
        opciones: ['2, 2 y 2', '3, 2 y 2', '3, 3 y 2', '2, 3 y 3'],
        correcta: 0
    },
    {
        pregunta: `La mediana de las edades de un número impar de personas es igual a 25. ¿Cuál de las siguientes afirmaciones es siempre verdadera?`,
        opciones: [
            'La cantidad de datos mayores a 25 es igual a la cantidad de datos menores a 25.',
            'La media es igual a 25.',
            'La moda es igual a 25.',
            'En el grupo por lo menos hay una persona que tiene 25 años.'
        ],
        correcta: 3
    },
    {
        pregunta: `La media aritmética entre (x² + 2), (x² – 4), x² y (x² – 2), con x > 0, es 0. El valor de x es:`,
        opciones: ['0', '1', '2', '3'],
        correcta: 1
    },
    {
        pregunta: `<p>En la tabla adjunta se muestra la distribución de frecuencias de las notas obtenidas por un curso de 34 alumnos.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Nota</th><th>Frecuencia</th></tr>
            <tr><td>[2, 3[</td><td>6</td></tr>
            <tr><td>[3, 4[</td><td>12</td></tr>
            <tr><td>[4, 5[</td><td>9</td></tr>
            <tr><td>[5, 6[</td><td>5</td></tr>
            <tr><td>[6, 7[</td><td>2</td></tr>
        </table>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p>
        <p>I) El percentil 10 de las notas pertenece al intervalo [2, 3[.</p>
        <p>II) La mediana se encuentra en el intervalo modal.</p>
        <p>III) Al menos un alumno obtuvo nota 7.</p>`,
        opciones: ['Solo I', 'Solo I y II', 'Solo I y III', 'Solo II y III'],
        correcta: 1
    },
    {
        pregunta: `<p>Según los datos de la tabla adjunta, ¿cuál de las siguientes proposiciones es FALSA?</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Intervalo</th><th>Frecuencia</th></tr>
            <tr><td>[0 – 30[</td><td>150</td></tr>
            <tr><td>[30 – 60[</td><td>200</td></tr>
            <tr><td>[60 – 90[</td><td>250</td></tr>
            <tr><td>[90 – 120[</td><td>300</td></tr>
            <tr><td>[120 – 150[</td><td>100</td></tr>
        </table>`,
        opciones: [
            'Al 35% de la muestra se le asocia un valor menor a 60.',
            'El primer cuartil se encuentra en el intervalo [30 – 60[.',
            'El percentil 95 se encuentra en el intervalo [90 – 120[.',
            '[90 – 120[ es el intervalo modal.'
        ],
        correcta: 2
    },
    {
        pregunta: `<p>Se tiene la siguiente tabla con datos de un curso.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Estatura (m)</th><th>Curso A</th><th>Curso B</th></tr>
            <tr><td>[1,48 – 1,54[</td><td>3</td><td>4</td></tr>
            <tr><td>[1,54 – 1,60[</td><td>6</td><td>6</td></tr>
            <tr><td>[1,60 – 1,66[</td><td>15</td><td>18</td></tr>
            <tr><td>[1,66 – 1,72[</td><td>6</td><td>2</td></tr>
        </table>
        <p>A partir de los datos de la tabla anterior, ¿en cuál intervalo se encuentra el cuartil 1 para el Curso B?</p>`,
        opciones: ['[1,48 - 1,54[', '[1,54 - 1,60[', '[1,60 - 1,66[', '[1,66 - 1,72['],
        correcta: 2
    },
    {
        pregunta: `Dado el siguiente conjunto de datos: 2 ; 5 ; 9 ; 3 ; 13 ; 10 ; 11 ; 6 ; 7. ¿Cuál es el valor del tercer cuartil?`,
        opciones: ['5', '9', '10,5', '11'],
        correcta: 2
    },
    {
        pregunta: `¿Cuál de las siguientes afirmaciones es verdadera?`,
        opciones: [
            'El tercer cuartil es equivalente al noveno percentil.',
            'La media es equivalente al segundo cuartil.',
            'El tercer cuartil es equivalente al percentil setenta y cinco.',
            'El percentil veinte es equivalente a amplificar por dos el percentil 10.'
        ],
        correcta: 2
    },
    {
        pregunta: `Si se tienen 30 datos negativos distintos, ¿Cuál de las siguientes medidas será positiva?`,
        opciones: ['Media', 'Percentil 45', 'Tercer cuartil', 'Ninguna de las anteriores'],
        correcta: 3
    },
    {
        pregunta: `<p>Los datos {22, 22, 17, 15, 16, 19, 17, 19, 15, 16, 18, 18, 15, 20, 19, 16} se representan en el diagrama de cajón adjunto.</p>
        <p style="text-align:center;"><img src="https://i.ibb.co/RG2ZPKxh/ME11-M1-P24.jpg" alt="Pregunta 24" style="max-width: 350px; height: auto;"></p>
        <p>¿Cuál es el valor de x?</p>`,
        opciones: ['18', '19', '19,5', '20'],
        correcta: 1
    },
    {
        pregunta: `<p>Las estaturas en cm de un grupo de niños de un curso en un jardín infantil se muestran en la tabla adjunta.</p>
        <table border="1" style="margin: 10px auto; text-align:center;">
            <tr><th>Estatura</th><th>Frecuencia</th></tr>
            <tr><td>80 – 90</td><td>4</td></tr>
            <tr><td>91 – 100</td><td>8</td></tr>
            <tr><td>101 – 110</td><td>6</td></tr>
            <tr><td>111 – 120</td><td>2</td></tr>
        </table>
        <p>¿Cuál de las siguientes afirmaciones es verdadera?</p>`,
        opciones: [
            'El primer cuartil está en el primer intervalo.',
            'El tercer cuartil está en el tercer intervalo.',
            'El percentil 65 está en el segundo intervalo.',
            'El percentil 80 está en el cuarto intervalo.'
        ],
        correcta: 1
    },
    {
        pregunta: `Se consideran los cuadrados de los números del 1 al 11. Entonces, los valores de los cuartiles 1, 2 y 3 son respectivamente:`,
        opciones: ['5, 6 y 7', '3, 6 y 9', '9, 36 y 121', '9, 36 y 81'],
        correcta: 3
    },
    {
        pregunta: `<p>El diagrama de cajón y bigote de la figura adjunta muestra la distribución de las masas corporales en kilogramos de todos los alumnos del 4°A del colegio Antípodas.</p>
        <p style="text-align:center;"><img src="https://i.ibb.co/ycThkK8P/ME11-M1-P27.jpg" alt="Pregunta 27" style="max-width: 350px; height: auto;"></p>
        <p>¿Cuál(es) de las siguientes afirmaciones es (son) siempre verdadera(s)?</p>
        <p>I) El 50% de los estudiantes tiene a lo menos una masa de 64 kg.</p>
        <p>II) El rango intercuartil de las masas corporales de los alumnos es 11 kg.</p>
        <p>III) En el intervalo [72, 93] hay más alumnos que en el intervalo [58, 61].</p>`,
        opciones: ['Solo I', 'Solo II', 'Solo I y II', 'Solo II y III'],
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