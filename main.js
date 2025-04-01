//Importa bibliotecas, módulos e estilos//
import L from 'leaflet';
import * as THREE from 'three';
import 'leaflet-hash';
import Autolinker from 'autolinker';
import 'leaflet.locatecontrol';
import $, { data } from 'jquery';
import 'leaflet-control-geocoder';
import UTMLatLng from 'utm-latlng';
import noUiSlider from 'nouislider';
import MobileDetect from 'mobile-detect';
import 'jstree';
import 'jstree/src/jstree.checkbox.js';
import 'jstree/src/jstree.search.js';
import 'jstree/src/jstree.types.js';
import SimpleScrollbar from 'simple-scrollbar';
import Plotly from 'plotly.js-dist';
import 'simple-scrollbar/simple-scrollbar.css';
import 'jstree/src/themes/default/style.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet.locatecontrol/dist/L.Control.Locate.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'nouislider/dist/nouislider.css';
import './styles.css';
import { TreeBuilder } from './assets/js/TreeBuilder.js';
import { AddDataBar } from './assets/js/AddDataBar.js';
import { ProjectPageBuilder } from './assets/js/ProjectPageBuilder.js';
//import { edificacao } from './assets/data/edificacao.js';
//import { quadra } from './assets/data/quadra.js';

const md = new MobileDetect(window.navigator.userAgent);
if (md.mobile()) {
  //console.log('É um dispositivo móvel');
}

//Função para fetch de dados do beckend
function fetchWFS(string) {
    string = encodeURIComponent(string);    
    const url = 'https://geoserver.datascience.insper.edu.br/geoserver/portal_dados/ows?service=WFS&version=1.0.0&request=GetFeature&typeName='+string+'&outputFormat=application%2Fjson';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    try {
      xhr.send();
      if (xhr.status === 200) {
        const geoJsonData = JSON.parse(xhr.responseText);
        return geoJsonData;
      } else {
        console.error('Erro ao acessar o GeoJSON. Status:', xhr.status);
      }
    } catch (error) {
      console.error('Erro ao acessar o GeoJSON:', error);
    }
}

// Selecionando o elemento pai com o ID 'app'
let appDiv = document.getElementById("app");

// Criando a primeira instância de div com o ID 'main_menu'
let main_menu = document.createElement("div");
main_menu.id = "main_menu";
main_menu.className = "closed"

// Criando a segunda instância de div com o ID 'main_content'
let main_content = document.createElement("div");
main_content.id = "main_content";
main_content.className = "wide";

// Adicionando as divs filhas à div pai
appDiv.appendChild(main_menu);
appDiv.appendChild(main_content);

// Cria e adiciona o botão de menu principal no div main_menu
let menu_button = document.createElement("div");
menu_button.id = "menu_button";
menu_button.classList.add("main_menu_button", "closed");
main_menu.appendChild(menu_button);
let menu_texto = document.createElement('div');
menu_texto.id = "menu_texto";
menu_texto.classList.add("main_menu_text", "no_display");
menu_texto.textContent = "Menu";
menu_button.appendChild(menu_texto);

// Cria e adiciona o botão de mapas e seu texto no div main_menu
let mapa_button = document.createElement("div");
mapa_button.id = "mapa_button";
mapa_button.classList.add("main_menu_button", "clickable", "closed", "clicked");
main_menu.appendChild(mapa_button);
let mapa_texto = document.createElement('div');
mapa_texto.id = "mapa_texto";
mapa_texto.classList.add("main_menu_text", "no_display");
mapa_texto.textContent = "Mapas";
mapa_button.appendChild(mapa_texto);

// Cria e adiciona o botão de projetos e seu texto no div main_menu
let projeto_button = document.createElement("div");
projeto_button.id = "projeto_button";
projeto_button.classList.add("main_menu_button", "clickable", "closed");
main_menu.appendChild(projeto_button);
let projeto_texto = document.createElement('div');
projeto_texto.id = "projeto_texto";
projeto_texto.classList.add("main_menu_text", "no_display");
projeto_texto.textContent = "Projetos";
projeto_button.appendChild(projeto_texto);

// Cria e adiciona o botão de OMS e seu texto no div main_menu
let st_button = document.createElement("div");
st_button.id = "st_button";
st_button.classList.add("main_menu_button", "clickable", "closed");
main_menu.appendChild(st_button);
let st_texto = document.createElement('div');
st_texto.id = "st_texto";
st_texto.classList.add("main_menu_text", "no_display");
st_texto.textContent = "Observatório de Mobilidade";
st_button.appendChild(st_texto);

// Cria e adiciona o botão de interatividade no div main_menu
let interatividade_button = document.createElement("div");
interatividade_button.id = "interatividade_button";
interatividade_button.classList.add("main_menu_button", "clickable", "closed");
main_menu.appendChild(interatividade_button);
let interatividade_texto = document.createElement('div');
interatividade_texto.id = "interatividade_texto";
interatividade_texto.classList.add("main_menu_text", "no_display");
interatividade_texto.textContent = "Interatividade";
interatividade_button.appendChild(interatividade_texto);

// Cria e adiciona o botão de download no div main_menu
let download_button = document.createElement("div");
download_button.id = "download_button";
download_button.classList.add("main_menu_button", "clickable", "closed");
main_menu.appendChild(download_button);
let download_texto = document.createElement('div');
download_texto.id = "download_texto";
download_texto.classList.add("main_menu_text", "no_display");
download_texto.textContent = "Downloads";
download_button.appendChild(download_texto);

// Event listner para mudar o tamanho dos divs principais ao clicar no botao de menu
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento do menu_button
    let menuButton = document.getElementById("menu_button");
    
    // Obtém os elementos que você deseja modificar as classes
    let mainMenu = document.getElementById("main_menu");
    let mainContentMap = document.getElementById("main_content");
    let botoes = document.getElementsByClassName("main_menu_button");
    let textos = document.getElementsByClassName("main_menu_text");
    
    // Adiciona um evento de clique ao menu_button
    menuButton.addEventListener("click", function() {
        // Verifica a classe existente do main_menu e muda para a classe oposta
        if (mainMenu.classList.contains("closed")) {
            mainMenu.classList.remove("closed");
            mainMenu.classList.add("opened");
            for (let i = 0; i < botoes.length; i++) {
                botoes[i].classList.remove("closed");
                botoes[i].classList.add("opened");
                textos[i].classList.remove("no_display");
                textos[i].classList.add("display");
            }

        } else if (mainMenu.classList.contains("opened")) {
            mainMenu.classList.remove("opened");
            mainMenu.classList.add("closed");
            for (let i = 0; i < botoes.length; i++) {
                botoes[i].classList.remove("opened");
                botoes[i].classList.add("closed");
                textos[i].classList.remove("display");
                textos[i].classList.add("no_display");
            }
        }
        
        // Verifica a classe existente do main_content e muda para a classe oposta
        if (mainContentMap.classList.contains("wide")) {
            mainContentMap.classList.remove("wide");
            mainContentMap.classList.add("narrow");
        } else if (mainContentMap.classList.contains("narrow")) {
            mainContentMap.classList.remove("narrow");
            mainContentMap.classList.add("wide");
        }
    });
});

//Cria o div principal de projetos//
const main_projeto = document.createElement('div');
main_projeto.id = 'main_projeto';
main_projeto.className = 'container';
main_projeto.style.height = '100%';
main_projeto.style.width = '100%';
main_projeto.style.position = 'absolute';

// Cria o div de menu de projetos no div de projetos //
const menu_projeto = document.createElement('div');
menu_projeto.id = 'menu_projeto';
menu_projeto.className = 'closed';
main_projeto.appendChild(menu_projeto);

// Cria o div de content de projetos no div de projetos //
const content_projeto = document.createElement('div');
content_projeto.id = 'content_projeto';
content_projeto.className = 'wide';
main_projeto.appendChild(content_projeto);


// Cria e adiciona o botão de acessopde e seu texto no div menu_projeto //
let acessopde_button = document.createElement("div");
acessopde_button.id = "acessopde_button";
acessopde_button.classList.add("menu_projeto_button", "opened", "clicked");
menu_projeto.appendChild(acessopde_button);
let acessopde_texto = document.createElement('div');
acessopde_texto.id = "acessopde_texto";
acessopde_texto.classList.add("menu_projeto_text", "display");
acessopde_texto.textContent = "Projeto 1";
acessopde_button.appendChild(acessopde_texto);
let iframe_acessopde = document.createElement('iframe');
iframe_acessopde.src = "./projeto/projeto.html";
iframe_acessopde.style.width = "100%";
iframe_acessopde.style.height = "100%";
iframe_acessopde.frameBorder = "0";
content_projeto.appendChild(iframe_acessopde);

// Cria e adiciona o botão de projeto2 e seu texto no div menu_projeto //
/*let projeto2_button = document.createElement("div");
projeto2_button.id = "projeto2_button";
projeto2_button.classList.add("menu_projeto_button", "opened");
menu_projeto.appendChild(projeto2_button);
let projeto2_texto = document.createElement('div');
projeto2_texto.id = "projeto2_texto";
projeto2_texto.classList.add("menu_projeto_text", "display");
projeto2_texto.textContent = "Acesso a Oportunidades no Plano Diretor de São Paulo";
projeto2_button.appendChild(projeto2_texto);
let projeto2 = document.createElement('div');
projeto2.id = 'projeto';*/

