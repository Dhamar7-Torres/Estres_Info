// Body parts information
const bodyInfo = {
    head: {
        title: "Efectos del Estrés en la Cabeza y Cerebro",
        effects: [
            "Dolor de cabeza tensional: El estrés causa tensión muscular en el cuello y hombros que se irradia a la cabeza, provocando dolores de cabeza frecuentes y migrañas",
            "Ansiedad y depresión: El estrés crónico puede descontrolar la respuesta natural del cuerpo, alterando los neurotransmisores y llevando a trastornos de ansiedad y depresión",
            "Problemas de sueño: El estrés puede provocar insomnio crónico o un sueño interrumpido, dificultando el descanso adecuado y la recuperación mental",
            "Fatiga mental: La tensión constante y el desgaste emocional causan agotamiento cognitivo, dificultad para concentrarse y pérdida de memoria a corto plazo",
            "Dificultad para concentrarse: El exceso de cortisol afecta la capacidad de enfoque y toma de decisiones"
        ],
        strategies: [
            "Respiración 4-7-8: Inhala por 4 segundos, retén 7, exhala 8. Usala para calmar el sistema nervioso.",
            "Desconexión digital: Evita pantallas 60 minutos antes de dormir para mejorar la higiene del sueño.",
            "Técnica Pomodoro: Divide el estudio en bloques de 25 minutos con descansos cortos para mantener el enfoque."
        ]
    },
    eyes: {
        title: "Efectos del Estrés en los Ojos",
        effects: [
            "Tensión ocular: El estrés puede causar fatiga visual y tensión en los musculos alrededor de los ojos.",
            "Tics nerviosos: El estrés puede provocar espasmos involuntarios en los parpados.",
            "Visión borrosa: El estrés crónico puede afectar temporalmente la claridad visual.",
            "Sequedad ocular: El estrés reduce la producción de lagrimas.",
            "Sensibilidad a la luz: El aumento de la tensión puede hacer que los ojos sean mas sensibles a la luz brillante"
        ],
        strategies: [
            "Regla 20-20-20: Cada 20 minutos, mira algo a 6 metros de distancia por 20 segundos.",
            "Compresas frias: Aplica compresas frías en los ojos cerrados durante 5 minutos para aliviar la tensión ocular.",
            "Reducir cafeina: Limita el consumo de cafeína para disminuir los tics nerviosos."
        ]
    },
    skin: {
        title: "Efectos del Estrés en la Piel",
        effects: [
            "Dermatitis y picazón: El estrés afecta la función de barrera cutánea.",
            "Aparición de erupciones: El estrés puede llevar a la aparición de manchas rojas.",
            "Piel seca e irritada: Bajo estrés, la piel pierde su capacidad para retener agua adecuadamente.",
            "Agravamiento del acne: El estrés aumenta la producción de cortisol.",
            "Envejecimiento prematuro: El estrés crónico acelera la degradación del colageno.",
            "Psoriasis y eczema: El estrés puede desencadenar o empeorar significativamente condiciones preexistentes."
        ],
        strategies: [
            "Hidratación y rutina constante: Manten una rutina de limpieza e hidratación para reforzar la barrera cutánea.",
            "Evitar tocar la piel: Minimiza el contacto de las manos con el rostro para prevenir la propagación de bacterias y brotes.",
            "Dieta antiinflamatoria: Aumenta el consumo de omega-3 y reduce el azúcar refinado."
        ]
    },
    torso: {
        title: "Efectos del Estrés en el Torso y Sistema Inmune",
        effects: [
            "Sistema cardiovascular comprometido: El estrés crónico eleva la presión arterial.",
            "Sistema inmune debilitado: El exceso de cortisol suprime la respuesta inmune.",
            "Problemas respiratorios: El estrés puede causar respiración rápida, superficial e hiperventilación.",
            "Tensión muscular crónica: El estrés prolongado causa rigidez, dolor persistente en la espalda.",
            "Dolor torácico: La ansiedad y el estrés pueden causar opresión en el pecho."
        ],
        strategies: [
            "Ejercicio aeróbico diario: Una caminata rápida o jogging liberan la tensión acumulada en el torso.",
            "Postura consciente: Revisa tu postura al estudiar para aliviar la tensión en la espalda y el pecho.",
            "Alimentos ricos en Vitamina C: Refuerza tu sistema inmune con cítricos, kiwi o pimientos."
        ]
    },
    heart: {
        title: "Efectos del Estrés en el Corazón",
        effects: [
            "Hipertensión arterial: El estrés hace que el corazón trabaje mas fuerte y rápido.",
            "Mayor riesgo de infartos: El estrés crónico aumenta significativamente el riesgo de ataques cardíacos.",
            "Palpitaciones y arritmias: El estrés puede causar latidos cardíacos irregulares.",
            "Inflamación cardiovascular: El estrés prolongado causa inflamación crónica.",
            "Aumento del colesterol: El estrés puede elevar los niveles de colesterol malo (LDL).",
            "Síndrome del corazón roto: El estrés extremo puede causar cardiomiopatía de takotsubo."
        ],
        strategies: [
            "Chequeo medico regular: Si sientes palpitaciones constantes, consulta a un profesional.",
            "Técnicas de relajación profunda: Usa meditación para reducir la frecuencia cardíaca y la presión arterial.",
            "Limita el alcohol y la cafeína: Estas sustancias pueden exacerbar las palpitaciones inducidas por el estrés."
        ]
    },
    stomach: {
        title: "Efectos del Estrés en el Sistema Digestivo y Estémago",
        effects: [
            "Gastritis y úlceras: El estrés aumenta la producción de ácido gástrico.",
            "Síndrome del intestino irritable: El estrés puede desencadenar o empeorar significativamente esta condición.",
            "Náuseas y vómitos: El estrés puede provocar náuseas constantes.",
            "Acidez y reflujo: El estrés aumenta el reflujo gastroesofágico.",
            "Cambios en el apetito: El estrés puede causar pérdida completa de apetito.",
            "Dolor abdominal crónico: El estrés causa calambres, dolor y molestias abdominales constantes.",
            "Problemas de absorción: El estrés puede afectar la capacidad del intestino para absorber nutrientes adecuadamente"
        ],
        strategies: [
            "Comer despacio y consciente: Mastica bien los alimentos y evita comer mientras estudias o trabajas.",
            "Evitar triggers: Identifica y reduce los alimentos picantes, grasosos o con mucha cafeína que irritan tu estomago.",
            "Probioticos: Incorpora yogur, kefir o suplementos para mejorar la salud de tu microbiota intestinal."
        ]
    },
    left_arm: {
        title: "Efectos del Estrés en los Brazos y Extremidades Superiores",
        effects: [
            "Tensión muscular severa: El estrés causa rigidez, dolor y contracturas en los musculos de los brazos.",
            "Temblores involuntarios: El estrés puede provocar temblores visibles en las manos y brazos.",
            "Debilidad muscular: La fatiga relacionada con el estrés puede causar sensación de debilidad.",
            "Entumecimiento y hormigueo: El estrés puede causar sensaciones de hormigueo.",
            "Dolor articular: El estrés puede exacerbar el dolor en las articulaciones de hombros, codos y muñecas"
        ],
        strategies: [
            "Estiramientos de muñeca y hombros: Realiza estiramientos suaves cada hora si usas el ordenador.",
            "Ejercicio de fortalecimiento ligero: Usa pesas ligeras o bandas de resistencia para liberar la tensión muscular.",
            "Masaje de manos: Un masaje simple en las manos puede aliviar los temblores nerviosos."
        ]
    },
    right_arm: {
               title: "Efectos del Estrés en los Brazos y Extremidades Superiores",
        effects: [
            "Tensión muscular severa: El estrés causa rigidez, dolor y contracturas en los musculos de los brazos.",
            "Temblores involuntarios: El estrés puede provocar temblores visibles en las manos y brazos.",
            "Debilidad muscular: La fatiga relacionada con el estrés puede causar sensación de debilidad.",
            "Entumecimiento y hormigueo: El estrés puede causar sensaciones de hormigueo.",
            "Dolor articular: El estrés puede exacerbar el dolor en las articulaciones de hombros, codos y muñecas"
        ],
        strategies: [
            "Estiramientos de muñeca y hombros: Realiza estiramientos suaves cada hora si usas el ordenador.",
            "Ejercicio de fortalecimiento ligero: Usa pesas ligeras o bandas de resistencia para liberar la tensión muscular.",
            "Masaje de manos: Un masaje simple en las manos puede aliviar los temblores nerviosos."
        ]
    },
    left_leg: {
        title: "Efectos del Estrés en las Piernas y Extremidades Inferiores",
        effects: [
            "Tensión y calambres musculares: El estrés puede causar rigidez, calambres dolorosos.",
            "Síndrome de piernas inquietas: El estrés puede desencadenar o empeorar esta condición.",
            "Debilidad y fatiga: El estrés prolongado causa sensación constante de pesadez.",
            "Problemas circulatorios: El estrés puede afectar la circulación sanguínea en las piernas.",
            "Dolor articular: El estrés puede intensificar el dolor en rodillas, tobillos y caderas"
        ],
        strategies: [
            "Paseos cortos: Levántate y camina 5 minutos cada hora para mejorar la circulación y reducir la rigidez.",
            "Estiramiento de pantorrillas: Realiza estiramientos antes de dormir para prevenir calambres nocturnos.",
            "Medias de compresion: Considera usarlas si experimentas hinchazón o problemas circulatorios por el estrés."
        ]
    },
    right_leg: {
        title: "Efectos del Estrés en las Piernas y Extremidades Inferiores",
        effects: [
            "Tensión y calambres musculares: El estrés puede causar rigidez, calambres dolorosos.",
            "Síndrome de piernas inquietas: El estrés puede desencadenar o empeorar esta condición.",
            "Debilidad y fatiga: El estrés prolongado causa sensación constante de pesadez.",
            "Problemas circulatorios: El estrés puede afectar la circulación sanguínea en las piernas.",
            "Dolor articular: El estrés puede intensificar el dolor en rodillas, tobillos y caderas"
        ],
        strategies: [
            "Paseos cortos: Levántate y camina 5 minutos cada hora para mejorar la circulación y reducir la rigidez.",
            "Estiramiento de pantorrillas: Realiza estiramientos antes de dormir para prevenir calambres nocturnos.",
            "Medias de compresion: Considera usarlas si experimentas hinchazón o problemas circulatorios por el estrés."
        ]
    }
};

