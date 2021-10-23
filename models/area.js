export class Area {
    #context;
    #backgroundImage;
    #game;

    constructor(game) {
        this.#game = game;
        this.#context = game.getCanvasDocument().getContext('2d');
        this.#backgroundImage = game.getImages().room;
        return this;
    }

    printStart(){
        this.setBackgroundImage(this.#backgroundImage);
    }

    getContext(){
        return this.#context;
    }

    clear(){
        const canvas = this.#game.getCanvasDocument();
        this.#context.clearRect(0, 0, canvas.width, canvas.height);
        this.#context.drawImage( this.#backgroundImage, 0, 0, canvas.width, canvas.height);
    }

    setBackgroundImage(image){
        const backgroundImage = new Image();
        backgroundImage.src = image;
        backgroundImage.onload = () => {
            const canvas = this.#game.getCanvasDocument();
            this.#context.drawImage( backgroundImage, 0, 0, canvas.width, canvas.height);
            this.#backgroundImage = backgroundImage;
        }
    }
}