// Conteúdo da info //
const InfoData =
    {
        imgSrc: "./iv_svg/af-composicao.svg",
        titulo: "A PESQUISA",
        texto: "A pesquisa Acesso a Oportunidades no Plano Diretor de São Paulo (PDE-SP) é desenvolvida pelo Laboratório Arq.Futuro de Cidades do Insper desde outubro de 2021 como forma de qualificar, a partir do desenvolvimento de estudos baseados em dados, o debate público e a tomada de decisões em torno da revisão do Plano Diretor da cidade. Foram realizados encontros com especialistas e tomadores de decisão e publicadas seis notas técnicas que buscaram pautar o debate e incidir na cobertura jornalística sobre o tema, desde o lançamento da primeira minuta de lei, publicada em janeiro de 2023, até a aprovação do 2º substitutivo na câmara dos vereadores. O Insper também participou da organização do Fórum SP 23, um espaço acadêmico voltado a debater propostas baseadas em estudos que apontem caminhos para aprimoramento da implementação da política urbana de São Paulo, seus instrumentos, planos, programas e ações complementares. Além da organização, o Laboratório Arq.Futuro de Cidades, por meio desta pesquisa, foi o grupo acadêmico que apresentou o maior número de trabalhos neste importante evento de reflexão voltado ao aprimoramento da principal política urbana da capital paulista."
    };

