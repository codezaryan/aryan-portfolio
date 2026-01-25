import { ContactService } from "../service/contact.service";


export class ContactController {
    private contactService: ContactService;

    constructor() {
        this.contactService = new ContactService();
    }

    async handleSendEmailRequest(email: Email): Promise<void> {
      return await this.contactService.sendEmail(email);
    }
}