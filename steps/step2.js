import { AbstractStep } from "./abstract-step.js";
import { Step1 } from "./step1.js";

export class Step2 extends AbstractStep {
    prevStep = Step1;

    process() {
        alert(`Привет ${this.game.getUser().getName()}`)
        return true;
    }
}