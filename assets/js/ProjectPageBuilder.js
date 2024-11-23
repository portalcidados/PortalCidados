export function ProjectPageBuilder(project, $) {

    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    const status = document.createElement('div');
    status.id = 'status';
    status.className = 'la-ball-triangle-path';
    for (let i = 0; i < 3; i++) {
        const ball = document.createElement('div');
        status.appendChild(ball);
    }
    preloader.appendChild(status);
    project.appendChild(preloader);

    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';

    const header = document.createElement('header');
    header.id = 'banner';
    header.className = 'scrollto clearfix';
    header.setAttribute('data-enllax-ratio', '.5');

    const headerContent = document.createElement('div');
    headerContent.id = 'header';
    headerContent.className = 'nav-collapse';

    const row = document.createElement('div');
    row.className = 'row clearfix';

    const col1 = document.createElement('div');
    col1.className = 'col-1';

    const logoDiv = document.createElement('div');
    logoDiv.id = 'logo';

    const logo = document.createElement('div');
    logo.id = 'banner-logo';
    logo.alt = 'Landing Page';
    const logo2 = document.createElement('div');
    logo2.id = 'navigation-logo';
    logo2.alt = 'Landing Page';
    const createTextDiv = (id, text, className = 'text', hidden = false) => {
        const div = document.createElement('div');
        div.id = id;
        div.className = className;
        div.textContent = text;
        if (hidden) {
            div.classList.add('hidden');
        }
        return div;
    };
    const cidade = createTextDiv('cidade', 'Cidade');
    const em = createTextDiv('em', 'em');
    const dados = createTextDiv('dados', 'Dados');
    const cidados = createTextDiv('cidados', 'CiDados', 'text', true);
    const portal = createTextDiv('portal', 'Portal', 'text2', true);
    const bg = createTextDiv('bg', '', 'text2', true);
    logo.appendChild(cidade);
    logo.appendChild(em);
    logo.appendChild(dados);
    logo.appendChild(cidados);
    logo.appendChild(portal);
    logo.appendChild(bg);
    logoDiv.appendChild(logo);
    const cidade2 = createTextDiv('cidade2', 'Cidade');
    const em2 = createTextDiv('em2', 'em');
    const dados2 = createTextDiv('dados2', 'Dados');
    const cidados2 = createTextDiv('cidados2', 'CiDados', 'text', true);
    const portal2 = createTextDiv('portal2', 'Portal', 'text2', true);
    const bg2 = createTextDiv('bg2', '', 'text2', true);
    logo2.appendChild(cidade2);
    logo2.appendChild(em2);
    logo2.appendChild(dados2);
    logo2.appendChild(cidados2);
    logo2.appendChild(portal2);
    logo2.appendChild(bg2);
    logoDiv.appendChild(logo2);
    document.addEventListener('DOMContentLoaded', () => {
        const emText = document.getElementById('em');
        const cidadeText = document.getElementById('cidade');
        const dadosText = document.getElementById('dados');
        const cidadosText = document.getElementById('cidados');
        const portalText = document.getElementById('portal');
        const portalbg = document.getElementById('bg');
        const emText2 = document.getElementById('em2');
        const cidadeText2 = document.getElementById('cidade2');
        const dadosText2 = document.getElementById('dados2');
        const cidadosText2 = document.getElementById('cidados2');
        const portalText2 = document.getElementById('portal2');
        const portalbg2 = document.getElementById('bg2');

        setTimeout(() => {
            emText.classList.add('hidden');
            emText2.classList.add('hidden');
        }, 1000); // Desaparecimento do em inicial após 1 segundos

        setTimeout(() => {
            cidadeText.classList.add('collide_to_right');
            dadosText.classList.add('collide_to_left');
            cidadeText2.classList.add('collide_to_right');
            dadosText2.classList.add('collide_to_left');
        }, 2000); // Colisão após 2 segundos

        setTimeout(() => {
            cidadeText.classList.add('hidden');
            dadosText.classList.add('hidden');
            cidadosText.classList.remove('hidden');
            cidadeText2.classList.add('hidden');
            dadosText2.classList.add('hidden');
            cidadosText2.classList.remove('hidden');
        }, 3000); // Exibição de "Cidados" após 4 segundos

        setTimeout(() => {
            portalText.classList.remove('hidden');
            portalbg.classList.remove('hidden');
            portalbg.classList.add('move');
            portalText2.classList.remove('hidden');
            portalbg2.classList.remove('hidden');
            portalbg2.classList.add('move');
        }, 4000); // Exibição de "Portal" após 5 segundos
    });

    //const logo1 = document.createElement('img');
    //logo1.src = 'images/logo.png';
    //logo1.id = 'banner-logo';
    //logo1.alt = 'Landing Page';
    //const logo2 = document.createElement('img');
    //logo2.src = 'images/logo-2.png';
    //logo2.id = 'navigation-logo';
    //logo2.alt = 'Landing Page';
    //logoDiv.appendChild(logo1);
    //logoDiv.appendChild(logo2);

    const aside = document.createElement('aside');
    const socialIcons = document.createElement('ul');
    socialIcons.className = 'social-icons';
    const li = document.createElement('li');
    const instagramLink = document.createElement('a');
    instagramLink.target = '_blank';
    instagramLink.title = 'Instagram';
    instagramLink.href = 'http://www.instagram.com/username';
    const instagramIcon = document.createElement('i');
    instagramIcon.className = 'fa fa-instagram fa-1x';
    const instagramText = document.createElement('span');
    instagramText.textContent = 'Instagram';
    instagramLink.appendChild(instagramIcon);
    instagramLink.appendChild(instagramText);
    li.appendChild(instagramLink);
    socialIcons.appendChild(li);
    aside.appendChild(socialIcons);

    const navMain = document.createElement('nav');
    navMain.id = 'nav-main';
    const navList = document.createElement('ul');
    const navItems = ['Início', 'Sobre', 'Histórias', 'Repercursão', 'Equipe', 'Dados'];
    navItems.forEach(item => {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.href = `#${item.toLowerCase()}`;
        navLink.textContent = item;
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    });
    navMain.appendChild(navList);

    const navTrigger = document.createElement('div');
    navTrigger.id = 'nav-trigger';
    navTrigger.innerHTML = '<span></span>';

    col1.appendChild(logoDiv);
    col1.appendChild(aside);
    col1.appendChild(navMain);
    col1.appendChild(navTrigger);

    row.appendChild(col1);
    headerContent.appendChild(row);
    header.appendChild(headerContent);

    const bannerContent = document.createElement('div');
    bannerContent.id = 'banner-content';
    bannerContent.className = 'row clearfix';
    const col38 = document.createElement('div');
    col38.className = 'col-38';

    const sectionHeading = document.createElement('div');
    sectionHeading.className = 'section-heading';
    const title = document.createElement('h1');
    title.textContent = 'Título';
    const subtitle = document.createElement('h2');
    subtitle.textContent = 'Brevíssimo resumo sobre os objetivos e principais achados da pesquisa.';

    sectionHeading.appendChild(title);
    sectionHeading.appendChild(subtitle);

    const button = document.createElement('a');
    button.href = '#';
    button.className = 'button';
    button.textContent = 'Link para o primeiro Datavis';

    col38.appendChild(sectionHeading);
    col38.appendChild(button);
    bannerContent.appendChild(col38);

    header.appendChild(bannerContent);
    wrapper.appendChild(header);

    // Create main content
    const main = document.createElement('main');
    main.id = 'content';

    // About Section
    const aboutSection = document.createElement('section');
    aboutSection.id = 'sobre';
    aboutSection.className = 'introduction scrollto';
    const aboutRow = document.createElement('div');
    aboutRow.className = 'row clearfix';

    const aboutCol3 = document.createElement('div');
    aboutCol3.className = 'col-3';

    const aboutHeading = document.createElement('div');
    aboutHeading.className = 'section-heading';
    const aboutTitle = document.createElement('h3');
    aboutTitle.textContent = 'Sobre a Pesquisa';
    const aboutSubtitle = document.createElement('h2');
    aboutSubtitle.className = 'section-title';
    aboutSubtitle.textContent = 'Título';
    const aboutDesc = document.createElement('p');
    aboutDesc.className = 'section-subtitle';
    aboutDesc.textContent = 'Subtítulo';

    aboutHeading.appendChild(aboutTitle);
    aboutHeading.appendChild(aboutSubtitle);
    aboutHeading.appendChild(aboutDesc);
    aboutCol3.appendChild(aboutHeading);

    const aboutCol2_3 = document.createElement('div');
    aboutCol2_3.className = 'col-2-3';

    const points = [
        { icon: 'fa-book', title: 'Ponto 1', desc: 'Breve resumo sobre o ponto 1' },
        { icon: 'fa-flask', title: 'Ponto 2', desc: 'Breve resumo sobre o ponto 2' },
        { icon: 'fa-map', title: 'Ponto 3', desc: 'Breve resumo sobre o ponto 3' },
        { icon: 'fa-line-chart', title: 'Ponto 4', desc: 'Breve resumo sobre o ponto 4' }
    ];

    points.forEach((point, index) => {
        const iconBlock = document.createElement('div');
        iconBlock.className = `col-2 icon-block icon-top wow fadeInUp`;
        iconBlock.setAttribute('data-wow-delay', `${0.1 + index * 0.2}s`);

        const iconDiv = document.createElement('div');
        iconDiv.className = 'icon';
        const icon = document.createElement('i');
        icon.className = `fa ${point.icon} fa-2x`;
        iconDiv.appendChild(icon);

        const description = document.createElement('div');
        description.className = 'icon-block-description';
        const title = document.createElement('h4');
        title.textContent = point.title;
        const paragraph = document.createElement('p');
        paragraph.textContent = point.desc;

        description.appendChild(title);
        description.appendChild(paragraph);

        iconBlock.appendChild(iconDiv);
        iconBlock.appendChild(description);

        aboutCol2_3.appendChild(iconBlock);
    });

    aboutRow.appendChild(aboutCol3);
    aboutRow.appendChild(aboutCol2_3);
    aboutSection.appendChild(aboutRow);
    main.appendChild(aboutSection);

    // history Section
    const servicesSection = document.createElement('div');
    servicesSection.id = 'histórias';
    servicesSection.className = 'scrollto clearfix';
    const servicesRow = document.createElement('div');
    servicesRow.className = 'row no-padding-bottom clearfix';

    const servicesCol1 = document.createElement('div');
    servicesCol1.className = 'col-1';

    const servicesHeading = document.createElement('div');
    servicesHeading.className = 'section-heading';
    const servicesTitle = document.createElement('h3');
    servicesTitle.textContent = 'Histórias';
    const servicesSubtitle = document.createElement('h2');
    servicesSubtitle.className = 'section-title';
    servicesSubtitle.textContent = 'Título';
    servicesHeading.appendChild(servicesTitle);
    servicesHeading.appendChild(servicesSubtitle);

    servicesCol1.appendChild(servicesHeading);
    servicesRow.appendChild(servicesCol1);
    servicesSection.appendChild(servicesRow);
    main.appendChild(servicesSection);

    // Repercursion Section
    const gallery = document.createElement('aside');
    gallery.id = 'repercursão';
    gallery.className = 'row text-center scrollto clearfix';
    gallery.setAttribute('data-featherlight-gallery', '');
    gallery.setAttribute('data-featherlight-filter', 'a');

    for (let i = 1; i <= 6; i++) {
        const anchor = document.createElement('a');
        anchor.href = `images/gallery-images/gallery-image-${i}.jpg`;
        anchor.setAttribute('data-featherlight', 'image');
        anchor.className = `col-3 wow fadeIn`;
        anchor.setAttribute('data-wow-delay', `${0.1 * i}s`);
        const img = document.createElement('img');
        img.src = `images/gallery-images/gallery-image-${i}.jpg`;
        img.alt = 'Landing Page';
        anchor.appendChild(img);
        gallery.appendChild(anchor);
    }

    main.appendChild(gallery);

    // Crew Section
    const testimonials = document.createElement('aside');
    testimonials.id = 'equipe';
    testimonials.className = 'scrollto text-center';
    testimonials.setAttribute('data-enllax-ratio', '.2');

    const testimonialsRow = document.createElement('div');
    testimonialsRow.className = 'row clearfix';

    const testimonialsHeading = document.createElement('div');
    testimonialsHeading.className = 'section-heading';
    const testimonialsTitle = document.createElement('h3');
    testimonialsTitle.textContent = 'Nossa Equipe';
    const testimonialsSubtitle = document.createElement('h2');
    testimonialsSubtitle.className = 'section-title';
    testimonialsSubtitle.textContent = 'Conheça nossos parceiros';

    testimonialsHeading.appendChild(testimonialsTitle);
    testimonialsHeading.appendChild(testimonialsSubtitle);
    testimonialsRow.appendChild(testimonialsHeading);

    const testimonialsData = [
        { img: 'user-1.jpg', name: 'Nome da Pessoa 1', profession: 'Profissão da pessoa 1' },
        { img: 'user-2.jpg', name: 'Nome da Pessoa 2', profession: 'Profissão da pessoa 2' },
        { img: 'user-3.jpg', name: 'Nome da Pessoa 3', profession: 'Profissão da pessoa 3' }
    ];

    testimonialsData.forEach(data => {
        const blockquote = document.createElement('blockquote');
        blockquote.className = 'col-3 testimonial classic';
        const userImg = document.createElement('img');
        userImg.src = `images/user-images/${data.img}`;
        userImg.alt = 'User';
        const userName = document.createElement('p');
        userName.textContent = data.name;
        const userProfession = document.createElement('footer');
        userProfession.textContent = data.profession;

        blockquote.appendChild(userImg);
        blockquote.appendChild(userName);
        blockquote.appendChild(userProfession);
        testimonialsRow.appendChild(blockquote);
    });

    testimonials.appendChild(testimonialsRow);
    main.appendChild(testimonials);
    
    // Data Section
    const clientsSection = document.createElement('section');
    clientsSection.id = 'clients';
    clientsSection.className = 'scrollto clearfix';
    const clientsRow = document.createElement('div');
    clientsRow.className = 'row clearfix';

    const clientsCol3 = document.createElement('div');
    clientsCol3.className = 'col-3';

    const clientsHeading = document.createElement('div');
    clientsHeading.className = 'section-heading';
    const clientsTitle = document.createElement('h3');
    clientsTitle.textContent = 'Dados';
    const clientsSubtitle = document.createElement('h2');
    clientsSubtitle.className = 'section-title';
    clientsSubtitle.textContent = 'Repositório de dados da pesquisa';
    const clientsDesc = document.createElement('p');
    clientsDesc.className = 'section-subtitle';
    clientsDesc.textContent = 'Sobre os dados';

    clientsHeading.appendChild(clientsTitle);
    clientsHeading.appendChild(clientsSubtitle);
    clientsHeading.appendChild(clientsDesc);
    clientsCol3.appendChild(clientsHeading);
    clientsRow.appendChild(clientsCol3);

    const clientsCol2_3 = document.createElement('div');
    clientsCol2_3.className = 'col-2-3';

    const clientLogos = [
        { src: 'company-logo1.png', label: 'Dados 1' },
        { src: 'company-logo2.png', label: 'Dados 2' },
        { src: 'company-logo3.png', label: 'Dados 3' },
        { src: 'company-logo4.png', label: 'Dados 4' },
        { src: 'company-logo5.png', label: 'Dados 5' },
        { src: 'company-logo6.png', label: 'Dados 6' },
        { src: 'company-logo7.png', label: 'Dados 7' },
        { src: 'company-logo8.png', label: 'Dados 8' },
        { src: 'company-logo9.png', label: 'Dados 9' }
    ];

    clientLogos.forEach(logo => {
        const clientLink = document.createElement('a');
        clientLink.href = '#';
        clientLink.className = 'col-3';
        const clientImg = document.createElement('img');
        clientImg.src = `images/company-images/${logo.src}`;
        clientImg.alt = 'Company';
        const clientOverlay = document.createElement('div');
        clientOverlay.className = 'client-overlay';
        clientOverlay.innerHTML = `<span>${logo.label}</span>`;
        
        clientLink.appendChild(clientImg);
        clientLink.appendChild(clientOverlay);
        clientsCol2_3.appendChild(clientLink);
    });

    clientsRow.appendChild(clientsCol2_3);
    clientsSection.appendChild(clientsRow);
    main.appendChild(clientsSection);
    
    // Footer
    const footer = document.createElement('footer');
    footer.id = 'landing-footer';
    footer.className = 'clearfix';
    const footerRow = document.createElement('div');
    footerRow.className = 'row clearfix';
    
    const copyright = document.createElement('p');
    copyright.id = 'copyright';
    copyright.className = 'col-2';
    copyright.innerHTML = '';
    
    const footerIcons = document.createElement('ul');
    footerIcons.className = 'col-2 social-icons';
    const footerLi = document.createElement('li');
    const footerInstagramLink = document.createElement('a');
    footerInstagramLink.target = '_blank';
    footerInstagramLink.title = 'Instagram';
    footerInstagramLink.href = 'http://www.instagram.com/username';
    const footerInstagramIcon = document.createElement('i');
    footerInstagramIcon.className = 'fa fa-instagram fa-1x';
    const footerInstagramText = document.createElement('span');
    footerInstagramText.textContent = 'Instagram';
    
    footerInstagramLink.appendChild(footerInstagramIcon);
    footerInstagramLink.appendChild(footerInstagramText);
    footerLi.appendChild(footerInstagramLink);
    footerIcons.appendChild(footerLi);
    
    footerRow.appendChild(copyright);
    footerRow.appendChild(footerIcons);
    footer.appendChild(footerRow);
    
    // Append everything to the wrapper
    wrapper.appendChild(header);
    wrapper.appendChild(main);
    wrapper.appendChild(footer);
    project.appendChild(wrapper);

    $(document).ready(function () {
        /* Video Lightbox */
        if (!!$.prototype.simpleLightboxVideo) {
            $('.video').simpleLightboxVideo();
        }
    
        /*ScrollUp*/
        if (!!$.prototype.scrollUp) {
            $.scrollUp();
        }
    
        /*Responsive Navigation*/
        $("#nav-mobile").html($("#nav-main").html());
        $("#nav-trigger span").on("click",function() {
            if ($("nav#nav-mobile ul").hasClass("expanded")) {
                $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
                $(this).removeClass("open");
            } else {
                $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
                $(this).addClass("open");
            }
        });
    
        $("#nav-mobile").html($("#nav-main").html());
        $("#nav-mobile ul a").on("click",function() {
            if ($("nav#nav-mobile ul").hasClass("expanded")) {
                $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
                $("#nav-trigger span").removeClass("open");
            }
        });
    
        /* Sticky Navigation */
        if (!!$.prototype.stickyNavbar) {
            $('#header').stickyNavbar();
        }
        

        Waypoint(function (direction) {
            if (direction === 'down') {
                $('#header').addClass('nav-solid fadeInDown');
            }
            else {
                $('#header').removeClass('nav-solid fadeInDown');
            }
        });
    
    });
    
    
    /* Preloader and animations */
    $(window).load(function () { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow-y': 'visible'});
    
        /* WOW Elements */
        if (typeof WOW == 'function') {
            new WOW().init();
        }
    
        /* Parallax Effects */
        if (!!$.prototype.enllax) {
            $(window).enllax();
        }
    
    });
}