// Conteúdo básico das histórias //
const StoryData = [
    {
        imgSrc: "./iv_svg/AF-Elementos-Mobilidade-15.svg",
        g_type: "map",
        long: -46.5746,
        lat: -23.6387,
        zoom: 11.2,
        layers: [{
            layer: 'portal_dados:ZEU EETU', 
            servertype: 'wms',
            server: 'https://geoserver.datascience.insper.edu.br/geoserver/ows?'
        },
        {
            layer:'portal_dados:Linhas do Metrô',
            servertype: 'wms',
            server: 'https://geoserver.datascience.insper.edu.br/geoserver/ows?'
        }],
        title: "Por que surgiram tantos prédios próximos ao metrô?",
        tagline: "Por Fulano de Tal",
        data: {
            data1: [{
                x:[2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
                y:[77, 106, 75, 48, 104, 156, 209, 252, 185],
                type: 'bar',
                marker: {
                    color: ['#2a75c5d8', '#2a75c5d8', '#2a75c5d8', '#2a75c5d8', '#2a75c5d8', '#2a75c5d8', '#2a75c5d8', '#f7724cd8', '#2a75c5d8'],
                }
            }],
            layout: {
                width: 500,
                height: 500,
                plot_bgcolor: 'rgba(255, 255, 255, 0)',
                paper_bgcolor: 'rgba(255, 255, 255, 0)',
                title: {
                    text: 'Novos Empreendimentos em Zonas EETU',
                    font: {
                        family: 'Roboto Condensed',
                        size: 18,
                        color: '#2a75c5d8',
                        weight: 'bold',
                    },
                    xref: 'paper',
                    x: 0.5,
                    y: 0.85,
                },
                //xaxis: { title: 'Anos' },
                //yaxis: { title: 'Números de Empreendimentos' },
                font: {
                    family: 'Roboto Condensed',
                },
                annotations: [
                    {
                        x: 2020,  
                        y: 255,  
                        text: '<b>Mais de 250 novos<br>empreendimentos</b>',
                        font: {
                            size: 15,
                            family: 'Roboto Condensed',
                            color: '#f7724c'
                        },
                        showarrow: true,  
                        arrowhead: 2,  
                        ax: 0,  
                        ay: -40 
                    },
                    {
                        x: 2016.5,  
                        y: 200,  
                        text: 'Início do impacto do PDE 2014',
                        textangle: '-90',
                        font: {
                            size: 12,
                            family: 'Roboto Condensed',
                            color: '#72975c',
                        },
                        showarrow: false,
                    }
                ],
                shapes: [{
                    type: 'rect',
                    x0: 2016.5,
                    y0: 0, 
                    x1: 2022,
                    y1: 280, 
                    fillcolor: '#72975cd8', 
                    opacity: 0.1, 
                    line: {
                        width: 0,
                    },
                    layer: 'below',
                }]
            },
        },
        description: "Os EETU se concentram em regiões consolidadas da cidade, onde está presente a maior parte dos comércios, empregos e infraestrutura urbana. Mesmo antes de passarem a ser regulados por uma zona específica a partir do PDE-2014 e LPUOS-2016, os quarteirões dos atuais eixos já apresentavam concentração de urbanidades, alta demanda locacional e, portanto, alto valor da terra. Ainda assim, verificou-se um considerável aumento da produção habitacional formal nos eixos em todos os indicadores avaliados."
    },
    {
        imgSrc: "./iv_svg/af-elementos-mobilidade-13.svg",
        g_type: "graph",
        title: "O plano diretor de 2014 fez a cidade de São Paulo virar um grande canteiro de obras?",
        tagline: "Por Fulano de Tal",
        data: { 
            data1: [{
                x:[2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
                y:[33230, 43549, 41139, 33095, 38348, 47809, 83675, 77963, 48225],
                type: 'bar',
                marker: {
                    color: ['#2a75c5d8', '#2a75c5d8', '#2a75c5d8', '#2a75c5d8', '#2a75c5d8', '#2a75c5d8', '#f7724cd8', '#2a75c5d8', '#2a75c5d8'],
                }
            }],
            layout: {
                width: 650,
                height: 700,
                title: {
                    text: 'Evolução de Unidades Habitacionais Construídas em SP',
                    font: {
                        family: 'Roboto Condensed',
                        size: 20,
                        color: '#2a75c5d8',
                        weight: 'bold',
                    },
                    xref: 'paper',
                    x: 0.5,
                    y: 0.9,
                },
                xaxis: { title: 'Anos' },
                yaxis: { title: 'Unidades Habitacionais' },
                font: {
                    family: 'Roboto Condensed',
                },
                annotations: [
                    {
                        x: 2019,  
                        y: 85000,  
                        text: '<b>Mais de 83 mil habitações em 2019</b>',
                        font: {
                            size: 15,
                            family: 'Roboto Condensed',
                            color: '#f7724c'
                        },
                        showarrow: true,  
                        arrowhead: 2,  
                        ax: 0,  
                        ay: -40 
                    },
                    {
                        x: 2016.5,  
                        y: 65000,  
                        text: 'Início do impacto do PDE 2014',
                        textangle: '-90',
                        font: {
                            size: 12,
                            family: 'Roboto Condensed',
                            color: '#72975c',
                        },
                        showarrow: false,
                    }
                ],
                shapes: [{
                    type: 'rect',
                    x0: 2016.5, // Valor inicial de x
                    y0: 0, // Valor inicial de y (em relação ao eixo y)
                    x1: 2022, // Valor final de x
                    y1: 90000, // Valor final de y (em relação ao eixo y)
                    fillcolor: '#72975cd8', // Cor do retângulo
                    opacity: 0.1, // Opacidade do retângulo
                    line: {
                        width: 0 // Largura da borda do retângulo
                    },
                    layer: 'below',
                }]
            },
        },
        description: "Tem sido bastante comum nos últimos anos ouvir de moradores de São Paulo ou ler nos meios de comunicação questões relacionadas à cidade “ter virado um grande canteiro de obras”, a uma intensa “verticalização” da cidade e a um forte aquecimento no mercado imobiliário. Questões que também são fortemente associadas ao Plano Diretor Estratégico de São Paulo – PDE de 2014, com várias pessoas atribuindo as mudanças aos impactos do plano de ordenamento territorial da cidade. O que dizem os dados? Há mesmo um aumento na produção imobiliária em São Paulo pós PDE 2014?"
    },
    {
        imgSrc: "./iv_svg/af-elementos-mobilidade-02.svg",
        g_type: "3d",
        origemx: -46.662667879969966,
        origemy: -23.55975713834501,
        isAnimate: false,
        title: "A quadra onde eu moro é próxima ao transporte público?",
        tagline: "Por Fulano de Tal",
        description: "Na discussão da Revisão do Plano Diretor, que foi aprovada em 2023, o aumento da área de influência dos eixos foi amplamente discutido a partir de novas regras propostas por vereadores na Câmara Municipal. O estudo trouxe estimativas sobre as implicações dos novos critérios de demarcação dos eixos propostos pelo legislativo e da regra final aprovada. A discussão se centrou em três diferentes critérios: a proposta inicial do 1º substitutivo do relator; a proposta intermediária debatida na mídia logo antes da divulgação do 2º substitutivo; e a proposta final aprovada que constou no 2º substitutivo."
    },
    {
        imgSrc: "/iv_svg/af-elementos-mobilidade-03.svg",
        g_type: "graph",
        title: "As regras para vagas de garagem na revisão do Plano Diretor de São Paulo",
        tagline: "Por Fulano de Tal",
        data: { 
            data1: [{
                x:[2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
                y:[1.5, 1.4, 1.4, 1.4, 1.4, 1.2, 1.1, 1.2, 0.8, 0.8, 0.7, 0.5, 0.5],
                type: 'line',
                line: {
                    color: '#f7724cd8',
                }
            }],
            layout: {
                width: 650,
                height: 700,
                title: {
                    text: 'Evolução da Média de Vagas de Garagem',
                    font: {
                        family: 'Roboto Condensed',
                        size: 20,
                        color: '#2a75c5d8',
                        weight: 'bold',
                    },
                    xref: 'paper',
                    x: 0.5,
                    y: 0.9,
                },
                xaxis: { title: 'Anos' },
                yaxis: { title: 'Média de Vagas por Unidade Habitacional' },
                font: {
                    family: 'Roboto Condensed',
                },
                images: [
                    {
                      "source": "/iv_svg/af-elementos-mobilidade-03.svg",
                      "xref": "x",
                      "yref": "y",
                      "x": 2010,
                      "y": 1.35,
                      "sizex": 3,
                      "sizey": 3,
                      "xanchor": "left",
                      "yanchor": "bottom"
                    },
                    {
                        "source": "/icons/down-arrow.svg",
                        "xref": "x",
                        "yref": "y",
                        "x": 2017.5,
                        "y": 0.94,
                        "sizex": 1,
                        "sizey": 1,
                        "xanchor": "center",
                        "yanchor": "bottom"
                      },
                ],
                annotations: [
                    {
                        x: 2016,  
                        y: 1.25,  
                        text: '<b>1,2</b>',
                        font: {
                            size: 30,
                            family: 'Roboto Condensed',
                            color: '#2a75c5'
                        },
                        showarrow: true,  
                        arrowhead: 2,  
                        ax: 0,  
                        ay: -40 
                    },
                    {
                        x: 2021,  
                        y: 0.55,  
                        text: '<b>0,5</b>',
                        font: {
                            size: 30,
                            family: 'Roboto Condensed',
                            color: '#2a75c5'
                        },
                        showarrow: true,  
                        arrowhead: 2,  
                        ax: 0,  
                        ay: -40 
                    },
                    {
                        x: 2019.75,  
                        y: 0.9,  
                        text: '<b>58,3%</b>',
                        font: {
                            size: 50,
                            family: 'Roboto Condensed',
                            color: '#f7724c'
                        }
                    },
                    {
                        x: 2016.5,  
                        y: 0.4,  
                        text: 'Início do impacto do PDE 2014',
                        textangle: '-90',
                        font: {
                            size: 12,
                            family: 'Roboto Condensed',
                            color: '#72975c',
                        },
                        showarrow: false,
                    },
                ],
                shapes: [{
                    type: 'rect',
                    x0: 2016.5, // Valor inicial de x
                    y0: 0, // Valor inicial de y (em relação ao eixo y)
                    x1: 2022, // Valor final de x
                    y1: 1.8, // Valor final de y (em relação ao eixo y)
                    fillcolor: '#72975cd8', // Cor do retângulo
                    opacity: 0.1, // Opacidade do retângulo
                    line: {
                        width: 0 // Largura da borda do retângulo
                    },
                    layer: 'below',
                }]
            },
        },
        description: "As vagas de garagem, tanto em áreas privadas quanto em ruas públicas, estão cada vez mais regulamentadas e valorizadas por incentivar o uso do carro. A infraestrutura para veículos, como espaço nas ruas ou garagens, aumenta seu uso e influencia na escolha do modo de deslocamento. Geralmente localizados em bairros centrais com empregos e serviços, os imóveis são mais caros devido à proximidade do transporte público e urbanidades, atraindo uma população de alta renda que muitas vezes não utiliza transporte público diariamente. Após consulta pública para revisar o Plano Diretor, a Prefeitura de São Paulo decidiu estimular mais vagas de garagem (+12%) em detrimento de unidades habitacionais próximas ao transporte público."
    },
    {
        imgSrc: "./iv_svg/af-elementos-infraestrutura-16.svg",
        g_type: "map",
        long: -46.6246,
        lat: -23.5587,
        zoom: 11.2,
        layers: [{
            layer:'acesso_pde:pius', 
            servertype: 'wms',
            server: 'https://geoserver.datascience.insper.edu.br/geoserver/ows?'
        }],
        title: "O que o mercado imobiliário tem produzido enquanto os PIU's não saem do papel?",
        tagline: "Por Fulano de Tal",
        description: "Em tese, esperava-se que a produção imobiliária na Macroárea de Estruturação Metropolitana - MEM de São Paulo estivesse quase 'congelada' devido ao plano diretor de 2014, não plenamente cumprido para liberar as construções na área. Mas a análise dos pedidos de licenciamento por Macroárea mostra que, após uma queda entre 2016-2018, houve aumento em todas elas, especialmente na MEM em unidades, área de terreno e área construída. São números expressivos que indicam aumento de densidade habitacional (e possivelmente populacional), destacando-se em comparação com as demais Macroáreas do PDE-2014."
    },
];

// Função que cria formas geométricas estrudadas //
function shapes(origemx, origemy, json_projecao, json_lotes, camera, utm, scene) {
    let contador = 0
    let east;
    let north;
    let coord;
    for ( let j of json_projecao.features ) {
        let shape = new THREE.Shape();
        coord = [j.geometry.coordinates[0][0][1], j.geometry.coordinates[0][0][0]];
        east = coord[1] - origemx;
        north = coord[0] - origemy;
        shape.moveTo( east, north);
        for ( let i of j.geometry.coordinates[0]) {
            coord = [i[1], i[0]];
            east = coord[1] - origemx;
            north = coord[0] - origemy;
            shape.lineTo(east, north);
        }
        let extrudeSettings = {
            steps: 1,
            depth: j.properties.ed_altura,
            bevelEnabled: false,
            bevelThickness: 1,
            bevelSize: 1,
            bevelOffset: 0,
            bevelSegments: 1
        };
        let geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
        let material = new THREE.MeshMatcapMaterial( { 
            color: 0xb8d9ff,
        });
        let mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
        let geo = new THREE.EdgesGeometry( mesh.geometry );
        let mat = new THREE.LineBasicMaterial( { color: 0xffd7cd } );
        let wireframe = new THREE.LineSegments( geo, mat );
        mesh.add( wireframe );
        contador += 1;
    }
    contador = 0;
    for ( let j of json_lotes.features ) {
        let points = [];
        for ( let i of j.geometry.coordinates[0]) {
            coord = [i[1], i[0]];
            east = coord[1];
            north = coord[0];
            points.push(new THREE.Vector3(east-origemx, north-origemy, 0))
        }
        let geometry = new THREE.BufferGeometry().setFromPoints(points);
        let material = new THREE.LineBasicMaterial( { 
            color: 0x8a8a87,
        });
        let line = new THREE.Line( geometry, material );
        scene.add( line );
        contador += 1;
    }
}

// Função para criar os story cards //
function CreateStoryCard(card, number) {
    const li = document.createElement("li");
    li.classList.add('story_item', 'story_container_' + number);
    if (number >= 4) {
        li.classList.add('no_show');
    }
    const a = document.createElement("a");
    a.classList.add("story_card");

    const graph = document.createElement("div");
    graph.id = "story_card_graph_" + number;
    graph.classList.add('story_card_graph');

    const sub_graph = document.createElement("div");
    sub_graph.id = "story_card_subgraph_" + number;
    sub_graph.classList.add('story_card_subgraph');
  
    const content = document.createElement("div");
    content.classList.add("story_card_content");

    const img = document.createElement("img");
    img.src = card.imgSrc;
    img.alt = "";
    img.classList.add("story_card_image");
    content.appendChild(img);
  
    const header = document.createElement("div");
    header.classList.add("story_card_header");
  
    const headerText = document.createElement("div");
    headerText.classList.add("story_card_header-text");
  
    const title = document.createElement("h3");
    title.classList.add("story_card_title");
    title.textContent = card.title;
    headerText.appendChild(title);
  
    if (card.tagline) {
      const tagline = document.createElement("span");
      tagline.classList.add("story_card_tagline");
      tagline.textContent = card.tagline;
      headerText.appendChild(tagline);
    }
  
    const status = document.createElement("span");
    status.classList.add("story_card_status");
    status.textContent = card.status;
    headerText.appendChild(status);
  
    header.appendChild(headerText);
    content.appendChild(header);
  
    const description = document.createElement("p");
    description.classList.add("story_card_description");
    description.textContent = card.description;
    content.appendChild(description);
  
    a.appendChild(content);
    a.appendChild(graph);
    a.appendChild(sub_graph);
    li.appendChild(a);
  
    return li;
}

// Função para criar o conteúdo de cada componente da página de projetos //
function ComponentBuilder(item, div, StoryData, InfoData) {
    if (item == 'item_1') {
        const aboutContainer = document.createElement("div");
        aboutContainer.id = "aboutContainer"
        div.appendChild(aboutContainer);
        const capa = document.createElement('div');
        capa.id = 'info_capa';
        aboutContainer.appendChild(capa);
        const titulo = document.createElement('div');
        titulo.id = 'info_titulo';
        aboutContainer.appendChild(titulo);
        const texto = document.createElement('div');
        texto.id = 'info_texto';
        aboutContainer.appendChild(texto);
        for (const key in InfoData) {
            if (key == 'imgSrc') {
                let img = document.createElement('img');
                img.src = `${InfoData[key]}`;
                capa.appendChild(img);
            } else if (key == 'texto') {
                texto.innerText = `${InfoData[key]}`;
            } else if (key == 'titulo') {
                titulo.innerText = `${InfoData[key]}`;
            }
        };
    }
    else if (item == 'item_2') {
        const cardsContainer = document.createElement("ul");
        cardsContainer.classList.add("story_card");
        let number = 1;
        StoryData.forEach(card => {
            const cardElement = CreateStoryCard(card, number);
            cardsContainer.appendChild(cardElement);
            number = number + 1;
        });
        div.appendChild(cardsContainer);
        let items = div.querySelectorAll('.story_item');
        let numItems = items.length;
        items.forEach(item => {
            item.addEventListener('click', function() {
                const currentClass = item.classList[1];
                if (currentClass === 'story_container_1') {
                    items.forEach(otherItem => {
                        otherItem.classList.remove('no_show');
                        let classe = otherItem.classList[1];
                        let number = parseInt(classe.split('_')[2]);
                        if (number == 2) {
                            otherItem.classList.remove('story1_to_story2');
                            otherItem.classList.remove('story3_to_story2');
                        }
                        number = number + 1;
                        if (number > numItems){
                            number = 1;
                        }
                        let newclasse = `story_container_${number}`;
                        otherItem.classList.remove(classe);
                        otherItem.classList.add(newclasse);
                        if (number == 2) {
                            otherItem.classList.add('story1_to_story2');
                        }
                        if (number >= 4) {
                            otherItem.classList.add('no_show');
                        }
                    });
                } 
                else if (currentClass === 'story_container_3') {
                    items.forEach(otherItem => {
                        otherItem.classList.remove('no_show');
                        let classe = otherItem.classList[1];
                        let number = parseInt(classe.split('_')[2]);
                        if (number == 2) {
                            otherItem.classList.remove('story3_to_story2');
                            otherItem.classList.remove('story1_to_story2');
                        }
                        number = number - 1;
                        if (number < 1){
                            number = numItems;
                        }
                        let newclasse = `story_container_${number}`;
                        otherItem.classList.remove(classe);
                        otherItem.classList.add(newclasse);
                        if (number == 2) {
                            otherItem.classList.add('story3_to_story2');
                        }
                        if (number >= 4) {
                            otherItem.classList.add('no_show');
                        }
                    });
                }
            });
        });
    }
}

// Função para criar os gráficos com plotly //
function GraphBuilder(cards) {
    let graficos = document.getElementsByClassName('story_card_graph');
    let subgraficos = document.getElementsByClassName('story_card_subgraph');
    let number = 0;
    cards.forEach(card => {
        if (card.g_type == 'graph') {
            Plotly.newPlot(graficos[number], card.data.data1, card.data.layout, {displayModeBar: false,});
        }
        else if (card.g_type == 'map') {
            let map_card = L.map(graficos[number], {
                zoomControl:false, 
                maxZoom:22, 
                minZoom:10, 
                zoomDelta: 0.60, 
                zoomSnap: 0.20, 
                wheelPxPerZoomLevel: 100, 
                attributionControl: false,
            }).setView([card.lat,card.long], card.zoom);
            function style_limites_municipais_card() {
                return {
                    pane: 'pane_limites_municipais_card',
                    opacity: 1,
                    color: '#BCBEC0',
                    dashArray: '',
                    lineCap: 'butt',
                    lineJoin: 'miter',
                    weight: 0.5, 
                    fill: true,
                    fillOpacity: 1,
                    fillColor: '#ffffff',
                    interactive: false,
                }
            }
            //aqui municipio

            
            let json_limites_municipais = fetchWFS('portal_dados:municipios_sp');
            map_card.createPane('pane_limites_municipais_card');
            map_card.getPane('pane_limites_municipais_card').style.zIndex = 400;
            map_card.getPane('pane_limites_municipais_card').style['mix-blend-mode'] = 'normal';
            let layer_limites_municipais_card = new L.geoJson(json_limites_municipais, {
                attribution: '',
                interactive: false,
                dataVar: 'json_limites_municipais',
                layerName: 'layer_limites_municipais_card',
                pane: 'pane_limites_municipais_card',
                style: style_limites_municipais_card,
                renderer: L.svg(),
                smoothFactor: 0,
            })
            map_card.addLayer(layer_limites_municipais_card);
            window.addEventListener('resize', function() {
                map_card.invalidateSize(); // Atualiza o tamanho do mapa quando a janela é redimensionada
            });
            for ( let i = 0; i < card.layers.length; i ++ ) {
                if (card.layers[i].servertype == 'wms') {
                    let wmsLayer = L.tileLayer.wms(card.layers[i].server, {
                        layers: card.layers[i].layer,
                        format: 'image/png',
                        transparent: true,
                        pane: 'pane_limites_municipais_card',
                    })
                }
                map_card.addLayer(wmsLayer);
            }
            let items = document.querySelectorAll('.story_item');
            items.forEach(item => {
                if (item.firstChild.childNodes[1].id == 'story_card_graph_5' || 
                    item.firstChild.childNodes[1].id == 'story_card_graph_1') {
                    item.addEventListener('animationend', function() {
                        map_card.invalidateSize();
                    });
                }
            });
            if (card.data) {
                Plotly.newPlot(subgraficos[number], card.data.data1, card.data.layout, {displayModeBar: false,});
            }
        }
        else if (card.g_type == '3d') {
            let utm = new UTMLatLng();
            const scene = new THREE.Scene();
            scene.background = new THREE.Color( 0xffffff );
            let proporcao = 2;
            const camera = new THREE.PerspectiveCamera( 75, proporcao, 0.1, 1000 );
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            graficos[number].appendChild( renderer.domElement );
            let origemx = card.origemx;
            let origemy = card.origemy;
            const origem = utm.convertLatLngToUtm(origemy, origemx, 4);
            origemx = origem.Easting;
            origemy = origem.Northing;
            shapes(origemx, origemy, edificacao, quadra, camera, utm, scene);
            let raio = 2;
            let circleGeometry = new THREE.CircleGeometry(raio, 32);
            let circleMaterial = new THREE.MeshBasicMaterial({ color: 0xfe9d82, side: THREE.DoubleSide });
            let circleMesh = new THREE.Mesh(circleGeometry, circleMaterial);
            circleMesh.position.set(-10, 110, -0.1);
            scene.add(circleMesh);
            camera.position.set(0, -100, 150 );
            camera.lookAt(-10, 150, 0);
            let degree = 0;
            let degreesPerSecond = 1;
            let clock = new THREE.Clock();
            function updateCameraPosition(degrees) {
                let radians = THREE.MathUtils.degToRad(degrees+180);
                let x = 150 * Math.cos(radians);
                const z = 150;
                let y = 150 * Math.sin(radians);
                camera.position.set(x, y, z);
                camera.up.set(0, 0, 1)
                camera.lookAt(-10, 150, 0);
            }
            function animate() {
                if (!card.isAnimate) return;
                degree += degreesPerSecond * clock.getDelta();;
                if (degree >= 360) {
                    degree -= 360;
                }
                updateCameraPosition(degree);
                raio += 0.5;
                if (raio > 150) {
                    raio = 2;
                }
                circleMesh.geometry.dispose();
                circleMesh.geometry = new THREE.CircleGeometry(raio, 32);
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            }
            animate();
        }
        number = number + 1;
    });   
}

/*// Função para criar a página dos projetos //
function ProjetctPageBuilder(project) {
    // Cria os elementos principais da página
    let header = document.createElement('div');
    header.id = 'header';
    project.appendChild(header);
    let titulo = document.createElement('div');
    titulo.id = 'titulo_projeto';
    titulo.classList.add('titulo');
    titulo.innerText = 'Acesso a Oportunidades do Plano Diretor de São Paulo';
    header.appendChild(titulo);
    let imagem = document.createElement('div');
    imagem.id = 'image1';
    imagem.classList.add('header_images');
    header.appendChild(imagem);
    let imagem2 = document.createElement('div');
    imagem2.id = 'image2';
    imagem2.classList.add('header_images');
    header.appendChild(imagem2);
    let imagem3 = document.createElement('div');
    imagem3.id = 'image3';
    imagem3.classList.add('header_images');
    header.appendChild(imagem3);
    let body = document.createElement('div');
    body.id = 'body';
    project.appendChild(body);
    let info_buttons_bar = document.createElement('div');
    info_buttons_bar.id = 'info_buttons_bar';
    body.appendChild(info_buttons_bar);
    let content = document.createElement('div');
    content.id = 'content';
    body.appendChild(content);

    // Objeto com as características dos botões principais da página de projetos
    const items = [
        { text: "Sobre a Pesquisa", icon1: "about_button", icon2: "item_1" },
        { text: "Histórias", icon1: "story_button", icon2: "item_2" },
        { text: "Repercursão dos Estudos", icon1: "news_button", icon2: "item_3" },
        { text: "Parceiros e Equipe", icon1: "staff_button", icon2: "item_4" },
        { text: "Repositório de Dados", icon1: "downloads_button", icon2: "item_5" }
    ];
    
    // Cria a lista de botões
    const ul = document.createElement('ul');
    ul.id = 'lista_info';

    // Iteração para criação dos botões dentro da lista
    items.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.classList.add('item');
        a.id = item.icon2;
        
        const icon1 = document.createElement('i');
        icon1.id = item.icon1;
        icon1.className = 'left-icon';
        
        a.appendChild(icon1);
        a.appendChild(document.createTextNode(item.text));
        
        li.appendChild(a);
        ul.appendChild(li);
    });
    info_buttons_bar.appendChild(ul);

    // Cria os containers que serão ativados por cada um dos botões
    let stories = document.createElement('div');
    stories.id = 'stories';
    stories.classList.add('body_content');
    let info = document.createElement('div');
    info.id = 'info';
    info.classList.add('body_content');
    let rep = document.createElement('div');
    rep.id = 'repercussion';
    rep.classList.add('body_content');
    let staff = document.createElement('div');
    staff.id = 'staff';
    staff.classList.add('body_content');

    // Adiciona o event listner para os botões principais do projeto
    const ContainerDivMap = {
        "item_1": info,
        "item_2": stories,
        "item_3": rep,
        "item_4": staff
    };
    const action_buttons = info_buttons_bar.querySelectorAll('.item');
    action_buttons.forEach(button => {
    button.addEventListener('click', () => {
        action_buttons.forEach(btn => {
            btn.classList.remove('clicked');
        });
        button.classList.add('clicked');
        const mainContent = document.getElementById("content");
        while (mainContent.firstChild) {
            while (mainContent.firstChild.firstChild) {
                mainContent.firstChild.innerHTML = '';
            }
            mainContent.innerHTML = '';
        }
        const div = ContainerDivMap[button.id];
        ComponentBuilder(button.id, div, StoryData, InfoData);
        mainContent.appendChild(div);
        if (button.id == 'item_2') {
            GraphBuilder(StoryData);
        }
        div.classList.add("display");
        });
    });
}*/

// Adiciona o event listner para os botoões do menu_projeto //
const iframeDivMap = {
    "acessopde_button": iframe_acessopde,
    //"projeto2_button": projeto2,
};
const projeto_buttons = menu_projeto.querySelectorAll('.menu_projeto_button');
projeto_buttons.forEach(button => {
    button.addEventListener('click', () => {
        projeto_buttons.forEach(btn => {
            btn.classList.remove('clicked');
        });
        button.classList.add('clicked');
        const div = iframeDivMap[button.id];
        while (div.firstChild) {
            div.innerHTML = '';
        }
        const mainContent = document.getElementById("content_projeto");
        while (mainContent.firstChild) {
            mainContent.innerHTML = '';
        }
        mainContent.appendChild(div);
        div.classList.add("display");
        ProjectPageBuilder(div, $);
        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        const info = document.getElementById('item_1');
        info.dispatchEvent(event);
    });
});

// Cria e adiciona o botão de seta para menu no div de projetos //
let seta_button_projeto = document.createElement("div");
seta_button_projeto.id = "seta_button_projeto";
seta_button_projeto.classList.add("main_map_button");
main_projeto.appendChild(seta_button_projeto);

// Adiciona event listner para abrir ou fechar o menu_projeto do div de projetos //
seta_button_projeto.addEventListener('click', function() {
    let textos = document.getElementsByClassName("menu_projeto_text");
    let botoes = document.getElementsByClassName("menu_projeto_button");
    if (seta_button_projeto.classList.contains("clicked")) {
        seta_button_projeto.classList.remove("clicked");
        menu_projeto.classList.remove("opened");
        menu_projeto.classList.add("closed");
        content_projeto.classList.remove("narrow");
        content_projeto.classList.add("wide");
        for (let i = 0; i < textos.length; i++) {
            botoes[i].classList.remove("opened");
            botoes[i].classList.add("closed");
            textos[i].classList.remove("display");
            textos[i].classList.add("no_display");
        }
    } else if (!seta_button_projeto.classList.contains("clicked")) {
        seta_button_projeto.classList.add("clicked");
        menu_projeto.classList.remove("closed");
        menu_projeto.classList.add("opened");
        content_projeto.classList.remove("wide");
        content_projeto.classList.add("narrow");
        for (let i = 0; i < textos.length; i++) {
            botoes[i].classList.remove("closed");
            botoes[i].classList.add("opened");
            textos[i].classList.remove("no_display");
            textos[i].classList.add("display");
        }
    }
});

//Cria o div principal do Observatório//
const main_oms = document.createElement('div');
main_oms.id = 'main_oms';
main_oms.className = 'container';
main_oms.style.height = '100%';
main_oms.style.width = '100%';
main_oms.style.position = 'absolute';

// Cria o div de menu de projetos no div de projetos //
const menu_oms = document.createElement('div');
menu_oms.id = 'menu_oms';
menu_oms.className = 'closed';
main_oms.appendChild(menu_oms);

// Cria o div de content de projetos no div de projetos //
const content_oms = document.createElement('div');
content_oms.id = 'content_oms';
content_oms.className = 'wide';
main_oms.appendChild(content_oms);

// Cria e adiciona o botão de pagina oms e seu texto no div menu_oms e o iframe htlm//
let page_oms_button = document.createElement("div");
page_oms_button.id = "page_oms_button";
page_oms_button.classList.add("menu_oms_button", "opened", "clicked");
menu_oms.appendChild(page_oms_button);
let page_oms_texto = document.createElement('div');
page_oms_texto.id = "page_oms_texto";
page_oms_texto.classList.add("menu_oms_text", "display");
page_oms_texto.textContent = "Home";
page_oms_button.appendChild(page_oms_texto);
let iframe_oms = document.createElement('iframe');
iframe_oms.src = "./projeto/projeto.html";
iframe_oms.style.width = "100%";
iframe_oms.style.height = "100%";
iframe_oms.frameBorder = "0";
content_oms.appendChild(iframe_oms);

// Cria e adiciona o botão de pagina oms e seu texto no div menu_oms e o iframe htlm//
let map_oms_button = document.createElement("div");
map_oms_button.id = "map_oms_button";
map_oms_button.classList.add("menu_oms_button", "opened");
menu_oms.appendChild(map_oms_button);
let map_oms_texto = document.createElement('div');
map_oms_texto.id = "map_oms_texto";
map_oms_texto.classList.add("menu_oms_text", "display");
map_oms_texto.textContent = "Visualizador Geográfico";
map_oms_button.appendChild(map_oms_texto);
let map_oms = document.createElement('div');
map_oms.id = "map_oms";
map_oms.style.width = "100%";
map_oms.style.height = "100%";
content_oms.appendChild(map_oms);
let map_oms_leaflet = L.map(map_oms, {
    zoomControl:false, maxZoom:22, minZoom:10, zoomDelta: 0.60, zoomSnap: 0.20, wheelPxPerZoomLevel: 100
}).setView([-23.6738,-46.5216], 10.6);

// Adiciona o event listner para os botoões do menu_oms //
const OMS_div_itens = {
    "page_oms_button": iframe_oms,
    "map_oms_button": map_oms,
};
const oms_buttons = menu_oms.querySelectorAll('.menu_oms_button');
oms_buttons.forEach(button => {
    button.addEventListener('click', () => {
        oms_buttons.forEach(btn => {
            btn.classList.remove('clicked');
        });
        button.classList.add('clicked');
        const div = OMS_div_itens[button.id];
        console.log(div);
        while (div.firstChild) {
            div.innerHTML = '';
        }
        const mainContent = document.getElementById("content_oms");
        while (mainContent.firstChild) {
            mainContent.innerHTML = '';
        }
        mainContent.appendChild(div);
        div.classList.add("display");
    });
});

// Cria e adiciona o botão de seta para menu no div de projetos //
let seta_button_oms = document.createElement("div");
seta_button_oms.id = "seta_button_oms";
seta_button_oms.classList.add("main_map_button");
main_oms.appendChild(seta_button_oms);

// Adiciona event listner para abrir ou fechar o menu_oms do div de oms //
seta_button_oms.addEventListener('click', function() {
    let textos = document.getElementsByClassName("menu_oms_text");
    let botoes = document.getElementsByClassName("menu_oms_button");
    if (seta_button_oms.classList.contains("clicked")) {
        seta_button_oms.classList.remove("clicked");
        menu_oms.classList.remove("opened");
        menu_oms.classList.add("closed");
        content_oms.classList.remove("narrow");
        content_oms.classList.add("wide");
        for (let i = 0; i < textos.length; i++) {
            botoes[i].classList.remove("opened");
            botoes[i].classList.add("closed");
            textos[i].classList.remove("display");
            textos[i].classList.add("no_display");
        }
    } else if (!seta_button_oms.classList.contains("clicked")) {
        seta_button_oms.classList.add("clicked");
        menu_oms.classList.remove("closed");
        menu_oms.classList.add("opened");
        content_oms.classList.remove("wide");
        content_oms.classList.add("narrow");
        for (let i = 0; i < textos.length; i++) {
            botoes[i].classList.remove("closed");
            botoes[i].classList.add("opened");
            textos[i].classList.remove("no_display");
            textos[i].classList.add("display");
        }
    }
});

//Cria o div principal do data storytelling//
const main_st = document.createElement('div');
main_st.id = 'main_st';
main_st.className = 'container';
main_st.style.height = '100%';
main_st.style.width = '100%';
main_st.style.position = 'absolute';

//Cria o div principal de interatividade//
const main_interatividade = document.createElement('div');
main_interatividade.id = 'main_interatividade';
main_interatividade.className = 'container';
main_interatividade.style.height = '100%';
main_interatividade.style.width = '100%';
main_interatividade.style.position = 'absolute';

//Cria o div principal de downloads//
const main_download = document.createElement('div');
main_download.id = 'main_download';
main_download.className = 'container';
main_download.style.height = '100%';
main_download.style.width = '100%';
main_download.style.position = 'absolute';
let iframe_download = document.createElement('iframe');
iframe_download.src = "https://dataverse.datascience.insper.edu.br/dataverse/portal-dados-urbanos";
iframe_download.style.width = "100%";
iframe_download.style.height = "100%";
iframe_download.frameBorder = "0";
main_download.appendChild(iframe_download);

//Cria o div principal do mapa//
const main_map = document.createElement('div');
main_map.id = 'main_map';
main_map.className = 'container';
main_map.style.height = '100%';
main_map.style.width = '100%';
main_map.style.position = 'absolute';
document.getElementById('main_content').appendChild(main_map);

// Constrói o div DataBar e adiciona ao main_map //
let databar = document.createElement('div');
databar.id = 'DataBar';
databar.className = 'placed';
databar.classList.add('no_show');
main_map.appendChild(databar);
L.DomEvent.disableClickPropagation(databar);
L.DomEvent.disableScrollPropagation(databar);
SimpleScrollbar.initEl(document.getElementById("DataBar"));

// Constrói o div Legenda e adciona ao main_map //
let legenda = document.createElement('div');
legenda.id = 'Legenda';
legenda.className = 'no_show';
main_map.appendChild(legenda);
L.DomEvent.disableClickPropagation(legenda);
L.DomEvent.disableScrollPropagation(legenda);
SimpleScrollbar.initEl(document.getElementById("Legenda"));

// Constrói o div logo e seus filhos e adiciona no main_map //
const logo = document.createElement('div');
logo.id = 'logo';
const logo_insper = document.createElement('div');
logo_insper.id = 'logo_insper';
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
main_map.appendChild(logo);
main_map.appendChild(logo_insper);
document.addEventListener('DOMContentLoaded', () => {
    const emText = document.getElementById('em');
    const cidadeText = document.getElementById('cidade');
    const dadosText = document.getElementById('dados');
    const cidadosText = document.getElementById('cidados');
    const portalText = document.getElementById('portal');
    const portalbg = document.getElementById('bg');

    setTimeout(() => {
        emText.classList.add('hidden');
    }, 1000); // Desaparecimento do em inicial após 1 segundos

    setTimeout(() => {
        cidadeText.classList.add('collide_to_right');
        dadosText.classList.add('collide_to_left');
    }, 2000); // Colisão após 2 segundos

    setTimeout(() => {
        cidadeText.classList.add('hidden');
        dadosText.classList.add('hidden');
        cidadosText.classList.remove('hidden');
    }, 3000); // Exibição de "Cidados" após 4 segundos

    setTimeout(() => {
        portalText.classList.remove('hidden');
        portalbg.classList.remove('hidden');
        portalbg.classList.add('move');
    }, 4000); // Exibição de "Portal" após 5 segundos
});


// Constrói o div main_tools e adiciona no main_map //
let main_tools = document.createElement('div');
main_tools.id = 'main_tools';
main_tools.className = 'closed';
main_map.appendChild(main_tools);
L.DomEvent.disableClickPropagation(main_tools);
L.DomEvent.disableScrollPropagation(main_tools);

// Constrói o div camadas_layer e adiciona ao main_tools //
let camadas_layer = document.createElement('div');
camadas_layer.id = 'camadas_layer';
camadas_layer.classList.add('main_tools_layers', 'roll');
main_tools.appendChild(camadas_layer);

// Constrói o droplist de cidades
const dropdown = document.createElement('div');
dropdown.classList.add('dropdown');
const CityButton = document.createElement('div');
CityButton.id = 'SelectedOption';
CityButton.className = 'dropbtn';
CityButton.innerHTML = 'São Paulo';
dropdown.appendChild(CityButton);
const dropdownContent = document.createElement('ul');
dropdownContent.id = 'Dropdown';
dropdownContent.classList.add('dropdown-content', 'no_show');
const cidades = [
  { id: 'sp', camada: 'portal_dados:municipios_sp', nome: 'São Paulo', coord: { lat: -23.5470, long: -46.6339}, nordeste: { lat: -23.0, long: -44.2}, sudoeste: { lat: -23.0, long: -44.2} },
  { id: 'rj', camada: 'portal_dados:municipios_rj', nome: 'Rio de Janeiro', coord: {lat: -22.9275, long: -43.4143}, nordeste: { lat: -20.6635, long: -40.9848}, sudoeste: { lat: -23.3866, long: -44.8497} },
  { id: 'noi', camada: 'portal_dados:municipios_rj', nome: 'Niterói', coord: { lat: -22.9084, long: -43.0543}, nordeste: { lat: -20.6635, long: -40.9848}, sudoeste: { lat: -23.3866, long: -44.8497} }
];
cidades.forEach(cidade => {
  const li = document.createElement('li');
  li.id = cidade.id;
  li.classList.add('DropOption');
  li.innerHTML = cidade.nome;
  dropdownContent.appendChild(li);
});
dropdown.appendChild(dropdownContent);
document.body.appendChild(dropdown);
CityButton.addEventListener('click', CityOptions);
function CityOptions() {
    let lista = document.getElementById("Dropdown").classList;
    if (lista.contains('no_show')) {
        lista.remove("no_show");
    } else {
        lista.add("no_show");
    }
}

//Função para mudar a cidade
async function changeCity(event) {
    let current_city = event.target.innerText;
    document.getElementById('SelectedOption').innerText = current_city;
    await new Promise(resolve => setTimeout(resolve, 1500));
    cidades.forEach(cidade => {
        if (cidade.nome == current_city) {
            let camadas = getSelectedElementsTree();
            if (camadas.length > 0 ){
                camadas.forEach(camada => {
                    removeLayerFromGroup(backend_layers_group, camada.id);
                    AddDataBar(noUiSlider, backend_layers_group, [], $(div_tree));
                });
            }
            vetor_camadas = [];
            vetor_camadas_text = [];
            $('#tree').jstree('destroy');
            bounds_group.removeLayer(layer_limites_municipais);
            map.removeLayer(layer_limites_municipais);
            json_limites_municipais = fetchWFS(cidade.camada.toString());
            layer_limites_municipais = new L.geoJson(json_limites_municipais, {
                attribution: '',
                interactive: false,
                dataVar: 'json_limites_municipais',
                layerName: 'layer_limites_municipais',
                pane: 'pane_limites_municipais',
                style: style_limites_municipais,
                renderer: L.canvas(),
                smoothFactor: 0,
            })
            bounds_group.addLayer(layer_limites_municipais);
            map.addLayer(layer_limites_municipais);
            //sudoeste = L.latLng(-36.312668870703455, -75.33239427789226);
            //nordeste = L.latLng(7.103916933041202, -32.178097913980785);
            //bounds = L.latLngBounds(sudoeste, nordeste)
            //sudoeste = L.latLng(cidade.sudoeste.lat, cidade.sudoeste.long);
            //nordeste = L.latLng(cidade.nordeste.lat, cidade.nordeste.long);
            map.flyTo([cidade.coord.lat, cidade.coord.long], 11);
            //bounds = L.latLngBounds(sudoeste, nordeste);
            label();
            TreeBuilder($, cidade.id);
            MakeTreeOn();
        }
    })
}
let gif = document.createElement('div');
gif.id = 'loading_gif';
gif.classList.add('no_show');
document.getElementById('app').appendChild(gif);
window.onclick = async function(event) {
    if(event.target.matches('.DropOption')) {
        gif.classList.toggle('no_show');
        await changeCity(event);
        let botoes = ferramentas_layer.querySelectorAll('.ferramentas_icone');
        botoes.forEach(botao => {
            if(botao.classList.contains('clicked')){
                botao.click();
            };     
        });
        gif.classList.toggle('no_show');
        
    }
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('no_show')) {
                openDropdown.classList.add('no_show');
            }
        }
    }
}

