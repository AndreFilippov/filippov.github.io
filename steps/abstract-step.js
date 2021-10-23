export class AbstractStep {
    game;
    nextStep;
    prevStep;

    constructor(game) {
        this.game = game;
        return this;
    }

    process(){
        return true;
    }

    getPrevStep(){
        if(this.prevStep){
            return new this.prevStep(this.game);
        }
        return false;
    }

    getNextStep(){
        if(this.nextStep){
            return new this.nextStep(this.game);
        }
        return false;
    }
}