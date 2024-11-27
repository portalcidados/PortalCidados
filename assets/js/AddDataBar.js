function nome_eixo(){
    var eixo = event.target.innerText || event.target.parentNode.innerText;
    eixo = eixo.replaceAll(' ', '_');
    return(eixo);
}
function fecharBarcontainer() {
    var idvariavel = event.target.className;
    var variavel = document.getElementById(idvariavel);
    variavel.click();
}
// Function to update layer opacity
function updateOpacity(value, backend_layers_group, idvariavel) {
    backend_layers_group.eachLayer(function (layer) {
        if (layer.options && layer.options.layerName == idvariavel) {
            layer.setOpacity(value);
        }
    });
}

function moveLayer(index_up, index_down) {
    const layers = document.getElementsByClassName('leaflet-pane_backend-pane')[0];
    const layer_tomove_up = layers.children[index_up];
    const layer_tomove_down = layers.children[index_down];
    layers.insertBefore(layer_tomove_down, layer_tomove_up);
}

function posicao_camada(event, layerGroup, map) {
    var container = document.getElementById('DataBar').firstChild.firstChild;
    var id = event.target.id;
    var indice = id.indexOf(" ");
    var variavel = id.slice(indice+1);
    var tipo = id.slice(0, indice);
    var number = document.getElementById('position_number '+variavel);
    console.log(number.innerText);
    if (tipo == 'position_down' && parseInt(number.innerText) > 1) {
        var variavel_2 = document.getElementsByClassName('barcontainer');
        var variavel_1 = variavel_2[variavel_2.length-parseInt(number.innerText)];
        variavel_2 = variavel_2[variavel_2.length-parseInt(number.innerText)+1];
        var number_2 = variavel_2.getElementsByClassName('position_icon')[2];
        moveLayer(parseInt(number_2.innerText)-1, parseInt(number.innerText)-1);
        number_2.innerText = parseInt(number_2.innerText) + 1;
        number.innerText = parseInt(number.innerText) - 1;
        variavel_1.classList.add('move-down');
        variavel_2.classList.add('move-up');
        setTimeout(function() {
            variavel_1.classList.remove('move-down');
            variavel_2.classList.remove('move-up');
            container.insertBefore(variavel_2, variavel_1);
        }, 1000);
    } else if (tipo == 'position_up' && parseInt(number.innerText) < document.getElementsByClassName('barcontainer').length ) {
        var variavel_2 = document.getElementsByClassName('barcontainer');
        var variavel_1 = variavel_2[variavel_2.length-parseInt(number.innerText)];
        variavel_2 = variavel_2[variavel_2.length-parseInt(number.innerText)-1];
        var number_2 = variavel_2.getElementsByClassName('position_icon')[2];
        moveLayer(parseInt(number.innerText)-1, parseInt(number_2.innerText)-1);
        number_2.innerText = parseInt(number_2.innerText) - 1;
        number.innerText = parseInt(number.innerText) + 1;
        variavel_2.classList.add('move-down');
        variavel_1.classList.add('move-up');
        setTimeout(function() {
            variavel_2.classList.remove('move-down');
            variavel_1.classList.remove('move-up');
            container.insertBefore(variavel_1, variavel_2);
        }, 1000);
    }
}

