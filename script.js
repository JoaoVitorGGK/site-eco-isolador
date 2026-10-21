document.addEventListener('DOMContentLoaded', function () {

    // 1. Botão de "Voltar ao Topo"
    const btnTopo = document.createElement('button');
    btnTopo.id = 'btn-topo';
    btnTopo.innerHTML = '↑';
    btnTopo.title = 'Voltar ao topo';
    document.body.appendChild(btnTopo);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            btnTopo.style.display = 'block';
        } else {
            btnTopo.style.display = 'none';
        }
    });

    btnTopo.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 2. Destaque dinâmico do Menu de Navegação conforme a rolagem
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function () {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Efeito interativo ao passar o rato nas linhas das tabelas do Diário de Bordo
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.transition = 'background-color 0.2s';
        });
    });

    console.log("Website Eco Isolador de Pintinhos carregado com sucesso!");
});