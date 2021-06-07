import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class ToastService {
  constructor(private messageService: MessageService) {}

  showToastMessage(title: string, body: string, type: string) {
    this.messageService.add({
      severity: type,
      summary: title,
      detail: body,
    });
  }
}
