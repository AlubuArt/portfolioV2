declare namespace Models {
  export interface Image {
    url: string;
  }

  export interface Project {
    title: string;
    description: string;
    aboutText: string;
    images: Array<Image>;
    list: Array<string>;
  }

  export interface ProjectInfo {
    project: Project;
  }

  export interface MenuItem {
    path: string;
    text: string;
  }
}
