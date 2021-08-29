export default function tabMenu() {
    const tabMenu = document.querySelectorAll('[data-lista="praias"] li');
    const tabContent = document.querySelectorAll('[data-lista="conteudo"] section')

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        })
    })

    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('active');
        });
        tabContent[index].classList.add('active');
    }
}