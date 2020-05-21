import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';

@NgModule({
    declarations: [
        CardComponent
    ],
    exports: [
        CardComponent,
        CommonModule
    ]
})
export class CardModule {

}