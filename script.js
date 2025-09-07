// Obtenemos el botón y el contenedor de resultados
const calculateBtn = document.getElementById('calculateBtn');
const distanceInput = document.getElementById('distance');
const unitSelect = document.getElementById('unit-select');
const resultContainer = document.getElementById('result');
const moaResult = document.getElementById('moa-result');
const milResult = document.getElementById('mil-result');

// Función para mostrar mensajes
function customAlert(message) {
    moaResult.innerHTML = `<span>${message}</span>`;
    milResult.textContent = '';
    resultContainer.style.display = 'block';
}

// Lógica de cálculo al hacer clic en el botón
calculateBtn.addEventListener('click', () => {
    const distance = parseFloat(distanceInput.value);
    const unit = unitSelect.value;

    if (isNaN(distance) || distance <= 0) {
        customAlert('Por favor, introduce una distancia válida y positiva.');
        return;
    }

    let distanceInMeters;

    // Convertir la distancia a metros si la unidad es yardas
    if (unit === 'yards') {
        distanceInMeters = distance * 0.9144; // 1 yarda = 0.9144 metros
    } else {
        distanceInMeters = distance;
    }

    // Factores de conversión
    const moaCmPer100m = 2.9089;
    const milCmPer100m = 10;
    
    // Calculamos el valor de 1 MOA y 1 Mil a la distancia dada en centímetros
    const moaValueCm = (distanceInMeters * moaCmPer100m) / 100;
    const milValueCm = (distanceInMeters * milCmPer100m) / 100;

    // Convertimos a pulgadas para una segunda unidad
    const moaValueInches = moaValueCm * 0.393701;
    const milValueInches = milValueCm * 0.393701;

    // Mostramos los resultados
    moaResult.innerHTML = `1 MOA = <span>${moaValueCm.toFixed(2)} cm</span> o <span>${moaValueInches.toFixed(2)} pulgadas</span>`;
    milResult.innerHTML = `1 Mil = <span>${milValueCm.toFixed(2)} cm</span> o <span>${milValueInches.toFixed(2)} pulgadas</span>`;
    resultContainer.style.display = 'block';
});