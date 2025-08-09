const onLight = document.getElementById('lightOn');
const offLight = document.getElementById('lightOff');
const offBtn = document.getElementById('offBtn');
const onBtn = document.getElementById('onBtn');


onBtn.addEventListener('click', function() {
    onLight.classList.remove('hide');
    offLight.classList.add('hide');
});

offBtn.addEventListener('click', function() {
    offLight.classList.remove('hide');
    onLight.classList.add('hide');
});