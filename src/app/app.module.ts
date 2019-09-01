import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
/*When you want to use NgIf, NgFor*/
import { CommonModule } from '@angular/common';
/*When you want to build template driven forms (includes NgModel)*/
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedBootstrapModule } from './shared/shared-bootstrap.module';
import { PdpOverviewComponent } from './pdp-overview/pdp-overview.component';
import { PdpImageComponent } from './pdp-image/pdp-image.component';
import { PdpStickyBarComponent } from './pdp-sticky-bar/pdp-sticky-bar.component';
import { PdpLongDescriptionComponent } from './pdp-long-description/pdp-long-description.component';
import { PdpSpecificationTabComponent } from './pdp-specification-tab/pdp-specification-tab.component';
import { PdpDocumentationTabComponent } from './pdp-documentation-tab/pdp-documentation-tab.component';
import { NgxGalleryModule } from 'ngx-gallery';
// import  {StickyHeaderDirective } from './directives/sticky-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    PdpOverviewComponent,
    PdpImageComponent,
    PdpStickyBarComponent,
    PdpLongDescriptionComponent,
    PdpSpecificationTabComponent,
    PdpDocumentationTabComponent,
    // StickyHeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedBootstrapModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
