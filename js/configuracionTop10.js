class Country{
    constructor(name,description,dieNumber){
        this.name=name;
        this.description=description;
        this.dieNumber=dieNumber;
    }
}
    
    class UI{
        static showTop10(){
            // console.log('entro mostrar libros');
            const countries=Datos.bringTop10();
            countries.forEach((country) => {
                    UI.addCountryTop10(country);        
            });
        }
    
        static  addCountryTop10(country){
           const  tabla=document.querySelector('#Top10-list');
           const trfila=document.createElement('tr');
           trfila.innerHTML=`
           <td>${country.name}</td>
           <td>${country.description}</td>
           <td>${country.dieNumber}</td>
            `;
            tabla.appendChild(trfila);
            
        }
    
        // static  removeCountry(el){
        //     if(el.classList.contains('delete')){
        //         el.parentElement.parentElement.remove();
        //     }
        // }
        
        static  cleanFields(){
            var tabla=document.getElementById('Top10-list')
            tabla.innerHTML=`
            <td></td>
            <td></td>
            <td></td>`;
        
        } 
    }
    class Datos{
        static  bringTop10() {
            let noticias;
            if(localStorage.getItem('top-10')===null){
                noticias=[];
            }else{
                noticias=JSON.parse(localStorage.getItem('top-10'));
            }
            return noticias;
        }
        static bringCountries(){
            let noticias;
            if(localStorage.getItem('countries')===null){
                noticias=[];
            }else{
                noticias=JSON.parse(localStorage.getItem('countries'));
            }
            return noticias;
        }
    
        // static  agregarCiudad(country) {
        //     const top10=Datos.bringTop10();
        //     top10.push(country);
        //     localStorage.setItem('top-10',JSON.stringify(top10));
        // }

        static insertPositionTop10(){
            let top10=Datos.bringTop10();
            let country=document.getElementById('paises')
            let position=document.getElementById('position')
            top10[parseInt(position.options[position.selectedIndex].text,10)-1]=Datos.searchCountry(country.options[country.selectedIndex].text)
            localStorage.setItem('top-10',JSON.stringify(top10));

        }

        static searchCountry(country){
            let countries=Datos.bringCountries()
            for (let cont = 0; cont < countries.length; cont++) {
                if(countries[cont].name==country)
                return Datos.indicatorPositionTop10(countries[cont])
            }
            return 0;
        }

        static indicatorPositionTop10(country){
            let position=document.getElementById('position')
            switch (position.options[position.selectedIndex].text) {
                case '1':
                    country.description='PRIMER PUESTO';
                    return country;
                    break;
                case '2':
                    country.description='SEGUNDO PUESTO';
                    return country;
                    break;
                case '3':
                    country.description='TERCER PUESTO';
                    return country;
                    break;
                case '4':
                    country.description='CUARTO PUESTO';
                    return country;
                    break;
                case '5':
                    country.description='QUINTO PUESTO';
                    return country;
                    break;
                case '6':
                    country.description='SEXTO PUESTO';
                    return country;
                    break;
                case '7':
                    country.description='SEPTIMO PUESTO';
                    return country;
                    break;
                case '8':
                    country.description='OCTAVO PUESTO';
                    return country;
                    break;
                case '9':
                    country.description='NOVENO PUESTO';
                    return country;
                    break;
                case '10':
                    country.description='DECIMO PUESTO';
                    return country;
                    break;
            
                default:
                    break;
            }
        }
    
        // static  deleteCOuntry(name) {
        //     const top10= Datos.bringTop10();
        //     top10.forEach((country,index) => {
        //         if(country.name === name){
        //         top10.splice(index,1);
        //         }
        //     });
        //     localStorage.setItem('top-10',JSON.stringify(noticias));
        // }    
    }

    var countries=document.getElementById('paises');
    for (let cont=1;cont<Datos.bringCountries().length;cont++){
        let fila=document.createElement('option');
        fila.value=Datos.bringCountries()[cont].name
        fila.textContent=Datos.bringCountries()[cont].name
        
        countries.appendChild(fila)
    
    }

    // localStorage.clear()
    // ----------------------------------------------EVENTOS-----------------------------------------------------------
    document.addEventListener('DOMContentLoaded',UI.showTop10());
    
    
    document.getElementById('form-usuario').addEventListener('submit',(e)=>{
        e.preventDefault()
        Datos.insertPositionTop10();
        UI.cleanFields()
        UI.showTop10()
    })


