import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ProjetsComponent } from './projets/projets.component';
import { UnfoundComponent } from './unfound/unfound.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/accueil',pathMatch:'full'
  }, // redirection
  {
    path:'accueil',component:AccueilComponent
  }, // direct routing
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'education',component:EducationComponent
  },
  {
    path:'projets',component:ProjetsComponent
  },
  {
    path:'**',component:UnfoundComponent
  } // exception route



  // contactInfo (camelCase)  _id (underscore) contact-info (kebab-case) contact_info (snake-case)
  // camel utilisé pour les nom des fonction et variable
  // kebab utilisé pour les nom des composants et des directives
  // snake utilisé pour les nom des fichiers et les id _id champs de saisie

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
