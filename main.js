window.addEventListener("scroll", function () {
    const services = document.querySelectorAll(".service-item");
    const triggerBottom = window.innerHeight / 5 * 4;

    services.forEach((service) => {
        const serviceTop = service.getBoundingClientRect().top;

        if (serviceTop < triggerBottom) {
            service.classList.add("visible");
        }
    });
});
