import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CardComponentModule } from '../card/card.component.module';
import { PostDataService } from '../services/post-data.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CardComponentModule,
    Tab1PageRoutingModule,
  ],
  declarations: [ Tab1Page ],
  providers: [ PostDataService ],
})
export class Tab1PageModule {
}
