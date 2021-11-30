
class Country{
    constructor(name,description,continent,dieNumber){
        this.name=name;
        this.description=description;
        this.continent=continent
        this.dieNumber=dieNumber;
    }
}
    
    class UI{
        static showContinents(){
            // console.log('entro mostrar libros');
            var continent=document.getElementById('opc')
            
            const countries=Datos.filterCountries(continent.options[continent.selectedIndex].text);
            console.log(countries);
            for (let cont = 0; cont < countries.length; cont++) {
                UI.addCountryContinent(countries[cont]);
                
            }
            // countries.forEach((country) => {
            //     UI.addCountryContinent(country);        
            // });
        }
    
        static  addCountryContinent(country){
        //    this.cleanfields();
        //    Datos.addCountry(country)
        //    var continent=document.getElementById('opc')
              const  tabla=document.querySelector('#continent-list');
        //    console.log(continent.options[continent.selectedIndex].text);
        //    if(country.continent==continent.options[continent.selectedIndex].text){
                const trfila=document.createElement('tr');
                trfila.innerHTML=`
                <td>${country.name}</td>
                <td>${country.description}</td>
                <td>${country.continent}</td>
                <td>${country.dieNumber}</td>
                 `;
                 tabla.appendChild(trfila);
            //  }
        }
    
        // static  EliminarNoticias(el){
        //     if(el.classList.contains('delete')){
        //         el.parentElement.parentElement.remove();
        //     }
        // }
    
        // static  MostrarAlerta(mensaje,className){
        //     // // console.log('metodo de mos');
        //     const div=document.createElement('div');
        //     div.className=`alert alert-${className}`;
        //     div.appendChild(document.createTextNode(mensaje));
    
        //     const container=document.querySelector('.container');
        //     const form=document.querySelector('#form-noticias');
        //     container.insertBefore(div,form);
    
        //     setTimeout(()=>document.querySelector('.alert').remove(),3000);
        // }
    
        static  cleanfields(){
            var tabla=document.getElementById('continent-list')
            tabla.innerHTML=`
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            `;
        } 
    }
    
    class Datos{
        static  bringCountries() {
            let noticias;
            if(localStorage.getItem('countries')===null){
                noticias=[];
            }else{
                noticias=JSON.parse(localStorage.getItem('countries'));
            }
            return noticias;
        }
        
        static filterCountries(continent){
            let countriesC=[];
            const countries=Datos.bringCountries();
                for (let cont = 0; cont < countries.length; cont++) {
                    if(countries[cont].continent==continent){
                        countriesC.push(countries[cont]);
                    }                                        
                }
                countriesC.sort((a,b)=>{
                    if(a.dieNumber<b.dieNumber){
                        return 1;
                    }
                    if(a.dieNumber <b.dieNumber){
                        return -1;
                    }
                    return 0;
                });
                return countriesC;
        }

        
        static  addCountry(country) {
            const countries=Datos.bringCountries();
            countries.push(country);
            localStorage.setItem('countries',JSON.stringify(countries));
        }
    
        // static  removerNoticia(name) {
        //     const top10= Datos.bringCountries();
        //     top10.forEach((country,index) => {
        //         if(country.name === name){
        //         top10.splice(index,1);
        //         }
        //     });
        //     localStorage.setItem('top-10',JSON.stringify(noticias));
        // }    
    }
    // *************************************************** EVENTOS ***************************************************************
    
    // Carga de la pagina
    document.addEventListener('DOMContentLoaded',UI.showContinents());


    // document.getElementById('btnBuscar').addEventListener('click',(e)=>{
    //     e.preventDefault();
    //     console.log(' presionado');
    //     var continent=document.getElementById('opc')
    //     console.log(continent.options[continent.selectedIndex].text);
    //     // UI.cleanfields();
    //     UI.showContinents();
    // });

    document.getElementById('form-Continente').addEventListener('submit',(e)=>{
        e.preventDefault();
        console.log('presionado');
       
        UI.cleanfields();
        UI.showContinents();
    });
    // //Agregamos un evento al submit
    // document.querySelector('#form-noticias').addEventListener('submit',(e) => {
    //     e.preventDefault();
    // if(country)
    //     // obtenemos los valores del campo
    //     console.log('Lee evento');
    //     const titulo=document.querySelector('#tituloN').value;
    //     const descripcion=document.querySelector('#descripcionN').value;
        
    //     if(titulo === '' || descripcion === '' ){
    //         UI.MostrarAlerta('Porfavor Ingrese Todos Los Datos','danger');
    //     }else{
    //         const noticia=new Noticias(titulo,descripcion);
    //         Datos.addCountry(noticia);
    //         UI.addCountryContinent(noticia);
    //         UI.MostrarAlerta('Noticia Ingresado Satisfactoriamente','success');
    //         UI.cleanfields();
    // top-10
    //     }
    // });
    
    // // Eliminar fila
    // document.querySelector('#noticia-list').addEventListener("click", (e)=>{
    // UI.EliminarNoticias(e.target);
    // Datos.removerLibro(e.target.parentElement.previousElementSibling.textContent);
    // UI.MostrarAlerta('Noticia Eliminado ExitosaMente','success');
    // });
