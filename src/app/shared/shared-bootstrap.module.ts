import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule } from 'ngx-bootstrap/accordion'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
    imports: [BrowserAnimationsModule,AccordionModule.forRoot(), BsDropdownModule.forRoot(), ModalModule.forRoot(), TabsModule.forRoot()],
    exports: [AccordionModule, BsDropdownModule, ModalModule, TabsModule],
    declarations: [],
    providers: []
})

export class SharedBootstrapModule {

}