// Responsabilidade da classe: Notificar um cliente

import { Client } from "./Client";

export class Notify {
  constructor(private client: Client) {}

  // abstrair envio de email em outra classe (Mail Chimp, AWS SES)
  sendMail(template: string): boolean {
    console.log("Enviando email");

    // MailProvider.sendMail(email, template);
    template;
    this.client.email;

    console.log("Email enviado");

    return true;
  }

  // abstrair envio de SMS em outra classe
  sendSMS(): boolean {
    return true;
  }
}
