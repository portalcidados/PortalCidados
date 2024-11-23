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
            document.getElementsByClassName("ss-content")[0].appendChild(barcontainer);
            var lab_indicador = document.createElement('div');
            lab_indicador.innerHTML  = '<b> '+datavectortexts[i]+':</b> <span id="val_'+id+'"></span>';
            lab_indicador.className = 'variavel';
            lab_indicador.style.height = "25px";
            document.getElementById("barcontainer "+datavectortexts[i]).appendChild(lab_indicador);
            var peso_indicador = document.createElement('div');
            if (listvectorids.length == 0) {
                peso_indicador.className = 'botao_variavel clicked';
                barcontainer.classList.add('clicked');
            } 
            else {
                peso_indicador.className = 'botao_variavel';
            }
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
        }
    }
    for (i = 0; i < listvectorids.length; i++) {
        if ( !(datavectortexts.includes(listvectorids[i])) ) {
            var deletar = document.getElementById("barcontainer "+listvectorids[i]);
            deletar.remove();
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