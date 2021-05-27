export interface Ticket {
  id: number;
  title: string;
  description: string;
  status_id: number;
  status: Status;
  contact: Contact;
  CreatedAt: string;
  UpdatedAt: string;
}

export interface Status {
  id: number;
  status: string;
}

export interface Contact {
  id: number;
  name: string;
  tel: string;
}
