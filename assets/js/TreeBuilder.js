export function TreeBuilder($, cidade) {
    if (cidade == 'sp') {
        $(function () {
            $('#tree').jstree({
                "types" : 
                {
                    "pontos" : {"icon" : "./icons/pontos.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/pontos-de-menu_3917230?page=1&position=2&term=tres+pontos&origin=search&related_id=3917230 */
                    "sociedade" : {"icon" : "./icons/sociedade.svg", "a_attr" : {"class" : "tema  jstree-ocl jstree-ocl"}},
                    "populacao" : {"icon" : "./icons/populacao.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/usuarios-alt_5529124?page=1&position=7&term=pessoa&origin=search&related_id=5529124 */
                    "caracteristica" : {"icon" : "./icons/caracteristica.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/habilidades_2804141?term=pessoa+caracteristicas&page=1&position=40&origin=search&related_id=2804141 */
                    "componentes" : {"icon" : "./icons/componentes.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/terra-americas_9585979?related_id=9585979 */
                    "familia" : {"icon" : "./icons/familia.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/familia_4259535?term=familia&page=1&position=32&origin=search&related_id=4259535 */
                    "nupcialidade" : {"icon" : "./icons/nupcialidade.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/aliancas-de-casamento_2194147?term=alian%C3%A7as&page=1&position=5&origin=search&related_id=2194147 */
                    "grupos" : {"icon" : "./icons/grupos.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/raca_5534716?term=ra%C3%A7a&page=1&position=1&origin=search&related_id=5534716 */
                    "trabalho" : {"icon" : "./icons/trabalho.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/martelo_9237167?page=1&position=25&term=martelo&origin=search&related_id=9237167 */
                    "trabalhoremunerado" : {"icon" : "./icons/trabalhoremunerado.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/mao-segurando-usd_9768542?term=dinheiro&related_id=9768542 */
                    "educacao" : {"icon" : "./icons/educacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/livro-aberto-capa_7720109?page=1&position=27&term=livro&origin=search&related_id=7720109 */
                    "escolaridade" : {"icon" : "./icons/escolaridade.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/experiencia_4419048?term=experiencia&page=1&position=25&origin=search&related_id=4419048 */
                    "escolarizacao" : {"icon" : "./icons/escolarizacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/bolsa-de-livro-escolar_73614?term=mochila&page=1&position=23&origin=search&related_id=73614 */
                    "educacaobasica" : {"icon" : "./icons/educacaobasica.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/abc_2437535?term=abc&page=1&position=40&origin=search&related_id=2437535 */
                    "educacaosuperior" : {"icon" : "./icons/educacaosuperior.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/diplomado_5404967?term=diplomado+chapeu&page=1&position=7&origin=search&related_id=5404967 */
                    "saude" : {"icon" : "./icons/saude.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/farmacia_3914710?page=1&position=10&term=cruz&origin=search&related_id=3914710 */
                    "rendimento" : {"icon" : "./icons/rendimento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/pesquisar-dolar_7928311?page=1&position=78&term=dolar&origin=search&related_id=7928311 */
                    "protecao" : {"icon" : "./icons/protecao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/coracao-de-mao_5069109?term=cuidado&related_id=5069109 */
                    "habitacao" : {"icon" : "./icons/habitacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/chamine-de-casa_9246364?term=casa&related_id=9246364 */
                    "justseg" : {"icon" : "./icons/justseg.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/saldo-escala-esquerda_7661364?term=justi%C3%A7a&related_id=7661364 */
                    "criminalidade" : {"icon" : "./icons/criminalidade.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/arma-de-fogo_4065504?term=arma&page=1&position=25&origin=search&related_id=4065504 */
                    "justica" : {"icon" : "./icons/justica.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/gavel_3077294?term=juiz&page=1&position=63&origin=search&related_id=3077294 */
                    "segurancapublica" : {"icon" : "./icons/segurancapublica.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/distintivo_274217?term=distintivo&page=1&position=2&origin=search&related_id=274217 */
                    "militar" : {"icon" : "./icons/militar.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/chapeu-militar_4394761?term=chapeu+militar&page=1&position=2&origin=search&related_id=4394761 */   
                    "administracao" : {"icon" : "./icons/administracao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/definicoes_655656?term=administra%C3%A7%C3%A3o&page=1&position=10&origin=search&related_id=655656 */
                    "funcionalismo" : {"icon" : "./icons/funcionalismo.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/cracha_8353604?term=crach%C3%A1&page=1&position=72&origin=search&related_id=8353604 */
                    "meta" : {"icon" : "./icons/meta.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/escalada_3287191?term=escalar+montanha+bandeira&page=1&position=2&origin=search&related_id=3287191 */
                    "transparencia" : {"icon" : "./icons/transparencia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/pesquisa-na-lupa-do-documento_62754?term=lupa+documento&page=2&position=51&origin=search&related_id=62754 */
                    "participacao" : {"icon" : "./icons/participacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/missao_1384301?term=pessoa+bandeira&page=5&position=2&origin=search&related_id=1384301 */
                    "eleicao" : {"icon" : "./icons/eleicao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/voto_5930568?related_id=5930568 */
                    "sindicato" : {"icon" : "./icons/sindicato.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/download/icon/landing/3742032?format=png&size=16&type=standard */
                    "ong" : {"icon" : "./icons/ong.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/mao-amiga_2770560?term=m%C3%A3o+amiga&page=2&position=40&origin=search&related_id=2770560 */
                    "conselho" : {"icon" : "./icons/conselho.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/organizacao_1629054?term=organiza%C3%A7%C3%A3o&page=1&position=8&origin=search&related_id=1629054 */
                    "genero" : {"icon" : "./icons/genero.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/transgenero_9158506?term=genero+transgenero&page=2&position=81&origin=search&related_id=9158506 */
                    "cultura" : {"icon" : "./icons/cultura.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/paleta_3917392?page=1&position=9&term=arte&origin=search&related_id=3917392 */
                    "espacos" : {"icon" : "./icons/espacos.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/teatro_1778557?term=teatro&page=1&position=3&origin=search&related_id=1778557 */
                    "patrimonio" : {"icon" : "./icons/patrimonio.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/museu_1825814?term=museu&page=1&position=3&origin=search&related_id=1825814 */
                    "memoria" : {"icon" : "./icons/memoria.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/tempo_7477551?term=historia&page=1&position=65&origin=search&related_id=7477551 */
                    "esporte" : {"icon" : "./icons/esporte.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/jogador-de-futebol_1093071?term=futebol+pessoa&page=2&position=31&origin=search&related_id=1093071 */
                    "atendimento" : {"icon" : "./icons/atendimento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/fone-de-ouvido_3917730?page=1&position=7&term=contato&origin=search&related_id=3917730 */
                    "economia" : {"icon" : "./icons/economia.svg", "a_attr" : {"class" : "tema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/banca-global_7793070?term=economia+global&page=10&position=14&origin=search&related_id=7793070 */
                    "macroeconomia" : {"icon" : "./icons/macroeconomia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/alinhamento-do-grafico_7661482?term=graficos&related_id=7661482 */
                    "contas" : {"icon" : "./icons/contas.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/calculadora_3626508?term=calculadora&page=1&position=1&origin=search&related_id=3626508 */
                    "financas" : {"icon" : "./icons/financas.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/gestao_3147508?term=gest%C3%A3o+dinheiro&page=2&position=23&origin=search&related_id=3147508 */
                    "estatisticas" : {"icon" : "./icons/estatisticas.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/estatisticas_8366661?term=estatistica+dinheiro&page=4&position=29&origin=search&related_id=8366661 */
                    "comercioint" : {"icon" : "./icons/comercioint.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/comercio-eletronico-internacional_57589?term=comercio+internacional&page=1&position=32&origin=search&related_id=57589 */
                    "setores" : {"icon" : "./icons/setores.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/grafico-de-pizza_3589915?term=setor&page=4&position=44&origin=search&related_id=3589915 */
                    "agricultura" : {"icon" : "./icons/agricultura.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/agricultura_4272176?term=agricultura&page=2&position=38&origin=search&related_id=4272176 */
                    "energia" : {"icon" : "./icons/energia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/raio-trovao_5556048?term=energia&page=1&position=2&origin=search&related_id=5556048 */
                    "extrativas" : {"icon" : "./icons/extrativas.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/mineracao-de-bitcoin_1627580?term=minera%C3%A7%C3%A3o&page=4&position=29&origin=search&related_id=1627580 */
                    "transformacao" : {"icon" : "./icons/transformacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/industria_5651875?term=industria&page=2&position=46&origin=search&related_id=5651875 */
                    "construcao" : {"icon" : "./icons/construcao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/capacete_4631595?term=pedreiro&page=1&position=5&origin=search&related_id=4631595 */
                    "comercio" : {"icon" : "./icons/comercio.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/carrinho-de-compras_1332756?term=comercio&page=1&position=28&origin=search&related_id=1332756 */
                    "servicos" : {"icon" : "./icons/servicos.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/servico_5935761?term=servi%C3%A7os&page=1&position=5&origin=search&related_id=5935761 */
                    "precos" : {"icon" : "./icons/precos.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/saco-de-dolar_7928299?page=1&position=2&term=custo&origin=search&related_id=7928299 */
                    "informal" : {"icon" : "./icons/informal.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/comida_10037271 */
                    "ciencia" : {"icon" : "./icons/ciencia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/fisica_3914734?term=ciencia&related_id=3914734 */
                    "si" : {"icon" : "./icons/si.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/em-formacao_1055189?term=informa%C3%A7%C3%A3o&page=1&position=2&origin=search&related_id=1055189 */
                    "empreendedorismo" : {"icon" : "./icons/empreendedorismo.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/lampada-incandescente_69172?term=lampada&page=1&position=4&origin=search&related_id=69172 */
                    "turismo" : {"icon" : "./icons/turismo.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/aviao-preto_61212?term=avi%C3%A3o&page=1&position=63&origin=search&related_id=61212 */
                    "meio" : {"icon" : "./icons/meio.svg", "a_attr" : {"class" : "tema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/topografia_9232406?term=topografia&page=1&position=17&origin=search&related_id=9232406 */
                    "geologia" : {"icon" : "./icons/geologia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/rocha_2041975?term=rocha&page=1&position=47&origin=search&related_id=2041975 */
                    "hidrografia" : {"icon" : "./icons/hidrografia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/rio_2627394?term=rio&page=1&position=34&origin=search&related_id=2627394 */
                    "topografia" : {"icon" : "./icons/topografia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/mapa_2108221?term=topografia&page=1&position=37&origin=search&related_id=2108221 */
                    "imageamento" : {"icon" : "./icons/imageamento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/mapa-de-ruas_6925151?term=mapa+cidade&page=3&position=24&origin=search&related_id=6925151 */
                    "desastres" : {"icon" : "./icons/desastres.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/avalanche-de-neve_3184849?term=avalanche&page=1&position=90&origin=search&related_id=3184849 */
                    "ambientecons" : {"icon" : "./icons/ambientecons.svg", "a_attr" : {"class" : "tema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/edificios_24962?term=cidade+edificios&page=1&position=1&origin=search&related_id=24962 */
                    "limites" : {"icon" : "./icons/limites.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/fronteira_806556?term=fronteiras&page=3&position=67&origin=search&related_id=806556 */
                    "localizacao" : {"icon" : "./icons/localizacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/pin_4196465?term=localiza%C3%A7%C3%A3o&page=1&position=38&origin=search&related_id=4196465 */
                    "vias" : {"icon" : "./icons/vias.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/praca-da-rua_59462?term=rua&page=1&position=28&origin=search&related_id=59462 */
                    "transportes" : {"icon" : "./icons/transportes.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/onibus_565352?term=transporte&page=1&position=34&origin=search&related_id=565352 */
                    "energiacomunicacao" : {"icon" : "./icons/energiacomunicacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/poste-eletrico_2804014?term=poste+eletrico&page=1&position=7&origin=tag&related_id=2804014 */
                    "usosolo" : {"icon" : "./icons/usosolo.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/camadas_6014681?term=terreno&page=1&position=25&origin=search&related_id=6014681 */
                    "ocupacao" : {"icon" : "./icons/ocupacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/paisagem-urbana_122376?term=urbano&page=2&position=87&origin=tag&related_id=122376 */
                    "cadastrosolo" : {"icon" : "./icons/cadastrosolo.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/caneta-e-papel_8253647?term=caneta+papel&page=1&position=55&origin=search&related_id=8253647 */
                    "nucleosurbanos" : {"icon" : "./icons/nucleosurbanos.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/comunidade_7760927?term=vizinhan%C3%A7a&page=2&position=49&origin=search&related_id=7760927 */  
                    "planejamento" : {"icon" : "./icons/planejamento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/a-medida_1982168?term=casa+medida&related_id=1982168 */
                    "planodiretor" : {"icon" : "./icons/planodiretor.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/lista_126082?term=plano&page=1&position=36&origin=search&related_id=126082 */
                    "zoneamento" : {"icon" : "./icons/zoneamento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/terreno_831561?term=terreno&page=1&position=8&origin=tag&related_id=831561 */
                    "intervencoes" : {"icon" : "./icons/intervencoes.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/ferramentas_969213?term=cidade+caneta&related_id=969213 */
                    "meioambiente" : {"icon" : "./icons/meioambiente.svg", "a_attr" : {"class" : "tema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/meio-ambiente_2821176?term=meio+ambiente+mundo&page=1&position=15&origin=search&related_id=2821176 */
                    "climatologia" : {"icon" : "./icons/climatologia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/nuvem-negra-de-chuva-com-gotas-de-chuva-caindo_40191?term=nuvem&page=1&position=36&origin=search&related_id=40191 */
                    "faunaflora" : {"icon" : "./icons/faunaflora.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/passaro_1170334?term=passaro&page=1&position=48&origin=search&related_id=1170334 */
                    "conservacao" : {"icon" : "./icons/conservacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/mao_6367124?term=conserva%C3%A7%C3%A3o&page=4&position=40&origin=search&related_id=6367124 */
                    "saneamento" : {"icon" : "./icons/saneamento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/torneira_1048810?term=torneira&page=1&position=6&origin=search&related_id=1048810 */
                    "eduambi" : {"icon" : "./icons/eduambi.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/semeando_620798?term=sementes&page=1&position=39&origin=search&related_id=620798 */
                    "desenvolvimento" : {"icon" : "./icons/desenvolvimento.svg", "a_attr" : {"class" : "tema  jstree-ocl"}}, /* https://www.flaticon.com/free-icon/increase_2275266?term=growth&page=1&position=38&origin=tag&related_id=2275266 */
                    "vulnerabilidade" : {"icon" : "./icons/vulnerabilidade.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/free-icon/shelter_4117129?term=homeless&page=1&position=18&origin=search&related_id=4117129 */
                    "humano" : {"icon" : "./icons/humano.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/free-icon/shelter_4117129?term=homeless&page=1&position=18&origin=search&related_id=4117129 */
                    "splus_sociedade" : {"icon" : "./icons/splus_sociedade.svg", "a_attr" : {"class" : "splus"}},
                    "splus_economia" : {"icon" : "./icons/splus_economia.svg", "a_attr" : {"class" : "splus"}},
                    "splus_meiofisico" : {"icon" : "./icons/splus_meiofisico.svg", "a_attr" : {"class" : "splus"}},
                    "splus_ambcons" : {"icon" : "./icons/splus_ambcons.svg", "a_attr" : {"class" : "splus"}},
                    "splus_meioamb" : {"icon" : "./icons/splus_meioamb.svg", "a_attr" : {"class" : "splus"}},
                    "splus_desenvolvimento" : {"icon" : "./icons/splus_desenvolvimento.svg", "a_attr" : {"class" : "splus"}},
                    /*"splus_sociedade_clicked" : {"icon" : "./icons/splus_sociedade.svg", "a_attr" : {"class" : "splus jstree-clicked"}},*/
                },
                'plugins' : [ "checkbox" , "search", "types", "themes" ],
                'core' : {
                    'themes' : { "stripes" : false },
                    'data' : [{
                        "text" : "Sociedade",
                        'id' : 'no_checkbox_sociedade_1',
                        "state" : { 
                            "opened" : true,
                            "disabled" : true,
                        },
                        "type" : "sociedade",
                        "children" : [
                            {
                            "text" : "População",
                            'id' : 'no_checkbox_sociedade_2',
                            "state" : { 
                                "disabled" : true,
                            },
                            "type" : "populacao",
                            "children" : [
                                {
                                "text" : "Características gerais da população",
                                'id' : 'no_checkbox_sociedade_3',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "caracteristica",
                                "children" : [
                                    {
                                    "text" : "Pessoas com idade entre 0 e 6 anos",
                                    'id' : 'checkbox_sociedade_caracteristica_1',
                                    "type" : "splus_sociedade",
                                    },
                                    {
                                    "text" : "Pessoas com idade entre 7 e 12 anos",
                                    'id' : 'checkbox_sociedade_caracteristica_2',
                                    "type" : "splus_sociedade",
                                    },
                                    {
                                    "text" : "Pessoas com idade entre 13 e 18 anos",
                                    'id' : 'checkbox_sociedade_caracteristica_3',
                                    "type" : "splus_sociedade",
                                    },
                                    {
                                    "text" : "Pessoas com doenças",
                                    'id' : 'checkbox_sociedade_caracteristica_4',
                                    "type" : "splus_sociedade",
                                    },
                                ]
                                },
                                {
                                "text" : "Componentes da dinâmica geográfica e estatísticas vitais",
                                'id' : 'no_checkbox_sociedade_4',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "componentes"
                                },
                                {
                                "text" : "Família",
                                'id' : 'no_checkbox_sociedade_5',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "familia"
                                },
                                {
                                "text" : "Nupcialidade",
                                'id' : 'no_checkbox_sociedade_6',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "nupcialidade"
                                },
                                {
                                "text" : "Grupos populacionais específicos",
                                'id' : 'no_checkbox_sociedade_7',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "grupos"
                                },
                                {
                                "text" : "Outras estatísticas sobre população",
                                'id' : 'no_checkbox_sociedade_8',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "pontos",
                                "children" : [
                                    {
                                    "text" : "Densidade Populacional",
                                    "id" : "portal_dados:densidade_demografica_sp_portal",
                                    "type" : "splus_sociedade",
                                    },
                                ]
                                }
                            ]
                            },
                            {
                            "text" : "Trabalho",
                            'id' : 'no_checkbox_sociedade_9',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "trabalho",
                            "children" : [
                                {
                                "text" : "Trabalho remunerado",
                                'id' : 'no_checkbox_sociedade_10',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "trabalhoremunerado"
                                },
                                {
                                "text" : "Outras formas de trabalho",
                                'id' : 'no_checkbox_sociedade_11',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "pontos"
                                },
                            ]
                            },
                            {
                            "text" : "Educação",
                            'id' : 'no_checkbox_sociedade_12',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "educacao",
                            "children" : [
                                {
                                "text" : "Escolaridade",
                                'id' : 'no_checkbox_sociedade_13',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "escolaridade"
                                },
                                {
                                "text" : "Escolarização",
                                'id' : 'no_checkbox_sociedade_14',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "escolarizacao"
                                },
                                {
                                "text" : "Educação básica",
                                'id' : 'no_checkbox_sociedade_15',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "educacaobasica"
                                },
                                {
                                "text" : "Educação superior",
                                'id' : 'no_checkbox_sociedade_16',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "educacaosuperior"
                                },
                            ]
                            },
                            {
                            "text" : "Saúde",
                            'id' : 'no_checkbox_sociedade_17',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "saude",
                            "children" : [
                                {
                                "text" : "Baixo Peso Nascer",
                                'id' : 'checkbox_sociedade_saude_1',
                                "type" : "splus_sociedade",
                                },
                            ]
                            },
                            {
                            "text" : "Rendimento, despesa e consumo",
                            'id' : 'no_checkbox_sociedade_18',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "rendimento",
                            },
                            {
                            "text" : "Proteção Social",
                            'id' : 'no_checkbox_sociedade_19',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "protecao"
                            },
                            {
                            "text" : "Habitação",
                            'id' : 'no_checkbox_sociedade_20',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "habitacao"
                            },
                            {
                            "text" : "Justiça e Segurança",
                            'id' : 'no_checkbox_sociedade_21',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "justseg",
                            "children" : [
                                {
                                "text" : "Criminalidade",
                                'id' : 'no_checkbox_sociedade_22',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "criminalidade"
                                },
                                {
                                "text" : "Justiça",
                                'id' : 'no_checkbox_sociedade_23',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "justica"
                                },
                                {
                                "text" : "Segurança pública",
                                'id' : 'no_checkbox_sociedade_24',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "segurancapublica"
                                },
                                {
                                "text" : "Inteligência militar",
                                'id' : 'no_checkbox_sociedade_25',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "militar"
                                },
                            ]
                            },
                            {
                            "text" : "Administração Pública",
                            'id' : 'no_checkbox_sociedade_26',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "administracao",
                            "children" : [
                                {
                                "text" : "Funcionalismo",
                                'id' : 'no_checkbox_sociedade_27',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "funcionalismo"
                                },
                                {
                                "text" : "Programa de metas",
                                'id' : 'no_checkbox_sociedade_28',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "meta"
                                },
                                {
                                "text" : "Transparência e integridade",
                                'id' : 'no_checkbox_sociedade_29',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "transparencia"
                                },
                            ]
                            },
                            {
                            "text" : "Participação social e política",
                            'id' : 'no_checkbox_sociedade_30',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "participacao",
                            "children" : [
                                {
                                "text" : "Eleições",
                                'id' : 'no_checkbox_sociedade_31',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "eleicao"
                                },
                                {
                                "text" : "Sindicatos e associações profissionais",
                                'id' : 'no_checkbox_sociedade_32',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "sindicato"
                                },
                                {
                                "text" : "Terceiro setor",
                                'id' : 'no_checkbox_sociedade_33',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "ong"
                                },
                                {
                                "text" : "Conselhos e orgãos colegiados",
                                'id' : 'no_checkbox_sociedade_34',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "conselho"
                                },
                                {
                                "text" : "Outras formas de participação social",
                                'id' : 'no_checkbox_sociedade_35',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "pontos"
                                },
                            ]
                            },
                            {
                            "text" : "Gênero e orientação sexual",
                            'id' : 'no_checkbox_sociedade_36',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "genero"
                            },
                            {
                            "text" : "Cultura",
                            'id' : 'no_checkbox_sociedade_37',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "cultura",
                            "children" : [
                                {
                                "text" : "Espaços culturais",
                                'id' : 'no_checkbox_sociedade_38',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "espacos"
                                },
                                {
                                "text" : "Patrimônio cultural",
                                'id' : 'no_checkbox_sociedade_39',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "patrimonio"
                                },
                                {
                                "text" : "Memória e história",
                                'id' : 'no_checkbox_sociedade_40',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "memoria"
                                },
                            ]
                            },
                            {
                            "text" : "Esporte e recreação",
                            'id' : 'no_checkbox_sociedade_41',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "esporte"
                            },
                            {
                            "text" : "Atendimento ao cidadão",
                            'id' : 'no_checkbox_sociedade_42',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "atendimento"
                            }
                        ]
                        },
                        {
                        "text" : "Economia",
                        'id' : 'no_checkbox_economia_43',
                        "state" : { 
                            "opened" : true,
                            "disabled" : true
                        },
                        "type" : "economia",
                        "children" : [
                            {
                            "text" : "Macroeconomia",
                            'id' : 'no_checkbox_economia_44',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "macroeconomia",
                            "children" : [
                                {
                                "text" : "Contas públicas",
                                'id' : 'no_checkbox_economia_45',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "contas"
                                },
                                {
                                "text" : "Finanças públicas",
                                'id' : 'no_checkbox_economia_46',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "financas"
                                },
                                {
                                "text" : "Estatísticas financeiras",
                                'id' : 'no_checkbox_economia_47',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "estatisticas",
                                "children" : [
                                    {
                                    "text" : "PIB",
                                    "id" : "checkbox_economia_estatisticas_0",
                                    "type" : "splus_economia",
                                    }
                                ]
                                },
                                {
                                "text" : "Comércio internacional e balanço de pagamentos",
                                'id' : 'no_checkbox_economia_48',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "comercioint"
                                },
                            ]
                            },
                            {
                            "text" : "Setores da economia",
                            'id' : 'no_checkbox_economia_49',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "setores",
                            "children" : [
                                {
                                "text" : "Agricultura, pecuária, produção florestal, pesca e aquicultura",
                                'id' : 'no_checkbox_economia_50',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "agricultura"
                                },
                                {
                                "text" : "Energia",
                                'id' : 'no_checkbox_economia_51',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "energia"
                                },
                                {
                                "text" : "Indústrias extrativas",
                                'id' : 'no_checkbox_economia_52',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "extrativas"
                                },
                                {
                                "text" : "Indústrias de transformação",
                                'id' : 'no_checkbox_economia_53',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "transformacao"
                                },
                                {
                                "text" : "Construção",
                                'id' : 'no_checkbox_economia_54',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "construcao"
                                },
                                {
                                "text" : "Comércio",
                                'id' : 'no_checkbox_economia_55',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "comercio"
                                },
                                {
                                "text" : "Serviços",
                                'id' : 'no_checkbox_economia_56',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "servicos"
                                },
                            ]
                            },
                            {
                            "text" : "Preços e custos",
                            'id' : 'no_checkbox_economia_57',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "precos"
                            },
                            {
                            "text" : "Setor infomal",
                            'id' : 'no_checkbox_economia_58',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "informal"
                            },
                            {
                            "text" : "Ciência, Tecnologia e Inovação - CT&I",
                            'id' : 'no_checkbox_economia_59',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "ciencia"
                            },
                            {
                            "text" : "Sociedade da informação",
                            'id' : 'no_checkbox_economia_60',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "si"
                            },
                            {
                            "text" : "Empreendedorismo",
                            'id' : 'no_checkbox_economia_61',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "empreendedorismo"
                            },
                            {
                            "text" : "Turismo",
                            'id' : 'no_checkbox_economia_62',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "turismo"
                            },
                            {
                            "text" : "Outras estatísticas econômicas",
                            'id' : 'no_checkbox_economia_63',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "pontos"
                            }
                        ]
                        },
                        {
                        "text" : "Meio físico",
                        'id' : 'no_checkbox_meiofisico_64',
                        "state" : { 
                            "disabled" : true,
                            "opened" : true
                        },
                        "type" : "meio",
                        "children" : [
                            {
                            "text" : "Geologia",
                            'id' : 'no_checkbox_meiofisico_65',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "geologia"
                            },
                            {
                            "text" : "Hidrografia",
                            'id' : 'no_checkbox_meiofisico_66',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "hidrografia",
                            "children" : [
                                {
                                "text" : "Corpos d'água",
                                'id' : "portal_dados:Corpos D'água",
                                "type" : "splus_sociedade",
                                },
                                {
                                    "text" : "Rios Principais",
                                    'id' : "portal_dados:Rios Principais",
                                    "type" : "splus_sociedade",
                                    },
                            ]
                            },
                            {
                            "text" : "Topografia",
                            'id' : 'no_checkbox_meiofisico_67',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "topografia"
                            },
                            {
                            "text" : "Imageamento",
                            'id' : 'no_checkbox_meiofisico_68',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "imageamento"
                            },
                            {
                            "text" : "Desastres",
                            'id' : 'no_checkbox_meiofisico_69',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "desastres",
                            "children" : [
                                    {
                                    "text" : "Deslizamentos",
                                    "id" : "checkbox_meiofisico_desastres_0",
                                    "type" : "splus_meiofisico",
                                    },
                                    {
                                    "text" : "Tempestade",
                                    "id" : "checkbox_meiofisico_desastres_1",
                                    "type" : "splus_meiofisico",
                                    }
                                ]
                            }
                        ]
                        },
                        {
                        "text" : "Ambiente Construído",
                        'id' : 'no_checkbox_ambcons_70',
                        "state" : { 
                            "disabled" : true,
                            "opened" : true
                        },
                        "type" : "ambientecons",
                        "children" : [
                            {
                            "text" : "Limites territoriais",
                            'id' : 'no_checkbox_ambcons_71',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "limites",
                            "children" : [
                                {
                                "text" : "Limites Municipais",
                                "id" : "portal_dados:municipios_sp",
                                "type" : "splus_ambcons",
                                },
                            ]
                            },
                            {
                            "text" : "Serviços de localização",
                            'id' : 'no_checkbox_ambcons_72',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "localizacao"
                            },
                            {
                            "text" : "Vias públicas",
                            'id' : 'no_checkbox_ambcons_73',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "vias",
                            "children" : [
                                {
                                "text" : "Malha Viária",
                                "id" : "portal_dados:Redes de ruas",
                                "type" : "splus_meiofisico",
                                },
                            ]
                            },
                            {
                            "text" : "Transportes",
                            'id' : 'no_checkbox_ambcons_74',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "transportes",
                            "children" : [
                                {
                                "text" : "Corredores de Ônibus",
                                "id" : "portal_dados:Corredor de Ônibus",
                                "type" : "splus_ambcons",
                                },
                                {
                                "text" : "Estações de Metro",
                                "id" : "acesso_pde:estacao_metro",
                                "type" : "splus_ambcons",
                                },
                                {
                                "text" : "Estações de Trem",
                                "id" : "acesso_pde:estacao_trem",
                                "type" : "splus_ambcons",
                                },
                                {
                                "text" : "Linhas de Metro",
                                "id" : "portal_dados:Linhas do Metrô",
                                "type" : "splus_ambcons",
                                },
                                {
                                "text" : "Linhas de Trem",
                                "id" : "portal_dados:Linhas do Trem",
                                "type" : "splus_ambcons",
                                }
                            ]
                            },
                            {
                            "text" : "Energia e comunicação",
                            'id' : 'no_checkbox_ambcons_75',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "energiacomunicacao"
                            },
                            {
                            "text" : "Uso e ocupação de solo",
                            'id' : 'no_checkbox_ambcons_76',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "usosolo",
                            "children" : [
                                {
                                "text" : "Ocupação do solo",
                                'id' : 'no_checkbox_ambcons_77',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "ocupacao"
                                },
                                {
                                "text" : "Cadastro e uso do solo",
                                'id' : 'no_checkbox_ambcons_78',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "cadastrosolo"
                                },
                                {
                                "text" : "Núcleos urbanos informais",
                                'id' : 'no_checkbox_ambcons_79',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "nucleosurbanos"
                                },
                            ]
                            },
                            {
                            "text" : "Planejamento urbano",
                            'id' : 'no_checkbox_ambcons_80',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "planejamento",
                            "children" : [
                                {
                                "text" : "Plano diretor",
                                'id' : 'no_checkbox_ambcons_81',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "planodiretor",
                                },
                                {
                                "text" : "Zoneamento",
                                'id' : 'no_checkbox_ambcons_82',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "zoneamento",
                                "children" : [
                                    {
                                    "text" : "ZEIS",
                                    "id" : "portal_dados:ZEIS",
                                    "type" : "splus_ambcons",
                                    },
                                    {
                                    "text" : "ZEM",
                                    "id" : "portal_dados:ZEM",
                                    "type" : "splus_ambcons",
                                    },
                                    {
                                    "text" : "ZEU",
                                    "id" : "portal_dados:ZEU EETU",
                                    "type" : "splus_ambcons",
                                    }
                                ]
                                },
                                {
                                "text" : "Intervenções urbanísticas",
                                'id' : 'no_checkbox_ambcons_84',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "intervencoes"
                                },
                                {
                                "text" : "Outras legislações urbanas",
                                'id' : 'no_checkbox_ambcons_83',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "pontos"
                                }
                            ]
                            }
                        ]
                        },
                        {
                        "text" : "Meio Ambiente",
                        'id' : 'no_checkbox_meioamb_85',
                        "state" : { 
                            "disabled" : true,
                            "opened" : true
                        },
                        "type" : "meioambiente",
                        "children" : [
                            {
                            "text" : "Climatologia e atmosfera",
                            'id' : 'no_checkbox_meioamb_86',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "climatologia"
                            },
                            {
                            "text" : "Fauna e flora",
                            'id' : 'no_checkbox_meioamb_87',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "faunaflora"
                            },
                            {
                            "text" : "Conservação da natureza",
                            'id' : 'no_checkbox_meioamb_88',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "conservacao"
                            },
                            {
                            "text" : "Saneamento",
                            'id' : 'no_checkbox_meioamb_89',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "saneamento",
                            "children" : [
                                {
                                "text" : "ETA's",
                                "id" : "checkbox_meioamb_saneamento_0",
                                "type" : "splus_meioamb",
                                }
                            ]
                            },
                            {
                            "text" : "Educação Ambiental",
                            'id' : 'no_checkbox_meioamb_90',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "eduambi"
                            }
                        ]
                        },
                        {
                        "text" : "Desenvolvimento humano e condições de vida",
                        'id' : 'no_checkbox_desenvolvimento_91',
                        "state" : { 
                            "disabled" : true,
                            "opened" : true
                        },
                        "type" : "desenvolvimento",
                        "children" : [
                            {
                            "text" : "Indicadores de vulnerabilidade",
                            'id' : 'no_checkbox_desenvolvimento_92',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "vulnerabilidade"
                            },
                            {
                            "text" : "Indicadores de desenvolvimento humano",
                            'id' : 'no_checkbox_desenvolvimento_93',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "humano",
                            "children" : [
                                {
                                "text" : "IDH",
                                "id" : "checkbox_desenvolvimento_humano_0",
                                "type" : "splus_desenvolvimento",
                                }
                            ]
                            }
                        ]
                        }	
                    ]
                },
            
            });
            var to = false;
            $('#busca').keyup(function () {
                if(to) { clearTimeout(to); }
                to = setTimeout(function () {
                    var v = $('#busca').val();
                    $('#tree').jstree(true).search(v);
                }, 250);
            });
        });
    } else if (cidade == 'rj') {
        $(function () {
            $('#tree').jstree({
                "types" : 
                {
                    "pontos" : {"icon" : "./icons/pontos.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/pontos-de-menu_3917230?page=1&position=2&term=tres+pontos&origin=search&related_id=3917230 */
                    "sociedade" : {"icon" : "./icons/sociedade.svg", "a_attr" : {"class" : "tema  jstree-ocl jstree-ocl"}},
                    "populacao" : {"icon" : "./icons/populacao.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/usuarios-alt_5529124?page=1&position=7&term=pessoa&origin=search&related_id=5529124 */
                    "caracteristica" : {"icon" : "./icons/caracteristica.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/habilidades_2804141?term=pessoa+caracteristicas&page=1&position=40&origin=search&related_id=2804141 */
                    "componentes" : {"icon" : "./icons/componentes.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/terra-americas_9585979?related_id=9585979 */
                    "familia" : {"icon" : "./icons/familia.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/familia_4259535?term=familia&page=1&position=32&origin=search&related_id=4259535 */
                    "nupcialidade" : {"icon" : "./icons/nupcialidade.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/aliancas-de-casamento_2194147?term=alian%C3%A7as&page=1&position=5&origin=search&related_id=2194147 */
                    "grupos" : {"icon" : "./icons/grupos.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/raca_5534716?term=ra%C3%A7a&page=1&position=1&origin=search&related_id=5534716 */
                    "trabalho" : {"icon" : "./icons/trabalho.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/martelo_9237167?page=1&position=25&term=martelo&origin=search&related_id=9237167 */
                    "trabalhoremunerado" : {"icon" : "./icons/trabalhoremunerado.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/mao-segurando-usd_9768542?term=dinheiro&related_id=9768542 */
                    "educacao" : {"icon" : "./icons/educacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/livro-aberto-capa_7720109?page=1&position=27&term=livro&origin=search&related_id=7720109 */
                    "escolaridade" : {"icon" : "./icons/escolaridade.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/experiencia_4419048?term=experiencia&page=1&position=25&origin=search&related_id=4419048 */
                    "escolarizacao" : {"icon" : "./icons/escolarizacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/bolsa-de-livro-escolar_73614?term=mochila&page=1&position=23&origin=search&related_id=73614 */
                    "educacaobasica" : {"icon" : "./icons/educacaobasica.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/abc_2437535?term=abc&page=1&position=40&origin=search&related_id=2437535 */
                    "educacaosuperior" : {"icon" : "./icons/educacaosuperior.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/diplomado_5404967?term=diplomado+chapeu&page=1&position=7&origin=search&related_id=5404967 */
                    "saude" : {"icon" : "./icons/saude.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/farmacia_3914710?page=1&position=10&term=cruz&origin=search&related_id=3914710 */
                    "rendimento" : {"icon" : "./icons/rendimento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/pesquisar-dolar_7928311?page=1&position=78&term=dolar&origin=search&related_id=7928311 */
                    "protecao" : {"icon" : "./icons/protecao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/coracao-de-mao_5069109?term=cuidado&related_id=5069109 */
                    "habitacao" : {"icon" : "./icons/habitacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/chamine-de-casa_9246364?term=casa&related_id=9246364 */
                    "justseg" : {"icon" : "./icons/justseg.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/saldo-escala-esquerda_7661364?term=justi%C3%A7a&related_id=7661364 */
                    "criminalidade" : {"icon" : "./icons/criminalidade.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/arma-de-fogo_4065504?term=arma&page=1&position=25&origin=search&related_id=4065504 */
                    "justica" : {"icon" : "./icons/justica.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/gavel_3077294?term=juiz&page=1&position=63&origin=search&related_id=3077294 */
                    "segurancapublica" : {"icon" : "./icons/segurancapublica.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/distintivo_274217?term=distintivo&page=1&position=2&origin=search&related_id=274217 */
                    "militar" : {"icon" : "./icons/militar.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/chapeu-militar_4394761?term=chapeu+militar&page=1&position=2&origin=search&related_id=4394761 */   
                    "administracao" : {"icon" : "./icons/administracao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/definicoes_655656?term=administra%C3%A7%C3%A3o&page=1&position=10&origin=search&related_id=655656 */
                    "funcionalismo" : {"icon" : "./icons/funcionalismo.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/cracha_8353604?term=crach%C3%A1&page=1&position=72&origin=search&related_id=8353604 */
                    "meta" : {"icon" : "./icons/meta.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/escalada_3287191?term=escalar+montanha+bandeira&page=1&position=2&origin=search&related_id=3287191 */
                    "transparencia" : {"icon" : "./icons/transparencia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/pesquisa-na-lupa-do-documento_62754?term=lupa+documento&page=2&position=51&origin=search&related_id=62754 */
                    "participacao" : {"icon" : "./icons/participacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/missao_1384301?term=pessoa+bandeira&page=5&position=2&origin=search&related_id=1384301 */
                    "eleicao" : {"icon" : "./icons/eleicao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/voto_5930568?related_id=5930568 */
                    "sindicato" : {"icon" : "./icons/sindicato.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/download/icon/landing/3742032?format=png&size=16&type=standard */
                    "ong" : {"icon" : "./icons/ong.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/mao-amiga_2770560?term=m%C3%A3o+amiga&page=2&position=40&origin=search&related_id=2770560 */
                    "conselho" : {"icon" : "./icons/conselho.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/organizacao_1629054?term=organiza%C3%A7%C3%A3o&page=1&position=8&origin=search&related_id=1629054 */
                    "genero" : {"icon" : "./icons/genero.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/transgenero_9158506?term=genero+transgenero&page=2&position=81&origin=search&related_id=9158506 */
                    "cultura" : {"icon" : "./icons/cultura.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/paleta_3917392?page=1&position=9&term=arte&origin=search&related_id=3917392 */
                    "espacos" : {"icon" : "./icons/espacos.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/teatro_1778557?term=teatro&page=1&position=3&origin=search&related_id=1778557 */
                    "patrimonio" : {"icon" : "./icons/patrimonio.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/museu_1825814?term=museu&page=1&position=3&origin=search&related_id=1825814 */
                    "memoria" : {"icon" : "./icons/memoria.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/tempo_7477551?term=historia&page=1&position=65&origin=search&related_id=7477551 */
                    "esporte" : {"icon" : "./icons/esporte.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/jogador-de-futebol_1093071?term=futebol+pessoa&page=2&position=31&origin=search&related_id=1093071 */
                    "atendimento" : {"icon" : "./icons/atendimento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/fone-de-ouvido_3917730?page=1&position=7&term=contato&origin=search&related_id=3917730 */
                    "economia" : {"icon" : "./icons/economia.svg", "a_attr" : {"class" : "tema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/banca-global_7793070?term=economia+global&page=10&position=14&origin=search&related_id=7793070 */
                    "macroeconomia" : {"icon" : "./icons/macroeconomia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/alinhamento-do-grafico_7661482?term=graficos&related_id=7661482 */
                    "contas" : {"icon" : "./icons/contas.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/calculadora_3626508?term=calculadora&page=1&position=1&origin=search&related_id=3626508 */
                    "financas" : {"icon" : "./icons/financas.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/gestao_3147508?term=gest%C3%A3o+dinheiro&page=2&position=23&origin=search&related_id=3147508 */
                    "estatisticas" : {"icon" : "./icons/estatisticas.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/estatisticas_8366661?term=estatistica+dinheiro&page=4&position=29&origin=search&related_id=8366661 */
                    "comercioint" : {"icon" : "./icons/comercioint.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/comercio-eletronico-internacional_57589?term=comercio+internacional&page=1&position=32&origin=search&related_id=57589 */
                    "setores" : {"icon" : "./icons/setores.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/grafico-de-pizza_3589915?term=setor&page=4&position=44&origin=search&related_id=3589915 */
                    "agricultura" : {"icon" : "./icons/agricultura.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/agricultura_4272176?term=agricultura&page=2&position=38&origin=search&related_id=4272176 */
                    "energia" : {"icon" : "./icons/energia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/raio-trovao_5556048?term=energia&page=1&position=2&origin=search&related_id=5556048 */
                    "extrativas" : {"icon" : "./icons/extrativas.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/mineracao-de-bitcoin_1627580?term=minera%C3%A7%C3%A3o&page=4&position=29&origin=search&related_id=1627580 */
                    "transformacao" : {"icon" : "./icons/transformacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/industria_5651875?term=industria&page=2&position=46&origin=search&related_id=5651875 */
                    "construcao" : {"icon" : "./icons/construcao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/capacete_4631595?term=pedreiro&page=1&position=5&origin=search&related_id=4631595 */
                    "comercio" : {"icon" : "./icons/comercio.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/carrinho-de-compras_1332756?term=comercio&page=1&position=28&origin=search&related_id=1332756 */
                    "servicos" : {"icon" : "./icons/servicos.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/servico_5935761?term=servi%C3%A7os&page=1&position=5&origin=search&related_id=5935761 */
                    "precos" : {"icon" : "./icons/precos.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/saco-de-dolar_7928299?page=1&position=2&term=custo&origin=search&related_id=7928299 */
                    "informal" : {"icon" : "./icons/informal.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/comida_10037271 */
                    "ciencia" : {"icon" : "./icons/ciencia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/fisica_3914734?term=ciencia&related_id=3914734 */
                    "si" : {"icon" : "./icons/si.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/em-formacao_1055189?term=informa%C3%A7%C3%A3o&page=1&position=2&origin=search&related_id=1055189 */
                    "empreendedorismo" : {"icon" : "./icons/empreendedorismo.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/lampada-incandescente_69172?term=lampada&page=1&position=4&origin=search&related_id=69172 */
                    "turismo" : {"icon" : "./icons/turismo.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/aviao-preto_61212?term=avi%C3%A3o&page=1&position=63&origin=search&related_id=61212 */
                    "meio" : {"icon" : "./icons/meio.svg", "a_attr" : {"class" : "tema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/topografia_9232406?term=topografia&page=1&position=17&origin=search&related_id=9232406 */
                    "geologia" : {"icon" : "./icons/geologia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/rocha_2041975?term=rocha&page=1&position=47&origin=search&related_id=2041975 */
                    "hidrografia" : {"icon" : "./icons/hidrografia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/rio_2627394?term=rio&page=1&position=34&origin=search&related_id=2627394 */
                    "topografia" : {"icon" : "./icons/topografia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/mapa_2108221?term=topografia&page=1&position=37&origin=search&related_id=2108221 */
                    "imageamento" : {"icon" : "./icons/imageamento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/mapa-de-ruas_6925151?term=mapa+cidade&page=3&position=24&origin=search&related_id=6925151 */
                    "desastres" : {"icon" : "./icons/desastres.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/avalanche-de-neve_3184849?term=avalanche&page=1&position=90&origin=search&related_id=3184849 */
                    "ambientecons" : {"icon" : "./icons/ambientecons.svg", "a_attr" : {"class" : "tema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/edificios_24962?term=cidade+edificios&page=1&position=1&origin=search&related_id=24962 */
                    "limites" : {"icon" : "./icons/limites.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/fronteira_806556?term=fronteiras&page=3&position=67&origin=search&related_id=806556 */
                    "localizacao" : {"icon" : "./icons/localizacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/pin_4196465?term=localiza%C3%A7%C3%A3o&page=1&position=38&origin=search&related_id=4196465 */
                    "vias" : {"icon" : "./icons/vias.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/praca-da-rua_59462?term=rua&page=1&position=28&origin=search&related_id=59462 */
                    "transportes" : {"icon" : "./icons/transportes.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/onibus_565352?term=transporte&page=1&position=34&origin=search&related_id=565352 */
                    "energiacomunicacao" : {"icon" : "./icons/energiacomunicacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/poste-eletrico_2804014?term=poste+eletrico&page=1&position=7&origin=tag&related_id=2804014 */
                    "usosolo" : {"icon" : "./icons/usosolo.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/camadas_6014681?term=terreno&page=1&position=25&origin=search&related_id=6014681 */
                    "ocupacao" : {"icon" : "./icons/ocupacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/paisagem-urbana_122376?term=urbano&page=2&position=87&origin=tag&related_id=122376 */
                    "cadastrosolo" : {"icon" : "./icons/cadastrosolo.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/caneta-e-papel_8253647?term=caneta+papel&page=1&position=55&origin=search&related_id=8253647 */
                    "nucleosurbanos" : {"icon" : "./icons/nucleosurbanos.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/comunidade_7760927?term=vizinhan%C3%A7a&page=2&position=49&origin=search&related_id=7760927 */  
                    "planejamento" : {"icon" : "./icons/planejamento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/a-medida_1982168?term=casa+medida&related_id=1982168 */
                    "planodiretor" : {"icon" : "./icons/planodiretor.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/lista_126082?term=plano&page=1&position=36&origin=search&related_id=126082 */
                    "zoneamento" : {"icon" : "./icons/zoneamento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/terreno_831561?term=terreno&page=1&position=8&origin=tag&related_id=831561 */
                    "intervencoes" : {"icon" : "./icons/intervencoes.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/ferramentas_969213?term=cidade+caneta&related_id=969213 */
                    "meioambiente" : {"icon" : "./icons/meioambiente.svg", "a_attr" : {"class" : "tema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/meio-ambiente_2821176?term=meio+ambiente+mundo&page=1&position=15&origin=search&related_id=2821176 */
                    "climatologia" : {"icon" : "./icons/climatologia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/nuvem-negra-de-chuva-com-gotas-de-chuva-caindo_40191?term=nuvem&page=1&position=36&origin=search&related_id=40191 */
                    "faunaflora" : {"icon" : "./icons/faunaflora.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/passaro_1170334?term=passaro&page=1&position=48&origin=search&related_id=1170334 */
                    "conservacao" : {"icon" : "./icons/conservacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/mao_6367124?term=conserva%C3%A7%C3%A3o&page=4&position=40&origin=search&related_id=6367124 */
                    "saneamento" : {"icon" : "./icons/saneamento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/torneira_1048810?term=torneira&page=1&position=6&origin=search&related_id=1048810 */
                    "eduambi" : {"icon" : "./icons/eduambi.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/semeando_620798?term=sementes&page=1&position=39&origin=search&related_id=620798 */
                    "desenvolvimento" : {"icon" : "./icons/desenvolvimento.svg", "a_attr" : {"class" : "tema  jstree-ocl"}}, /* https://www.flaticon.com/free-icon/increase_2275266?term=growth&page=1&position=38&origin=tag&related_id=2275266 */
                    "vulnerabilidade" : {"icon" : "./icons/vulnerabilidade.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/free-icon/shelter_4117129?term=homeless&page=1&position=18&origin=search&related_id=4117129 */
                    "humano" : {"icon" : "./icons/humano.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/free-icon/shelter_4117129?term=homeless&page=1&position=18&origin=search&related_id=4117129 */
                    "splus_sociedade" : {"icon" : "./icons/splus_sociedade.svg", "a_attr" : {"class" : "splus"}},
                    "splus_economia" : {"icon" : "./icons/splus_economia.svg", "a_attr" : {"class" : "splus"}},
                    "splus_meiofisico" : {"icon" : "./icons/splus_meiofisico.svg", "a_attr" : {"class" : "splus"}},
                    "splus_ambcons" : {"icon" : "./icons/splus_ambcons.svg", "a_attr" : {"class" : "splus"}},
                    "splus_meioamb" : {"icon" : "./icons/splus_meioamb.svg", "a_attr" : {"class" : "splus"}},
                    "splus_desenvolvimento" : {"icon" : "./icons/splus_desenvolvimento.svg", "a_attr" : {"class" : "splus"}},
                    /*"splus_sociedade_clicked" : {"icon" : "./icons/splus_sociedade.svg", "a_attr" : {"class" : "splus jstree-clicked"}},*/
                },
                'plugins' : [ "checkbox" , "search", "types", "themes" ],
                'core' : {
                    'themes' : { "stripes" : false },
                    'data' : [{
                        "text" : "Sociedade",
                        'id' : 'no_checkbox_sociedade_1',
                        "state" : { 
                            "opened" : true,
                            "disabled" : true,
                        },
                        "type" : "sociedade",
                        "children" : [
                            {
                            "text" : "População",
                            'id' : 'no_checkbox_sociedade_2',
                            "state" : { 
                                "disabled" : true,
                            },
                            "type" : "populacao",
                            "children" : [
                                {
                                "text" : "Características gerais da população",
                                'id' : 'no_checkbox_sociedade_3',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "caracteristica",
                                },
                                {
                                "text" : "Componentes da dinâmica geográfica e estatísticas vitais",
                                'id' : 'no_checkbox_sociedade_4',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "componentes"
                                },
                                {
                                "text" : "Família",
                                'id' : 'no_checkbox_sociedade_5',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "familia"
                                },
                                {
                                "text" : "Nupcialidade",
                                'id' : 'no_checkbox_sociedade_6',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "nupcialidade"
                                },
                                {
                                "text" : "Grupos populacionais específicos",
                                'id' : 'no_checkbox_sociedade_7',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "grupos"
                                },
                                {
                                "text" : "Outras estatísticas sobre população",
                                'id' : 'no_checkbox_sociedade_8',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "pontos",
                                }
                            ]
                            },
                            {
                            "text" : "Trabalho",
                            'id' : 'no_checkbox_sociedade_9',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "trabalho",
                            "children" : [
                                {
                                "text" : "Trabalho remunerado",
                                'id' : 'no_checkbox_sociedade_10',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "trabalhoremunerado"
                                },
                                {
                                "text" : "Outras formas de trabalho",
                                'id' : 'no_checkbox_sociedade_11',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "pontos"
                                },
                            ]
                            },
                            {
                            "text" : "Educação",
                            'id' : 'no_checkbox_sociedade_12',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "educacao",
                            "children" : [
                                {
                                "text" : "Escolaridade",
                                'id' : 'no_checkbox_sociedade_13',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "escolaridade"
                                },
                                {
                                "text" : "Escolarização",
                                'id' : 'no_checkbox_sociedade_14',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "escolarizacao"
                                },
                                {
                                "text" : "Educação básica",
                                'id' : 'no_checkbox_sociedade_15',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "educacaobasica"
                                },
                                {
                                "text" : "Educação superior",
                                'id' : 'no_checkbox_sociedade_16',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "educacaosuperior"
                                },
                            ]
                            },
                            {
                            "text" : "Saúde",
                            'id' : 'no_checkbox_sociedade_17',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "saude",
                            },
                            {
                            "text" : "Rendimento, despesa e consumo",
                            'id' : 'no_checkbox_sociedade_18',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "rendimento",
                            },
                            {
                            "text" : "Proteção Social",
                            'id' : 'no_checkbox_sociedade_19',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "protecao"
                            },
                            {
                            "text" : "Habitação",
                            'id' : 'no_checkbox_sociedade_20',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "habitacao"
                            },
                            {
                            "text" : "Justiça e Segurança",
                            'id' : 'no_checkbox_sociedade_21',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "justseg",
                            "children" : [
                                {
                                "text" : "Criminalidade",
                                'id' : 'no_checkbox_sociedade_22',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "criminalidade"
                                },
                                {
                                "text" : "Justiça",
                                'id' : 'no_checkbox_sociedade_23',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "justica"
                                },
                                {
                                "text" : "Segurança pública",
                                'id' : 'no_checkbox_sociedade_24',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "segurancapublica"
                                },
                                {
                                "text" : "Inteligência militar",
                                'id' : 'no_checkbox_sociedade_25',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "militar"
                                },
                            ]
                            },
                            {
                            "text" : "Administração Pública",
                            'id' : 'no_checkbox_sociedade_26',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "administracao",
                            "children" : [
                                {
                                "text" : "Funcionalismo",
                                'id' : 'no_checkbox_sociedade_27',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "funcionalismo"
                                },
                                {
                                "text" : "Programa de metas",
                                'id' : 'no_checkbox_sociedade_28',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "meta"
                                },
                                {
                                "text" : "Transparência e integridade",
                                'id' : 'no_checkbox_sociedade_29',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "transparencia"
                                },
                            ]
                            },
                            {
                            "text" : "Participação social e política",
                            'id' : 'no_checkbox_sociedade_30',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "participacao",
                            "children" : [
                                {
                                "text" : "Eleições",
                                'id' : 'no_checkbox_sociedade_31',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "eleicao"
                                },
                                {
                                "text" : "Sindicatos e associações profissionais",
                                'id' : 'no_checkbox_sociedade_32',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "sindicato"
                                },
                                {
                                "text" : "Terceiro setor",
                                'id' : 'no_checkbox_sociedade_33',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "ong"
                                },
                                {
                                "text" : "Conselhos e orgãos colegiados",
                                'id' : 'no_checkbox_sociedade_34',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "conselho"
                                },
                                {
                                "text" : "Outras formas de participação social",
                                'id' : 'no_checkbox_sociedade_35',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "pontos"
                                },
                            ]
                            },
                            {
                            "text" : "Gênero e orientação sexual",
                            'id' : 'no_checkbox_sociedade_36',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "genero"
                            },
                            {
                            "text" : "Cultura",
                            'id' : 'no_checkbox_sociedade_37',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "cultura",
                            "children" : [
                                {
                                "text" : "Espaços culturais",
                                'id' : 'no_checkbox_sociedade_38',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "espacos"
                                },
                                {
                                "text" : "Patrimônio cultural",
                                'id' : 'no_checkbox_sociedade_39',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "patrimonio"
                                },
                                {
                                "text" : "Memória e história",
                                'id' : 'no_checkbox_sociedade_40',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "memoria"
                                },
                            ]
                            },
                            {
                            "text" : "Esporte e recreação",
                            'id' : 'no_checkbox_sociedade_41',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "esporte"
                            },
                            {
                            "text" : "Atendimento ao cidadão",
                            'id' : 'no_checkbox_sociedade_42',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "atendimento"
                            }
                        ]
                        },
                        {
                        "text" : "Economia",
                        'id' : 'no_checkbox_economia_43',
                        "state" : { 
                            "opened" : true,
                            "disabled" : true
                        },
                        "type" : "economia",
                        "children" : [
                            {
                            "text" : "Macroeconomia",
                            'id' : 'no_checkbox_economia_44',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "macroeconomia",
                            "children" : [
                                {
                                "text" : "Contas públicas",
                                'id' : 'no_checkbox_economia_45',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "contas"
                                },
                                {
                                "text" : "Finanças públicas",
                                'id' : 'no_checkbox_economia_46',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "financas"
                                },
                                {
                                "text" : "Estatísticas financeiras",
                                'id' : 'no_checkbox_economia_47',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "estatisticas",
                                },
                                {
                                "text" : "Comércio internacional e balanço de pagamentos",
                                'id' : 'no_checkbox_economia_48',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "comercioint"
                                },
                            ]
                            },
                            {
                            "text" : "Setores da economia",
                            'id' : 'no_checkbox_economia_49',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "setores",
                            "children" : [
                                {
                                "text" : "Agricultura, pecuária, produção florestal, pesca e aquicultura",
                                'id' : 'no_checkbox_economia_50',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "agricultura"
                                },
                                {
                                "text" : "Energia",
                                'id' : 'no_checkbox_economia_51',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "energia"
                                },
                                {
                                "text" : "Indústrias extrativas",
                                'id' : 'no_checkbox_economia_52',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "extrativas"
                                },
                                {
                                "text" : "Indústrias de transformação",
                                'id' : 'no_checkbox_economia_53',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "transformacao"
                                },
                                {
                                "text" : "Construção",
                                'id' : 'no_checkbox_economia_54',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "construcao"
                                },
                                {
                                "text" : "Comércio",
                                'id' : 'no_checkbox_economia_55',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "comercio"
                                },
                                {
                                "text" : "Serviços",
                                'id' : 'no_checkbox_economia_56',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "servicos"
                                },
                            ]
                            },
                            {
                            "text" : "Preços e custos",
                            'id' : 'no_checkbox_economia_57',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "precos"
                            },
                            {
                            "text" : "Setor infomal",
                            'id' : 'no_checkbox_economia_58',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "informal"
                            },
                            {
                            "text" : "Ciência, Tecnologia e Inovação - CT&I",
                            'id' : 'no_checkbox_economia_59',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "ciencia"
                            },
                            {
                            "text" : "Sociedade da informação",
                            'id' : 'no_checkbox_economia_60',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "si"
                            },
                            {
                            "text" : "Empreendedorismo",
                            'id' : 'no_checkbox_economia_61',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "empreendedorismo"
                            },
                            {
                            "text" : "Turismo",
                            'id' : 'no_checkbox_economia_62',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "turismo"
                            },
                            {
                            "text" : "Outras estatísticas econômicas",
                            'id' : 'no_checkbox_economia_63',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "pontos"
                            }
                        ]
                        },
                        {
                        "text" : "Meio físico",
                        'id' : 'no_checkbox_meiofisico_64',
                        "state" : { 
                            "disabled" : true,
                            "opened" : true
                        },
                        "type" : "meio",
                        "children" : [
                            {
                            "text" : "Geologia",
                            'id' : 'no_checkbox_meiofisico_65',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "geologia"
                            },
                            {
                            "text" : "Hidrografia",
                            'id' : 'no_checkbox_meiofisico_66',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "hidrografia",
                            },
                            {
                            "text" : "Topografia",
                            'id' : 'no_checkbox_meiofisico_67',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "topografia"
                            },
                            {
                            "text" : "Imageamento",
                            'id' : 'no_checkbox_meiofisico_68',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "imageamento"
                            },
                            {
                            "text" : "Desastres",
                            'id' : 'no_checkbox_meiofisico_69',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "desastres",
                            }
                        ]
                        },
                        {
                        "text" : "Ambiente Construído",
                        'id' : 'no_checkbox_ambcons_70',
                        "state" : { 
                            "disabled" : true,
                            "opened" : true
                        },
                        "type" : "ambientecons",
                        "children" : [
                            {
                            "text" : "Limites territoriais",
                            'id' : 'no_checkbox_ambcons_71',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "limites",
                            "children" : [
                                {
                                "text" : "Limites Municipais",
                                "id" : "portal_dados:municipios_rj",
                                "type" : "splus_ambcons",
                                },
                            ]
                            },
                            {
                            "text" : "Serviços de localização",
                            'id' : 'no_checkbox_ambcons_72',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "localizacao"
                            },
                            {
                            "text" : "Vias públicas",
                            'id' : 'no_checkbox_ambcons_73',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "vias",
                            "children" : [
                                {
                                "text" : "Malha Viária",
                                "id" : "portal_dados:Redes de ruas",
                                "type" : "splus_meiofisico",
                                },
                            ]
                            },
                            {
                            "text" : "Transportes",
                            'id' : 'no_checkbox_ambcons_74',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "transportes",
                            "children" : [
                                {
                                "text" : "Demanda de Passageiros",
                                "id" : "portal_dados:demanda_transporte_rj",
                                "type" : "splus_ambcons",
                                },
                            ]
                            },
                            {
                            "text" : "Energia e comunicação",
                            'id' : 'no_checkbox_ambcons_75',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "energiacomunicacao"
                            },
                            {
                            "text" : "Uso e ocupação de solo",
                            'id' : 'no_checkbox_ambcons_76',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "usosolo",
                            "children" : [
                                {
                                "text" : "Ocupação do solo",
                                'id' : 'no_checkbox_ambcons_77',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "ocupacao"
                                },
                                {
                                "text" : "Cadastro e uso do solo",
                                'id' : 'no_checkbox_ambcons_78',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "cadastrosolo"
                                },
                                {
                                "text" : "Núcleos urbanos informais",
                                'id' : 'no_checkbox_ambcons_79',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "nucleosurbanos"
                                },
                            ]
                            },
                            {
                            "text" : "Planejamento urbano",
                            'id' : 'no_checkbox_ambcons_80',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "planejamento",
                            "children" : [
                                {
                                "text" : "Plano diretor",
                                'id' : 'no_checkbox_ambcons_81',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "planodiretor",
                                },
                                {
                                "text" : "Zoneamento",
                                'id' : 'no_checkbox_ambcons_82',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "zoneamento",
                                },
                                {
                                "text" : "Intervenções urbanísticas",
                                'id' : 'no_checkbox_ambcons_84',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "intervencoes"
                                },
                                {
                                "text" : "Outras legislações urbanas",
                                'id' : 'no_checkbox_ambcons_83',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "pontos"
                                }
                            ]
                            }
                        ]
                        },
                        {
                        "text" : "Meio Ambiente",
                        'id' : 'no_checkbox_meioamb_85',
                        "state" : { 
                            "disabled" : true,
                            "opened" : true
                        },
                        "type" : "meioambiente",
                        "children" : [
                            {
                            "text" : "Climatologia e atmosfera",
                            'id' : 'no_checkbox_meioamb_86',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "climatologia"
                            },
                            {
                            "text" : "Fauna e flora",
                            'id' : 'no_checkbox_meioamb_87',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "faunaflora"
                            },
                            {
                            "text" : "Conservação da natureza",
                            'id' : 'no_checkbox_meioamb_88',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "conservacao"
                            },
                            {
                            "text" : "Saneamento",
                            'id' : 'no_checkbox_meioamb_89',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "saneamento",
                            },
                            {
                            "text" : "Educação Ambiental",
                            'id' : 'no_checkbox_meioamb_90',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "eduambi"
                            }
                        ]
                        },
                        {
                        "text" : "Desenvolvimento humano e condições de vida",
                        'id' : 'no_checkbox_desenvolvimento_91',
                        "state" : { 
                            "disabled" : true,
                            "opened" : true
                        },
                        "type" : "desenvolvimento",
                        "children" : [
                            {
                            "text" : "Indicadores de vulnerabilidade",
                            'id' : 'no_checkbox_desenvolvimento_92',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "vulnerabilidade"
                            },
                            {
                            "text" : "Indicadores de desenvolvimento humano",
                            'id' : 'no_checkbox_desenvolvimento_93',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "humano",
                            "children" : [
                                {
                                "text" : "IDH",
                                "id" : "checkbox_desenvolvimento_humano_0",
                                "type" : "splus_desenvolvimento",
                                }
                            ]
                            }
                        ]
                        }	
                    ]
                },
            
            });
            var to = false;
            $('#busca').keyup(function () {
                if(to) { clearTimeout(to); }
                to = setTimeout(function () {
                    var v = $('#busca').val();
                    $('#tree').jstree(true).search(v);
                }, 250);
            });
        });
    } else if (cidade == 'noi') {
        $(function () {
            $('#tree').jstree({
                "types" : 
                {
                    "pontos" : {"icon" : "./icons/pontos.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/pontos-de-menu_3917230?page=1&position=2&term=tres+pontos&origin=search&related_id=3917230 */
                    "sociedade" : {"icon" : "./icons/sociedade.svg", "a_attr" : {"class" : "tema  jstree-ocl jstree-ocl"}},
                    "populacao" : {"icon" : "./icons/populacao.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/usuarios-alt_5529124?page=1&position=7&term=pessoa&origin=search&related_id=5529124 */
                    "caracteristica" : {"icon" : "./icons/caracteristica.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/habilidades_2804141?term=pessoa+caracteristicas&page=1&position=40&origin=search&related_id=2804141 */
                    "componentes" : {"icon" : "./icons/componentes.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/terra-americas_9585979?related_id=9585979 */
                    "familia" : {"icon" : "./icons/familia.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/familia_4259535?term=familia&page=1&position=32&origin=search&related_id=4259535 */
                    "nupcialidade" : {"icon" : "./icons/nupcialidade.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/aliancas-de-casamento_2194147?term=alian%C3%A7as&page=1&position=5&origin=search&related_id=2194147 */
                    "grupos" : {"icon" : "./icons/grupos.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/raca_5534716?term=ra%C3%A7a&page=1&position=1&origin=search&related_id=5534716 */
                    "trabalho" : {"icon" : "./icons/trabalho.svg", "a_attr" : {"class" : "subtema jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/martelo_9237167?page=1&position=25&term=martelo&origin=search&related_id=9237167 */
                    "trabalhoremunerado" : {"icon" : "./icons/trabalhoremunerado.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/mao-segurando-usd_9768542?term=dinheiro&related_id=9768542 */
                    "educacao" : {"icon" : "./icons/educacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/livro-aberto-capa_7720109?page=1&position=27&term=livro&origin=search&related_id=7720109 */
                    "escolaridade" : {"icon" : "./icons/escolaridade.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/experiencia_4419048?term=experiencia&page=1&position=25&origin=search&related_id=4419048 */
                    "escolarizacao" : {"icon" : "./icons/escolarizacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/bolsa-de-livro-escolar_73614?term=mochila&page=1&position=23&origin=search&related_id=73614 */
                    "educacaobasica" : {"icon" : "./icons/educacaobasica.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/abc_2437535?term=abc&page=1&position=40&origin=search&related_id=2437535 */
                    "educacaosuperior" : {"icon" : "./icons/educacaosuperior.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/diplomado_5404967?term=diplomado+chapeu&page=1&position=7&origin=search&related_id=5404967 */
                    "saude" : {"icon" : "./icons/saude.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/farmacia_3914710?page=1&position=10&term=cruz&origin=search&related_id=3914710 */
                    "rendimento" : {"icon" : "./icons/rendimento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/pesquisar-dolar_7928311?page=1&position=78&term=dolar&origin=search&related_id=7928311 */
                    "protecao" : {"icon" : "./icons/protecao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/coracao-de-mao_5069109?term=cuidado&related_id=5069109 */
                    "habitacao" : {"icon" : "./icons/habitacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/chamine-de-casa_9246364?term=casa&related_id=9246364 */
                    "justseg" : {"icon" : "./icons/justseg.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/saldo-escala-esquerda_7661364?term=justi%C3%A7a&related_id=7661364 */
                    "criminalidade" : {"icon" : "./icons/criminalidade.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/arma-de-fogo_4065504?term=arma&page=1&position=25&origin=search&related_id=4065504 */
                    "justica" : {"icon" : "./icons/justica.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/gavel_3077294?term=juiz&page=1&position=63&origin=search&related_id=3077294 */
                    "segurancapublica" : {"icon" : "./icons/segurancapublica.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/distintivo_274217?term=distintivo&page=1&position=2&origin=search&related_id=274217 */
                    "militar" : {"icon" : "./icons/militar.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/chapeu-militar_4394761?term=chapeu+militar&page=1&position=2&origin=search&related_id=4394761 */   
                    "administracao" : {"icon" : "./icons/administracao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/definicoes_655656?term=administra%C3%A7%C3%A3o&page=1&position=10&origin=search&related_id=655656 */
                    "funcionalismo" : {"icon" : "./icons/funcionalismo.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/cracha_8353604?term=crach%C3%A1&page=1&position=72&origin=search&related_id=8353604 */
                    "meta" : {"icon" : "./icons/meta.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/escalada_3287191?term=escalar+montanha+bandeira&page=1&position=2&origin=search&related_id=3287191 */
                    "transparencia" : {"icon" : "./icons/transparencia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/pesquisa-na-lupa-do-documento_62754?term=lupa+documento&page=2&position=51&origin=search&related_id=62754 */
                    "participacao" : {"icon" : "./icons/participacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/missao_1384301?term=pessoa+bandeira&page=5&position=2&origin=search&related_id=1384301 */
                    "eleicao" : {"icon" : "./icons/eleicao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/voto_5930568?related_id=5930568 */
                    "sindicato" : {"icon" : "./icons/sindicato.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/download/icon/landing/3742032?format=png&size=16&type=standard */
                    "ong" : {"icon" : "./icons/ong.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/mao-amiga_2770560?term=m%C3%A3o+amiga&page=2&position=40&origin=search&related_id=2770560 */
                    "conselho" : {"icon" : "./icons/conselho.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/organizacao_1629054?term=organiza%C3%A7%C3%A3o&page=1&position=8&origin=search&related_id=1629054 */
                    "genero" : {"icon" : "./icons/genero.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/transgenero_9158506?term=genero+transgenero&page=2&position=81&origin=search&related_id=9158506 */
                    "cultura" : {"icon" : "./icons/cultura.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/paleta_3917392?page=1&position=9&term=arte&origin=search&related_id=3917392 */
                    "espacos" : {"icon" : "./icons/espacos.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/teatro_1778557?term=teatro&page=1&position=3&origin=search&related_id=1778557 */
                    "patrimonio" : {"icon" : "./icons/patrimonio.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/museu_1825814?term=museu&page=1&position=3&origin=search&related_id=1825814 */
                    "memoria" : {"icon" : "./icons/memoria.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/tempo_7477551?term=historia&page=1&position=65&origin=search&related_id=7477551 */
                    "esporte" : {"icon" : "./icons/esporte.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/jogador-de-futebol_1093071?term=futebol+pessoa&page=2&position=31&origin=search&related_id=1093071 */
                    "atendimento" : {"icon" : "./icons/atendimento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/fone-de-ouvido_3917730?page=1&position=7&term=contato&origin=search&related_id=3917730 */
                    "economia" : {"icon" : "./icons/economia.svg", "a_attr" : {"class" : "tema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/banca-global_7793070?term=economia+global&page=10&position=14&origin=search&related_id=7793070 */
                    "macroeconomia" : {"icon" : "./icons/macroeconomia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/alinhamento-do-grafico_7661482?term=graficos&related_id=7661482 */
                    "contas" : {"icon" : "./icons/contas.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/calculadora_3626508?term=calculadora&page=1&position=1&origin=search&related_id=3626508 */
                    "financas" : {"icon" : "./icons/financas.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/gestao_3147508?term=gest%C3%A3o+dinheiro&page=2&position=23&origin=search&related_id=3147508 */
                    "estatisticas" : {"icon" : "./icons/estatisticas.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/estatisticas_8366661?term=estatistica+dinheiro&page=4&position=29&origin=search&related_id=8366661 */
                    "comercioint" : {"icon" : "./icons/comercioint.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/comercio-eletronico-internacional_57589?term=comercio+internacional&page=1&position=32&origin=search&related_id=57589 */
                    "setores" : {"icon" : "./icons/setores.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/grafico-de-pizza_3589915?term=setor&page=4&position=44&origin=search&related_id=3589915 */
                    "agricultura" : {"icon" : "./icons/agricultura.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/agricultura_4272176?term=agricultura&page=2&position=38&origin=search&related_id=4272176 */
                    "energia" : {"icon" : "./icons/energia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/raio-trovao_5556048?term=energia&page=1&position=2&origin=search&related_id=5556048 */
                    "extrativas" : {"icon" : "./icons/extrativas.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/mineracao-de-bitcoin_1627580?term=minera%C3%A7%C3%A3o&page=4&position=29&origin=search&related_id=1627580 */
                    "transformacao" : {"icon" : "./icons/transformacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/industria_5651875?term=industria&page=2&position=46&origin=search&related_id=5651875 */
                    "construcao" : {"icon" : "./icons/construcao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/capacete_4631595?term=pedreiro&page=1&position=5&origin=search&related_id=4631595 */
                    "comercio" : {"icon" : "./icons/comercio.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/carrinho-de-compras_1332756?term=comercio&page=1&position=28&origin=search&related_id=1332756 */
                    "servicos" : {"icon" : "./icons/servicos.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/servico_5935761?term=servi%C3%A7os&page=1&position=5&origin=search&related_id=5935761 */
                    "precos" : {"icon" : "./icons/precos.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/saco-de-dolar_7928299?page=1&position=2&term=custo&origin=search&related_id=7928299 */
                    "informal" : {"icon" : "./icons/informal.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/comida_10037271 */
                    "ciencia" : {"icon" : "./icons/ciencia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icon-font-gratis/fisica_3914734?term=ciencia&related_id=3914734 */
                    "si" : {"icon" : "./icons/si.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/em-formacao_1055189?term=informa%C3%A7%C3%A3o&page=1&position=2&origin=search&related_id=1055189 */
                    "empreendedorismo" : {"icon" : "./icons/empreendedorismo.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/lampada-incandescente_69172?term=lampada&page=1&position=4&origin=search&related_id=69172 */
                    "turismo" : {"icon" : "./icons/turismo.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/aviao-preto_61212?term=avi%C3%A3o&page=1&position=63&origin=search&related_id=61212 */
                    "meio" : {"icon" : "./icons/meio.svg", "a_attr" : {"class" : "tema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/topografia_9232406?term=topografia&page=1&position=17&origin=search&related_id=9232406 */
                    "geologia" : {"icon" : "./icons/geologia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/rocha_2041975?term=rocha&page=1&position=47&origin=search&related_id=2041975 */
                    "hidrografia" : {"icon" : "./icons/hidrografia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/rio_2627394?term=rio&page=1&position=34&origin=search&related_id=2627394 */
                    "topografia" : {"icon" : "./icons/topografia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/mapa_2108221?term=topografia&page=1&position=37&origin=search&related_id=2108221 */
                    "imageamento" : {"icon" : "./icons/imageamento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/mapa-de-ruas_6925151?term=mapa+cidade&page=3&position=24&origin=search&related_id=6925151 */
                    "desastres" : {"icon" : "./icons/desastres.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/avalanche-de-neve_3184849?term=avalanche&page=1&position=90&origin=search&related_id=3184849 */
                    "ambientecons" : {"icon" : "./icons/ambientecons.svg", "a_attr" : {"class" : "tema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/edificios_24962?term=cidade+edificios&page=1&position=1&origin=search&related_id=24962 */
                    "limites" : {"icon" : "./icons/limites.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/fronteira_806556?term=fronteiras&page=3&position=67&origin=search&related_id=806556 */
                    "localizacao" : {"icon" : "./icons/localizacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/pin_4196465?term=localiza%C3%A7%C3%A3o&page=1&position=38&origin=search&related_id=4196465 */
                    "vias" : {"icon" : "./icons/vias.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/praca-da-rua_59462?term=rua&page=1&position=28&origin=search&related_id=59462 */
                    "transportes" : {"icon" : "./icons/transportes.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/onibus_565352?term=transporte&page=1&position=34&origin=search&related_id=565352 */
                    "energiacomunicacao" : {"icon" : "./icons/energiacomunicacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/poste-eletrico_2804014?term=poste+eletrico&page=1&position=7&origin=tag&related_id=2804014 */
                    "usosolo" : {"icon" : "./icons/usosolo.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/camadas_6014681?term=terreno&page=1&position=25&origin=search&related_id=6014681 */
                    "ocupacao" : {"icon" : "./icons/ocupacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/paisagem-urbana_122376?term=urbano&page=2&position=87&origin=tag&related_id=122376 */
                    "cadastrosolo" : {"icon" : "./icons/cadastrosolo.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/caneta-e-papel_8253647?term=caneta+papel&page=1&position=55&origin=search&related_id=8253647 */
                    "nucleosurbanos" : {"icon" : "./icons/nucleosurbanos.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/comunidade_7760927?term=vizinhan%C3%A7a&page=2&position=49&origin=search&related_id=7760927 */  
                    "planejamento" : {"icon" : "./icons/planejamento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/a-medida_1982168?term=casa+medida&related_id=1982168 */
                    "planodiretor" : {"icon" : "./icons/planodiretor.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/lista_126082?term=plano&page=1&position=36&origin=search&related_id=126082 */
                    "zoneamento" : {"icon" : "./icons/zoneamento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/terreno_831561?term=terreno&page=1&position=8&origin=tag&related_id=831561 */
                    "intervencoes" : {"icon" : "./icons/intervencoes.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/ferramentas_969213?term=cidade+caneta&related_id=969213 */
                    "meioambiente" : {"icon" : "./icons/meioambiente.svg", "a_attr" : {"class" : "tema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/meio-ambiente_2821176?term=meio+ambiente+mundo&page=1&position=15&origin=search&related_id=2821176 */
                    "climatologia" : {"icon" : "./icons/climatologia.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/nuvem-negra-de-chuva-com-gotas-de-chuva-caindo_40191?term=nuvem&page=1&position=36&origin=search&related_id=40191 */
                    "faunaflora" : {"icon" : "./icons/faunaflora.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/passaro_1170334?term=passaro&page=1&position=48&origin=search&related_id=1170334 */
                    "conservacao" : {"icon" : "./icons/conservacao.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/mao_6367124?term=conserva%C3%A7%C3%A3o&page=4&position=40&origin=search&related_id=6367124 */
                    "saneamento" : {"icon" : "./icons/saneamento.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/torneira_1048810?term=torneira&page=1&position=6&origin=search&related_id=1048810 */
                    "eduambi" : {"icon" : "./icons/eduambi.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/br/icone-gratis/semeando_620798?term=sementes&page=1&position=39&origin=search&related_id=620798 */
                    "desenvolvimento" : {"icon" : "./icons/desenvolvimento.svg", "a_attr" : {"class" : "tema  jstree-ocl"}}, /* https://www.flaticon.com/free-icon/increase_2275266?term=growth&page=1&position=38&origin=tag&related_id=2275266 */
                    "vulnerabilidade" : {"icon" : "./icons/vulnerabilidade.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/free-icon/shelter_4117129?term=homeless&page=1&position=18&origin=search&related_id=4117129 */
                    "humano" : {"icon" : "./icons/humano.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}}, /* https://www.flaticon.com/free-icon/shelter_4117129?term=homeless&page=1&position=18&origin=search&related_id=4117129 */
                    "splus_sociedade" : {"icon" : "./icons/splus_sociedade.svg", "a_attr" : {"class" : "splus"}},
                    "splus_economia" : {"icon" : "./icons/splus_economia.svg", "a_attr" : {"class" : "splus"}},
                    "splus_meiofisico" : {"icon" : "./icons/splus_meiofisico.svg", "a_attr" : {"class" : "splus"}},
                    "splus_ambcons" : {"icon" : "./icons/splus_ambcons.svg", "a_attr" : {"class" : "splus"}},
                    "splus_meioamb" : {"icon" : "./icons/splus_meioamb.svg", "a_attr" : {"class" : "splus"}},
                    "splus_desenvolvimento" : {"icon" : "./icons/splus_desenvolvimento.svg", "a_attr" : {"class" : "splus"}},
                    /*"splus_sociedade_clicked" : {"icon" : "./icons/splus_sociedade.svg", "a_attr" : {"class" : "splus jstree-clicked"}},*/
                },
                'plugins' : [ "checkbox" , "search", "types", "themes" ],
                'core' : {
                    'themes' : { "stripes" : false },
                    'data' : [{
                        "text" : "Sociedade",
                        'id' : 'no_checkbox_sociedade_1',
                        "state" : { 
                            "opened" : true,
                            "disabled" : true,
                        },
                        "type" : "sociedade",
                        "children" : [
                            {
                            "text" : "População",
                            'id' : 'no_checkbox_sociedade_2',
                            "state" : { 
                                "disabled" : true,
                            },
                            "type" : "populacao",
                            "children" : [
                                {
                                "text" : "Características gerais da população",
                                'id' : 'no_checkbox_sociedade_3',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "caracteristica",
                                },
                                {
                                "text" : "Componentes da dinâmica geográfica e estatísticas vitais",
                                'id' : 'no_checkbox_sociedade_4',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "componentes"
                                },
                                {
                                "text" : "Família",
                                'id' : 'no_checkbox_sociedade_5',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "familia"
                                },
                                {
                                "text" : "Nupcialidade",
                                'id' : 'no_checkbox_sociedade_6',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "nupcialidade"
                                },
                                {
                                "text" : "Grupos populacionais específicos",
                                'id' : 'no_checkbox_sociedade_7',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "grupos"
                                },
                                {
                                "text" : "Outras estatísticas sobre população",
                                'id' : 'no_checkbox_sociedade_8',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "pontos",
                                }
                            ]
                            },
                            {
                            "text" : "Trabalho",
                            'id' : 'no_checkbox_sociedade_9',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "trabalho",
                            "children" : [
                                {
                                "text" : "Trabalho remunerado",
                                'id' : 'no_checkbox_sociedade_10',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "trabalhoremunerado"
                                },
                                {
                                "text" : "Outras formas de trabalho",
                                'id' : 'no_checkbox_sociedade_11',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "pontos"
                                },
                            ]
                            },
                            {
                            "text" : "Educação",
                            'id' : 'no_checkbox_sociedade_12',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "educacao",
                            "children" : [
                                {
                                "text" : "Escolaridade",
                                'id' : 'no_checkbox_sociedade_13',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "escolaridade"
                                },
                                {
                                "text" : "Escolarização",
                                'id' : 'no_checkbox_sociedade_14',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "escolarizacao"
                                },
                                {
                                "text" : "Educação básica",
                                'id' : 'no_checkbox_sociedade_15',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "educacaobasica"
                                },
                                {
                                "text" : "Educação superior",
                                'id' : 'no_checkbox_sociedade_16',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "educacaosuperior"
                                },
                            ]
                            },
                            {
                            "text" : "Saúde",
                            'id' : 'no_checkbox_sociedade_17',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "saude",
                            },
                            {
                            "text" : "Rendimento, despesa e consumo",
                            'id' : 'no_checkbox_sociedade_18',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "rendimento",
                            },
                            {
                            "text" : "Proteção Social",
                            'id' : 'no_checkbox_sociedade_19',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "protecao"
                            },
                            {
                            "text" : "Habitação",
                            'id' : 'no_checkbox_sociedade_20',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "habitacao"
                            },
                            {
                            "text" : "Justiça e Segurança",
                            'id' : 'no_checkbox_sociedade_21',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "justseg",
                            "children" : [
                                {
                                "text" : "Criminalidade",
                                'id' : 'no_checkbox_sociedade_22',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "criminalidade"
                                },
                                {
                                "text" : "Justiça",
                                'id' : 'no_checkbox_sociedade_23',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "justica"
                                },
                                {
                                "text" : "Segurança pública",
                                'id' : 'no_checkbox_sociedade_24',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "segurancapublica"
                                },
                                {
                                "text" : "Inteligência militar",
                                'id' : 'no_checkbox_sociedade_25',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "militar"
                                },
                            ]
                            },
                            {
                            "text" : "Administração Pública",
                            'id' : 'no_checkbox_sociedade_26',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "administracao",
                            "children" : [
                                {
                                "text" : "Funcionalismo",
                                'id' : 'no_checkbox_sociedade_27',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "funcionalismo"
                                },
                                {
                                "text" : "Programa de metas",
                                'id' : 'no_checkbox_sociedade_28',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "meta"
                                },
                                {
                                "text" : "Transparência e integridade",
                                'id' : 'no_checkbox_sociedade_29',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "transparencia"
                                },
                            ]
                            },
                            {
                            "text" : "Participação social e política",
                            'id' : 'no_checkbox_sociedade_30',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "participacao",
                            "children" : [
                                {
                                "text" : "Eleições",
                                'id' : 'no_checkbox_sociedade_31',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "eleicao"
                                },
                                {
                                "text" : "Sindicatos e associações profissionais",
                                'id' : 'no_checkbox_sociedade_32',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "sindicato"
                                },
                                {
                                "text" : "Terceiro setor",
                                'id' : 'no_checkbox_sociedade_33',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "ong"
                                },
                                {
                                "text" : "Conselhos e orgãos colegiados",
                                'id' : 'no_checkbox_sociedade_34',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "conselho"
                                },
                                {
                                "text" : "Outras formas de participação social",
                                'id' : 'no_checkbox_sociedade_35',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "pontos"
                                },
                            ]
                            },
                            {
                            "text" : "Gênero e orientação sexual",
                            'id' : 'no_checkbox_sociedade_36',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "genero"
                            },
                            {
                            "text" : "Cultura",
                            'id' : 'no_checkbox_sociedade_37',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "cultura",
                            "children" : [
                                {
                                "text" : "Espaços culturais",
                                'id' : 'no_checkbox_sociedade_38',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "espacos"
                                },
                                {
                                "text" : "Patrimônio cultural",
                                'id' : 'no_checkbox_sociedade_39',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "patrimonio"
                                },
                                {
                                "text" : "Memória e história",
                                'id' : 'no_checkbox_sociedade_40',
                                "state" : { 
                                    "disabled" : true 
                                },
                                "type" : "memoria"
                                },
                            ]
                            },
                            {
                            "text" : "Esporte e recreação",
                            'id' : 'no_checkbox_sociedade_41',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "esporte"
                            },
                            {
                            "text" : "Atendimento ao cidadão",
                            'id' : 'no_checkbox_sociedade_42',
                            "state" : { 
                                "disabled" : true 
                            },
                            "type" : "atendimento"
                            }
                        ]
                        },
                        {
                        "text" : "Economia",
                        'id' : 'no_checkbox_economia_43',
                        "state" : { 
                            "opened" : true,
                            "disabled" : true
                        },
                        "type" : "economia",
                        "children" : [
                            {
                            "text" : "Macroeconomia",
                            'id' : 'no_checkbox_economia_44',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "macroeconomia",
                            "children" : [
                                {
                                "text" : "Contas públicas",
                                'id' : 'no_checkbox_economia_45',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "contas"
                                },
                                {
                                "text" : "Finanças públicas",
                                'id' : 'no_checkbox_economia_46',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "financas"
                                },
                                {
                                "text" : "Estatísticas financeiras",
                                'id' : 'no_checkbox_economia_47',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "estatisticas",
                                },
                                {
                                "text" : "Comércio internacional e balanço de pagamentos",
                                'id' : 'no_checkbox_economia_48',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "comercioint"
                                },
                            ]
                            },
                            {
                            "text" : "Setores da economia",
                            'id' : 'no_checkbox_economia_49',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "setores",
                            "children" : [
                                {
                                "text" : "Agricultura, pecuária, produção florestal, pesca e aquicultura",
                                'id' : 'no_checkbox_economia_50',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "agricultura"
                                },
                                {
                                "text" : "Energia",
                                'id' : 'no_checkbox_economia_51',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "energia"
                                },
                                {
                                "text" : "Indústrias extrativas",
                                'id' : 'no_checkbox_economia_52',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "extrativas"
                                },
                                {
                                "text" : "Indústrias de transformação",
                                'id' : 'no_checkbox_economia_53',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "transformacao"
                                },
                                {
                                "text" : "Construção",
                                'id' : 'no_checkbox_economia_54',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "construcao"
                                },
                                {
                                "text" : "Comércio",
                                'id' : 'no_checkbox_economia_55',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "comercio"
                                },
                                {
                                "text" : "Serviços",
                                'id' : 'no_checkbox_economia_56',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "servicos"
                                },
                            ]
                            },
                            {
                            "text" : "Preços e custos",
                            'id' : 'no_checkbox_economia_57',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "precos"
                            },
                            {
                            "text" : "Setor infomal",
                            'id' : 'no_checkbox_economia_58',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "informal"
                            },
                            {
                            "text" : "Ciência, Tecnologia e Inovação - CT&I",
                            'id' : 'no_checkbox_economia_59',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "ciencia"
                            },
                            {
                            "text" : "Sociedade da informação",
                            'id' : 'no_checkbox_economia_60',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "si"
                            },
                            {
                            "text" : "Empreendedorismo",
                            'id' : 'no_checkbox_economia_61',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "empreendedorismo"
                            },
                            {
                            "text" : "Turismo",
                            'id' : 'no_checkbox_economia_62',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "turismo"
                            },
                            {
                            "text" : "Outras estatísticas econômicas",
                            'id' : 'no_checkbox_economia_63',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "pontos"
                            }
                        ]
                        },
                        {
                        "text" : "Meio físico",
                        'id' : 'no_checkbox_meiofisico_64',
                        "state" : { 
                            "disabled" : true,
                            "opened" : true
                        },
                        "type" : "meio",
                        "children" : [
                            {
                            "text" : "Geologia",
                            'id' : 'no_checkbox_meiofisico_65',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "geologia"
                            },
                            {
                            "text" : "Hidrografia",
                            'id' : 'no_checkbox_meiofisico_66',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "hidrografia",
                            },
                            {
                            "text" : "Topografia",
                            'id' : 'no_checkbox_meiofisico_67',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "topografia"
                            },
                            {
                            "text" : "Imageamento",
                            'id' : 'no_checkbox_meiofisico_68',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "imageamento"
                            },
                            {
                            "text" : "Desastres",
                            'id' : 'no_checkbox_meiofisico_69',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "desastres",
                            }
                        ]
                        },
                        {
                        "text" : "Ambiente Construído",
                        'id' : 'no_checkbox_ambcons_70',
                        "state" : { 
                            "disabled" : true,
                            "opened" : true
                        },
                        "type" : "ambientecons",
                        "children" : [
                            {
                            "text" : "Limites territoriais",
                            'id' : 'no_checkbox_ambcons_71',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "limites",
                            "children" : [
                                {
                                "text" : "Limites Municipais",
                                "id" : "portal_dados:municipios_rj",
                                "type" : "splus_ambcons",
                                },
                            ]
                            },
                            {
                            "text" : "Serviços de localização",
                            'id' : 'no_checkbox_ambcons_72',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "localizacao"
                            },
                            {
                            "text" : "Vias públicas",
                            'id' : 'no_checkbox_ambcons_73',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "vias",
                            "children" : [
                                {
                                "text" : "Malha Viária",
                                "id" : "portal_dados:Redes de ruas",
                                "type" : "splus_meiofisico",
                                },
                            ]
                            },
                            {
                            "text" : "Transportes",
                            'id' : 'no_checkbox_ambcons_74',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "transportes",
                            },
                            {
                            "text" : "Energia e comunicação",
                            'id' : 'no_checkbox_ambcons_75',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "energiacomunicacao"
                            },
                            {
                            "text" : "Uso e ocupação de solo",
                            'id' : 'no_checkbox_ambcons_76',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "usosolo",
                            "children" : [
                                {
                                "text" : "Ocupação do solo",
                                'id' : 'no_checkbox_ambcons_77',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "ocupacao"
                                },
                                {
                                "text" : "Cadastro e uso do solo",
                                'id' : 'no_checkbox_ambcons_78',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "cadastrosolo"
                                },
                                {
                                "text" : "Núcleos urbanos informais",
                                'id' : 'no_checkbox_ambcons_79',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "nucleosurbanos"
                                },
                            ]
                            },
                            {
                            "text" : "Planejamento urbano",
                            'id' : 'no_checkbox_ambcons_80',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "planejamento",
                            "children" : [
                                {
                                "text" : "Plano diretor",
                                'id' : 'no_checkbox_ambcons_81',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "planodiretor",
                                },
                                {
                                "text" : "Zoneamento",
                                'id' : 'no_checkbox_ambcons_82',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "zoneamento",
                                },
                                {
                                "text" : "Intervenções urbanísticas",
                                'id' : 'no_checkbox_ambcons_84',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "intervencoes"
                                },
                                {
                                "text" : "Outras legislações urbanas",
                                'id' : 'no_checkbox_ambcons_83',
                                "state" : { 
                                    "disabled" : true
                                },
                                "type" : "pontos"
                                }
                            ]
                            }
                        ]
                        },
                        {
                        "text" : "Meio Ambiente",
                        'id' : 'no_checkbox_meioamb_85',
                        "state" : { 
                            "disabled" : true,
                            "opened" : true
                        },
                        "type" : "meioambiente",
                        "children" : [
                            {
                            "text" : "Climatologia e atmosfera",
                            'id' : 'no_checkbox_meioamb_86',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "climatologia"
                            },
                            {
                            "text" : "Fauna e flora",
                            'id' : 'no_checkbox_meioamb_87',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "faunaflora"
                            },
                            {
                            "text" : "Conservação da natureza",
                            'id' : 'no_checkbox_meioamb_88',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "conservacao"
                            },
                            {
                            "text" : "Saneamento",
                            'id' : 'no_checkbox_meioamb_89',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "saneamento",
                            },
                            {
                            "text" : "Educação Ambiental",
                            'id' : 'no_checkbox_meioamb_90',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "eduambi"
                            }
                        ]
                        },
                        {
                        "text" : "Desenvolvimento humano e condições de vida",
                        'id' : 'no_checkbox_desenvolvimento_91',
                        "state" : { 
                            "disabled" : true,
                            "opened" : true
                        },
                        "type" : "desenvolvimento",
                        "children" : [
                            {
                            "text" : "Indicadores de vulnerabilidade",
                            'id' : 'no_checkbox_desenvolvimento_92',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "vulnerabilidade"
                            },
                            {
                            "text" : "Indicadores de desenvolvimento humano",
                            'id' : 'no_checkbox_desenvolvimento_93',
                            "state" : { 
                                "disabled" : true
                            },
                            "type" : "humano",
                            "children" : [
                                {
                                "text" : "IDH",
                                "id" : "checkbox_desenvolvimento_humano_0",
                                "type" : "splus_desenvolvimento",
                                }
                            ]
                            }
                        ]
                        }	
                    ]
                },
            
            });
            var to = false;
            $('#busca').keyup(function () {
                if(to) { clearTimeout(to); }
                to = setTimeout(function () {
                    var v = $('#busca').val();
                    $('#tree').jstree(true).search(v);
                }, 250);
            });
        });
    }
} 