class Country{
    constructor(name,description,continent,dieNumber){
        this.name=name;
        this.description=description;
        this.continent=continent
        this.dieNumber=dieNumber;
    }
}
    
    class UI{
        static showCountries(){
            // console.log('entro mostrar libros');
            
            const countries=Datos.bringCountries();
            countries.forEach((country) => {
                UI.addCountryContinent(country);        
            });
        }
    
        static  addCountryContinent(country){
        //    this.cleanTable();
        //    Datos.addCountry(country)
        //    var continent=document.getElementById('opc')
           const  tabla=document.querySelector('#countries-list');
        //    console.log(continent.options[continent.selectedIndex].text);
        //    if(country.continent==continent.options[continent.selectedIndex].text){
                const trfila=document.createElement('tr');
                trfila.innerHTML=`
                <td>${country.description}</td>
                <td>${country.continent}</td>
                <td>${country.dieNumber}</td>
                <td>${country.name}</td>
                <td> <a href='#' class='btn btn-danger btn-sm delete'>X</a> </td>
                 `;
                 tabla.appendChild(trfila);
             
        }
    
        static  removeCountry(el){
           if(el.classList.contains('delete')){
                 el.parentElement.parentElement.remove();
             }
        }
    
        // static  MostrarAlerta(mensaje,className){
        //     // // console.log('metodo de mos');
        //     const div=document.createElement('div');
        //     div.className=`alert alert-${className}`;
        //     div.appendChild(document.createTextNode(mensaje));
    
        //     const container=document.querySelector('.main-lista-usuario');
        //     const form=document.querySelector('#form-country');
        //     container.insertBefore(div,form);
    
        //      setTimeout(()=>document.querySelector('.alert').remove(),3000);
        // }
        static cleanInputs() {
            document.getElementById('nombrePais').value ='' ;          
            document.getElementById('Descripcion').value='';
            document.getElementById('NumeroMuertos').value='';
        }
        
        static  cleanTable(){
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
    
        static  addCountry(country) {
            const countries=Datos.bringCountries();
            countries.push(country);
            localStorage.setItem('countries',JSON.stringify(countries));
            alert('el pais ha sido agregado con exito')

        }
    
        static  deleteCountry(name) {
            const countries= Datos.bringCountries();
            console.log(name);
            countries.forEach((country,index) => {
                if(country.name == name){
                    console.log('lo encontreo');
                countries.splice(index,1);
                }
            });
            localStorage.setItem('countries',JSON.stringify(countries));
            alert('Se ha Eliminado el pais Exitosamente')
        }    
    }

    document.querySelector('#countries-list').addEventListener("click", (e)=>{
        UI.removeCountry(e.target);
        Datos.deleteCountry(e.target.parentElement.previousElementSibling.textContent);
    });

    document.getElementById('NumeroMuertos').addEventListener('keypress',(event)=>{
        if(!/[0-9]/.test(event.key)){
            event.preventDefault()
        }
    })

    document.getElementById('form-country').addEventListener('submit',(e)=>{
        e.preventDefault()
        var nameCountry=document.getElementById('nombrePais').value
        var description=document.getElementById('Descripcion').value
        var continent=document.getElementById('opc')
        var numberDie=document.getElementById('NumeroMuertos').value
        const country=new Country(nameCountry,description,continent.options[continent.selectedIndex].text,parseInt(numberDie));
        Datos.addCountry(country)
        UI.addCountryContinent(country)
        // UI.MostrarAlerta('Noticia Ingresado Satisfactoriamente','success');
        UI.cleanInputs()
        
    })
    document.addEventListener('DOMContentLoaded',UI.showCountries());