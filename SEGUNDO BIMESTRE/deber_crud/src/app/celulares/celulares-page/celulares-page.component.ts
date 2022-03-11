import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CelularServiceService } from 'src/app/services/celular-service.service';

@Component({
  selector: 'app-celulares-page',
  templateUrl: './celulares-page.component.html',
  styleUrls: ['./celulares-page.component.css']
})
export class CelularesPageComponent implements OnInit {
  id_marca_param?: number;
  constructor(
    private route: ActivatedRoute,
    private serviceCelular : CelularServiceService
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params =>{
        console.log(`Id recuperado: ${params['id']}`)
        this.id_marca_param = params['id']
      })
    this.serviceCelular.getCelulares(this.id_marca_param!).subscribe(res=>{
      console.log(res)
    });
  }

}
