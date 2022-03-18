gitbook.events.bind("page.change", function() {
    setTimeout(loadModal(), 10000);
});

function loadModal() {
    console.log("Show Message.");
    let doc = $('section.markdown-section');
    let modalContent = $(`
                            <span id="modal" class="bodycontent">
                                <p class="modal-content">
                                    <a>Some text in the Modal..</a>
                                </p>
                            </span>
                        `)
    doc.prepend(modalContent);

    window.onclick = function(event) {
        let modalContent = document.getElementById("modal");
        if (event.target == modalContent) {
            modalContent.style.display = "none";
        }
    }
}