gitbook.events.bind("page.change", function() {
    setTimeout(loadModal(), 5000);
});

function loadModal() {
    console.log("Show Message.");
}