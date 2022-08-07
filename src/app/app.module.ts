import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { PhotoCollectionComponent } from './components/photo-collection/photo-collection.component'

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loved', component: FavoriteComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PhotoItemComponent,
    PhotoCollectionComponent,
    HomeComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
