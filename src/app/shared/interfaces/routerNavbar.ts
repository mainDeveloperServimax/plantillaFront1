export  interface RouteNavbarInfo {
    path: any;
    id : string;
    title: string;
    icon: string;
    class: string;
    finalUrl: string;
    children?:{
      title: string;
      path: any
      finalUrl: string;
    } []
  }