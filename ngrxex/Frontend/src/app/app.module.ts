import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { StoreModule } from '@ngrx/store'; 
import { EffectsModule } from '@ngrx/effects'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { authReducer } from './store/auth/auth.reducer';
import { AuthEffects } from './store/auth/auth.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    StoreModule.forRoot({ auth: authReducer }), 
    EffectsModule.forRoot([AuthEffects]), 
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
