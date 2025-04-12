let cidade;
        async function chamarAPI(event){
            event.preventDefault();
            cidade = document.getElementById('cidade').value;
            const apiKEY ="5b036c89626317d693e836e666f07c3f";
            const urlAPI =`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidade)}&appid=${apiKEY}&lang=pt_br`;
            if(cidade.trim()=== ""){
                window.alert('Nome da cidade inválido :/');
                return;
            }
            else{
                const resp = await fetch(urlAPI);
                const obj = await resp.json();
                showPrevisao(obj);
                console.log(obj);
            }
        }
        function showPrevisao(obj){
            document.querySelector('#city').innerHTML = `${obj.name}, ${obj.sys.country}`;
            document.querySelector('#clima').innerHTML = `${obj.weather[0].description}`;
            document.querySelector('#ventania').innerHTML = `${obj.wind.speed   }`;
        }
        let limpar = document.getElementById('limparC').addEventListener('click',limparCampos);
        function limparCampos(event){
            event.preventDefault();
            document.getElementById('cidade').value = "";
            document.querySelector('p#city').innerHTML="";
            document.querySelector('p#pais').innerHTML="";
            document.querySelector('p#clima').innerHTML="";
            document.querySelector('p#ventania').innerHTML="";
    }
