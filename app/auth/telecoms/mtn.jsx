import CrossView from "../../reusables/CrossView";
import CommonElement from './CommonElement'

export default function Mtn() {
  return (
    <CrossView>
      <CommonElement
        network={'mtn'}
        logo={require("../../../assets/images/mtn.png")}
      />
    </CrossView>
  );
}