// Constrói a árvore de camadas e adiciona na camada_layer //
let div_tree = document.createElement("div");
div_tree.id = "tree";
div_tree.className = "arvore";
camadas_layer.appendChild(div_tree);
TreeBuilder($, 'sp');
SimpleScrollbar.initEl(document.getElementById("camadas_layer"));
camadas_layer.insertBefore(dropdown, camadas_layer.firstChild);
let vetor_camadas = [];
let vetor_camadas_text = [];
MakeTreeOn();
function MakeTreeOn() {
    $('#tree').on('changed.jstree', function () {
        let vetor_camadas_novo = getSelectedElementsTree();
        let vetor_camadas_novo_id = [...vetor_camadas_novo].map(element => element.id);
        let vetor_camadas_novo_text = [...vetor_camadas_novo].map(element => element.text);
        if (vetor_camadas_novo_id.length > vetor_camadas.length) {
            let item = vetor_camadas_novo_id.filter(element => !vetor_camadas.includes(element))[0];
            let item_text = vetor_camadas_novo_text.filter(element => !vetor_camadas_text.includes(element))[0];
            let wmsLayer = L.tileLayer.wms('https://geoserver.datascience.insper.edu.br/geoserver/ows?', {
                layers: item,
                format: 'image/png',
                transparent: true,
                pane: 'pane_backend',
                layerName: item,
            })
            backend_layers_group.addLayer(wmsLayer);
            map.addLayer(wmsLayer);
            if (vetor_camadas.length == 0) {
                legenda.classList.remove('no_show');
                legendas.classList.add("clicked");
            }
            let legenda_titulo = document.createElement('div');
            legenda_titulo.id = 'legenda_titulo:'+item;
            legenda_titulo.className = 'legenda_titulo';
            legenda_titulo.innerText = item_text;
            legenda.firstChild.firstChild.appendChild(legenda_titulo);
            let legenda_in = document.createElement('div');
            legenda_in.id = 'legenda:'+item;
            legenda_in.className = 'legenda_in';
            legenda_in.innerHTML = "<img src='https://geoserver.datascience.insper.edu.br/geoserver/ows?service=WMS&version=1.3.0&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer="+item+"'/>";
            legenda.firstChild.firstChild.appendChild(legenda_in);
            setTimeout(() => {
                ajustarAltura(legenda, 250)
            }, 500);
            //let dados = fetchWFS(item);
            //console.log(dados);
        }
        if ( vetor_camadas_novo_id.length < vetor_camadas.length ) {
            let item = vetor_camadas.filter(element => !vetor_camadas_novo_id.includes(element))[0];
            removeLayerFromGroup(backend_layers_group, item);
            if (vetor_camadas.length == 1) {
                legenda.classList.add('no_show');
                legendas.classList.remove("clicked");
            }
        }
        vetor_camadas = vetor_camadas_novo_id;
        vetor_camadas_text = vetor_camadas_novo_text;
        if (vetor_camadas.length > 0 && [...opacidade.classList].includes('clicked')) {
            databar.classList.remove('no_show');
        } else if (vetor_camadas.length == 0 && [...opacidade.classList].includes('clicked')) {
            opacidade.click();
        } 
        else {
            databar.classList.add('no_show');
        }
        AddDataBar(noUiSlider, backend_layers_group, vetor_camadas_novo, $(div_tree));
    });
}
function ajustarAltura(div, max) {
    let pai = div.firstChild.firstChild;
    let filhas = pai.getElementsByClassName("legenda_in");
    let alturas = 0;
    let larguras = 0;
    for (let i = 0; i < filhas.length; i++) {
        let altura = filhas[i].offsetHeight;
        let largura = filhas[i].offsetWidth;
        alturas = alturas + altura + 19.5 + 15;
        larguras = Math.max(larguras, largura);
    }
    div.style.height = Math.min(alturas, max) + "px";
}
function removeLayerFromGroup(group, item) {
    document.getElementById('legenda:'+item).remove();
    document.getElementById('legenda_titulo:'+item).remove();
    group.eachLayer(function(layer) {
        if (layer.options && layer.options.layerName == item) {
            map.removeLayer(layer);
            group.removeLayer(layer);
        }
    });
    ajustarAltura(legenda, 250);
}
function getSelectedElementsTree() {
    let arvore = $(div_tree).jstree(true).get_json('#', {flat:true});
    let tamanho = arvore.length;
    let vetor = [];
    for (let i = 0; i < tamanho; i++) {
        if (arvore[i].a_attr.class.includes('splus') && arvore[i].state.selected == true){
            vetor.push(arvore[i]);
        }
    }
    return(vetor);
}

