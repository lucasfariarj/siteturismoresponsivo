export default function scrollSuave(){

    const link = document.querySelectorAll('.menu a[href^="#"]')

    function rolagem(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        const valorTopo = section.offsetTop;
        console.log(valorTopo)
        window.scrollTo({
            top: valorTopo,
            behavior: 'smooth'
        });

        

    }   

    link.forEach((link) => {
        link.addEventListener('click', rolagem)
    })

}