let currentSelection = 'head';

document.addEventListener('DOMContentLoaded', function() {
    // Inicializacion al cargar la pagina
    const headElement = document.getElementById('head');
    if (headElement) {
        headElement.classList.add('selected');
        updateInfoPanel('head');
    }
    
    // Agregar oyentes de clic a todas las partes del cuerpo
    const bodyParts = document.querySelectorAll('.body-part');
    bodyParts.forEach(part => {
        part.addEventListener('click', function(e) {
            e.stopPropagation();
            selectBodyPart(this.id);
        });
    });

    // Manejar el envio del formulario del test
    const testForm = document.getElementById('stressTest');
    if (testForm) {
        testForm.addEventListener('submit', handleTestSubmit);
    }
});

// Funcion para seleccionar parte del cuerpo
function selectBodyPart(partId) {
    // Quitar seleccion previa
    const previousSelected = document.querySelector('.body-part.selected');
    if (previousSelected) {
        previousSelected.classList.remove('selected');
    }
    
    // Agregar seleccion a la parte actual
    const selectedPart = document.getElementById(partId);
    if (selectedPart) {
        selectedPart.classList.add('selected');
    }
    
    // Actualizar panel de informacion
    updateInfoPanel(partId);
    currentSelection = partId;
}

// Funcion para actualizar el panel de informacion
function updateInfoPanel(partId) {
    const info = bodyInfo[partId];
    if (!info) return;
    
    const titleElement = document.getElementById('infoTitle');
    const listElement = document.getElementById('infoList');
    const strategiesTitleElement = document.getElementById('strategiesTitle');
    const strategiesListElement = document.getElementById('strategiesList');
    
    // Iniciar transicion de opacidad
    const infoContent = document.getElementById('infoContent');
    infoContent.style.opacity = '0';
    
    setTimeout(() => {
        // Actualizar Efectos
        titleElement.textContent = info.title;
        listElement.innerHTML = '';
        info.effects.forEach(effect => {
            const li = document.createElement('li');
            li.textContent = effect;
            listElement.appendChild(li);
        });
        
        // Actualizar Estrategias Rapidas
        strategiesTitleElement.textContent = "Estrategias de Afrontamiento Rapido";
        strategiesListElement.innerHTML = '';
        info.strategies.forEach(strategy => {
            const li = document.createElement('li');
            li.textContent = strategy;
            strategiesListElement.appendChild(li);
        });

        // Finalizar transicion de opacidad
        infoContent.style.opacity = '1';
    }, 150);
}

