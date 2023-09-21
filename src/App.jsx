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
// import CardsComponents from "./card/CardsComponents"
// import CardsContainerComponent from "./card/CardsContainerComponent"
import { Container } from "@mui/material";
import Animals from "./card/Animals";
import TargilUpperBar from "./card/TargilUpperBar";


let dataFromServer = [
  {
    title: "card 1",
    subTitle: "card 1 sub title",
    phone: "050-50055005",
    address: "lkjasdf;lkjsdfoilk",
    cardNumber: 3521354354,
    img: "https://pngimg.com/d/free_PNG90775.png",
    alt: "free",
  },
  {
    title: "card 2",
    subTitle: "card 2 sub title",
    phone: "050-50055005",
    address: "lkjasdf;lkjsdfoilk",
    cardNumber: 3521354354,
    img: "https://pngimg.com/d/free_PNG90775.png",
    alt: "free",
  },
  {
    title: "card 3",
    subTitle: "card 3 sub title",
    phone: "050-50055005",
    address: "lkjasdf;lkjsdfoilk",
    cardNumber: 3521354354,
    img: "https://pngimg.com/d/free_PNG90775.png",
    alt: "free",
  },
  {
    title: "card 4",
    subTitle: "card 4 sub title",
    phone: "050-50055005",
    address: "lkjasdf;lkjsdfoilk",
    cardNumber: 3521354354,
    img: "https://pngimg.com/d/free_PNG90775.png",
    alt: "free",
  },
];


let animalsArr = ["Cat", "Dog", "Mouse", "Rat", "Horse"];

const App2 = () => {
  return (
    // <Fragment>
    //   <NewAppStyleComp />
    //   <SxComponent />
    //   <ButtonsComponent/>
    //   <NewButtonsComp/>
    //   <CardComponent/>
    //   <CardsExercise/>
    //   <CardsComponents/>
    //   <Cards/>
    //   <CardsContainerComponent/>
    // </Fragment>

    // <Container>
    //   {animalsArr.map((x)=>(<Animals key={x} name={x} />))}
    // </Container>

    <Container>
      <TargilUpperBar/>
    </Container>
  );
};

export default App2;


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