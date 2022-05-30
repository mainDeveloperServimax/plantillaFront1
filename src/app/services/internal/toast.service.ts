

// toast.service.ts
import { Injectable, TemplateRef } from '@angular/core';

const CONDITION_CLASS = {
  "Success": "bg-success text-light",
  "Error": "bg-danger text-light",
  "Info": "bg-info text-light"
}
const CONDITION_MSG = {
  "Success": "Éxito",
  "Error": "ha ocurrido un error inesperado",
  "Info": "Recuerde que"
}
const CONDITION_TITLE = {
  "Success": "Éxito",
  "Error": "Error",
  "Info": "Informativo"
}


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];

  // Push new Toasts to array with content and options
  public show(textOrTpl: string | TemplateRef<any>, options: any = {}): void {
    this.toasts.push({ textOrTpl, ...options });
  }

  // Callback method to remove Toast DOM element from view
  public remove(toast): void {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  public openToast(content: { title?: string, msg?: string, type: 'Success' | 'Error' | 'Info' }) {

    this.show(content.msg || CONDITION_MSG[content.type], {
      classname: CONDITION_CLASS[content.type],
      delay: 2000,
      autohide: true,
      headertext: content.title || CONDITION_TITLE[content.type]
    });
  }
}
