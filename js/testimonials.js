async function loadData(){
    const response = await fetch('api/testimonials.json');
    const testimonials = await response.json();
    renderTestimonials(testimonials);
}

function renderTestimonials(testimonials) {
    const testimonialsList = document.querySelector('.testimonials__cards');
    testimonialsList.innerHtml = '';
    for (const testimonial of testimonials){
        testimonialsList.innerHTML += createTestimonialHtml(testimonial);
    }
}

function createTestimonialHtml(testimonial){
    const newColor = (testimonial.id % 2 === 0 ? 'new_color': '');
    return  `<article class="testimonials__cards_items ${newColor}">
                <p class="card_items_text">${testimonial.message}</p>
                <p class="card_data">${testimonial.massageData}</p>
                <div class="card_foto">
                    <img class="card_foto__item" src="${testimonial.clientFoto}" alt="Lucy Peterson foto" class="card_foto_items">
                </div>
                <p class="card_name">${testimonial.clientName}</p>
            </article>`
}

loadData()
