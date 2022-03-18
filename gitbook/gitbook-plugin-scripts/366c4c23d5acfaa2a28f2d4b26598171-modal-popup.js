gitbook.events.bind("page.change", function() {
    let doc = $('section.markdown-section');
    let modalContent = $(`
    <span id="modal" class="modal-background">
        <p class="modal-content">
            <a class="modal-title">Become a Certified Developer!</a>
            <span class="button-wrapper">
                <a target="_blank" href="https://softuni.org/learn/">Start Now with a FREE 7-days Trial</a>
            </span>
            <span class="upper-text"><a><b>Begin</b> your <b>IT career</b> with a <b>self-paced education</b> in <b>Java</b> or <b>JavaScript</b>. Become a <b>programmer</b> with <b>comprehensive</b>,
                <b>up-to-date</b> online classes led by an expert. Study in your own
                <b>time</b> and at your <b>own pace</b>. Go back any time and <b>rewatch</b> the lessons, if needed.</a>
            </span>
            <span class="middle-text">
                <a class="middle-text-title">You can <b>succeed</b> even if you are:</a>
                <a>&#x2705; <b>Novice</b> - no prior programming knowledge is needed.</a>
                <a>&#x2705; <b>Working</b> - keep your other commitments and still succeed.</a>
                <a>&#x2705; <b>Busy</b> - spend 2-3 hours per day and become a skilled programmer.</a>
                <a>&#x2705; <b>Insecure</b> - get career advise and land your dream job.</a>
            </span>
            <span class="lower-text"><a>Learn <b>Programming</b> from Zero to Hero! <b>Stop waiting</b> and <b>start</b> your journey <b>today</b>!</a><br><br></span>
            <span id="close-btn" class="close">&times;</span>
        </p>
    </span>
    `);
    doc.prepend(modalContent);

    // Wait time and display Modal Popup
    setTimeout(() => {
        let modalContentBody = document.getElementById("modal");
        modalContentBody.style.display = "block";
    }, 10000);

    // Close Button Functionality
    let button = document.getElementById("close-btn");
    button.onclick = function() {
        let modalContentElement = document.getElementById("modal");
        modalContentElement.style.display = "none";
    }

    // Global Click to Hide Modal Popup Functionality
    window.onclick = function(event) {
        let modalContentElement = document.getElementById("modal");
        if (event.target == modalContentElement) {
            modalContentElement.style.display = "none";
        }
    }
});