
class Country{
    constructor(name,description,continent,dieNumber){
        this.name=name;
        this.description=description;
        this.continent=continent
        this.dieNumber=dieNumber;
    }
}
    
class UI{
        static showCountry(){
            // console.log('entro mostrar libros');
             var country=document.getElementById('countries')
             // const countries=Datos.filtrarCountries(continent.options[continent.selectedIndex].text);
             // console.log(countries);
             const countries=Datos.bringCountries()
             for (let cont = 0; cont < countries.length; cont++) {
                 if(countries[cont].name==country.options[country.selectedIndex].text){
                    console.log('entro en mostrar');
                     UI.addCountryContinent(countries[cont]);
                }
            }
            // countries.forEach((country) => {
            //     UI.addCountryContinent(country);        
            // });
        }
    
        static  addCountryContinent(country){
        //    this.cleanFields();
        //    Datos.addCountry(country)
        //    var continent=document.getElementById('opc')
              const  tabla=document.querySelector('#countries-list');
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
    
        static  cleanFields(){
            var tabla=document.getElementById('countries-list')
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
        
        static modifyCountries(){
            let countries=Datos.bringCountries();
            const name=document.getElementById('countries')
            for (let cont = 0; cont < countries.length; cont++) {
                if(countries[cont].name==name.options[name.selectedIndex].text){
                    const description=document.getElementById('Descripcion').value;
                    const dieNumber=document.getElementById('NumeroMuertos').value;
                    const continent=document.getElementById('opc');
                    const country=new Country(name.options[name.selectedIndex].text,description,continent.options[continent.selectedIndex].text,parseInt(dieNumber));
                    countries[cont]=country;
                    alert('MODIFICACION EXITOSA');
                }
            }
            localStorage.setItem('countries',JSON.stringify(countries));
        }
        // static filtrarCountries(continent){
        //     let countriesC=[];
        //     const countries=Datos.bringCountries();
        //     for (let cont = 0; cont < countries.length; cont++) {
        //             if(countries[cont].continent==continent){
        //                 countriesC.push(countries[cont]);
        //             }                                        
        //         }
        //         countriesC.sort((a,b)=>{
        //             if(a.dieNumber<b.dieNumber){
        //                 return 1;
        //             }
        //             if(a.dieNumber <b.dieNumber){
        //                 return -1;
        //             }
        //             return 0;
        //         });
        //         return countriesC;
        // }
        
        
        static  addCountry(country) {
            const countries=Datos.bringCountries();
            countries.push(country);
            localStorage.setItem('countries',JSON.stringify(countries));
        }
    }
   
        var countries=document.getElementById('countries');
        for (let cont=1;cont<Datos.bringCountries().length;cont++){
            let fila=document.createElement('option');
            fila.value=Datos.bringCountries()[cont].name
            fila.textContent=Datos.bringCountries()[cont].name
            
            countries.appendChild(fila)
        
        }
        
        function fillFields(){
            var countries=Datos.bringCountries();
            var country=document.getElementById('countries');
            for (let cont = 0; cont < countries.length; cont++) {
                if(countries[cont].name==country.options[country.selectedIndex].text){
                    console.log('entro');
                    document.getElementById('Descripcion').value=countries[cont].description;
                    document.getElementById('NumeroMuertos').value=countries[cont].dieNumber;
                    document.getElementById('opc').value=countries[cont].continent
                }
                
            }
        }
        document.getElementById('form-country1').addEventListener('submit',(e)=>{
            e.preventDefault()
            Datos.modifyCountries();
            UI.cleanFields()
            UI.showCountry()
        });

        document.getElementById('NumeroMuertos').addEventListener('keypress',(event)=>{
            if(!/[0-9]/.test(event.key)){
                event.preventDefault()
            }
        })
        document.addEventListener('DOMContentLoaded',(e)=>{
            e.preventDefault()
            fillFields();
            UI.showCountry()
        });