import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScrapperAccountComponent} from "./pages/scrapper-account/scrapper-account.component";

const routes: Routes = [
  {
    path: 'account',
    component: ScrapperAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
