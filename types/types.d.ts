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
    seLiveUrl: string;
    seGithubURL: string;
    id: string;
    slug: string;
    projectPictures: []
  }

  export interface MenuItem {
    path: string;
    text: string;
  }
}
