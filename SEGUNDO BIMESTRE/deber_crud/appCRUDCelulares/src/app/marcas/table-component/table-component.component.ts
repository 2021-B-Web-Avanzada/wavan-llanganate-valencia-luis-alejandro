import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Marca } from 'src/app/interfaces/marcas.interfaces';
import { MarcaServiceService } from 'src/app/services/marca-service.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
  providers: [MessageService,ConfirmationService]

})
export class TableComponentComponent implements OnInit {
  @ViewChild('txtBuscar') dt!: ElementRef<HTMLInputElement>;
  brands: Marca[] = [];
  selectedBrands: Marca[] = [];
  brand!: Marca;
  brandDialog?: boolean;
  submitted?: boolean;
  copy_brands: Marca[] = [];
  es_nacionalOptions = [
    {label: 'SI', value: true},
    {label: 'NO', value: false}

  ];
  constructor(
    private serviceMarca: MarcaServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serviceMarca.getMarcas()
    .subscribe(result =>{
      console.log(result)
      this.brands = result
    });
  }

  openNew(){
   this.brand = {}
    this.submitted = false;
    this.brandDialog = true;


  }

  deleteSelectedBrand(){
  }

  hideDialog(){
    this.brandDialog = false;
    this.submitted=false;

  }

  saveBrand() {
    this.submitted = true;
    console.log(this.brand)
    //busca si existe en nuestro arreglo
    const searching = this.brands.find(br =>
      this.brand.id_marca === br.id_marca
    )
    console.log(`Resultado de la busqueda: ${searching}`)
    // si no existe crear
    if(searching){
      console.log(`Si existe...`)
      this.serviceMarca.editMarca(this.brand)
        .subscribe(()=>{
          this.brands = this.brands.map(br=>{
            if (br.id_marca === this.brand.id_marca){
              br = this.brand
            }
            return br
          });
          this.messageService.add({severity:'success', summary: 'Actualizado correcto', detail: 'Se ha actualizado la marca', life: 3000});

        });

    } else {
      console.log('no existe')
      this.serviceMarca.saveMarca(this.brand)
        .subscribe(resp =>{
        console.log(resp.toString()) //no llega
        this.brands.push(this.brand)

        this.messageService.add({severity:'success', summary: 'Registro correcto', detail: 'Se ha registrado la marca', life: 3000});
      })
    }
    this.hideDialog()
  }

  editBrand(brand: Marca){
    this.brand = {...brand};
    this.brandDialog = true;

  }


  deleteBrand( brand: Marca){
    this.confirmationService.confirm({
      message:'Estas seguro de borrar ' + brand.nombre + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.serviceMarca.deleteMarca(brand.id_marca!.toString()).subscribe(()=>{
          this.brands = this.brands.filter(val => val.id_marca !== brand.id_marca);
          this.brand = {};
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Marca Borrada', life: 3000});
        })

    }
    })

  }
  getCellphones(brand: Marca){
    this.router.navigate(['marcas/celulares'],
      {queryParams:{id: brand.id_marca}})

  }

  applyFilterGlobal($event: any, stringVal: string) {
    // this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');

  }
  buscarMarca(){
  //   const valor = this.dt!.nativeElement.value;
  //   console.log(valor)
  //   this.copy_brands = {...this.brands}
  //   const brand_temp: Marca[] = [];
  //   if(valor.length != 0){
  //     this.brands.map(val =>{
  //       if(!val.nombre!.toLowerCase().startsWith(valor)){
  //         brand_temp.push(val)
  //       }
  //     })
  //     this.brands = {...brand_temp}

  //   } else {
  //     this.brands = {...this.copy_brands}
  //   }
  //     console.log(this.brands)
  }

}
