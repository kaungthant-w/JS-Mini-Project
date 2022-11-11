const insert = document.getElementById("insert");

window.addEventListener("keydown", function(event) {
    insert.innerHTML = `
    
        <div class="key">
            ${event.key ===" " ? "Space" : event.key} <small>event.key</small>
        </div>
        <div class="key">
            ${event.keyCode} <small>Event.KeyCode</small>
        </div>
        <div class="key">
            ${event.code} <small>Event.Code</small>
        </div>
    `
});