import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent implements OnInit {

  public productForm: FormGroup;
  private sub: Subscription;
  product: Product = new Product();
  public isEdit: boolean = false;

  constructor(private fb: FormBuilder,
    private productServices: ProductServiceService,
    private _route: ActivatedRoute,
    private _router: Router,
    private toastr: ToastrService,) { }

  ngOnInit() {
    this.setForm();
    this.sub = this._route.paramMap.subscribe(
      params => {
        const id = +params.get('id');

        if (id) {
          this.getProductsbyId(id);
          this.isEdit = true;
        } else {
          this.isEdit = false;
        }
      }
    );
  }
  setForm() {
    this.productForm = this.fb.group({
      idCtrl: [null],
      productnameCtrl: [null],
      descriptionCtrl: [null],
      dateCtrl: [null],


    })

  }
  save() {
    let productName = this.productForm.controls['productnameCtrl'].value;
    let productDescription = this.productForm.controls['descriptionCtrl'].value;
    let manufacturingDate = this.productForm.controls['dateCtrl'].value;
    const productObject = {
      'productName': productName,
      'productDescription': productDescription,
      'manufactureDate': manufacturingDate,
    }
    this.productServices.saveProduct(productObject).subscribe((data: any) => {
      this.toastr.success('Sucessfully added')
      this._router.navigateByUrl('client-list');
    })

  }
  getProductsbyId(id): void {
    this.productServices.getProductsById(id).subscribe((data: any) => {

      this.productForm.controls.idCtrl.setValue(data.id);
      this.productForm.controls.productnameCtrl.setValue(data.productName);
      this.productForm.controls.descriptionCtrl.setValue(data.productDescription);
      this.productForm.controls.dateCtrl.setValue(data.manufactureDate);




    })

  }
  update(): void {
    let id = this.productForm.controls['idCtrl'].value;
    let productName = this.productForm.controls['productnameCtrl'].value;
    let description = this.productForm.controls['descriptionCtrl'].value;
    let date = this.productForm.controls['dateCtrl'].value;

    const listObject = {
      'id': id,
      'productName': productName,
      'productDescription': description,
      'manufactureDate': date,

    }
    this.productServices.updateProducts(listObject).subscribe((data: any) => {
     
      
      this.toastr.success('Sucessfully updated')
      this._router.navigateByUrl('product-list');
    });

  };

}
