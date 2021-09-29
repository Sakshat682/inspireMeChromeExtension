var x = Math.floor((Math.random() * 1000) + 1);
fetch("https://type.fit/api/quotes")
    .then(data => data.json())
    .then(inspirequote => {
        const quote = inspirequote[x].text + " - " + inspirequote[x].author;
        const inspireElement = document.getElementById('inspireElement');
        inspireElement.innerHTML = "<div id=\"icn\"><img src=\"encourage.png\"></div>\
        <div id=\"q\">" + quote + "</div>"; 
    })