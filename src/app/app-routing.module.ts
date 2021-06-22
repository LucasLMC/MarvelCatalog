import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters.component';
import { Injectable } from '@angular/core';


const routes: Routes = [{
  path:'', redirectTo:'/characters',pathMatch:'full'
},
{
  path:'characters',component: CharactersComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
