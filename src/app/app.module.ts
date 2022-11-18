import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PastriesComponent } from './pastrie/pastries/pastries.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ConnectionComponent } from './connection/connection.component';
import { PastrieDetailsComponent } from './pastrie/pastrie-details/pastrie-details.component';
import { BorderCardDirective } from './pastrie/border-card.directive';
import { PastrieTagColorPipe } from './pastrie/pastrie-tag-color.pipe';
import { IngredientDisplayDirective } from './pastrie/ingredient-display.directive';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    NavigationComponent,
    ConnectionComponent,
    PastrieDetailsComponent,
    PastriesComponent,
    PastrieTagColorPipe,
    BorderCardDirective,
    IngredientDisplayDirective,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,


    RouterModule.forRoot([
      { path: 'home', component: PastriesComponent },
      { path: 'connection', component: ConnectionComponent },
      { path: '', component: PastriesComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
