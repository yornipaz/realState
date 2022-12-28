const properties = document.querySelector('.properties__wrapper');
const propertiesFragment = document.createDocumentFragment();

for (let i = 0; i < 6; i++) {
    const property = document.createElement('div');
    property.innerHTML = `<div class="property__img"  style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url("../img/propiedad_${i+1}.jpg")">
    <h3 class="property__name">Casa de lujo con 3 cuartos</h3>
</div>
<div class="property__content">
    <p class="property__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nesciunt
        debitis quam reprehenderit similique incidunt perferendis architecto. Inventore a, autem sequi
        exercitationem sapiente delectus voluptates nisi ipsam, placeat non sed.</p>
    <p class="property__price">$ 1,200,000.00</p>
    <a href="#" class="property__link">Ver Propiedadad</a>
</div>`;
    propertiesFragment.appendChild(property);
}
//properties.appendChild(propertiesFragment);