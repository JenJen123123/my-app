import { Grid } from "@mui/material";
import YoutubeCardComponent from "./YoutubeCardComponent";
import MicrosoftCardComponent from "./MicrosoftCardComponent";
import GoogleCardComponent from "./GoogleCardComponent";
import AppleCardContainer from "./AppleCardContainer";
import TemplateCardComponent from "./TemplateCardComponent";

const CardsContainerComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <TemplateCardComponent
          title="Apple"
          subTitle="Apple"
          img="https://th.bing.com/th/id/OIP.8DppqmUmmFpjTZY5SqN7-AHaHa?pid=ImgDet&w=182&h=182&c=7&dpr=1.3"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <TemplateCardComponent
          title="Google"
          subTitle="Android"
          img="https://th.bing.com/th/id/OIP.r92oPkMFvIFibdEyv5PcjQAAAA?pid=ImgDet&rs=1"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <TemplateCardComponent
          title="Microsoft"
          subTitle="Windows"
          img="https://yt3.googleusercontent.com/ytc/AOPolaSxX7E6tUlp4fiXj6SsG7C-RfhuE0pz73t3FbwDVQ=s900-c-k-c0x00ffffff-no-rj"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <TemplateCardComponent
          title="Youtube"
          subTitle="Clips"
          img="https://www.interstellarrift.com/wiki/images/thumb/d/d8/Youtube-logo-png-photo-0.png/600px-Youtube-logo-png-photo-0.png"
        />
      </Grid>
    </Grid>
  );
};
export default CardsContainerComponent;