// Constrói o div ferramentas_layer e adiciona ao main_tools //
let ferramentas_layer = document.createElement('div');
ferramentas_layer.id = 'ferramentas_layer';
ferramentas_layer.classList.add('main_tools_layers', 'roll');

// Constrói os ícones das ferramentas //
let opacidade = document.createElement('div');
opacidade.id = 'opacidade';
opacidade.classList.add('ferramentas_icone');
ferramentas_layer.appendChild(opacidade);
opacidade.addEventListener('click', () => {
    if (opacidade.classList.contains("clicked")) {
        opacidade.classList.remove("clicked");
        databar.classList.add('no_show');
        logo_insper.classList.remove('to_left');
    } else if (!opacidade.classList.contains("clicked")) {
        if ( vetor_camadas.length > 0 ) {
            opacidade.classList.add("clicked");
            databar.classList.remove('no_show');
            logo_insper.classList.add('to_left');
        } else {
            alert("Não há camadas selecionadas!");
        }
    }
});
let opacidade_img = document.createElement('div');
opacidade_img.classList.add('ferramentas_img');
opacidade.appendChild(opacidade_img);
let opacidade_texto = document.createElement('div');
opacidade_texto.classList.add('ferramentas_texto');
opacidade_texto.innerText = 'Opacidade';
opacidade.appendChild(opacidade_texto);

