import { observable, action } from 'mobx';

export interface INotification {
    id:number;
    title:string;
    author: string;
    content: string;
}

export class NotificationStore {
  @observable notifocations: INotification[] = [{
    id: 1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci tortor, accumsan sed consectetur et, euismod vel nibh. Sed fermentum nisl cursus, accumsan nibh non, scelerisque elit. Integer ultricies felis ut placerat aliquam. Maecenas ac ex quis orci viverra tincidunt. Donec id dui et elit efficitur finibus vel eget elit.",
    title: "",
    author: "Jerome Gaveau",
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci tortor, accumsan sed consectetur et, euismod vel nibh. Sed fermentum nisl cursus, accumsan nibh non, scelerisque elit. Integer ultricies felis ut placerat aliquam. Maecenas ac ex quis orci viverra tincidunt. Donec id dui et elit efficitur finibus vel eget elit.",
    title: "",
    author: "Jonathan Lecluze",
  },
  {
    id: 3,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci tortor, accumsan sed consectetur et, euismod vel nibh. Sed fermentum nisl cursus, accumsan nibh non, scelerisque elit. Integer ultricies felis ut placerat aliquam. Maecenas ac ex quis orci viverra tincidunt. Donec id dui et elit efficitur finibus vel eget elit.",
    title: "",
    author: "Maxime Barbosa",
  }]
}