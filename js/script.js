document.addEventListener('DOMContentLoaded', () => {
  const partsInfo = {
    head: { title: 'Cerebro — Cabeza', points: ['Dificultad para concentrarse y memoria afectada.', 'Aumento de ansiedad, pensamientos rumiantes y dificultad para dormir.'] },
    torso: { title: 'Tronco', points: ['Respiración superficial y sensación de tensión.', 'Fatiga y cambios en la energía.'] },
    left_arm: { title: 'Brazo izquierdo', points: ['Tensión muscular localizada.', 'Cansancio por posturas prolongadas.'] },
    right_arm: { title: 'Brazo derecho', points: ['Molestias y rigidez bajo estrés.', 'Fatiga física acumulada.'] },
    left_leg: { title: 'Pierna izquierda', points: ['Sensación de pesadez y calambres.', 'Menor motivación para moverse.'] },
    right_leg: { title: 'Pierna derecha', points: ['Fatiga muscular y molestias articulares.', 'Recuperación lenta tras esfuerzo.'] },
    heart: { title: 'Corazón', points: ['Palpitaciones y ritmo acelerado.', 'Sensación de presión en el pecho.'] },
    stomach: { title: 'Estómago', points: ['Molestias digestivas y acidez.', 'Cambios en el apetito o digestión.'] },
  };

  const infoTitle = document.getElementById('info-title');
  const infoList = document.getElementById('info-list');
  const svgRoot = document.getElementById('humanAnatomy');
  const parts = svgRoot.querySelectorAll('.part');

  function showPartInfo(id) {
    const info = partsInfo[id];
    if (!info) return;
    infoTitle.textContent = info.title;
    infoList.innerHTML = '';
    info.points.forEach(p => {
      const li = document.createElement('li');
      li.textContent = p;
      infoList.appendChild(li);
    });
    parts.forEach(el => el.classList.toggle('selected', el.id === id));
    infoList.style.animation = 'fadeIn 0.6s ease';
  }

  parts.forEach(p => {
    p.setAttribute('tabindex', 0);
    p.addEventListener('click', () => showPartInfo(p.id));
    p.addEventListener('keydown', e => {
      if (['Enter', ' '].includes(e.key)) { e.preventDefault(); showPartInfo(p.id); }
    });
  });
  showPartInfo('head');

  // --- Test de estrés ---
  const qs = document.querySelector('.questions');
  const btnCalc = document.getElementById('calculate-btn');
  const btnReset = document.getElementById('reset-btn');
  const result = document.getElementById('result');

  const questions = [
    'Me siento nervioso/a o tenso/a.',
    'Tengo dificultades para dormir.',
    'Me cuesta concentrarme.',
    'Siento que me agobian las tareas.',
    'Estoy irritable o de mal humor.',
    'No logro relajarme fácilmente.',
    'Me preocupo por cosas pequeñas.',
    'Siento fatiga frecuente.',
    'He notado cambios en mi apetito.',
    'Mis pensamientos no se detienen.'
  ];
  const options = ['Nunca', 'Rara vez', 'A veces', 'Frecuentemente', 'Casi siempre'];

  questions.forEach((q, i) => {
    const li = document.createElement('li');
    li.className = 'question';
    li.innerHTML = `<div class="q-text">${i + 1}. ${q}</div>`;
    const div = document.createElement('div');
    div.className = 'options';
    options.forEach((opt, idx) => {
      const label = document.createElement('label');
      label.className = 'option';
      label.innerHTML = `<input type="radio" name="q${i}" value="${idx + 1}"><span>${opt}</span>`;
      label.addEventListener('click', () => {
        div.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
        label.classList.add('selected');
      });
      div.appendChild(label);
    });
    li.appendChild(div);
    qs.appendChild(li);
  });

  btnCalc.addEventListener('click', () => {
    let total = 0;
    for (let i = 0; i < questions.length; i++) {
      const val = document.querySelector(`input[name="q${i}"]:checked`);
      if (!val) { result.textContent = `Por favor responde la pregunta ${i + 1}.`; result.classList.remove('hidden'); return; }
      total += Number(val.value);
    }
    let level = '', msg = '';
    if (total <= 20) { level = 'Nivel Bajo'; msg = 'Estrés leve. Mantén tus hábitos saludables.'; }
    else if (total <= 35) { level = 'Nivel Moderado'; msg = 'Estrés moderado. Prueba técnicas de relajación.'; }
    else { level = 'Nivel Alto'; msg = 'Estrés alto. Considera apoyo profesional.'; }
    result.innerHTML = `<strong>${level}</strong><br>${msg}<br><small>${total} puntos</small>`;
    result.classList.remove('hidden');
    result.style.animation = 'bounceIn 0.7s ease';
  });

  btnReset.addEventListener('click', () => {
    result.classList.add('hidden');
    document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
  });
});
