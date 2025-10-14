// Body parts information
const bodyInfo = {
    head: {
        title: "Efectos del Estres en la Cabeza y Cerebro",
        effects: [
            "Dolor de cabeza tensional: El estres causa tension muscular en el cuello y hombros que se irradia a la cabeza, provocando dolores de cabeza frecuentes y migrañas",
            "Ansiedad y depresion: El estres cronico puede descontrolar la respuesta natural del cuerpo, alterando los neurotransmisores y llevando a trastornos de ansiedad y depresion",
            "Problemas de sueño: El estres puede provocar insomnio cronico o un sueño interrumpido, dificultando el descanso adecuado y la recuperacion mental",
            "Fatiga mental: La tension constante y el desgaste emocional causan agotamiento cognitivo, dificultad para concentrarse y perdida de memoria a corto plazo",
            "Dificultad para concentrarse: El exceso de cortisol afecta la capacidad de enfoque y toma de decisiones"
        ],
        strategies: [
            "Respiracion 4-7-8: Inhala por 4 segundos, reten 7, exhala 8. Usala para calmar el sistema nervioso.",
            "Desconexion digital: Evita pantallas 60 minutos antes de dormir para mejorar la higiene del sueño.",
            "Tecnica Pomodoro: Divide el estudio en bloques de 25 minutos con descansos cortos para mantener el enfoque."
        ]
    },
    eyes: {
        title: "Efectos del Estres en los Ojos",
        effects: [
            "Tension ocular: El estres puede causar fatiga visual y tension en los musculos alrededor de los ojos.",
            "Tics nerviosos: El estres puede provocar espasmos involuntarios en los parpados.",
            "Vision borrosa: El estres cronico puede afectar temporalmente la claridad visual.",
            "Sequedad ocular: El estres reduce la produccion de lagrimas.",
            "Sensibilidad a la luz: El aumento de la tension puede hacer que los ojos sean mas sensibles a la luz brillante"
        ],
        strategies: [
            "Regla 20-20-20: Cada 20 minutos, mira algo a 20 pies (6 metros) de distancia por 20 segundos.",
            "Compresas frias: Aplica compresas frias en los ojos cerrados durante 5 minutos para aliviar la tension ocular.",
            "Reducir cafeina: Limita el consumo de cafeina para disminuir los tics nerviosos."
        ]
    },
    skin: {
        title: "Efectos del Estres en la Piel",
        effects: [
            "Dermatitis y picazon: El estres afecta la funcion de barrera cutanea.",
            "Aparicion de erupciones: El estres puede llevar a la aparicion de manchas rojas.",
            "Piel seca e irritada: Bajo estres, la piel pierde su capacidad para retener agua adecuadamente.",
            "Agravamiento del acne: El estres aumenta la produccion de cortisol.",
            "Envejecimiento prematuro: El estres cronico acelera la degradacion del colageno.",
            "Psoriasis y eczema: El estres puede desencadenar o empeorar significativamente condiciones preexistentes."
        ],
        strategies: [
            "Hidratacion y rutina constante: Manten una rutina de limpieza e hidratacion para reforzar la barrera cutanea.",
            "Evitar tocar la piel: Minimiza el contacto de las manos con el rostro para prevenir la propagacion de bacterias y brotes.",
            "Dieta antiinflamatoria: Aumenta el consumo de omega-3 y reduce el azucar refinado."
        ]
    },
    torso: {
        title: "Efectos del Estres en el Torso y Sistema Inmune",
        effects: [
            "Sistema cardiovascular comprometido: El estres cronico eleva la presion arterial.",
            "Sistema inmune debilitado: El exceso de cortisol suprime la respuesta inmune.",
            "Problemas respiratorios: El estres puede causar respiracion rapida, superficial e hiperventilacion.",
            "Tension muscular cronica: El estres prolongado causa rigidez, dolor persistente en la espalda.",
            "Dolor toracico: La ansiedad y el estres pueden causar opresion en el pecho."
        ],
        strategies: [
            "Ejercicio aerobico diario: Una caminata rapida o jogging liberan la tension acumulada en el torso.",
            "Postura consciente: Revisa tu postura al estudiar para aliviar la tension en la espalda y el pecho.",
            "Alimentos ricos en Vitamina C: Refuerza tu sistema inmune con citricos, kiwi o pimientos."
        ]
    },
    heart: {
        title: "Efectos del Estres en el Corazon",
        effects: [
            "Hipertension arterial: El estres hace que el corazon trabaje mas fuerte y rapido.",
            "Mayor riesgo de infartos: El estres cronico aumenta significativamente el riesgo de ataques cardiacos.",
            "Palpitaciones y arritmias: El estres puede causar latidos cardiacos irregulares.",
            "Inflamacion cardiovascular: El estres prolongado causa inflamacion cronica.",
            "Aumento del colesterol: El estres puede elevar los niveles de colesterol malo (LDL).",
            "Sindrome del corazon roto: El estres extremo puede causar cardiomiopatia de takotsubo."
        ],
        strategies: [
            "Chequeo medico regular: Si sientes palpitaciones constantes, consulta a un profesional.",
            "Tecnicas de relajacion profunda: Usa meditacion para reducir la frecuencia cardiaca y la presion arterial.",
            "Limita el alcohol y la cafeina: Estas sustancias pueden exacerbar las palpitaciones inducidas por el estres."
        ]
    },
    stomach: {
        title: "Efectos del Estres en el Sistema Digestivo y Estomago",
        effects: [
            "Gastritis y ulceras: El estres aumenta la produccion de acido gastrico.",
            "Sindrome del intestino irritable: El estres puede desencadenar o empeorar significativamente esta condicion.",
            "Nauseas y vomitos: El estres puede provocar nauseas constantes.",
            "Acidez y reflujo: El estres aumenta el reflujo gastroesofagico.",
            "Cambios en el apetito: El estres puede causar perdida completa de apetito.",
            "Dolor abdominal cronico: El estres causa calambres, dolor y molestias abdominales constantes.",
            "Problemas de absorcion: El estres puede afectar la capacidad del intestino para absorber nutrientes adecuadamente"
        ],
        strategies: [
            "Comer despacio y consciente: Mastica bien los alimentos y evita comer mientras estudias o trabajas.",
            "Evitar triggers: Identifica y reduce los alimentos picantes, grasosos o con mucha cafeina que irritan tu estomago.",
            "Probioticos: Incorpora yogur, kefir o suplementos para mejorar la salud de tu microbiota intestinal."
        ]
    },
    left_arm: {
        title: "Efectos del Estres en los Brazos y Extremidades Superiores",
        effects: [
            "Tension muscular severa: El estres causa rigidez, dolor y contracturas en los musculos de los brazos.",
            "Temblores involuntarios: El estres puede provocar temblores visibles en las manos y brazos.",
            "Debilidad muscular: La fatiga relacionada con el estres puede causar sensacion de debilidad.",
            "Entumecimiento y hormigueo: El estres puede causar sensaciones de hormigueo.",
            "Dolor articular: El estres puede exacerbar el dolor en las articulaciones de hombros, codos y muñecas"
        ],
        strategies: [
            "Estiramientos de muñeca y hombros: Realiza estiramientos suaves cada hora si usas el ordenador.",
            "Ejercicio de fortalecimiento ligero: Usa pesas ligeras o bandas de resistencia para liberar la tension muscular.",
            "Masaje de manos: Un masaje simple en las manos puede aliviar los temblores nerviosos."
        ]
    },
    right_arm: {
        title: "Efectos del Estres en los Brazos y Extremidades Superiores",
        effects: [
            "Tension muscular severa: El estres causa rigidez, dolor y contracturas en los musculos de los brazos.",
            "Temblores involuntarios: El estres puede provocar temblores visibles en las manos y brazos.",
            "Debilidad muscular: La fatiga relacionada con el estres puede causar sensacion de debilidad.",
            "Entumecimiento y hormigueo: El estres puede causar sensaciones de hormigueo.",
            "Dolor articular: El estres puede exacerbar el dolor en las articulaciones de hombros, codos y muñecas"
        ],
        strategies: [
            "Estiramientos de muñeca y hombros: Realiza estiramientos suaves cada hora si usas el ordenador.",
            "Ejercicio de fortalecimiento ligero: Usa pesas ligeras o bandas de resistencia para liberar la tension muscular.",
            "Masaje de manos: Un masaje simple en las manos puede aliviar los temblores nerviosos."
        ]
    },
    left_leg: {
        title: "Efectos del Estres en las Piernas y Extremidades Inferiores",
        effects: [
            "Tension y calambres musculares: El estres puede causar rigidez, calambres dolorosos.",
            "Sindrome de piernas inquietas: El estres puede desencadenar o empeorar esta condicion.",
            "Debilidad y fatiga: El estres prolongado causa sensacion constante de pesadez.",
            "Problemas circulatorios: El estres puede afectar la circulacion sanguinea en las piernas.",
            "Dolor articular: El estres puede intensificar el dolor en rodillas, tobillos y caderas"
        ],
        strategies: [
            "Paseos cortos: Levantate y camina 5 minutos cada hora para mejorar la circulacion y reducir la rigidez.",
            "Estiramiento de pantorrillas: Realiza estiramientos antes de dormir para prevenir calambres nocturnos.",
            "Medias de compresion: Considera usarlas si experimentas hinchazon o problemas circulatorios por el estres."
        ]
    },
    right_leg: {
        title: "Efectos del Estres en las Piernas y Extremidades Inferiores",
        effects: [
            "Tension y calambres musculares: El estres puede causar rigidez, calambres dolorosos.",
            "Sindrome de piernas inquietas: El estres puede desencadenar o empeorar esta condicion.",
            "Debilidad muscular: La fatiga relacionada con el estres puede causar sensacion de debilidad.",
            "Problemas circulatorios: El estres puede afectar la circulacion sanguinea en las piernas.",
            "Dolor articular: El estres puede intensificar el dolor en rodillas, tobillos y caderas"
        ],
        strategies: [
            "Paseos cortos: Levantate y camina 5 minutos cada hora para mejorar la circulacion y reducir la rigidez.",
            "Estiramiento de pantorrillas: Realiza estiramientos antes de dormir para prevenir calambres nocturnos.",
            "Medias de compresion: Considera usarlas si experimentas hinchazon o problemas circulatorios por el estres."
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
    
    const strategyLink = ' Consulta las estrategias completas de autocuidado en la seccion inferior.';

    if (totalScore <= 13) {
        level = "Nivel de Estres: BAJO";
        message = "Excelente! Manejas bien el estres. Continua con tus habitos saludables y mantente informado explorando la relacion entre estres y cuerpo.";
    } else if (totalScore <= 26) {
        level = "Nivel de Estres: MODERADO";
        message = "Tu nivel de estres es manejable pero requiere atencion. Es momento de aplicar autocuidado. " + strategyLink;
    } else {
        level = "Nivel de Estres: ALTO";
        message = "Tu nivel de estres es alto y puede afectar tu salud y rendimiento. Es importante que busques apoyo profesional. Mientras tanto, empieza por aplicar los metodos de afrontamiento: " + strategyLink + " y no dudes en contactar al servicio de consejeria de tu universidad.";
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