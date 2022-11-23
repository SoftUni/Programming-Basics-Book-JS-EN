gitbook.events.bind("page.change", function() {
    let doc = $('section.markdown-section');
    let topMenu = $(`
        <span class="topnav">
            <a class="logobox" target="_blank" href="https://softuni.org/learn/?utm_source=JavaScript&utm_medium=logo&utm_campaign=free+programming+books"><img class="logo" src="/assets/softuni-global-logo.svg" alt="logo"></a>
            <a target="_blank" href="https://learn.softuni.org/catalog?utm_source=JavaScript&utm_medium=top+menu&utm_campaign=free+programming+books">Learn Programming</a>
            <a target="_blank" href="https://www.youtube.com/c/CodeWithNakov">YouTube Channel</a>
            <a target="_blank" href="https://introprogramming.info">Nakov's Books</a>
        </span>
    `);
    doc.prepend(topMenu);
});
