import fourQrtPot from "./../../../public/4qrtPot.jpg";
import fiveQrtPot from "./../../../public/5qrtPot.jpg";
import sevenQrtPot from "./../../../public/7qrtPot.jpg";
import eightByEightBakeware from "./../../../public/8inBy8inBakeware.jpg";
import tenInFryPan from "./../../../public/10inFryPan.jpg";
import breadPan from "./../../../public/breadPan.jpg";
import crepeFryPan from "./../../../public/crepeFryPan.jpg";
import ovalBakeware from "./../../../public/ovalBakeware.jpg";
import ovalFryPan from "./../../../public/ovalFryPan.jpg";

const photoRouter = (photoName) => {
  switch (true) {
    case photoName === "4qrtPot.jpg":
      return fourQrtPot;
    case photoName === "5qrtPot.jpg":
      return fiveQrtPot;
    case photoName === "7qrtPot.jpg":
      return sevenQrtPot;
    case photoName === "8inBy8inBakeware.jpg":
      return eightByEightBakeware;
    case photoName === "10inFryPan.jpg":
      return tenInFryPan;
    case photoName === "breadPan.jpg":
      return breadPan;
    case photoName === "crepeFryPan.jpg":
      return crepeFryPan;
    case photoName === "ovalBakeware.jpg":
      return ovalBakeware;
    case photoName === "ovalFryPan.jpg":
      return ovalFryPan;
  }
};

export default photoRouter;