// localStorage.clear()
if(Datos.bringCountries().length==0){
    // paises Americanos
    var country=new Country('Brasil','Brasil es el ejemplo de todo lo que podía salir mal en una pandemia','America',21960766)
    Datos.addCountry(country);
    country=new Country('Argentina','Los impactos sociales y económicos de la pandemia del COVID-19 profundizaron la situación de vulnerabilidad social que el país ya atravesaba','America',5307159)
    Datos.addCountry(country);
    country=new Country('Colombia','La crisis económica relacionada al COVID-19 afectó severamente a Colombia','America',5034266)
    Datos.addCountry(country);
    country=new Country('Mexico','La crisis económica relacionada al COVID-19 afectó severamente a Mexico','America',3845733)
    Datos.addCountry(country);
    country=new Country('Peru','La crisis económica relacionada al COVID-19 afectó severamente a Peru','America',2215373)
    Datos.addCountry(country);
    country=new Country('Chile','La crisis económica relacionada al COVID-19 afectó severamente a Chile','America',1738665)
    Datos.addCountry(country);
    country=new Country('Cuba','La crisis económica relacionada al COVID-19 afectó severamente a Cuba','America',959064)
    Datos.addCountry(country);
    country=new Country('Guatemala','La crisis económica relacionada al COVID-19 afectó severamente a Guatemala','America',610034)
    Datos.addCountry(country);
    country=new Country('Costa Rica','La crisis económica relacionada al COVID-19 afectó severamente a Costa Rica','America',564662)
    Datos.addCountry(country);
    country=new Country('Bolivia','La crisis económica relacionada al COVID-19 afectó severamente a Bolivia','America',524261)
    Datos.addCountry(country);
    country=new Country('Ecuador','La crisis económica relacionada al COVID-19 afectó severamente a Ecuador','America',521792)
    Datos.addCountry(country);
    country=new Country('Panama','La crisis económica relacionada al COVID-19 afectó severamente a Panama','America',474735)
    Datos.addCountry(country);
    country=new Country('Paraguay','La crisis económica relacionada al COVID-19 afectó severamente a Paraguay','America',462003)
    Datos.addCountry(country);
    country=new Country('Venezuela','La crisis económica relacionada al COVID-19 afectó severamente a Venezuela','America',420500)
    Datos.addCountry(country);
    // paises Asiaticos
    country=new Country('India','La segunda ola de la pandemia ha golpeado a India con un impacto devastador','Asia',448339)
    Datos.addCountry(country);
    country=new Country('Iran','La segunda ola de la pandemia ha golpeado a Iran con un impacto devastador','Asia',120428)
    Datos.addCountry(country);
    country=new Country('Indonesia','La segunda ola de la pandemia ha golpeado a Indonesia con un impacto devastador','Asia',141939)
    Datos.addCountry(country);
    country=new Country('Filipinas','La segunda ola de la pandemia ha golpeado a Filipinas con un impacto devastador','Asia',38294)
    Datos.addCountry(country);
    country=new Country('Pakistan','La segunda ola de la pandemia ha golpeado a Pakistan con un impacto devastador','Asia',27785)
    Datos.addCountry(country);
    country=new Country('Malasia','La segunda ola de la pandemia ha golpeado a Malasia con un impacto devastador','Asia',18219)
    Datos.addCountry(country);
    country=new Country('Vietnam','La segunda ola de la pandemia ha golpeado a Vietnam con un impacto devastador','Asia',13074)
    Datos.addCountry(country);
    country=new Country('Corea del sur','La segunda ola de la pandemia ha golpeado a Corea del sur con un impacto devastador','Asia',2327)
    Datos.addCountry(country);
    country=new Country('Mongolia','La segunda ola de la pandemia ha golpeado a Mongolia con un impacto devastador','Asia',968)
    Datos.addCountry(country);
    country=new Country('China','La segunda ola de la pandemia ha golpeado a China con un impacto devastador','Asia',4848)
    Datos.addCountry(country);
    country=new Country('Camboya','La segunda ola de la pandemia ha golpeado a Camboya con un impacto devastador','Asia',1957)
    Datos.addCountry(country);
    country=new Country('Singapur','La segunda ola de la pandemia ha golpeado a Singapur con un impacto devastador','Asia',55)
    Datos.addCountry(country);
    country=new Country('Tailandia','La segunda ola de la pandemia ha golpeado a Tailandia con un impacto devastador','Asia',12855)
    Datos.addCountry(country);
    country=new Country('Nepal','La segunda ola de la pandemia ha golpeado a Nepal con un impacto devastador','Asia',10838)
    Datos.addCountry(country);
    // PAISES EUROPEOS
    country=new Country('Reino Unido','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',144876)
    Datos.addCountry(country);
    country=new Country('Rusia','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',263934)
    Datos.addCountry(country);
    country=new Country('Turquia','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',75840)
    Datos.addCountry(country);
    country=new Country('Francia','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',119758)
    Datos.addCountry(country);
    country=new Country('Alemania','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',100480)
    Datos.addCountry(country);
    country=new Country('España','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',87931)
    Datos.addCountry(country);
    country=new Country('Italia','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',133486)
    Datos.addCountry(country);
    country=new Country('Ucrania','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',88664)
    Datos.addCountry(country);
    country=new Country('Polonia','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',82186)
    Datos.addCountry(country);
    country=new Country('Paises Bajos','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',19607)
    Datos.addCountry(country);
    country=new Country('Chequia','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',32523)
    Datos.addCountry(country);
    country=new Country('Rumania','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',55829)
    Datos.addCountry(country);
    country=new Country('Belgica','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',26793)
    Datos.addCountry(country);
    country=new Country('Israel','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',8182)
    Datos.addCountry(country);
    country=new Country('Serbia','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',11433)
    Datos.addCountry(country);
    country=new Country('Suecia','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',15142)
    Datos.addCountry(country);
    country=new Country('Portugal','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',18385)
    Datos.addCountry(country);
    country=new Country('Eslovaquia','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',14107)
    Datos.addCountry(country);
    country=new Country('Austria','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',12233)
    Datos.addCountry(country);
    country=new Country('Hungria','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',33704)
    Datos.addCountry(country);
    country=new Country('Kazakstan','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',17751)
    Datos.addCountry(country);
    country=new Country('Suiza','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',11455)
    Datos.addCountry(country);
    country=new Country('Grecia','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',17693)
    Datos.addCountry(country);
    country=new Country('Georgia','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',11736)
    Datos.addCountry(country);
    country=new Country('Bulgaria','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',27891)
    Datos.addCountry(country);
    country=new Country('Bielorrusia','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',5010)
    Datos.addCountry(country);
    country=new Country('Croacia','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',10569)
    Datos.addCountry(country);
    country=new Country('Azerbaiyan','Europa es de nuevo el epicentro de la pandemia de coronavirus','Europa',7736)
    Datos.addCountry(country);
    // CONTINENTE AFRICA
    country=new Country('Sudafica','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',89177)
    Datos.addCountry(country);
    country=new Country('Marruecos','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',14668)
    Datos.addCountry(country);
    country=new Country('Tunez','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',25241)
    Datos.addCountry(country);
    country=new Country('Etiopia','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',6459)
    Datos.addCountry(country);
    country=new Country('Libia','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',5099)
    Datos.addCountry(country);
    country=new Country('Kenia','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',5281)
    Datos.addCountry(country);
    country=new Country('Nigeria','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',2896)
    Datos.addCountry(country);
    country=new Country('Zambia','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',3661)
    Datos.addCountry(country);
    country=new Country('Argelia','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',5920)
    Datos.addCountry(country);
    country=new Country('Botswana','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',2406)
    Datos.addCountry(country);
    country=new Country('Mozambique','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',1930)
    Datos.addCountry(country);
    country=new Country('Zimbabwe','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',4678)
    Datos.addCountry(country);
    country=new Country('Ghana','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',1175)
    Datos.addCountry(country);
    country=new Country('Namibia','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',3554)
    Datos.addCountry(country);
    country=new Country('Uganda','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',3215)
    Datos.addCountry(country);
    country=new Country('Camerun','la tasa de letalidad actual de la covid-19 en África es un 18% más alta que el promedio mundial','Africa',1686)
    Datos.addCountry(country);
    // PAISES CONTINENTE OCEANIA aUSTRALIA
    country=new Country('Australia','la situacion en oceania es delicada','Oceanía/Australia',1994)
    Datos.addCountry(country);
    country=new Country('Fiyi','la situacion en oceania es delicada','Oceanía/Australia',696)
    Datos.addCountry(country);
    country=new Country('Papùa  Nueva Guinea','la situacion en oceania es delicada','Oceanía/Australia',542)
    Datos.addCountry(country);
    country=new Country('Nueva Zelanda','la situacion en oceania es delicada','Oceanía/Australia',43)
    Datos.addCountry(country);
    country=new Country('Islas Salomon','la situacion en oceania es delicada','Oceanía/Australia',0)
    Datos.addCountry(country);
    country=new Country('Micronesia','la situacion en oceania es delicada','Oceanía/Australia',0)
    Datos.addCountry(country);
    country=new Country('Palaos','la situacion en oceania es delicada','Oceanía/Australia',0)
    Datos.addCountry(country);
    country=new Country('Vanuatu','la situacion en oceania es delicada','Oceanía/Australia',1)
    Datos.addCountry(country);

}
// let top10=['Estado unidos','India','Brasil','Reino Unido','Rusia','Turquia','Francia','Iran','Argentina','Alemania']
// let selector=document.getElementById('opc')
// selector.innerHTML=`
// <option value="Estados Unidos">${top10[0]}</option>
// <option value="${top10[1]}">${top10[1]}</option>
// <option value="${top10[2]}">${top10[2]}</option>
// <option value="${top10[3]}">${top10[3]}</option>
// <option value="${top10[4]}">${top10[4]}</option>
// <option value="${top10[5]}">${top10[5]}</option>
// <option value="${top10[6]}">${top10[6]}</option>
// <option value="${top10[7]}">${top10[7]}</option>
// <option value="${top10[8]}">${top10[8]}</option>
// <option value="${top10[9]}">${top10[9]}</option>
// `;

