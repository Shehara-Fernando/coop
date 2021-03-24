import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'productName', 'productDescription', 'manufactureDate', 'action'];
  dataSource;
  constructor(private productServices: ProductServiceService, private toastr: ToastrService,) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productServices.getProducts().subscribe((data: any) => {
      this.dataSource = data.object;
    });
  }
  deleteProduct(id) {
    this.productServices.deleteProduct(id).subscribe((data: any) => {
      this.toastr.warning("A Record has being deleted")
      this.getProducts();
    });

  }


}
