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

import NewAppStyleComp from "./playground/NewAppStyleComp";
import SxComponent from './playground/SxComponent';
import { Fragment } from "react";
import ButtonsComponent from "./playground/ButtonsComponent";
import NewButtonsComp from "./playground/NewButtonsComp";
import CardComponent from "./playground/CardComponent";
import Cards from "./card/Card";


const App2 = () => {
  return (
    <Fragment>
      {/* <NewAppStyleComp />
      <SxComponent />
      <ButtonsComponent/>
      <NewButtonsComp/>
      <CardComponent/> */}
      <Cards/>
    </Fragment>
  );
};

export default App2;