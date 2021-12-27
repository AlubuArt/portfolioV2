async function fetchAPI(query) {
  const res = await fetch("https://api-eu-central-1.graphcms.com/v2/ckvthuazi095o01xv7lgmcztj/master", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      query
    }),
  });
  const json = await res.json();
  
  
  if (json.errors) {
      console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID);
      console.error(json.errors);
      throw new Error("Failed to fetch API");
    }
    

  return json.data;
}

export async function getHeroContent() {
  const data = await fetchAPI(
    `
         {
            heroes {
                subheader {
                text
                }
                header
                heroImage {
                url
                }
              
            }
        }
              
    `
    
  );


  return data;
}


export async function getProjects() {
    const data = await fetchAPI(
      `
      {
        projects {
          aboutText
          description
          key1
          key2
          key3
          projectTitle
          seGithubURL
          seLiveUrl
          pictureUrl
        }
      }
                
      `
      
    );
  
  
    return data.projects;
  }
