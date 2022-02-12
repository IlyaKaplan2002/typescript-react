export interface IContact {
  id: string;
  name: string;
  phone: string;
}

export interface IState {
  contacts: any;
  contactsFilter: string;
}
