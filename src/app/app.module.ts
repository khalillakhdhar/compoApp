import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetsComponent } from './projets/projets.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { UnfoundComponent } from './unfound/unfound.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddProjectComponent } from './add-project/add-project.component';
//import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjetsComponent,
    EducationComponent,
    ContactComponent,
    UnfoundComponent,
    MenuComponent,
    AccueilComponent,
    AddProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
