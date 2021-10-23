import {StepResult} from "../enums/step-result.js";

export class StateMachine {
    #currentStep;

    constructor(step) {
        this.#currentStep = step;
        return this;
    }

    changeStepNext(){
        const nextStep = this.#currentStep.getNextStep();
        if(!nextStep) throw new Error();

        return this.#currentStep = nextStep;
    }

    changeStepPrev(){
        const prevStep = this.#currentStep.getPrevStep();
        if(!prevStep) throw new Error();

        return this.#currentStep = prevStep;
    }

    process(){
        const stepResult = this.#currentStep.process();

        try{
            if( stepResult === StepResult.NEXT ){
                this.changeStepNext();
                return this.process();
            }

            if( stepResult === StepResult.PREV ){
                this.changeStepPrev()
                return this.process();
            }
        }catch (e){
            console.log(e);
        }

        return true;
    }
}