export function AddDataBar(noUiSlider, backend_layers_group) {
    var datavector = document.getElementsByClassName('jstree-anchor splus jstree-clicked') || [];
    var listvector = document.getElementsByClassName('slider') || [];
    var listvectorids = [...listvector].map(element => element.id);
    var datavectortexts = [...datavector].map(element => element.textContent) || [];
    for (var i = 0; i < datavectortexts.length; i++) {
        if ( !(listvectorids.includes(datavectortexts[i])) ) {
            var eixo = nome_eixo();
            var idvariavel = event.target.id || event.target.parentNode.id;
            idvariavel = idvariavel.replaceAll('_anchor', '');
            var id = datavectortexts[i].replaceAll(' ', '_');
            var id2 = datavectortexts[i];
            var barcontainer = document.createElement('div');
            barcontainer.id = "barcontainer "+datavectortexts[i];
            barcontainer.className = "barcontainer";
            barcontainer.classList.add(eixo);
            var container = document.getElementsByClassName("ss-content")[0];
            container.appendChild(barcontainer);
            container.insertBefore(barcontainer, document.getElementsByClassName('barcontainer')[0]);
            var lab_indicador = document.createElement('div');
            lab_indicador.innerHTML  = '<b> '+datavectortexts[i]+':</b> <span id="val_'+id+'"></span>';
            lab_indicador.className = 'variavel';
            lab_indicador.style.height = "25px";
            document.getElementById("barcontainer "+datavectortexts[i]).appendChild(lab_indicador);
            var peso_indicador = document.createElement('div');
            peso_indicador.id = "botao_"+'+'+id+'-'+eixo;
            document.getElementById("barcontainer "+datavectortexts[i]).appendChild(peso_indicador);

            var fechar = document.createElement('div');
            fechar.id = "fechar_barcontainer";
            fechar.className = idvariavel;
            document.getElementById("barcontainer "+datavectortexts[i]).appendChild(fechar);
            fechar.onclick = function() {
                sel_indicador.noUiSlider.reset();
            };
            fechar.addEventListener('click', fecharBarcontainer);

            var div_indicador = document.createElement("div");
            div_indicador.id = datavectortexts[i];
            div_indicador.className = "slider";
            div_indicador.style.height = "10px";
            document.getElementById("barcontainer "+datavectortexts[i]).appendChild(div_indicador);
            var sel_indicador = document.getElementById(datavectortexts[i]);
            noUiSlider.create(sel_indicador, {
                connect: [true, false],
                start: [1],
                range: {
                    'min': [0],
                    'max': [1]
                },
                step: 0.01,
                format: {
                    to: function (value) {
                        return parseFloat(value).toFixed(2);
                    },
                    from: function (value) {
                        return parseFloat(value);
                    }
                }
            });
            var connect = sel_indicador.querySelector('.noUi-connect');
            connect.classList.add(eixo);
            sel_indicador.noUiSlider.on('update', function (values, handle) {
                var val_indicador = document.getElementById("val_"+id);
                val_indicador.innerHTML = values.join(' - ');
                values = parseFloat(values[handle]);
                updateOpacity(values, backend_layers_group, idvariavel);
            }); 
            var position_up = document.createElement('div');
            position_up.id = "position_up "+datavectortexts[i];
            position_up.className = "position_icon";
            position_up.addEventListener('click', (event) => {posicao_camada(event, backend_layers_group)});
            barcontainer.appendChild(position_up);
            var position_down = document.createElement('div');
            position_down.id = "position_down "+datavectortexts[i];
            position_down.className = "position_icon";
            position_down.addEventListener('click', (event) => {posicao_camada(event, backend_layers_group)});
            barcontainer.appendChild(position_down);
            var position_number = document.createElement('div');
            position_number.id = "position_number "+datavectortexts[i];
            position_number.className = "position_icon";
            position_number.innerText = document.getElementsByClassName('barcontainer').length;
            barcontainer.appendChild(position_number);
        }
    }
    for (i = 0; i < listvectorids.length; i++) {
        if ( !(datavectortexts.includes(listvectorids[i])) ) {
            var deletar = document.getElementById("barcontainer "+listvectorids[i]);
            deletar.remove();
            var elementos = document.querySelectorAll('[id*="position_number"]');
            var numero_elementos = elementos.length;
            console.log(numero_elementos);
            elementos.forEach(elemento => {
                elemento.innerText = numero_elementos;
                numero_elementos = numero_elementos - 1;
            });
            var selecionado = document.getElementsByClassName('botao_variavel clicked');
            if (selecionado.length <= 0 || selecionado.length == undefined) {
                document.getElementById('legenda').remove();
            }
        }
    }
    if (listvector.length <= 5){
        document.getElementById('DataBar').style.height = (listvector.length*75).toString()+'px'
    }
}