// Funcion para mostrar/ocultar el test
function toggleTest() {
    const testPanel = document.getElementById('testPanel');
    if (testPanel) {
        testPanel.classList.toggle('active');
    }
}

// Funcion para manejar el envio del test
function handleTestSubmit(e) {
    e.preventDefault();
    
    let totalScore = 0;
    
    // Calcular puntuacion total
    for (let i = 1; i <= 10; i++) {
        const answer = document.querySelector('input[name="q' + i + '"]:checked');
        if (answer) {
            totalScore += parseInt(answer.value);
        } else {
            alert("Por favor, responde todas las preguntas antes de ver los resultados.");
            return; 
        }
    }
    
    // Determinar nivel de estres y mensaje
    let level, message;
    
    const strategyLink = ' Consulta las estrategias completas de autocuidado en la sección inferior.';

    if (totalScore <= 13) {
        level = "Nivel de Estrés: BAJO";
        message = "Excelente! Manejas bien el estrés. Continua con tus hábitos saludables y mantente informado explorando la relación entre estrés y cuerpo.";
    } else if (totalScore <= 26) {
        level = "Nivel de Estrés: MODERADO";
        message = "Tu nivel de estrés es manejable pero requiere atención. Es momento de aplicar autocuidado. " + strategyLink;
    } else {
        level = "Nivel de Estrés: ALTO";
        message = "Tu nivel de estrés es alto y puede afectar tu salud y rendimiento. Es importante que busques apoyo profesional. Mientras tanto, empieza por aplicar los métodos de afrontamiento: " + strategyLink + " y no dudes en contactar al servicio de consejería de tu universidad.";
    }
    
    // Mostrar resultados
    const resultScore = document.getElementById('resultScore');
    const resultLevel = document.getElementById('resultLevel');
    const resultMessage = document.getElementById('resultMessage');
    const resultContainer = document.getElementById('resultContainer');
    
    if (resultScore && resultLevel && resultMessage && resultContainer) {
        resultScore.textContent = totalScore + " / 40 puntos";
        resultLevel.textContent = level;
        resultMessage.innerHTML = message;
        
        // Mostrar el contenedor de resultados
        resultContainer.style.display = 'block';
        
        // Desplazar el scroll al resultado
        setTimeout(() => {
            resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}