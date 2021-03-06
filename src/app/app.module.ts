import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
// import { TareasModule } from './tareas/tareas.module';
import { AboutModule } from './about/about.module';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
// import { ContactosModule } from './contactos/contactos.module';
// import { UsuariosModule } from './usuarios/usuarios.module';

// the second parameter 'es' is optional
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    // Lazy loading
    //TareasModule,
    AboutModule,
    // Lazy loading
    // ContactosModule,
    // Lazy loading
    // UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
