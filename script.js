// Obtenemos el botón y el contenedor de resultados
const calculateBtn = document.getElementById('calculateBtn');
const distanceInput = document.getElementById('distance');
const resultContainer = document.getElementById('result');
const moaResult = document.getElementById('moa-result');
const milResult = document.getElementById('mil-result');

// Función para mostrar mensajes
function customAlert(message) {
    moaResult.textContent = message;
    milResult.textContent = '';
    resultContainer.style.display = 'block';
}

// Lógica de cálculo al hacer clic en el botón
calculateBtn.addEventListener('click', () => {
    const distance = parseFloat(distanceInput.value);

    if (isNaN(distance) || distance <= 0) {
        customAlert('Por favor, introduce una distancia válida y positiva.');
        return;
    }

    // Factores de conversión
    const moaCmPer100m = 2.9089;
    const milCmPer100m = 10;
    
    // Calculamos el valor de 1 MOA y 1 Mil a la distancia dada
    const moaValue = (distance * moaCmPer100m) / 100;
    const milValue = (distance * milCmPer100m) / 100;

    // Mostramos los resultados
    moaResult.innerHTML = `1 MOA = <span>${moaValue.toFixed(2)} cm</span>`;
    milResult.innerHTML = `1 Mil = <span>${milValue.toFixed(2)} cm</span>`;
    resultContainer.style.display = 'block';
});
