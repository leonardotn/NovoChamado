import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/shared/models/colaborador';

@Component({
  selector: 'app-lista-colaborador',
  templateUrl: './lista-colaborador.component.html',
  styleUrls: ['./lista-colaborador.component.scss']
})
export class ListaColaboradorComponent implements OnInit {

    products: Colaborador[];
    cols: any[];
    display: boolean = false;

    constructor() { }

    ngOnInit() {
        // this.productService.getProductsSmall().then(data => this.products = data);

        this.cols = [
            { field: 'nome', header: 'Nome' },
            { field: 'email', header: 'E-mail' },
            { field: 'acoes', header: '' }
        ];
    }

    showDialog() {
        this.display = true;
    }
}
