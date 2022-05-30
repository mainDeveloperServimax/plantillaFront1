
export class RoutesApp {

  public static readonly ROUTES = {
    login: {
      main: 'login'
    },
    deliever: {
      main: 'deliever',
      children: {
        DriverNewsComponent: {
          main: 'DriverNewsComponent',
          children: {
            pickingDrivers: 'pickingDrivers',
            billing: 'Liquidacion',
            liveOperation: 'Operacion en vivo',
            liquidationReview: 'Revision Liquidacion',
            driver: 'Conductores',
            novelty: 'Novedades',
          }
        },
      }
    },

  }

  public static readonly OUTLETS = {
    login: 'loginMod',
    deliever: 'delieverMod'
  }
  public static readonly URL_OUTLETS = {
    /* ------------------------------------- Routes of Loggin Module -------------------------------------*/
    login: {
      goLogin: [RoutesApp.ROUTES.login.main,
      {
        outlets: {
          [RoutesApp.OUTLETS.login]:
            RoutesApp.ROUTES.login.main,
        }
      }]
    },
    deliever: {
      goDelieverNewsComponent: {
        main: [RoutesApp.ROUTES.deliever.main,
        {
          outlets: {
            [RoutesApp.OUTLETS.deliever]:
            RoutesApp.ROUTES.deliever.children.DriverNewsComponent.main,
          },
        }],
        children:{
          goPickingDrivers: [RoutesApp.ROUTES.deliever.main,
            {
              outlets: {
                [RoutesApp.OUTLETS.deliever]:
                  `${RoutesApp.ROUTES.deliever.children.DriverNewsComponent.main}/${RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.pickingDrivers}`,
              },
            }],
            goBilling: [RoutesApp.ROUTES.deliever.main,
          {
                outlets: {
                  [RoutesApp.OUTLETS.deliever]:
                    `${RoutesApp.ROUTES.deliever.children.DriverNewsComponent.main}/${RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.billing}`,
                }
          }],
          goLiveOperation: [RoutesApp.ROUTES.deliever.main,
            {
              outlets: {
                [RoutesApp.OUTLETS.deliever]:
                `${RoutesApp.ROUTES.deliever.children.DriverNewsComponent.main}/${RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.liveOperation}`,
              }
            }
          ],
          goliquidationReview: [RoutesApp.ROUTES.deliever.main,
            {
              outlest: {
                [RoutesApp.OUTLETS.deliever]:
                `${RoutesApp.ROUTES.deliever.children.DriverNewsComponent.main}/${RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.liquidationReview}`,
              }
            }
          ],
          goDriver: [RoutesApp.ROUTES.deliever.main, {
            outlets: {
              [RoutesApp.OUTLETS.deliever]:
              `${RoutesApp.ROUTES.deliever.children.DriverNewsComponent.main}/${RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.driver}`,
            }
          }],
          goNovelty: [RoutesApp.ROUTES.deliever.main, {
            outlets: {
              [RoutesApp.OUTLETS.deliever]:
              `${RoutesApp.ROUTES.deliever.children.DriverNewsComponent.main}/${RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.novelty}`,
            }
          }],
        }
      }
    }
  }
}