let legendas = document.createElement('div');
legendas.id = 'legendas';
legendas.classList.add('ferramentas_icone');
ferramentas_layer.appendChild(legendas);
legendas.addEventListener('click', () => {
    if (legendas.classList.contains("clicked")) {
        legendas.classList.remove("clicked");
        legenda.classList.add('no_show');
    } else if (!legendas.classList.contains("clicked")) {
        if ( vetor_camadas.length >0 ) {
            legendas.classList.add("clicked");
            legenda.classList.remove('no_show');
        } else {
            alert("Não há camadas selecionadas!");
        }
    }
});
let legendas_img = document.createElement('div');
legendas_img.classList.add('ferramentas_img');
legendas.appendChild(legendas_img);
let legendas_texto = document.createElement('div');
legendas_texto.classList.add('ferramentas_texto');
legendas_texto.innerText = 'Legendas';
legendas.appendChild(legendas_texto);



// Cria e adiciona o botão de camadas no div de ferramentas //
let camadas_button = document.createElement("div");
camadas_button.id = "camadas_button";
camadas_button.classList.add("main_tools_button", "clicked");
main_tools.appendChild(camadas_button);
let camadas_texto = document.createElement('div');
camadas_texto.id = "camadas_texto";
camadas_texto.classList.add("main_tools_text");
camadas_texto.textContent = "Camadas";
camadas_button.appendChild(camadas_texto);

