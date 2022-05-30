import { UserDataAdmin } from './../shared/DTOs/user.dto';
import { DocumentTypeEnum } from './../shared/enums/documentTypes.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { IResponseWrapped } from "../shared/DTOs/responseWrap.interface";



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static isloggin: boolean = false;
  constructor(private http: HttpClient) { }


  public loginPerson(typeIdentification: DocumentTypeEnum, document: string, passWord: string): Observable<IResponseWrapped<UserDataAdmin>> {
    return this.http.post<IResponseWrapped<UserDataAdmin>>(
      `${environment.apiUrl}login/validatePasswordAdmin`, {
      typeIdentification,
      document,
      passWord
    },
    );
  }
  public validateToken(token: string): Observable<boolean> {
    return this.http.get<boolean>(
      `${environment.apiUrl}login/validatoken`, {
      params: {
        token
      }
    }
    );
  }


}
