// import sayHello from "./exportNode.js";

// sayHello();

// import { sayHello, sayGoodBye } from "./exportNode.js";

// sayHello();
// sayGoodBye();

// import * as tool from "./exportNode.js";

// tool.sayHello();
// tool.sayGoodBye();

// import { createRequire } from "module";

// const require = createRequire(import.meta.url);

// const user = require("./exportNode.json");

// console.log(user);

import { sayHello } from "./utils.mjs";
import { sayGoodBye } from "./utils.cjs";

sayHello();
sayGoodBye();
