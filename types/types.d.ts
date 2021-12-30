declare namespace Models {
  export interface Image {
    
    url: string;
    
  }

  export interface Project {
    pictureUrl: Image['url'];
    projectTitle: string;
    description: string;
    about: { html: string };
    seLiveUrl: string;
    seGithubURL: string;
    id: string;
    slug: string;
    projectPictures: Array<Image>;
    keys: [];
  }

  export interface MenuItem {
    path: string;
    text: string;
  }
}
