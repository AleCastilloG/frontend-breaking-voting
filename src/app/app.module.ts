import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './@core/modules/graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './@pages/characters/characters.component';
import { VotesComponent } from './@pages/votes/votes.component';
import { CardComponent } from './@core/components/card/card.component';
import { TruncatePipe } from './@core/pipes/truncate.pipe';
import { LoadingComponent } from './@core/components/loading/loading.component';
import { NavbarComponent } from './@core/components/navbar/navbar.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './@core/components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    VotesComponent,
    CardComponent,
    TruncatePipe,
    LoadingComponent,
    NavbarComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
