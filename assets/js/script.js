const accordions = document.querySelectorAll(".accordion");

const toggleAccordion = (accordion) => {
    const accordionContent = accordion.querySelector(".accordion__content");
    let accordionContentHeight = accordionContent.scrollHeight;
    if (accordion.classList.contains("extended")) {
        accordion.classList.replace("extended", "collapsed");
        accordionContent.style.height = "0px";
    } else if (accordion.classList.contains("collapsed")) {
        accordion.classList.replace("collapsed", "extended");
        accordionContent.style.height = `${accordionContentHeight}px`;
    }
};

accordions.forEach((accordion) => {
    const accordionBtn = accordion.querySelector(".accordion__btn-tgl");
    accordionBtn.addEventListener("click", () => {
        const extendedAccordion = document.querySelector(".accordion.extended");
        toggleAccordion(accordion);
        if (extendedAccordion && !extendedAccordion.classList.contains("collapsed")) {
            toggleAccordion(extendedAccordion);
        }
    });
});
