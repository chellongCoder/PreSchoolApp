import { observable, action } from 'mobx';

export class Moment {
    @observable id:number = 0;
    @observable content:string = "";
    @observable image:string = "";
    @observable likes: number = 0;
    @observable author: string = ""
}

export class MommentStore {
  @observable moments: Moment[] = [{
    id: 1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci tortor, accumsan sed consectetur et, euismod vel nibh. Sed fermentum nisl cursus, accumsan nibh non, scelerisque elit. Integer ultricies felis ut placerat aliquam. Maecenas ac ex quis orci viverra tincidunt. Donec id dui et elit efficitur finibus vel eget elit.",
    image: "https://res.cloudinary.com/longnn-teamwork/image/upload/v1571564975/PreSchoolApp/images/moment1_criomd.png",
    likes: 4,
    author: "Jerome Gaveau",
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci tortor, accumsan sed consectetur et, euismod vel nibh. Sed fermentum nisl cursus, accumsan nibh non, scelerisque elit. Integer ultricies felis ut placerat aliquam. Maecenas ac ex quis orci viverra tincidunt. Donec id dui et elit efficitur finibus vel eget elit.",
    image: "https://res.cloudinary.com/longnn-teamwork/image/upload/v1571566334/PreSchoolApp/images/moment2_njzur1.png",
    likes: 10,
    author: "Jonathan Lecluze",
  },
  {
    id: 3,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci tortor, accumsan sed consectetur et, euismod vel nibh. Sed fermentum nisl cursus, accumsan nibh non, scelerisque elit. Integer ultricies felis ut placerat aliquam. Maecenas ac ex quis orci viverra tincidunt. Donec id dui et elit efficitur finibus vel eget elit.",
    image: "https://res.cloudinary.com/longnn-teamwork/image/upload/v1571566334/PreSchoolApp/images/moment3_orl8nf.png",
    likes: 6,
    author: "Maxime Barbosa",
  }]
}