// Cria e adiciona o botão de ferramentas no div de ferramentas //
let ferramentas_button = document.createElement("div");
ferramentas_button.id = "ferramentas_button";
ferramentas_button.classList.add("main_tools_button");
main_tools.appendChild(ferramentas_button);
let ferramentas_texto = document.createElement('div');
ferramentas_texto.id = "ferramentas_texto";
ferramentas_texto.classList.add("main_tools_text");
ferramentas_texto.textContent = "Ferramentas";
ferramentas_button.appendChild(ferramentas_texto);

// Adiciona o event listner de seleção das ferramentas //
const toolsDivMap = {
    "camadas_button": camadas_layer,
    "ferramentas_button": ferramentas_layer,
};
const tools_buttons = document.querySelectorAll('.main_tools_button');
tools_buttons.forEach(button => {
    button.addEventListener('click', () => {
        tools_buttons.forEach(btn => {
            btn.classList.remove('clicked');
        });
        button.classList.add('clicked');
        const div = toolsDivMap[button.id];
        const mainContent = document.getElementsByClassName("main_tools_layers");
        mainContent[0].classList.remove('roll');
        main_tools.removeChild(mainContent[0]);
        main_tools.appendChild(div);
        div.classList.add("roll");
    });
});

//Constrói o mapa no div main_map//
let map = L.map('main_map', {
    zoomControl:false, maxZoom:22, minZoom:10, zoomDelta: 0.60, zoomSnap: 0.20, wheelPxPerZoomLevel: 100
}).setView([-23.6738,-46.5216], 10.6);

// Cria e adiciona o botão de mais zoom no div main_map//
let zoomin_button = document.createElement("div");
zoomin_button.id = "zoomin_button";
zoomin_button.classList.add("main_map_button");
main_map.appendChild(zoomin_button);
L.DomEvent.disableClickPropagation(zoomin_button);

// Adiciona o event listner de dar zoom in ao clicar no botão//
let zoomInDiv = document.getElementById('zoomin_button');
zoomInDiv.addEventListener('click', function() {
    map.zoomIn();
});

// Cria e adiciona o botão de menos zoom no div main_map
let zoomout_button = document.createElement("div");
zoomout_button.id = "zoomout_button";
zoomout_button.classList.add("main_map_button");
main_map.appendChild(zoomout_button);
L.DomEvent.disableClickPropagation(zoomout_button);

// Adiciona o event listner de dar zoom out ao clicar no botão
let zoomOutDiv = document.getElementById('zoomout_button');
zoomOutDiv.addEventListener('click', function() {
    map.zoomOut();
});

// Cria e adiciona o botão de localização no div main_map
let localize_button = document.createElement("div");
localize_button.id = "localize_button";
localize_button.classList.add("main_map_button");
main_map.appendChild(localize_button);
L.DomEvent.disableClickPropagation(localize_button);

let locateControl = L.control.locate({
    locateOptions: {
        enableHighAccuracy: true, 
        maxZoom: 14,
    },
    strings: {
        title: "",
        metersUnit: "metros",
        feetUnit: "pés",
        popup: "Você está a um raio de {distance} {unit} desse ponto",
        outsideMapBoundsMsg: "Você fora dos limites do mapa"
    },
    markerStyle: {
        weight: 0.5,
        opacity: 0.9,
        fillOpacity: 0.7,
        color: '#C00026',
        fillColor: '#C00026'
    },
    circleStyle: {
        color: '#F69679',
        fillColor: '#F69679',
        fillOpacity: 0.15,
        weight: 1,
        opacity: 0.9
    },
}).addTo(map);
document.querySelector('.leaflet-control-locate').style.display = 'none';
document.getElementById('localize_button').addEventListener('click', function() {
    if (localize_button.classList.contains("clicked")) {
        localize_button.classList.remove("clicked");
        locateControl.stop();
    } else if (!localize_button.classList.contains("clicked")) {
        localize_button.classList.add("clicked");
        locateControl.start();
    }
});

// Cria e adiciona o botão de open street map no div main_map
let osm_button = document.createElement("div");
osm_button.id = "osm_button";
osm_button.classList.add("main_map_button");
main_map.appendChild(osm_button);
L.DomEvent.disableClickPropagation(osm_button);

// Adiciona o event listner de adicionar ou remover a camada de open street map
document.getElementById('osm_button').addEventListener('click', function() {
    if (osm_button.classList.contains("clicked")) {
        osm_button.classList.remove("clicked");
        map.removeLayer(layer_OpenStreetMap_0);
    } else if (!osm_button.classList.contains("clicked")) {
        osm_button.classList.add("clicked");
        map.addLayer(layer_OpenStreetMap_0);
    }
});

// Cria e adiciona o botão de seta para menu no div main_map
let seta_button = document.createElement("div");
seta_button.id = "seta_button";
seta_button.classList.add("main_map_button");
main_map.appendChild(seta_button);
L.DomEvent.disableClickPropagation(seta_button);

// Adiciona event listner para abrir ou fechar o main_tools do main_map
document.getElementById('seta_button').addEventListener('click', function() {
    if (seta_button.classList.contains("clicked")) {
        seta_button.classList.remove("clicked");
        logo_insper.classList.remove("clicked");
        main_tools.classList.remove("opened");
        main_tools.classList.add("closed");
        databar.classList.remove('displaced');
        databar.classList.add('placed');
    } else if (!seta_button.classList.contains("clicked")) {
        seta_button.classList.add("clicked");
        logo_insper.classList.add("clicked");
        main_tools.classList.remove("closed");
        main_tools.classList.add("opened");
        databar.classList.remove('placed');
        databar.classList.add('displaced');

    }
});


// Cria e adiciona o norte no div main_map
let norte = document.createElement("div");
norte.id = "norte";
main_map.appendChild(norte);

//Mostra o nível de zoom e coordenadas no endereço//
//let hash = new L.Hash(map);

//Cria o rodapé com links//
map.attributionControl.setPrefix('<a href="https://www.insper.edu.br/laboratorio-de-cidades/" title="Laboratório Arq.Futuro de Cidades"></a>');

