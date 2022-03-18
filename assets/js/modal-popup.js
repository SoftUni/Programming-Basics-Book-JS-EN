gitbook.events.bind("page.change", function() {
    let doc = $('section.markdown-section');
    let modalContent = $(`
    <span id="modal" class="bodycontent">
    <p class="modal-content">
    <a>Some text in the Modal..</a>
    </p>
    </span>
    `);
    doc.prepend(modalContent);

    setTimeout(() => {
        let modalContentBody = document.getElementById("modal");
        modalContentBody.style.display = "block";
    }, 10000);

    window.onclick = function(event) {
        let modalContent = document.getElementById("modal");
        if (event.target == modalContent) {
            modalContent.style.display = "none";
        }
    }

});