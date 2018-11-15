// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from "src/environments/environment";

// @Component({
//   selector: 'psn-usuarios',
//   templateUrl: './usuarios.component.html',
//   styleUrls: ['./usuarios.component.css']
// })
// export class UsuariosComponent implements OnInit {
//   aUsuarios: Array<any>;
//   url: string;
//   idUser: number;

//   // Las inyecciones se suelen hacer en el constructor.
//   constructor(public http: HttpClient) { }

//   ngOnInit() {
//     this.aUsuarios = [];
//     this.url = environment.apiUsers;
//   }

//   onMostrar() {
//     this.aUsuarios = [];
//     this.url = environment.apiUsers;
//     if( this.idUser ) {
//       this.url += `/${this.idUser}`;
//       console.log(this.url);
//     }
//     this.http.get(this.url).toPromise().then(
//       (data: any) => {
//         if( Array.isArray(data) ) {
//           this.aUsuarios = data;
//         } else {
//           this.aUsuarios.push(data);
//         }
//       }
//     );
//   }

// }




//Usando servicio UsuariosService
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'psn-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  user: any;
  aUsuarios: Array<any>;
  idUser: number;

  constructor(public usuariosSrv: UsuariosService) { }

  ngOnInit() {
    this.aUsuarios = [];
    this.user = {name: '', email: ''};
  }

  onMostrar() {
    this.aUsuarios = [];
    if( this.idUser ) {
      this.usuariosSrv.getUser(this.idUser).then(
        (data) => { this.aUsuarios.push(data); }
      );
    } else {
      this.usuariosSrv.getUsers().then(
        (data: any) => { this.aUsuarios = data; }
      );
    }
  }

  onAdd() {
    this.usuariosSrv.postUser(this.user).then(
      (data) => {
        console.log(data);
        this.user = data;
        this.onMostrar();
      }
      );
  }

  onModificar() {
    if( !this.user ) { return; }
    this.usuariosSrv.patchUser(this.idUser, this.user).then(
      (data) => {
        console.log(data);
        this.user = data;
        this.onMostrar();
      }
      );

  }

  onBorrar() {
    if( !this.user ) { return; }
    this.usuariosSrv.deleteUser(this.idUser).then(
      (data) => {
        console.log(data);
        this.user = null;
        this.onMostrar();
      }
      );

  }
}
