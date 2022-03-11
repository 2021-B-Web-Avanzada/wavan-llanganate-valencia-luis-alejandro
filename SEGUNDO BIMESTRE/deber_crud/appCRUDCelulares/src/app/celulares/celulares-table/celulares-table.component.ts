import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Celular } from 'src/app/interfaces/celular.interfaces';
import { CelularServiceService } from 'src/app/services/celular-service.service';

@Component({
  selector: 'app-celulares-table',
  templateUrl: './celulares-table.component.html',
  styleUrls: ['./celulares-table.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class CelularesTableComponent implements OnInit {

  id_marca_param?: number;

  @ViewChild('dt') dt: Table | undefined;
  cellphones: Celular[] = [];
  selectedCellphones: Celular[] = [];
  cellphone!: Celular;
  cellphoneDialog?: boolean;
  submitted?: boolean;
  es_actualOptions = [
    {label: 'SI', value: true},
    {label: 'NO', value: false}

  ];
  constructor(
    private route: ActivatedRoute,
    private serviceCelular : CelularServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params =>{
        this.id_marca_param = params['id']
        console.log(`Id recuperado: ${this.id_marca_param}`)
      })
    this.serviceCelular.getCelulares(this.id_marca_param!).subscribe(res=>{
      this.cellphones = res
    });
  }
  openNew(){
    this.cellphone = {}
    this.submitted = false;
    this.cellphoneDialog = true;


   }

   deleteSelectedCellphone(){

   }

   hideDialog(){
     this.cellphoneDialog = false;
     this.submitted=false;

   }

   saveCellphone() {
     this.submitted = true;
     this.cellphone.id_marca = this.id_marca_param
    //  console.log(this.cellphone)
     //busca si existe en nuestro arreglo
     const searching = this.cellphones.find(br =>
       this.cellphone.id_celular === br.id_celular
     )


     if(searching){
       console.log(`Si existe...`)
       this.serviceCelular.editCellphone(this.cellphone)
         .subscribe(()=>{
           this.cellphones = this.cellphones.map(br=>{
             if (br.id_celular === this.cellphone.id_celular){
              br = this.cellphone
             }
             return br
           });
           this.messageService.add({severity:'success', summary: 'Actualizado correcto', detail: 'Se ha actualizado el celular', life: 3000});

         });

     } else {
      //  console.log('no existe')
      // this.cellphone.id_marca = this.id_marca_param
      // this.cellphone
      // console.log(this.cellphone)
      this.serviceCelular.saveCelular(this.cellphone)
        .subscribe(resp =>{
        console.log(resp.toString()) //no llega
        this.cellphones.push(this.cellphone)

        this.messageService.add({severity:'success', summary: 'Registro correcto', detail: 'Se ha registrado el celular', life: 3000});
      })
     }
     this.hideDialog()
   }

   editCellphone(cellphone: Celular){
     this.cellphone = {...cellphone};
     this.cellphoneDialog = true;

   }


   deleteCellphone( cellphone: Celular){
     this.confirmationService.confirm({
       message:'Estas seguro de borrar ' + cellphone.nombre + '?',
       header: 'Confirm',
       icon: 'pi pi-exclamation-triangle',
       accept: () => {
         this.serviceCelular.deleteCelular(cellphone.id_celular!.toString(), this.id_marca_param!.toString()).subscribe(()=>{
           this.cellphones = this.cellphones.filter(val => val.id_celular !== cellphone.id_celular);
           this.cellphone = {};
           this.messageService.add({severity:'success', summary: 'Successful', detail: 'Celular Borrado', life: 3000});
         })

     }
     })

   }


   applyFilterGlobal($event: any, stringVal: string) {
     this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
   }

   regresarMarcas(){
     this.router.navigate(['/marcas'])
   }

}
