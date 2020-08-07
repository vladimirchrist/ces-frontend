import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AdministradorModule } from './administrador/administrador.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './auth/auth.module'
import { authInterceptorProviders } from './auth/http-interceptor.service'
import { BacklogModule } from './backlog/backlog.module'
import { CoreModule } from './core/core.module'
import { MaterialModule } from './material.module'
import { RequisitoModule } from './requisito/requisito.module'
import { SharedModule } from './shared/shared.module'
import { SprintModule } from './sprint/sprint.module'
import { UsuarioModule } from './usuario/usuario.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    AuthModule,
    CoreModule,
    BacklogModule,
    UsuarioModule,
    SprintModule,
    RequisitoModule,
    AdministradorModule,
    AppRoutingModule
  ],
  providers: [
    authInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
