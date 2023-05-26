// import { BasicRoute, PrivateRoute } from "./components/elements/AppRouter";
// import { PAGES, USER_ROLE } from "./constants/app";
// import PrivateLayout from "./components/layout/PrivateLayout";
// import SignInForm from "./page/Auth/components/SignInForm";
// import EnterOTPPage from "./page/Auth/pages/EnterOTPPage";
// import FindYourAccountPage from "./page/Auth/pages/FindYourAccountPage";
// import ResetPasswordPage from "./page/Auth/pages/ResetPasswordPage";
// import SignUpPage from "./page/Auth/pages/SignUpPage";
// import HomePage from "./page/Home/pages";
// import MessagePage from "./page/Mess/page";
// import MyProjectPage from "./page/MyProject/page";
// import MyProjectInvestorPage from "./page/MyProjectInvestor/page";
// import ProfilePage from "./page/Profile/page";
// import ProjectsPage from "./page/Project/page";
// import GroupListPage from "./page/Groups/page";
// import GroupDetailPage from "./page/Group/page";
// import InvestmentProjectPage from "./page/MyProject/page/InvestmentProject";
// import CooperationInvitationPage from "./page/MyProject/page/CooperationInvitation";
// import HistoryContractPage from "./page/MyProject/page/HistoryContract";
// import ProjectList from "./page/MyProject/components/ProjectList";
// import CreateContactPage from "./page/CreateContract/page";
// import ResultSearchPage from "./page/ResultSearch/page";
// import ProfileUserPage from "./page/ProfileUser/page";
// import TabEdit from "./page/Profile/components/TabEdit";

// export const publicRoutes: BasicRoute[] = [
//   {
//     path: "/",
//     exact: false,
//     routes: [
//       {
//         path: PAGES.FIND_ACCOUNT,
//         roles: [],
//         exact: true,
//         component: FindYourAccountPage,
//       },
//       {
//         path: PAGES.SIGN_UP,
//         roles: [],
//         exact: true,
//         component: SignUpPage,
//       },
//       {
//         path: PAGES.OTP,
//         roles: [],
//         exact: true,
//         component: EnterOTPPage,
//       },
//       {
//         path: PAGES.REST_PASSWORD,
//         roles: [],
//         exact: true,
//         component: ResetPasswordPage,
//       },
//       {
//         path: PAGES.SIGN_IN,
//         roles: [],
//         exact: true,
//         component: SignInForm,
//       },
//     ],
//   },
// ];

// export const privateRoutes: PrivateRoute[] = [
//   {
//     path: "/",
//     component: PrivateLayout,
//     exact: false,
//     routes: [
//       {
//         path: PAGES.PROJECTS,
//         roles: [],
//         label: "Project",
//         exact: false,
//         icon: "charm:plant-pot",
//         component: ProjectsPage,
//       },
//       // {
//       //   path: PAGES.SETTING,
//       //   roles: [],
//       //   label: "Setting",
//       //   exact: true,
//       //   icon: "ant-design:setting-outlined",
//       //   component: SettingPage,
//       // },

//       {
//         path: PAGES.MESSAGES,
//         roles: [],
//         label: "Messages",
//         exact: false,
//         icon: "mdi:message-outline",
//         component: MessagePage,
//       },
//       // {
//       //   path: PAGES.NOTIFY,
//       //   roles: [],
//       //   label: "",
//       //   exact: true,
//       //   icon: "clarity:notification-outline-badged",
//       //   component: NotifyPage,
//       // },
//       {
//         path: PAGES.PROFILE,
//         roles: [],
//         exact: true,
//         component: ProfilePage,
//       },
//       {
//         path: `${PAGES.PROFILE}/:id`,
//         roles: [],
//         exact: true,
//         component: ProfilePage,
//       },
//       {
//         path: `${PAGES.PROFILE_USER}/:id`,
//         roles: [],
//         exact: true,
//         component: ProfileUserPage,
//       },
//       {
//         path: `${PAGES.GROUP}/:id`,
//         roles: [],
//         exact: false,
//         component: GroupDetailPage,
//       },
//       {
//         path: `${PAGES.GROUP}/:id/:post_id?`,
//         roles: [],
//         exact: false,
//         component: GroupDetailPage,
//       },
//       {
//         path: PAGES.GROUPS,
//         roles: [],
//         label: "Group",
//         icon: "material-symbols:group-add",
//         exact: false,
//         component: GroupListPage,
//       },
//       {
//         path: PAGES.MY_PROJECT,
//         roles: [USER_ROLE.STARTUP],
//         label: "My Project",
//         exact: false,
//         icon: "charm:plant-pot",
//         component: MyProjectPage,
//         routes: [
//           {
//             path: PAGES.MY_PROJECT_PROJECTS,
//             roles: [],
//             exact: true,
//             icon: "ant-design:home-outlined",
//             label: "Projects",
//             component: ProjectList,
//           },
//           {
//             path: PAGES.MY_PROJECT_INVESTMENT_PROJECTS,
//             roles: [],
//             exact: true,
//             icon: "charm:plant-pot",
//             label: "Investment Project",
//             component: InvestmentProjectPage,
//           },
//           {
//             path: PAGES.MY_PROJECT_COOPERATION_INVITATION,
//             roles: [],
//             exact: true,
//             icon: "clarity:contract-solid",
//             label: "Cooperation Invitation",
//             component: CooperationInvitationPage,
//           },

//           {
//             path: PAGES.MY_PROJECT_HISTORY_CONTRACT,
//             roles: [],
//             exact: true,
//             icon: "fa:history",
//             label: "History Contract",
//             component: HistoryContractPage,
//           },
//         ],
//       },
//       {
//         path: PAGES.MY_PROJECT,
//         roles: [USER_ROLE.INVESTOR],
//         exact: false,
//         label: "Investor Project",
//         icon: "charm:plant-pot",
//         component: MyProjectInvestorPage,
//       },
//       {
//         path: PAGES.CREATE_CONTRACT,
//         roles: [USER_ROLE.INVESTOR],
//         component: CreateContactPage,
//       },
//       {
//         path: PAGES.RESULT_SEARCH,
//         roles: [],
//         label: "Search",
//         exact: false,
//         icon: "material-symbols:manage-search",
//         component: ResultSearchPage,
//       },
//       {
//         path: PAGES.EDIT,
//         roles: [],
//         exact: true,
//         component: TabEdit,
//       },
//       {
//         path: PAGES.HOME_PAGE,
//         roles: [],
//         label: "Home",
//         exact: false,
//         icon: "material-symbols:home-rounded",
//         component: HomePage,
//       },
//     ],
//   },
// ];
export const as = () => {};
