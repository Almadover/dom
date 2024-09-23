
const rotator = document.querySelector('.rotator');
const rotatorCases = rotator.querySelectorAll('.rotator__case');
let currentCaseIndex = 0;

function rotateCases() {
    rotatorCases[currentCaseIndex].classList.remove('rotator__case_active');
    currentCaseIndex = (currentCaseIndex + 1) % rotatorCases.length;


    const currentCase = rotatorCases[currentCaseIndex];
    const rotationSpeed = parseInt(currentCase.dataset.speed, 10) || 1000;
    const textColor = currentCase.dataset.color || '#000000';

    rotator.style.color = textColor;

    currentCase.classList.add('rotator__case_active');


    setTimeout(() => {
        rotateCases();
    }, rotationSpeed);
}

rotateCases();