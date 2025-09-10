
class Contador {
  constructor(root) {
    this.homens = 0;
    this.mulheres = 0;

    this.root = root;
    this.build();
    this.updateUI();
  }

  get total() {
    return this.homens + this.mulheres;
  }


  build() {
    const card = document.createElement('div');
    card.className = 'counter-card';


    const refreshBtn = document.createElement('button');
    refreshBtn.className = 'refresh-btn';
    refreshBtn.title = 'Zerar contagem';
    refreshBtn.innerHTML = '&#x21bb;';
    refreshBtn.addEventListener('click', () => this.resetar());
    card.appendChild(refreshBtn);


    const title = document.createElement('div');
    title.className = 'header-title';
    title.textContent = 'Total';
    card.appendChild(title);

    const totalDisplay = document.createElement('div');
    totalDisplay.className = 'total-display';

    this.totalValue = document.createElement('div');
    this.totalValue.className = 'total-value';
    this.totalValue.textContent = '0';

    totalDisplay.appendChild(this.totalValue);
    card.appendChild(totalDisplay);


    const row = document.createElement('div');
    row.className = 'people-row';


    const personH = document.createElement('div');
    personH.className = 'person';

    const avatarH = document.createElement('div');
    avatarH.className = 'avatar';
    const imgH = document.createElement('img');
    imgH.src = 'https://cdn-icons-png.flaticon.com/512/1154/1154473.png';
    imgH.alt = 'Homens';
    avatarH.appendChild(imgH);
    personH.appendChild(avatarH);

    const controlsH = document.createElement('div');
    controlsH.className = 'controls';

    const plusH = document.createElement('button');
    plusH.className = 'circle-btn btn-plus';
    plusH.textContent = '+';
    plusH.addEventListener('click', () => { this.homens++; this.updateUI(); });

    const minusH = document.createElement('button');
    minusH.className = 'circle-btn btn-minus';
    minusH.textContent = '−';
    minusH.addEventListener('click', () => { if (this.homens > 0) this.homens--; this.updateUI(); });

    controlsH.appendChild(plusH);
    controlsH.appendChild(minusH);
    personH.appendChild(controlsH);

    const labelH = document.createElement('div');
    labelH.className = 'person-label';
    labelH.textContent = 'Homens';
    personH.appendChild(labelH);

    this.homensValue = document.createElement('div');
    this.homensValue.className = 'individual-value';
    this.homensValue.textContent = '0';
    personH.appendChild(this.homensValue);


    const personM = document.createElement('div');
    personM.className = 'person';

    const avatarM = document.createElement('div');
    avatarM.className = 'avatar';
    const imgM = document.createElement('img');
    imgM.src = 'https://cdn-icons-png.flaticon.com/512/1154/1154478.png';
    imgM.alt = 'Mulheres';
    avatarM.appendChild(imgM);
    personM.appendChild(avatarM);

    const controlsM = document.createElement('div');
    controlsM.className = 'controls';

    const plusM = document.createElement('button');
    plusM.className = 'circle-btn btn-plus';
    plusM.textContent = '+';
    plusM.addEventListener('click', () => { this.mulheres++; this.updateUI(); });

    const minusM = document.createElement('button');
    minusM.className = 'circle-btn btn-minus';
    minusM.textContent = '−';
    minusM.addEventListener('click', () => { if (this.mulheres > 0) this.mulheres--; this.updateUI(); });

    controlsM.appendChild(plusM);
    controlsM.appendChild(minusM);
    personM.appendChild(controlsM);

    const labelM = document.createElement('div');
    labelM.className = 'person-label';
    labelM.textContent = 'Mulheres';
    personM.appendChild(labelM);

    this.mulheresValue = document.createElement('div');
    this.mulheresValue.className = 'individual-value';
    this.mulheresValue.textContent = '0';
    personM.appendChild(this.mulheresValue);


    row.appendChild(personH);
    row.appendChild(personM);
    card.appendChild(row);

    this.root.appendChild(card);
  }


  updateUI() {
    this.totalValue.textContent = String(this.total);
    this.homensValue.textContent = String(this.homens);
    this.mulheresValue.textContent = String(this.mulheres);
  }


  resetar() {
    this.homens = 0;
    this.mulheres = 0;
    this.updateUI();
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  new Contador(app);
});
