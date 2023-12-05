document.addEventListener('DOMContentLoaded', (event) =>{

    setTimeout(() =>{
        document.querySelector('#load-iframe-map').innerHTML = `
         <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5991.685277983532!2d-2.4606066325546845!3d36.84086273340227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7a9dfff893186d%3A0x1d3a617f1d8e4ebf!2sC.%20Alcalde%20Mu%C3%B1oz%2C%2004004%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1701169646504!5m2!1ses!2ses"></iframe>`;
    }, 500);

})