import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { SearchComponent } from './components/search/search.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalTrailerComponent } from './components/modal-trailer/modal-trailer.component';
import { ProfitPipe } from './pipes/profit.pipe';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { RelatedMoviesComponent } from './components/related-movies/related-movies.component';
import { RouterModule } from '@angular/router';
import { AppRoutesModule } from './modules/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DetailsReviewsComponent,
    NotAuthorizedComponent,
    SearchComponent,
    LoaderComponent,
    ModalTrailerComponent,


    //Pipes
    ProfitPipe,
      FooterComponent,
      DetailsComponent,
      DetailsActorsComponent,
      RelatedMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
