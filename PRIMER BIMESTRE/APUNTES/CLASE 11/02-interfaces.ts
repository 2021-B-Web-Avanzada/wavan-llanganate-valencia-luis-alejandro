interface Usuario{
    nombre: string;
    apellido: string;
    edad?: number; //Opcional
    sueldo?: number; //Opcional
    casado: boolean | 0 | 1;
    estado: "AC"  | "IN" | "BN";
    imprimirUsuario: (mensaje: string) => string | "BN";
    calcularImpuestos: (impuestos : number) => number;
    estadoActual: () => "AP" | "AF" | "AT";
    //calcularImpuestos paramentro numero impuestos, sueldo + sueldo * impuestos
    //estadoActual n orecibe parametros,  "AP"  "AF" "AT";
}

let user: Usuario = {
  nombre: 'Adrian',
  apellido: 'Eguez',
  casado: 0,
  sueldo: 11.2,
  estado: 'BN',
  imprimirUsuario: mensaje => {
    return 'El mensaje es:' + mensaje;
  },
  calcularImpuestos: impuesto => {
    return this.sueldo + this.sueldo * impuesto;
  },
  estadoActual: () => {
    switch(this.estado){
      case 'AC':
        return 'AP';
      case 'IN':
        return 'AF';
      case 'BN':
        return 'AT';
    }
  }
}