//Cria hyperlinks automáticos para padrões específicos de texto como email, etc//
let autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});

//Cria a escala do mapa e adiciona classe a ela//
let escala = L.control.scale().addTo(map);
escala.getContainer().className += ' custom-scale';

//Cria um feature Group//
let bounds_group = new L.featureGroup([]);

//Cria um Layer Group//
let layers_group = new L.layerGroup([]);

//Cria um Layer Group para as camadas adicionadas pelo menu//
let backend_layers_group = new L.layerGroup([]);

//Cria um Pane para as camadas adicionadas pelo menu
map.createPane('pane_backend');
map.getPane('pane_backend').style.zIndex = 402;
map.getPane('pane_backend').style['mix-blend-mode'] = 'normal';

//Cria e impõe limites de enquadramento do mapa//
let sudoeste = L.latLng(-24.6, -48.99);
let nordeste = L.latLng(-23.0, -44.2);
let bounds = L.latLngBounds(sudoeste, nordeste);

//Cria o estilo da camada de limites municipais//
function style_limites_municipais() {
    return {
        pane: 'pane_limites_municipais',
        opacity: 1,
        color: '#BCBEC0',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 0.5, 
        fill: true,
        fillOpacity: 1,
        fillColor: '#ffffff',
        interactive: false,
    }
}

//Muda o estilo da camada de limites municipais de acordo com o nível de zoom//
function change_style_limites_municipais(){
    layer_limites_municipais.eachLayer(function (layer) {
        if (map.getZoom() >= 11.6 ) {
            layer.setStyle ({
                weight: 0.8,
            });
        } else {
            layer.setStyle ({
                weight: 0.3,
            });
        }
    })
}

// Cria a camada de open street map //
map.createPane('pane_OpenStreetMap_0');
map.getPane('pane_OpenStreetMap_0').id = "osm";
map.getPane('pane_OpenStreetMap_0').style.zIndex = 401;
let layer_OpenStreetMap_0 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    pane: 'pane_OpenStreetMap_0',
    opacity: 0.5,
    attribution: '',
    minZoom: 9,
    maxZoom: 30,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layers_group.addLayer(layer_OpenStreetMap_0);

//Cria a camada de Limites Municipais//
let json_limites_municipais = fetchWFS('portal_dados:municipios_sp');
map.createPane('pane_limites_municipais');
map.getPane('pane_limites_municipais').style.zIndex = 400;
map.getPane('pane_limites_municipais').style['mix-blend-mode'] = 'normal';
let layer_limites_municipais = new L.geoJson(json_limites_municipais, {
    attribution: '',
    interactive: false,
    dataVar: 'json_limites_municipais',
    layerName: 'layer_limites_municipais',
    pane: 'pane_limites_municipais',
    style: style_limites_municipais,
    renderer: L.canvas(),
    smoothFactor: 0,
})


//Adiciona a camada de Limites Municipais ao Feature Group//
bounds_group.addLayer(layer_limites_municipais);

//Adiciona a camada de Limites Municipais à visualização do mapa//
map.addLayer(layer_limites_municipais);

//Mostra o nome dos municípios da camada de Limites Municipais//
function label() {
    layer_limites_municipais.eachLayer(function(layer) {
        if ( String((layer.feature.properties['NM_MUN'])) != "SANTO ANDRÉ" ) {
            layer.bindTooltip(String((layer.feature.properties['NM_MUN'])), {
                direction: 'center',
                sticky: true,
                permanent: true }).openTooltip();
        } else {
            let poligono = L.polygon([[-23.659800, -46.520938], [-23.659800, -46.520938], [-23.659800, -46.52938], [-23.659800, -46.520938]], {color: 'transparent', interactive: false}).addTo(map);
            poligono.bindTooltip(String((layer.feature.properties['NM_MUN'])), {
            direction: 'center',
            sticky: true, 
            permanent: true,
            offset: [0,0] }).openTooltip();
        }
    });
}

//Cria o geocodificador//
let osmGeocoder = new L.Control.Geocoder({
    collapsed: true,
    position: 'topleft',
    text: 'Search',
    title: 'Testing',
    defaultMarkGeocode: false
}).addTo(map);

// Cria o ícone de localização para o geocoder //
let customIcon = L.icon({
    iconUrl: './icons/localizar_mapa.svg', // URL do seu ícone personalizado
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [19, 38], // Ponto de ancoragem do ícone (onde ele será posicionado)
    popupAnchor: [0, -38] // Ponto de ancoragem do popup (se você exibir um popup)
});

// Cria variável que armazenará as informações do marcador do mapa //
let marcador;

// Evento disparado quando um local é selecionado para indicar o nível de zoom do mapa //
osmGeocoder.on('markgeocode', function(e) {
    if (marcador) {
        map.removeLayer(marcador);
        marcador = null;
    }
    marcador = L.marker(e.geocode.center, { icon: customIcon }).addTo(map);
    map.setView(e.geocode.center, 19);
});

//Event Listners do mapa//
map.on("zoomend", function(){
    change_style_limites_municipais();
});
map.on("layeradd", function(){
});
map.on("layerremove", function(){
});
map.on("drag", function(){
    //map.panInsideBounds(bounds, { animate: false }); 
});
map.on("move", function(){
    //map.panInsideBounds(bounds, { animate: false });
});

label();

// Event listner para destacar botão do main_menu escolhido
const buttonDivMap = {
    "projeto_button": main_projeto,
    "st_button": main_oms,
    "interatividade_button": main_interatividade,
    "download_button": main_download,
    "mapa_button": main_map
};

const buttons = document.querySelectorAll('.clickable');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove('clicked');
        });
        button.classList.add('clicked');
        const div = buttonDivMap[button.id];
        const mainContent = document.getElementById("main_content");
        while (mainContent.firstChild) {
            mainContent.innerHTML = '';
        }
        mainContent.appendChild(div);
        div.classList.add("display");
    });
});






// Data for the cards
const cardData = [
    {
        imgSrc: "./icons/bg_city.svg",
        thumbSrc: "./icons/profile.svg",
        title: "Revisão do Plano Diretor de São Paulo",
        tagline: "Por Fulano de Tal",
        status: "Junho de 2024",
        description: "Revisão do plano diretor de 2014 é revisado: Saiba as principais mudanças que entram na lei."
    },
    {
        imgSrc: "./icons/metro.svg",
        thumbSrc: "./icons/profile.svg",
        title: "Novas Linhas de Metro",
        tagline: "Por Ciclano de Tal",
        status: "Junho de 2024",
        description: "As novas linhas de metro em construção e o impacto urbano das novas estações no plano diretor"
    },
    // Add more card data as needed
  ];
  
  // Function to create a card element
  function createCard(card) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#"; // You can set the link here
  
    a.classList.add("card");
  
    const img = document.createElement("img");
    img.src = card.imgSrc;
    img.alt = "";
    img.classList.add("card__image");
    a.appendChild(img);
  
    const overlay = document.createElement("div");
    overlay.classList.add("card__overlay");
  
    const header = document.createElement("div");
    header.classList.add("card__header");
  
    const arcSvg = document.createElementNS("https://www.w3.org/2000/svg", "svg");
    arcSvg.classList.add("card__arc");
    const path = document.createElementNS("https://www.w3.org/2000/svg", "path");
    arcSvg.appendChild(path);
    header.appendChild(arcSvg);
  
    const thumbImg = document.createElement("img");
    thumbImg.src = card.thumbSrc;
    thumbImg.alt = "";
    thumbImg.classList.add("card__thumb");
    header.appendChild(thumbImg);
  
    const headerText = document.createElement("div");
    headerText.classList.add("card__header-text");
  
    const title = document.createElement("h3");
    title.classList.add("card__title");
    title.textContent = card.title;
    headerText.appendChild(title);
  
    if (card.tagline) {
      const tagline = document.createElement("span");
      tagline.classList.add("card__tagline");
      tagline.textContent = card.tagline;
      headerText.appendChild(tagline);
    }
  
    const status = document.createElement("span");
    status.classList.add("card__status");
    status.textContent = card.status;
    headerText.appendChild(status);
  
    header.appendChild(headerText);
    overlay.appendChild(header);
  
    const description = document.createElement("p");
    description.classList.add("card__description");
    description.textContent = card.description;
    overlay.appendChild(description);
  
    a.appendChild(overlay);
    li.appendChild(a);
  
    return li;
  }
  
  // Function to initialize the list of cards
  function initializeCards() {
    const cardsContainer = document.createElement("ul");
    cardsContainer.classList.add("cards");
  
    cardData.forEach(card => {
      const cardElement = createCard(card);
      cardsContainer.appendChild(cardElement);
    });
  
    main_st.appendChild(cardsContainer);
}
  
// Initialize the list of cards
//initializeCards();

// URL reader
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    if (path.includes('/mapas')) {
        const myDiv = document.getElementById('mapa_button');
        if (myDiv && ![...myDiv.classList].includes('clicked')) {
            myDiv.dispatchEvent(event);
        }
    } else if (path.includes('/acessopde')) {
        const myDiv = document.getElementById('projeto_button');
        if (myDiv && ![...myDiv.classList].includes('clicked')) {
            myDiv.dispatchEvent(event);
            const myDiv2 = document.getElementById('projeto2_button');
            myDiv2.dispatchEvent(event);
            const myDiv3 = document.getElementById('item_2');
            myDiv3.dispatchEvent(event);
            console.log(isJsTreeLoaded());
        }
    }
});

// Verifica se a instância de JStree está carregada
function isJsTreeLoaded() {
    let treeInstance = $('#tree').jstree(true);
    return treeInstance !== undefined && treeInstance !== null;
}