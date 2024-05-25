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

  export interface Experience {
    companyName: string;
    dates: string;
    description: string;
    jobTitle: string;
    keys: [string];
    link: string;
    linktext: string; 
  }

  export interface Education {
    educationName: string;
    graduationDate: string;
    description: string;
    educationTitle: string;
    keys: [string];
    link: string;
    linktext: string; 
  }

  export interface MenuItem {
    pageUrl: string;
    pageName: string;
  }

  export interface PlayListData {
    kind: string;
    etag: string;
    id: string;
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {};
      channelTitle: string;
      playListId: string;
      position: number;
      resourceId: {};
      videoOwnerChannelTitle: string;
      videoOwnerChannelId: string;
    };
  }

  export interface YTVideo {
    snippet: {
      title: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
      videoOwnerChannelTitle: string;
      resourceId: {
        videoId: string; //use this the get the URL for the video.
      };
      publishedAt: Date;
    };
  }

  export interface AboutMeText {
    aboutMeHeader: string;
    aboutShortDescription: string;
    aboutMeLongDescription: { html: string };
    author: string;
  }

  export interface Experience {
    companyName: string;
    dates: string;
    jobTitle: string;
    link: string;
  }

  export interface Meta {
    metaTitle: string;
    metaDescription: string;
    metaImage: string

  }

  export interface BlogPost {
    pictureUrl: Image['url'];
    blogpostTitle: string; 
    leadinText: string; 
    date: string;
    content: any; 
    id: string;
    slug: string;
  }
}


