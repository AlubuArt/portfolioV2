declare namespace Models {
  export interface Image {
    url: string;
  }

  export interface Project {
    pictureUrl: string;
    projectTitle: string;
    description: string;
    about: { html: string };
    seLiveUrl: string;
    seGithubURL: string;
    id: string;
    slug: string;
    projectPictures: [];
    keys: [];
  }

  export interface MenuItem {
    path: string;
    text: string;
  }
}
