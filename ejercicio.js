//1) Crea el siguiente objeto:
        let nombre = 'jetta';
        let marca = 'volswagen';
        let color = 'negro';
        let tipo = 'deportivo';
        let precio = '15000 usd';

    const vehiculo = {
        nombre: 'jetta',
        marca: 'volswagen',
        color: 'negro',
        tipo: 'deportivo',
        precio: '15000 usd',
       showInfo : function(){ //función
           console.log(`el automovil ${this.nombre}, marca ${this.marca}, tipo ${this.tipo}, tiene un precio de $${this.precio}`);
    }
}

vehiculo.showInfo();

   // console.log(typeof vehiculo)
    //console.log(vehiculo)

   // console.log('El automovil',vehiculo.nombre);
   // console.log('marca',vehiculo.marca);
   // console.log('tipo',vehiculo.tipo);
   // console.log('tiene un precio de',vehiculo.precio);



  //  Muestra por consola la siguiente oración usando las propiedades de los objetos

   // "El automovil jetta, marca volswagen, tipo deportivo, tiene un precio de 15000usd";


//2) Crea un objeto llama 'Cuenta Bancaria', con las siguientes propiedades:
 //   - cliente
  //  - numero de Cuenta
  //  - banco
  //  - depositos
   // - retiros

    let clientes = "William";
    let numeroDeCuenta = "000270008686";
    let banco = "BBVA"
    let depositos = "400000";   
    let retiros = "200000"

    const CuentaBancaria = {
     clientes: "William",
     numeroDeCuenta: "000270008686",
     banco: "BBVA",
     depositos: "400000",   
     retiros: "200000",

                //  Agrega una funcion llamada 'saldo' que realice la operación matematica de: depositos - retiros

     saldo:function(){
        let sald = this.depositos - this.retiros;
        console.log("nuevo saldo", sald);

    }
    
    }

    console.log (CuentaBancaria);
    console.log (typeof CuentaBancaria);

    

       CuentaBancaria.saldo(); 
    

    
    

  



//3)  Crea el siguiente objeto:
  //  const factura = {
    //    numero: 201,
        //cliente: 'Transportes Plus',
      //  divisa: 'usd',
        //subtotal: 320.25,
       // impuesto: 75.55
    //}
    let numero = "201";
    let cliente = 'Transportes Plus';
    let divisa = 'usd';
    let subtotal = "320.25";
    let impuesto = "75.55"

    const factura = {
        numero: 201,
        cliente: 'Transportes Plus',
        divisa: 'usd',
        subtotal: 320.25,
        impuesto: 75.55,
        abono : {
            abono1: 105.1,
            abono2: 100.4,
            anono3: 195.3

        }

    }
        //console.log(factura.numero);
        
    //- Agrega la propiedad 'total' al objeto factura

        factura.total = '395.8';

       // factura.abono ="abono1+abono2+abono3"



       // factura.total.abono1 =105.1;
        //factura.total.abono1 =100.4;
       // factura.total.abono1 =195.3;
        console.log (factura);
        

   // - Agrega el objeto 'abonos' y dentro crea 3 abonos que sean el total de la factura
    


   console.log (factura.abono);

   




   

    