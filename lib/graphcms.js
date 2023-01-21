async function fetchAPI(query, variables) {
  // remember to include all params
  const res = await fetch('https://api-eu-central-1.graphcms.com/v2/ckvthuazi095o01xv7lgmcztj/master', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API'); //stack trace is really poor - look carefully for errors in this file.
  }

  return json.data;
}

export async function getHeroContent() {
  const data = await fetchAPI(
    `
      {
        heroes {
          header
          subheader {
            text
          }
          heroImage {
            url
          }
          pageTitle
          pageDescription
        }
      }     
    `
  );

  return data.heroes[0];
}

export async function getAllProjects() {
  const data = await fetchAPI(
    `
      {
        projects {
          projectTitle
          description
          about { html }
          pictureUrl
          projectPictures {
            url
          }
          slug
        }
      }
    `
  );

  return data.projects;
}

export async function getAllProjectsWithSlug() {
  const data = await fetchAPI(
    `
      {
        projects {
          slug
        }
      }
    `
  );
  return data.projects;
}

export async function getProject(id) {
  const data = await fetchAPI(
    `
      query GetProject($slug: String!){
        project(where: {slug:  $slug}) {
          projectTitle
          description
          about {
            html
          }
          pictureUrl
          projectPictures {
            url
          }
          seGithubURL
          seLiveUrl
          keys
          slug
        }
      },
      `,

    { slug: id }
  );
  return data;
}

export async function getAboutMe() {
  const data = await fetchAPI(
    `
        query MyQuery {
  
          aboutMe(where: {id: "cky1xydrsbuwv0d48vq54et5t"}) {
            aboutMeHeader
            author
            aboutShortDescription
            aboutMeLongDescription {
              html
            }
            meta {
              metaDescription
              metaTitle
              
            }
          }
        }
    `
  );
  return data;
}

export async function getExperiences() {
  const data = await fetchAPI(
    `{
    experiences {
      companyName
      dates
      description
      jobTitle
      link
      keys
      linktext
    }
  }
    `
  );

  return data.experiences;
}
