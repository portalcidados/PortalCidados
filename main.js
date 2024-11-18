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
//import { json_limites_municipais } from './assets/data/limites_municipais.js';
import { TreeBuilder } from './assets/js/TreeBuilder.js';
import { AddDataBar } from './assets/js/AddDataBar.js';
import { ProjectPageBuilder } from './assets/js/ProjectPageBuilder.js';
//import { edificacao } from './assets/data/edificacao.js';
//import { quadra } from './assets/data/quadra.js';

/* Função para  carregar o CSS baseado no pixel ratio
async function loadStylesheet() {
    const pixelRatio = window.devicePixelRatio;
    let stylesheet;
    if (pixelRatio <= 1) {
        stylesheet = import('/styles_low.css');
    } else if (pixelRatio > 1) {
        stylesheet = import('/styles.css');
    } else {
        stylesheet = import('/styles_retina.css');
    }
    await stylesheet;
}

// Carrega o CSS ao iniciar
window.onload = loadStylesheet;
*/

function fetchMunicipios() {
    const url = 'https://geoserver.datascience.insper.edu.br/geoserver/portal_dados/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=portal_dados%3Amunicipios_sp&outputFormat=application%2Fjson';
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
var appDiv = document.getElementById("app");

// Criando a primeira instância de div com o ID 'main_menu'
var main_menu = document.createElement("div");
main_menu.id = "main_menu";
main_menu.className = "closed"

// Criando a segunda instância de div com o ID 'main_content'
var main_content = document.createElement("div");
main_content.id = "main_content";
main_content.className = "wide";

// Adicionando as divs filhas à div pai
appDiv.appendChild(main_menu);
appDiv.appendChild(main_content);

// Cria e adiciona o botão de menu principal no div main_menu
var menu_button = document.createElement("div");
menu_button.id = "menu_button";
menu_button.classList.add("main_menu_button", "closed");
main_menu.appendChild(menu_button);
var menu_texto = document.createElement('div');
menu_texto.id = "menu_texto";
menu_texto.classList.add("main_menu_text", "no_display");
menu_texto.textContent = "Menu";
menu_button.appendChild(menu_texto);

// Cria e adiciona o botão de mapas e seu texto no div main_menu
var mapa_button = document.createElement("div");
mapa_button.id = "mapa_button";
mapa_button.classList.add("main_menu_button", "clickable", "closed", "clicked");
main_menu.appendChild(mapa_button);
var mapa_texto = document.createElement('div');
mapa_texto.id = "mapa_texto";
mapa_texto.classList.add("main_menu_text", "no_display");
mapa_texto.textContent = "Mapas";
mapa_button.appendChild(mapa_texto);

// Cria e adiciona o botão de projetos e seu texto no div main_menu
var projeto_button = document.createElement("div");
projeto_button.id = "projeto_button";
projeto_button.classList.add("main_menu_button", "clickable", "closed");
main_menu.appendChild(projeto_button);
var projeto_texto = document.createElement('div');
projeto_texto.id = "projeto_texto";
projeto_texto.classList.add("main_menu_text", "no_display");
projeto_texto.textContent = "Projetos";
projeto_button.appendChild(projeto_texto);

// Cria e adiciona o botão de storytelling e seu texto no div main_menu
var st_button = document.createElement("div");
st_button.id = "st_button";
st_button.classList.add("main_menu_button", "clickable", "closed");
main_menu.appendChild(st_button);
var st_texto = document.createElement('div');
st_texto.id = "st_texto";
st_texto.classList.add("main_menu_text", "no_display");
st_texto.textContent = "Data StoryTelling";
st_button.appendChild(st_texto);

// Cria e adiciona o botão de interatividade no div main_menu
var interatividade_button = document.createElement("div");
interatividade_button.id = "interatividade_button";
interatividade_button.classList.add("main_menu_button", "clickable", "closed");
main_menu.appendChild(interatividade_button);
var interatividade_texto = document.createElement('div');
interatividade_texto.id = "interatividade_texto";
interatividade_texto.classList.add("main_menu_text", "no_display");
interatividade_texto.textContent = "Interatividade";
interatividade_button.appendChild(interatividade_texto);

// Cria e adiciona o botão de download no div main_menu
var download_button = document.createElement("div");
download_button.id = "download_button";
download_button.classList.add("main_menu_button", "clickable", "closed");
main_menu.appendChild(download_button);
var download_texto = document.createElement('div');
download_texto.id = "download_texto";
download_texto.classList.add("main_menu_text", "no_display");
download_texto.textContent = "Downloads";
download_button.appendChild(download_texto);

// Event listner para mudar o tamanho dos divs principais ao clicar no botao de menu
document.addEventListener("DOMContentLoaded", function() {
    // Obtém o elemento do menu_button
    var menuButton = document.getElementById("menu_button");
    
    // Obtém os elementos que você deseja modificar as classes
    var mainMenu = document.getElementById("main_menu");
    var mainContentMap = document.getElementById("main_content");
    var botoes = document.getElementsByClassName("main_menu_button");
    var textos = document.getElementsByClassName("main_menu_text");
    
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
var acessopde_button = document.createElement("div");
acessopde_button.id = "acessopde_button";
acessopde_button.classList.add("menu_projeto_button", "opened", "clicked");
menu_projeto.appendChild(acessopde_button);
var acessopde_texto = document.createElement('div');
acessopde_texto.id = "acessopde_texto";
acessopde_texto.classList.add("menu_projeto_text", "display");
acessopde_texto.textContent = "Projeto 1";
acessopde_button.appendChild(acessopde_texto);
var iframe_acessopde = document.createElement('iframe');
iframe_acessopde.src = "/projeto/projeto.html";
iframe_acessopde.style.width = "100%";
iframe_acessopde.style.height = "100%";
iframe_acessopde.frameBorder = "0";
content_projeto.appendChild(iframe_acessopde);

// Cria e adiciona o botão de projeto2 e seu texto no div menu_projeto //
/*var projeto2_button = document.createElement("div");
projeto2_button.id = "projeto2_button";
projeto2_button.classList.add("menu_projeto_button", "opened");
menu_projeto.appendChild(projeto2_button);
var projeto2_texto = document.createElement('div');
projeto2_texto.id = "projeto2_texto";
projeto2_texto.classList.add("menu_projeto_text", "display");
projeto2_texto.textContent = "Acesso a Oportunidades no Plano Diretor de São Paulo";
projeto2_button.appendChild(projeto2_texto);
var projeto2 = document.createElement('div');
projeto2.id = 'projeto';*/

// Conteúdo da info //
const InfoData =
    {
        imgSrc: "/iv_svg/af-composicao.svg",
        titulo: "A PESQUISA",
        texto: "A pesquisa Acesso a Oportunidades no Plano Diretor de São Paulo (PDE-SP) é desenvolvida pelo Laboratório Arq.Futuro de Cidades do Insper desde outubro de 2021 como forma de qualificar, a partir do desenvolvimento de estudos baseados em dados, o debate público e a tomada de decisões em torno da revisão do Plano Diretor da cidade. Foram realizados encontros com especialistas e tomadores de decisão e publicadas seis notas técnicas que buscaram pautar o debate e incidir na cobertura jornalística sobre o tema, desde o lançamento da primeira minuta de lei, publicada em janeiro de 2023, até a aprovação do 2º substitutivo na câmara dos vereadores. O Insper também participou da organização do Fórum SP 23, um espaço acadêmico voltado a debater propostas baseadas em estudos que apontem caminhos para aprimoramento da implementação da política urbana de São Paulo, seus instrumentos, planos, programas e ações complementares. Além da organização, o Laboratório Arq.Futuro de Cidades, por meio desta pesquisa, foi o grupo acadêmico que apresentou o maior número de trabalhos neste importante evento de reflexão voltado ao aprimoramento da principal política urbana da capital paulista."
    };

// Conteúdo básico das histórias //
const StoryData = [
    {
        imgSrc: "/iv_svg/AF-Elementos-Mobilidade-15.svg",
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
        imgSrc: "/iv_svg/af-elementos-mobilidade-13.svg",
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
        imgSrc: "/iv_svg/af-elementos-mobilidade-02.svg",
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
        imgSrc: "/iv_svg/af-elementos-infraestrutura-16.svg",
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
    var contador = 0
    var east;
    var north;
    var coord;
    for ( var j of json_projecao.features ) {
        var shape = new THREE.Shape();
        coord = [j.geometry.coordinates[0][0][1], j.geometry.coordinates[0][0][0]];
        east = coord[1] - origemx;
        north = coord[0] - origemy;
        shape.moveTo( east, north);
        for ( var i of j.geometry.coordinates[0]) {
            coord = [i[1], i[0]];
            east = coord[1] - origemx;
            north = coord[0] - origemy;
            shape.lineTo(east, north);
        }
        var extrudeSettings = {
            steps: 1,
            depth: j.properties.ed_altura,
            bevelEnabled: false,
            bevelThickness: 1,
            bevelSize: 1,
            bevelOffset: 0,
            bevelSegments: 1
        };
        var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
        var material = new THREE.MeshMatcapMaterial( { 
            color: 0xb8d9ff,
        });
        var mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
        var geo = new THREE.EdgesGeometry( mesh.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffd7cd } );
        var wireframe = new THREE.LineSegments( geo, mat );
        mesh.add( wireframe );
        contador += 1;
    }
    contador = 0;
    for ( var j of json_lotes.features ) {
        var points = [];
        for ( var i of j.geometry.coordinates[0]) {
            coord = [i[1], i[0]];
            east = coord[1];
            north = coord[0];
            points.push(new THREE.Vector3(east-origemx, north-origemy, 0))
        }
        var geometry = new THREE.BufferGeometry().setFromPoints(points);
        var material = new THREE.LineBasicMaterial( { 
            color: 0x8a8a87,
        });
        var line = new THREE.Line( geometry, material );
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
                var img = document.createElement('img');
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
        var number = 1;
        StoryData.forEach(card => {
            const cardElement = CreateStoryCard(card, number);
            cardsContainer.appendChild(cardElement);
            number = number + 1;
        });
        div.appendChild(cardsContainer);
        var items = div.querySelectorAll('.story_item');
        var numItems = items.length;
        items.forEach(item => {
            item.addEventListener('click', function() {
                const currentClass = item.classList[1];
                if (currentClass === 'story_container_1') {
                    items.forEach(otherItem => {
                        otherItem.classList.remove('no_show');
                        var classe = otherItem.classList[1];
                        var number = parseInt(classe.split('_')[2]);
                        if (number == 2) {
                            otherItem.classList.remove('story1_to_story2');
                            otherItem.classList.remove('story3_to_story2');
                        }
                        number = number + 1;
                        if (number > numItems){
                            number = 1;
                        }
                        var newclasse = `story_container_${number}`;
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
                        var classe = otherItem.classList[1];
                        var number = parseInt(classe.split('_')[2]);
                        if (number == 2) {
                            otherItem.classList.remove('story3_to_story2');
                            otherItem.classList.remove('story1_to_story2');
                        }
                        number = number - 1;
                        if (number < 1){
                            number = numItems;
                        }
                        var newclasse = `story_container_${number}`;
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
    var graficos = document.getElementsByClassName('story_card_graph');
    var subgraficos = document.getElementsByClassName('story_card_subgraph');
    var number = 0;
    cards.forEach(card => {
        if (card.g_type == 'graph') {
            Plotly.newPlot(graficos[number], card.data.data1, card.data.layout, {displayModeBar: false,});
        }
        else if (card.g_type == 'map') {
            var map_card = L.map(graficos[number], {
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

            
            var json_limites_municipais = fetchMunicipios();
            map_card.createPane('pane_limites_municipais_card');
            map_card.getPane('pane_limites_municipais_card').style.zIndex = 400;
            map_card.getPane('pane_limites_municipais_card').style['mix-blend-mode'] = 'normal';
            var layer_limites_municipais_card = new L.geoJson(json_limites_municipais, {
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
            for ( var i = 0; i < card.layers.length; i ++ ) {
                if (card.layers[i].servertype == 'wms') {
                    var wmsLayer = L.tileLayer.wms(card.layers[i].server, {
                        layers: card.layers[i].layer,
                        format: 'image/png',
                        transparent: true,
                        pane: 'pane_limites_municipais_card',
                    })
                }
                map_card.addLayer(wmsLayer);
            }
            var items = document.querySelectorAll('.story_item');
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
            var utm = new UTMLatLng();
            const scene = new THREE.Scene();
            scene.background = new THREE.Color( 0xffffff );
            var proporcao = 2;
            const camera = new THREE.PerspectiveCamera( 75, proporcao, 0.1, 1000 );
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            graficos[number].appendChild( renderer.domElement );
            var origemx = card.origemx;
            var origemy = card.origemy;
            const origem = utm.convertLatLngToUtm(origemy, origemx, 4);
            origemx = origem.Easting;
            origemy = origem.Northing;
            shapes(origemx, origemy, edificacao, quadra, camera, utm, scene);
            var raio = 2;
            var circleGeometry = new THREE.CircleGeometry(raio, 32);
            var circleMaterial = new THREE.MeshBasicMaterial({ color: 0xfe9d82, side: THREE.DoubleSide });
            var circleMesh = new THREE.Mesh(circleGeometry, circleMaterial);
            circleMesh.position.set(-10, 110, -0.1);
            scene.add(circleMesh);
            camera.position.set(0, -100, 150 );
            camera.lookAt(-10, 150, 0);
            var degree = 0;
            var degreesPerSecond = 1;
            var clock = new THREE.Clock();
            function updateCameraPosition(degrees) {
                var radians = THREE.MathUtils.degToRad(degrees+180);
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
                console.log(raio);
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
    var header = document.createElement('div');
    header.id = 'header';
    project.appendChild(header);
    var titulo = document.createElement('div');
    titulo.id = 'titulo_projeto';
    titulo.classList.add('titulo');
    titulo.innerText = 'Acesso a Oportunidades do Plano Diretor de São Paulo';
    header.appendChild(titulo);
    var imagem = document.createElement('div');
    imagem.id = 'image1';
    imagem.classList.add('header_images');
    header.appendChild(imagem);
    var imagem2 = document.createElement('div');
    imagem2.id = 'image2';
    imagem2.classList.add('header_images');
    header.appendChild(imagem2);
    var imagem3 = document.createElement('div');
    imagem3.id = 'image3';
    imagem3.classList.add('header_images');
    header.appendChild(imagem3);
    var body = document.createElement('div');
    body.id = 'body';
    project.appendChild(body);
    var info_buttons_bar = document.createElement('div');
    info_buttons_bar.id = 'info_buttons_bar';
    body.appendChild(info_buttons_bar);
    var content = document.createElement('div');
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
    var stories = document.createElement('div');
    stories.id = 'stories';
    stories.classList.add('body_content');
    var info = document.createElement('div');
    info.id = 'info';
    info.classList.add('body_content');
    var rep = document.createElement('div');
    rep.id = 'repercussion';
    rep.classList.add('body_content');
    var staff = document.createElement('div');
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
        console.log(info);
        info.dispatchEvent(event);
    });
});

// Cria e adiciona o botão de seta para menu no div de projetos //
var seta_button_projeto = document.createElement("div");
seta_button_projeto.id = "seta_button_projeto";
seta_button_projeto.classList.add("main_map_button");
main_projeto.appendChild(seta_button_projeto);

// Adiciona event listner para abrir ou fechar o menu_projeto do div de projetos //
seta_button_projeto.addEventListener('click', function() {
    var textos = document.getElementsByClassName("menu_projeto_text");
    var botoes = document.getElementsByClassName("menu_projeto_button");
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
var iframe_download = document.createElement('iframe');
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
var databar = document.createElement('div');
databar.id = 'DataBar';
databar.className = 'placed';
databar.classList.add('no_show');
main_map.appendChild(databar);
L.DomEvent.disableClickPropagation(databar);
L.DomEvent.disableScrollPropagation(databar);
SimpleScrollbar.initEl(document.getElementById("DataBar"));

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
var main_tools = document.createElement('div');
main_tools.id = 'main_tools';
main_tools.className = 'closed';
main_map.appendChild(main_tools);
L.DomEvent.disableClickPropagation(main_tools);
L.DomEvent.disableScrollPropagation(main_tools);

// Constrói o div camadas_layer e adiciona ao main_tools //
var camadas_layer = document.createElement('div');
camadas_layer.id = 'camadas_layer';
camadas_layer.classList.add('main_tools_layers', 'roll');
main_tools.appendChild(camadas_layer);

// Constrói a árvore de camadas e adiciona na camada_layer //
var div_tree = document.createElement("div");
div_tree.id = "tree";
div_tree.className = "arvore";
camadas_layer.appendChild(div_tree);
TreeBuilder($);
SimpleScrollbar.initEl(document.getElementById("camadas_layer"));
var vetor_camadas = [];
$('#tree').on('changed.jstree', function () {
    var vetor_camadas_novo = getSelectedElementsTree();
    vetor_camadas_novo = [...vetor_camadas_novo].map(element => element.id)
    if (vetor_camadas_novo.length > vetor_camadas.length) {
        var item = vetor_camadas_novo.filter(element => !vetor_camadas.includes(element))[0];
        var wmsLayer = L.tileLayer.wms('https://geoserver.datascience.insper.edu.br/geoserver/ows?', {
            layers: item,
            format: 'image/png',
            transparent: true,
            pane: 'pane_backend',
            layerName: item,
        })
        backend_layers_group.addLayer(wmsLayer);
        map.addLayer(wmsLayer);
    }
    if ( vetor_camadas_novo.length < vetor_camadas.length ) {
        var item = vetor_camadas.filter(element => !vetor_camadas_novo.includes(element))[0];
        removeLayerFromGroup(backend_layers_group, item);
    }
    vetor_camadas = vetor_camadas_novo;
    if (vetor_camadas.length > 0 && [...opacidade.classList].includes('clicked')) {
        databar.classList.remove('no_show');
    } else {
        databar.classList.add('no_show');
    }
    AddDataBar(noUiSlider, backend_layers_group);
});
function removeLayerFromGroup(group, item) {
    group.eachLayer(function(layer) {
        if (layer.options && layer.options.layerName == item) {
            map.removeLayer(layer);
            group.removeLayer(layer);
        }
    });
}
function getSelectedElementsTree() {
    var arvore = $('#tree').jstree(true).get_json('#', {flat:true});
    var tamanho = arvore.length;
    var vetor = [];
    for (var i = 0; i < tamanho; i++) {
        if (arvore[i].a_attr.class.includes('splus') && arvore[i].state.selected == true){
            vetor.push(arvore[i]);
        }
    }
    return(vetor);
}

// Constrói o div ferramentas_layer e adiciona ao main_tools //
var ferramentas_layer = document.createElement('div');
ferramentas_layer.id = 'ferramentas_layer';
ferramentas_layer.classList.add('main_tools_layers', 'roll');

// Constrói os ícones das ferramentas //
var opacidade = document.createElement('div');
opacidade.id = 'opacidade';
opacidade.classList.add('ferramentas_icone');
ferramentas_layer.appendChild(opacidade);
opacidade.addEventListener('click', () => {
    if (opacidade.classList.contains("clicked")) {
        opacidade.classList.remove("clicked");
        databar.classList.add('no_show');
        logo_insper.classList.remove('to_left');
    } else if (!opacidade.classList.contains("clicked")) {
        opacidade.classList.add("clicked");
        databar.classList.remove('no_show');
        logo_insper.classList.add('to_left');
    }
});
var opacidade_img = document.createElement('div');
opacidade_img.classList.add('ferramentas_img');
opacidade.appendChild(opacidade_img);
var opacidade_texto = document.createElement('div');
opacidade_texto.classList.add('ferramentas_texto');
opacidade_texto.innerText = 'Opacidade';
opacidade.appendChild(opacidade_texto);



// Cria e adiciona o botão de camadas no div de ferramentas //
var camadas_button = document.createElement("div");
camadas_button.id = "camadas_button";
camadas_button.classList.add("main_tools_button", "clicked");
main_tools.appendChild(camadas_button);
var camadas_texto = document.createElement('div');
camadas_texto.id = "camadas_texto";
camadas_texto.classList.add("main_tools_text");
camadas_texto.textContent = "Camadas";
camadas_button.appendChild(camadas_texto);

// Cria e adiciona o botão de ferramentas no div de ferramentas //
var ferramentas_button = document.createElement("div");
ferramentas_button.id = "ferramentas_button";
ferramentas_button.classList.add("main_tools_button");
main_tools.appendChild(ferramentas_button);
var ferramentas_texto = document.createElement('div');
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
var map = L.map('main_map', {
    zoomControl:false, maxZoom:22, minZoom:10, zoomDelta: 0.60, zoomSnap: 0.20, wheelPxPerZoomLevel: 100
}).setView([-23.6738,-46.5216], 10.6);

// Cria e adiciona o botão de mais zoom no div main_map//
var zoomin_button = document.createElement("div");
zoomin_button.id = "zoomin_button";
zoomin_button.classList.add("main_map_button");
main_map.appendChild(zoomin_button);
L.DomEvent.disableClickPropagation(zoomin_button);

// Adiciona o event listner de dar zoom in ao clicar no botão//
var zoomInDiv = document.getElementById('zoomin_button');
zoomInDiv.addEventListener('click', function() {
    map.zoomIn();
});

// Cria e adiciona o botão de menos zoom no div main_map
var zoomout_button = document.createElement("div");
zoomout_button.id = "zoomout_button";
zoomout_button.classList.add("main_map_button");
main_map.appendChild(zoomout_button);
L.DomEvent.disableClickPropagation(zoomout_button);

// Adiciona o event listner de dar zoom out ao clicar no botão
var zoomInDiv = document.getElementById('zoomout_button');
zoomInDiv.addEventListener('click', function() {
    map.zoomOut();
});

// Cria e adiciona o botão de localização no div main_map
var localize_button = document.createElement("div");
localize_button.id = "localize_button";
localize_button.classList.add("main_map_button");
main_map.appendChild(localize_button);
L.DomEvent.disableClickPropagation(localize_button);

var locateControl = L.control.locate({
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
var osm_button = document.createElement("div");
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
var seta_button = document.createElement("div");
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
var norte = document.createElement("div");
norte.id = "norte";
main_map.appendChild(norte);

//Mostra o nível de zoom e coordenadas no endereço//
var hash = new L.Hash(map);

//Cria o rodapé com links//
map.attributionControl.setPrefix('<a href="https://www.insper.edu.br/laboratorio-de-cidades/" title="Laboratório Arq.Futuro de Cidades"></a>');

//Cria hyperlinks automáticos para padrões específicos de texto como email, etc//
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});

//Cria a escala do mapa e adiciona classe a ela//
var escala = L.control.scale().addTo(map);
escala.getContainer().className += ' custom-scale';

//Cria um feature Group//
var bounds_group = new L.featureGroup([]);

//Cria um Layer Group//
var layers_group = new L.layerGroup([]);

//Cria um Layer Group para as camadas adicionadas pelo menu//
var backend_layers_group = new L.layerGroup([]);

//Cria um Pane para as camadas adicionadas pelo menu
map.createPane('pane_backend');
map.getPane('pane_backend').style.zIndex = 402;
map.getPane('pane_backend').style['mix-blend-mode'] = 'normal';

//Cria e impõe limites de enquadramento do mapa//
var sudoeste = L.latLng(-24.6, -48.99);
var nordeste = L.latLng(-23.0, -44.2);
var bounds = L.latLngBounds(sudoeste, nordeste);

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
var layer_OpenStreetMap_0 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
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
var json_limites_municipais = fetchMunicipios();
map.createPane('pane_limites_municipais');
map.getPane('pane_limites_municipais').style.zIndex = 400;
map.getPane('pane_limites_municipais').style['mix-blend-mode'] = 'normal';
var layer_limites_municipais = new L.geoJson(json_limites_municipais, {
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
            var poligono = L.polygon([[-23.659800, -46.520938], [-23.659800, -46.520938], [-23.659800, -46.52938], [-23.659800, -46.520938]], {color: 'transparent', interactive: false}).addTo(map);
            poligono.bindTooltip(String((layer.feature.properties['NM_MUN'])), {
            direction: 'center',
            sticky: true, 
            permanent: true,
            offset: [0,0] }).openTooltip();
        }
    });
}

//Cria o geocodificador//
var osmGeocoder = new L.Control.Geocoder({
    collapsed: true,
    position: 'topleft',
    text: 'Search',
    title: 'Testing',
    defaultMarkGeocode: false
}).addTo(map);

// Cria o ícone de localização para o geocoder //
var customIcon = L.icon({
    iconUrl: '/icons/localizar_mapa.svg', // URL do seu ícone personalizado
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [19, 38], // Ponto de ancoragem do ícone (onde ele será posicionado)
    popupAnchor: [0, -38] // Ponto de ancoragem do popup (se você exibir um popup)
});

// Cria variável que armazenará as informações do marcador do mapa //
var marcador;

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
    map.panInsideBounds(bounds, { animate: false }); 
});
map.on("move", function(){
    map.panInsideBounds(bounds, { animate: false });
});

label();

// Event listner para destacar botão do main_menu escolhido
const buttonDivMap = {
    "projeto_button": main_projeto,
    "st_button": main_st,
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
        imgSrc: "/icons/bg_city.svg",
        thumbSrc: "/icons/profile.svg",
        title: "Revisão do Plano Diretor de São Paulo",
        tagline: "Por Fulano de Tal",
        status: "Junho de 2024",
        description: "Revisão do plano diretor de 2014 é revisado: Saiba as principais mudanças que entram na lei."
    },
    {
        imgSrc: "/icons/metro.svg",
        thumbSrc: "/icons/profile.svg",
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
  
    const arcSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    arcSvg.classList.add("card__arc");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
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
initializeCards();

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
    var treeInstance = $('#tree').jstree(true);
    return treeInstance !== undefined && treeInstance !== null;
}