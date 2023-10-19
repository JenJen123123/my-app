import LoginPage from "./homeExercise/LoginPage"
import HeaderComponent from "./layout/header/HeaderComponent"
import HomePage from "./pages/home/HomePage"
import UsersAdmin from "./pages/home/UsersAdmin"
import LayoutComponent from "./layout/LayoutComponent"
import RegisterComponent from "./pages/register/RegisterPage"
import Error from "./layout/error/Error"
import Router from "./routes/Router"
import UserManagement from "./pages/users/UserManagement"
import Users from "./pages/users/Users"
import AllUsers from "./pages/users/AllUsers"


const App = () => {
  return (
    <LayoutComponent>
      <Router/>
    </LayoutComponent>
  );
};

export default App





// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// import MyFirstComponent from "./playground/MyFirstComponent";
// import My2Component from "./playground/My2Component";
// import My3Component from "./playground/My3Component";
// import InlineStyleComponent from "./playground/InlineStyleComponent";
// import NewStyle from "./playground/StyleComponent";
// import TypografyComponent from "./playground/TypographyComponents";


// const App = () => {
//   return (
//     <div>
//       <MyFirstComponent/>
//       <My2Component/>
//       <My3Component/>
//       <InlineStyleComponent/>
//       <NewStyle/>
//       <TypografyComponent/>
//     </div>
//   );
// };

// export default App;

// import NewAppStyleComp from "./playground/NewAppStyleComp";
// import SxComponent from './playground/SxComponent';
// import { Fragment } from "react";
// import ButtonsComponent from "./playground/ButtonsComponent";
// import NewButtonsComp from "./playground/NewButtonsComp";
// import CardComponent from "./playground/CardComponent";
// import Cards from "./card/Card";
// import CardsExercise from "./homeExercise/CardsExercise"
// import CardsComponents from "./card/CardsComponents";
// import CardsContainerComponent from "./card/CardsContainerComponent";
// import { Container } from "@mui/material";
// import Animals from "./card/Animals";
// import TargilUpperBar from "./card/TargilUpperBar";
// import Targil from "./L4/Targil";
// import LoginPage from "./pages/login/LoginPage";
// import RegisterComponent from "./pages/register/RegisterPage";
// import BussinesCard from "./homeExercise/BussinesCard";
// import TestStuff from "./homeExercise/TestStuff";


// let dataFromServer = [
//   {
//     title: "card 1",
//     subTitle: "card 1 sub title",
//     phone: "050-50055005",
//     address: "lkjasdf;lkjsdfoilk",
//     cardNumber: 3521354354,
//     img: "https://pngimg.com/d/free_PNG90775.png",
//     alt: "free",
//   },
//   {
//     title: "card 2",
//     subTitle: "card 2 sub title",
//     phone: "050-50055005",
//     address: "lkjasdf;lkjsdfoilk",
//     cardNumber: 3521354354,
//     img: "https://pngimg.com/d/free_PNG90775.png",
//     alt: "free",
//   },
//   {
//     title: "card 3",
//     subTitle: "card 3 sub title",
//     phone: "050-50055005",
//     address: "lkjasdf;lkjsdfoilk",
//     cardNumber: 3521354354,
//     img: "https://pngimg.com/d/free_PNG90775.png",
//     alt: "free",
//   },
//   {
//     title: "card 4",
//     subTitle: "card 4 sub title",
//     phone: "050-50055005",
//     address: "lkjasdf;lkjsdfoilk",
//     cardNumber: 3521354354,
//     img: "https://pngimg.com/d/free_PNG90775.png",
//     alt: "free",
//   },
// ];


// let animalsArr = ["Cat", "Dog", "Mouse", "Rat", "Horse"];

// const App2 = () => {
// return (
// <Fragment>
//   <NewAppStyleComp />
//   <SxComponent />
//   <ButtonsComponent/>
//   <NewButtonsComp/>
// <CardComponent/>
//   <CardsExercise/>
//   <CardsComponents/>
// <Car/ds/>
// <CardsContainerComponent/>
// </Fragment>

// <Container>
//   {animalsArr.map((x)=>(<Animals key={x} name={x} />))}
// </Container>

// <Container>
//   <TargilUpperBar/>
// </Container>

// <Targil/>

// <LoginPage />

// <RegisterComponent />
// <BussinesCard />

// <TestStuff />
// );
// };

// export default App2;

// dataFromServer.map((item) => (
//   <CardComponent
//     key={nextKey()}
//     title={item.title}
//     subTitle={item.subTitle}
//     phone={item.phone}
//     address={item.address}
//     cardNumber={item.cardNumber}
//     img={item.img}
//     alt={item.alt}
//   />
// ))