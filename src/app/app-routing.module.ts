import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './pages/setting/setting.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'settings', component: SettingComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {
}
