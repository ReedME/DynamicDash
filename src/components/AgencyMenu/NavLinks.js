// Agency nav links
export default {
   category1: [
      {
         "menu_title": "sidebar.dashboard",
         "menu_icon": "ti-dashboard",
         "child_routes": [
            {
               "path": "/app/dashboard/ecommerce",
               "menu_title": "sidebar.ecommerce",
            },
            {
               "path": "/horizontal/dashboard/saas",
               "menu_title": "sidebar.saas"
            },
            {
               "path": "/agency/dashboard/agency",
               "menu_title": "sidebar.agency"
            }
         ]
      },
      {
         "menu_title": "sidebar.ecommerce",
         "menu_icon": "ti-shopping-cart",
         "child_routes": [
            {
               "path": "/agency/ecommerce/shop",
               "menu_title": "sidebar.shop"
            },
            {
               "path": "/agency/ecommerce/cart",
               "menu_title": "sidebar.cart"
            },
            {
               "path": "/agency/ecommerce/checkout",
               "menu_title": "sidebar.checkout"
            },
            {
               "path": "/agency/ecommerce/shop-list",
               "menu_title": "sidebar.shopList"
            },
            {
               "path": "/agency/ecommerce/shop-grid",
               "menu_title": "sidebar.shopGrid"
            },
            {
               "path": "/agency/ecommerce/invoice",
               "menu_title": "sidebar.invoice"
            }
         ]
      },
      {
         "menu_title": "sidebar.widgets",
         "menu_icon": "ti-widget",
         "child_routes": [
            {
               "path": "/agency/widgets/charts",
               "menu_title": "sidebar.charts"
            },
            {
               "path": "/agency/widgets/promo",
               "menu_title": "sidebar.promo"
            },
            {
               "path": "/agency/widgets/general",
               "menu_title": "sidebar.general"
            },
            {
               "path": "/agency/widgets/user",
               "menu_title": "sidebar.user"
            },
         ]
      },
      {
         "menu_title": "sidebar.pages",
         "menu_icon": "ti-layers",
         "child_routes": [
            {
               "path": "/agency/pages/gallery",
               "menu_title": "sidebar.gallery"
            },
            {
               "path": "/agency/pages/pricing",
               "menu_title": "sidebar.pricing"
            },
            {
               "path": "/agency/pages/blank",
               "menu_title": "sidebar.blank"
            },
            {
               "path": "/terms-condition",
               "menu_title": "sidebar.terms&Conditions"
            },
            {
               "path": "/agency/pages/feedback",
               "menu_title": "sidebar.feedback"
            },
            {
               "path": "/agency/pages/report",
               "menu_title": "sidebar.report"
            },
            {
               "path": "/agency/pages/faq",
               "menu_title": "sidebar.faq(s)"
            }
         ]
      },
      {
         "menu_title": "sidebar.session",
         "menu_icon": "ti-timer",
         "child_routes": [
            {
               "path": "/session/login",
               "menu_title": "sidebar.login"
            },
            {
               "path": "/session/register",
               "menu_title": "sidebar.register"
            },
            {
               "path": "/session/lock-screen",
               "menu_title": "sidebar.lockScreen"
            },
            {
               "path": "/session/forgot-password",
               "menu_title": "sidebar.forgotPassword"
            },
            {
               "path": "/session/404",
               "menu_title": "sidebar.404"
            },
            {
               "path": "/session/500",
               "menu_title": "sidebar.500"
            }
         ]
      }
   ],
   category2: [
      {
         "menu_title": "sidebar.inbox",
         "menu_icon": "ti-archive",
         "path": "/agency/mail",
         "child_routes": null
      },
      {
         "menu_title": "sidebar.chat",
         "menu_icon": "ti-comment",
         "path": "/agency/chat",
         "child_routes": null
      },
      {
         "menu_title": "sidebar.toDo",
         "menu_icon": "ti-comment-alt",
         "path": "/agency/todo",
         "child_routes": null
      }
   ],
   category3: [
      {
         "menu_title": "sidebar.uiComponents",
         "menu_icon": "ti-ruler-alt-2",
         "child_routes": [
            {
               "path": "/agency/ui-components/alerts",
               "menu_title": "sidebar.alerts"
            },
            {
               "path": "/agency/ui-components/app-bar",
               "menu_title": "sidebar.appBar"
            },
            {
               "path": "/agency/ui-components/avatars",
               "menu_title": "sidebar.avatars"
            },
            {
               "path": "/agency/ui-components/buttons",
               "menu_title": "sidebar.buttons"
            },
            {
               "path": "/agency/ui-components/bottom-navigations",
               "menu_title": "sidebar.bottomNavigations"
            },
            {
               "path": "/agency/ui-components/badges",
               "menu_title": "sidebar.badges"
            },
            {
               "path": "/agency/ui-components/cards",
               "menu_title": "sidebar.cards"
            },
            {
               "path": "/agency/ui-components/cards-masonry",
               "menu_title": "sidebar.cardsMasonry"
            },
            {
               "path": "/agency/ui-components/chip",
               "menu_title": "sidebar.chip"
            },
            {
               "path": "/agency/ui-components/dialog",
               "menu_title": "sidebar.dialog"
            },
            {
               "path": "/agency/ui-components/dividers",
               "menu_title": "sidebar.dividers"
            },
            {
               "path": "/agency/ui-components/drawers",
               "menu_title": "sidebar.drawers"
            },
            {
               "path": "/agency/ui-components/expansion-panel",
               "menu_title": "sidebar.expansionPanel"
            },
            {
               "path": "/agency/ui-components/grid-list",
               "menu_title": "sidebar.gridList"
            },
            {
               "path": "/agency/ui-components/list",
               "menu_title": "sidebar.list"
            },
            {
               "path": "/agency/ui-components/menu",
               "menu_title": "sidebar.menu"
            },
            {
               "path": "/agency/ui-components/popover",
               "menu_title": "sidebar.popoverAndToolTip"
            },
            {
               "path": "/agency/ui-components/progress",
               "menu_title": "sidebar.progress"
            },
            {
               "path": "/agency/ui-components/snackbar",
               "menu_title": "sidebar.snackbar"
            },
            {
               "path": "/agency/ui-components/selection-controls",
               "menu_title": "sidebar.selectionControls"
            }
         ]
      },
      {
         "menu_title": "sidebar.advancedComponent",
         "menu_icon": "ti-ruler-pencil",
         "child_routes": [
            {
               "path": "/agency/advanced-component/dateTime-picker",
               "menu_title": "sidebar.dateAndTimePicker"
            },
            {
               "path": "/agency/advanced-component/tabs",
               "menu_title": "sidebar.tabs"
            },
            {
               "path": "/agency/advanced-component/stepper",
               "menu_title": "sidebar.stepper"
            },
            {
               "path": "/agency/advanced-component/notification",
               "menu_title": "sidebar.notification"
            },
            {
               "path": "/agency/advanced-component/sweet-alert",
               "menu_title": "sidebar.sweetAlert"
            },
            {
               "path": "/agency/advanced-component/auto-complete",
               "menu_title": "sidebar.autoComplete"
            }
         ]
      },
      {
         "menu_title": "sidebar.aboutUs",
         "menu_icon": "ti-info-alt",
         "path": "/agency/about-us",
         "child_routes": null
      }
   ],
   category4: [
      {
         "menu_title": "sidebar.forms",
         "menu_icon": "ti-menu-alt",
         "child_routes": [
            {
               "path": "/agency/forms/form-elements",
               "menu_title": "sidebar.formElements"
            },
            {
               "path": "/agency/forms/text-field",
               "menu_title": "sidebar.textField"
            },
            {
               "path": "/agency/forms/select-list",
               "menu_title": "sidebar.selectList"
            }
         ]
      },
      {
         "menu_title": "sidebar.charts",
         "menu_icon": "ti-pie-chart",
         "child_routes": [
            {
               "path": "/agency/charts/re-charts",
               "menu_title": "sidebar.reCharts"
            },
            {
               "path": "/agency/charts/react-chartjs2",
               "menu_title": "sidebar.reactChartjs2"
            }
         ]
      },
      {
         "menu_title": "sidebar.icons",
         "menu_icon": "ti-star",
         "child_routes": [
            {
               "path": "/agency/icons/themify-icons",
               "menu_title": "sidebar.themifyIcons"
            },
            {
               "path": "/agency/icons/simple-lineIcons",
               "menu_title": "sidebar.simpleLineIcons"
            },
            {
               "path": "/agency/icons/material-icons",
               "menu_title": "sidebar.materialIcons"
            }
         ]
      },
      {
         "menu_title": "sidebar.tables",
         "menu_icon": "ti-layout",
         "child_routes": [
            {
               "path": "/agency/tables/basic",
               "menu_title": "sidebar.basic"
            },
            {
               "path": "/agency/tables/data-table",
               "menu_title": "sidebar.dataTable"
            },
            {
               "path": "/agency/tables/responsive",
               "menu_title": "sidebar.responsive"
            }
         ]
      }
   ],
   category5: [
      {
         "menu_title": "sidebar.maps",
         "menu_icon": "ti-map-alt",
         "child_routes": [
            {
               "path": "/agency/maps/google-maps",
               "menu_title": "sidebar.googleMaps"
            },
            {
               "path": "/agency/maps/leaflet-maps",
               "menu_title": "sidebar.leafletMaps"
            }
         ]
      },
      {
         "menu_title": "sidebar.users",
         "menu_icon": "ti-user",
         "child_routes": [
            {
               "path": "/agency/users/user-profile-1",
               "menu_title": "sidebar.userProfile1"
            },
            {
               "path": "/agency/users/user-profile",
               "menu_title": "sidebar.userProfile2"
            },
            {
               "path": "/agency/users/user-management",
               "menu_title": "sidebar.userManagement"
            },
            {
               "path": "/agency/users/user-list",
               "menu_title": "sidebar.userList"
            }
         ]
      },
      {
         "menu_title": "sidebar.calendar",
         "menu_icon": "ti-calendar",
         "child_routes": [
            {
               "path": "/agency/calendar/basic",
               "menu_title": "components.basic"
            },
            {
               "path": "/agency/calendar/cultures",
               "menu_title": "sidebar.cultures"
            },
            {
               "path": "/agency/calendar/dnd",
               "menu_title": "sidebar.dnd"
            },
            {
               "path": "/agency/calendar/selectable",
               "menu_title": "sidebar.selectable"
            },
            {
               "path": "/agency/calendar/custom-rendering",
               "menu_title": "sidebar.customRendering"
            }
         ]
      },
      {
         "menu_title": "sidebar.editor",
         "menu_icon": "ti-pencil-alt",
         "child_routes": [
            {
               "path": "/agency/editor/wysiwyg-editor",
               "menu_title": "sidebar.wysiwygEditor"
            },
            {
               "path": "/agency/editor/quill-editor",
               "menu_title": "sidebar.quillEditor"
            }
         ]
      },
      {
         "menu_title": "sidebar.dragAndDrop",
         "menu_icon": "ti-mouse-alt",
         "child_routes": [
            {
               "path": "/agency/drag-andDrop/react-dragula",
               "menu_title": "sidebar.reactDragula"
            },
            {
               "path": "/agency/drag-andDrop/react-dnd",
               "menu_title": "sidebar.reactDnd"
            }
         ]
      },
      {
         "menu_title": "sidebar.multiLevel",
         "menu_icon": "ti-layout-cta-right",
         "child_routes": [
            {
               "menu_title": "sidebar.level1",
               "child_routes": [
                  {
                     "path": "/agency/level2",
                     "menu_title": "sidebar.level2"
                  },
                  {
                     "path": "/agency/level2",
                     "menu_title": "sidebar.level2"
                  },
                  {
                     "path": "/agency/level2",
                     "menu_title": "sidebar.level2"
                  }
               ]
            },
            {
               "menu_title": "sidebar.level1",
               "child_routes": [
                  {
                     "path": "/agency/level2",
                     "menu_title": "sidebar.level2"
                  }
               ]
            }
         ]
      }
   ]
}
