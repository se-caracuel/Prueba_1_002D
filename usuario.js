
class usuario{
    rut;
    nombre;
    fecha;
    //mutador
    setRut(rut){this.rut = rut;}
    setNombre(nombre){this.nombre = nombre;}
    setFecha(fecha){this.fecha = fecha;}
    //accesador
    getRut(){ return this.rut;}
    getNombre(){ return this.nombre;}
    getFecha(){ return this.fecha;}
    //toString()
    imprimir(){
        return 'Rut :'+this.rut+ ' Nombre : '+this.nombre+ ' Fecha : '+this.fecha;
    }
    
}