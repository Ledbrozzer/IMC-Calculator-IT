const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';
    value.classList.add('attention');

    if (bmi < 18.5) {
        description = 'Abaixo do peso ideal!'
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Dentro do peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <= 30) {
        description = 'Acima do peso ideal(sobrepeso)';
    } else if (bmi > 30 && bmi <= 35) {
        description = 'Obesidade moderada!';
    } else if (bmi > 35 && bmi <= 40) {
        description = 'Obesidade severa!';
    } else {
        description = 'Atenção, você está classificado com grau de obesidade morbida!';
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('infos').classList.remove('hidden');
});

// add: "step="0.01" " -> no html, dps do " input type="" " => p/ conseguir por 1,90m ou 84,4 kg(numero com ,{decimal} (as vezes o type="number" -> n deixa por ",")) => um cara no video do yt comentou e ajudou com esse problema...