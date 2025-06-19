interface pageLinkInterface {
    pagePath: string, // eg. /
    pageName: string, // eg. HOME
  }



const pages: pageLinkInterface[] = [
{
    pagePath: "/",
    pageName: "HOME"
},
{
    pagePath: "/requests",
    pageName: "REQUESTS"
},
{
    pagePath: "/events",
    pageName: "EVENTS"
},
{
    pagePath: "/crew",
    pageName: "CREW"
},
{
    pagePath: "/projects",
    pageName: "PROJECTS"
},
{
    pagePath: "/archive",
    pageName: "ARCHIVE"
},
]

export default pages;