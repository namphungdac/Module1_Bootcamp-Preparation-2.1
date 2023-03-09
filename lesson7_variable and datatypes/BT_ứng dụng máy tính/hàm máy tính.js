function display(opt) {
    document.getElementById('screen').value += opt;
}
function clearScreen() {
    document.getElementById('screen').value = '';
}
function calculate() {
    document.getElementById('screen').value = eval(document.getElementById('screen').value);
}