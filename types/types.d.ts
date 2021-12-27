declare namespace Models {
  export interface Image {
    url: string;
  }

  export interface Project {
    pictureUrl: string;
    projectTitle: string;
    description: string;
    aboutText: string;
    key1: string;
    key2: string;
    key3: strign;
    liveUrl: string;
    githubUrl: string;
  }

  export interface MenuItem {
    path: string;
    text: string;
  }
}
