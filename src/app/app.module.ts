import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnicornCardComponent } from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';
import { UnicornifyPipe } from './shared/pipes/unicornify.pipe';
import { MagicalnamePipe } from './shared/pipes/magicalname.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as fromCart from './store/reducers/cart.reducer';
import * as fromUnicorns from './store/reducers/unicorns.reducer';
import { UnicornsEffects } from './store/effects/unicorns.effects';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatCheckboxModule
} from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    UnicornCardComponent,
    UnicornListComponent,
    UnicornifyPipe,
    MagicalnamePipe,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    LayoutModule,
    MatListModule,
    StoreModule.forRoot({
      cart: fromCart.cartReducer,
      unicorns: fromUnicorns.unicornsReducer,
    }, {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }),
    EffectsModule.forRoot([
      UnicornsEffects
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
