export default function accordionList(){

    const pergunta = document.querySelectorAll('[data-accordion] dt');

    function activeAccordion(){
        console.log(this.nextElementSibling.classList.toggle('active'))
        
    }

    pergunta.forEach((item) => {
        item.addEventListener('click',activeAccordion)
    })











}