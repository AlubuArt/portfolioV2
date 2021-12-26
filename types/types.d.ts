declare namespace Models {
  export interface Image {
    url: string;
  }

  export interface Project {
    title: string;
    description: string;
    aboutText: string;
    image: Image;
    list: Array<string>;
  }

  export interface MenuItem {
    path: string;
    text: string;
  }
}
