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
            const countries=Datos.bringCountries();
            countries.forEach((country) => {
                    UI.addCountryTop10(country);        
            });
        }
    
        static  addCountryTop10(country){
            // Datos.addCountry(country)
           const  tabla=document.querySelector('#Top10-list');
           const trfila=document.createElement('tr');
           trfila.innerHTML=`
           <td>${country.name}</td>
           <td>${country.description}</td>
           <td>${country.dieNumber}</td>
            `;
            tabla.appendChild(trfila);
            
        }
    
        // static  EliminarNoticias(el){
        //     if(el.classList.contains('delete')){
        //         el.parentElement.parentElement.remove();
        //     }
        }
    
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
    
        // static  LimpiarCampos(){
        //     document.querySelector('#tituloN').value = '';
        //     document.querySelector('#descripcionN').value = '';
        // } 
    
    
    class Datos{
        static  bringCountries() {
            let noticias;
            if(localStorage.getItem('top-10')===null){
                noticias=[];
            }else{
                noticias=JSON.parse(localStorage.getItem('top-10'));
            }
            return noticias;
        }
    
        static  addCountry(country) {
            const top10=Datos.bringCountries();
            top10.push(country);
            localStorage.setItem('top-10',JSON.stringify(top10));
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
    // localStorage.clear()
    // Carga de la pagina
    document.addEventListener('DOMContentLoaded',UI.showTop10());
    // //Agregamos un evento al submit
    // document.querySelector('#form-noticias').addEventListener('submit',(e) => {
    //     e.preventDefault();
    //     // obtenemos los valores del campo
    //     console.log('Lee evento');
    //     const titulo=document.querySelector('#tituloN').value;
    //     const descripcion=document.querySelector('#descripcionN').value;
        
    //     if(titulo === '' || descripcion === '' ){
    //         UI.MostrarAlerta('Porfavor Ingrese Todos Los Datos','danger');
    //     }else{
    //         const noticia=new Noticias(titulo,descripcion);
    //         Datos.addCountry(noticia);
    //         UI.addCountryTop10(noticia);
    //         UI.MostrarAlerta('Noticia Ingresado Satisfactoriamente','success');
    //         UI.LimpiarCampos();
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
    var country=new Country('Estado unidos','PRIMER PUESTO',48399818)
    Datos.addCountry(country);
    country=new Country('India','SEGUNDO PUESTO',34389623)
    Datos.addCountry(country);
    country=new Country('Brasil','TERCER PUESTO',21989962)
    Datos.addCountry(country);
    country=new Country('Reino Unido','CUARTO PUESTO',9766153)
    Datos.addCountry(country);
    country=new Country('Rusia','QUINTO PUESTO',9257068)
    Datos.addCountry(country);
    country=new Country('Turquia','SEXTO PUESTO',8503220)
    Datos.addCountry(country);
    country=new Country('Francia','SEPTIMO PUESTO',7351324)
    Datos.addCountry(country);
    country=new Country('Iran','OCTAVO PUESTO',6069559)
    Datos.addCountry(country);
    country=new Country('Argentina','NOVENO PUESTO',5312.089)
    Datos.addCountry(country);
    country=new Country('Alemania','DECIMO PUESTO',5252095)
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

