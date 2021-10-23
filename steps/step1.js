import { AbstractStep } from "./abstract-step.js";
import {Step2} from "./step2.js";
import {StepResult} from "../enums/step-result.js";

export class Step1 extends AbstractStep {
    nextStep = Step2;

    process() {
        const name = prompt('Введите имя персонажа: ');

        if(name){
            this.game.getUser().setName(name);
            return StepResult.NEXT;
        }

        return super.process();
    }
}