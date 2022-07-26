let btnGenerate = document.getElementById('generate')
btnGenerate.addEventListener('click', function () {
    let players = document.getElementById('players')
    let data = players.value.split('\n');
    let resultTag = document.getElementById('result')
    let result = '[';
    data.forEach((p, i) => {
        result += `{"ignoresPlayerLimit": false,"name": "${p}"}`
        if (i != data.length - 1) {
            result += ','
        }
    });
    result += ']';
    resultTag.value = result
})

function myFunction() {
    var copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: successfull ";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}