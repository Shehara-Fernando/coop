import { NgModule } from "@angular/core";
import { MatAutocompleteModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatTableModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {MatCardModule} from '@angular/material/card';
import { MatRadioModule } from "@angular/material/radio";

@NgModule({

    imports: [
        MatCheckboxModule,
        MatButtonModule,
        MatRadioModule,
          MatDatepickerModule,
          MatAutocompleteModule,
           MatFormFieldModule, 
           MatInputModule,  
           MatSelectModule, 
           MatSliderModule, 
           MatSlideToggleModule,
           MatCardModule,
           MatDatepickerModule,
           MatNativeDateModule,
           MatTableModule,
           MatIconModule,
    ],
    exports: [
        MatCheckboxModule,
        MatButtonModule,
        MatRadioModule,
        MatDatepickerModule,
        MatAutocompleteModule ,
        MatFormFieldModule,
         MatInputModule, 
          MatSelectModule,
           MatSliderModule, 
           MatSlideToggleModule,
           MatCardModule,
           MatNativeDateModule,
           MatTableModule,
           MatIconModule]
})

export class MaterialModule { }