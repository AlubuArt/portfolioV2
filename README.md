# Custom Portfolio / CV Design (work in progress)
#By Jacob Christensen

- [Live website](https://portfolio-v2-alubuart.vercel.app/projects)

## Contents
- [x] Hero page
- [x] Projects page
- [x] Dynamic project page
- [x] Contact
- [X] About page


## about the website
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
It utilize the GraphCMS headless graphQL CMS for content management.  
This website is designed and build with [Atomic Design Methodology](https://atomicdesign.bradfrost.com), which is a design methodology used to create effective design systems with highly reusable components through deliberate design, with explicit order and hierachy.


## tech used
- [Next.js](https://nextjs.org/)
- Typescript
- CSS modules
- [GraphQL API (GraphCMS)](https://graphcms.com/)
- [Jest testing framework](https://jestjs.io/)
- [Figma design tool](https://www.figma.com/)
- Git/Github

## libraries and dependencies
The project uses to some extend third party libraries, but the overall aim is to keep third party dependencies as few as possible, to keep things simpel and clean.

- [ClassNames](https://www.npmjs.com/package/classnames)
- [React Swiper](https://swiperjs.com/react)


## resources

- [Live website](https://portfolio-v2-alubuart.vercel.app/projects)
- [Figma wireframes desktop](https://www.figma.com/file/vuRpDJv3f1WBoKQrDpaivB/Portfolio-v2?node-id=0%3A1)
- [Figma wireframes mobile](https://www.figma.com/file/vuRpDJv3f1WBoKQrDpaivB/Portfolio-v2?node-id=5%3A38)
- [Figma mobile design](https://www.figma.com/file/vuRpDJv3f1WBoKQrDpaivB/Portfolio-v2?node-id=5%3A279)
- [Figma desktop design](https://www.figma.com/file/vuRpDJv3f1WBoKQrDpaivB/Portfolio-v2?node-id=5%3A278)
- [Figma design system](https://www.figma.com/file/vuRpDJv3f1WBoKQrDpaivB/Portfolio-v2?node-id=4%3A24)


## backlog

- [ ] Refactor to version 2 (all pagesm and content needs to come from cms)
- [ ] Upgrade Node and Next
- [ ] Changelog from Vercel Deployments API (https://vercel.com/docs/rest-api#introduction/api-basics)
- [ ] Youtube feed v2 (re-design)
- [ ] Loading spinner 
- [ ] Darkmode/lightmode toggle
- [ ] Comment section on project pages
- [ ] Advanced Analytics
- [ ] Fix indexing so preview branches wont be indexed (vercel.json)
- [ ] Generate sitemap.xml 

## Bugs
- [X] Fix bug where project images doesnt show, when new project is added in CMS. (Probaly something with getServerSideProps)
- [X] When projects page loades, the projects are in reversed order.



## backlog items DONE
- [X] Gallery styling
- [x] Responsive design for mobile and tablet
- [X] Youtube feed
- [X] Analytics
- [X] Projects page needs to be updated for SEO (graphCMS)