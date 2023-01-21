async function fetchAPI(query, variables) {
  // remember to include all params
  const res = await fetch('https://api-eu-central-1.hygraph.com/v2/ckvthuazi095o01xv7lgmcztj/master', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      //Remeber to uncomment this line below, when going to PROD. process.env. is running on the server, so it wont work for the client calls
      Authorization: `Bearer  ${process.env.GRAPHCMS_PROD_AUTH_TOKEN} `,
      'Content-Type': 'application/json',
      /* This should be commented out when going to production  */
      /* Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDA1ODc5OTcsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuaHlncmFwaC5jb20vdjIvY2t2dGh1YXppMDk1bzAxeHY3bGdtY3p0ai9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOWYxODgzYmEtOGY3OS00NDgzLWIwN2ItZjgyYWNjNWRkMmQ4IiwianRpIjoiY2t4b2JxZ2E2NXBxdDAxeHA5dHpyYnY0eCJ9.kPUEQTwkUOomQptnE8_M85VAIthRgtaKV7ctN_aYdwe431AHJUKkMZ_gPFlvoX4JOZmRgwqX2eGZX_z1xTCbWLTXuAkxoAflHXWjToVonjzSY9lXm0nSu0Ri0k6oeX4ax3mzwE69szap6hvyGo5CHYRBAfQGsitKbUKKqxQlVgavorz2ybefoEEzVD2hNyqMUQxGNdhUq_g9fBbbRizxTOQaAbuUU3W4atARDmtIfPqA2PO9NCgVSFYkTEWStY_sbG6e431OR9HP9L5xWDF03Zwe2zpOvvFwCcfBGAQBljPmchQRHe9uPG_rl_OAOtrQwWyzVcqUYbTKx_PUjpiKAwbJdNc-2UESITaOPwxCWdRQhloADFx9ZfpMg3xT8STr8rsa5zzg9sY2OfgPJ2xsPpC5HMwiatKnKQcElPxw0bLZKCKFG-2C6vBeqpr5Qg7G_g8ZOutd8sLjrQXUmIcO3i0hImV7lG5IRv2mcgrZpfB8lXZGyUC1Wl29CHWZVogtNYtu5JXoTOX4SVpNKMEeMp_4CiGdRS1xt4uL-U5tR4hZ1--PV4XXX3xy6FNUQHjOHSXzjjO-Hnt1VRugsRZB32DfemNXYwmUkbuMCS19lm8S3c0rpuXwwSQ7QCUYPxPkvvf4lanFUXwZ8QSNNVwf1g_NPwhBbdlGQYSV_Y24_D0`, */
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

export async function getProjectPage() {
  const data = await fetchAPI(
    `
    query GetProjectPage {
      projectPages {
        metaData {
          metaDescription
          metaTitle
          metaImage {
            url
          }
        }
      }
    }
   `
  );
  return data.projectPages[0];
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
              metaImage {
                url
              }
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

export async function getAllPages() {
  const data = await fetchAPI(
    `
      query GetAllPages {
        website(where: {websiteName: "jcvisueldesign.dk"}) {
          pages {
            pageName
            pageUrl
        }
      }
    }
    `
  );

  return data.website.pages;
}
