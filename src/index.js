import Council from "./core/council.js";
import FLS from "./modules/fls.js";
import CES from "./modules/ces.js";
import POLICE from "./modules/police.js";
import MAYOR from "./modules/mayor.js";

export const GSF = {
  council: Council,
  modules: { FLS, CES, POLICE, MAYOR },
};

export default GSF;
