// Single Responsability Principle (SRP)

import { Client } from "./Client";
import { Notify } from "./Notify";

const client = new Client();
const notify = new Notify(client);

notify.sendMail("myTemplate");
