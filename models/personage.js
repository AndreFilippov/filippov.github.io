export class Personage {
    #state;
    #image;
    #game;
    #coordinates;
    #height;
    #width;
    #stepCoordinate
    #personageImage

    constructor(game) {
        this.#game = game;

        this.#width = 50;
        this.#height = 70;

        this.#stepCoordinate = 5;

        this.setImage();
        this.setCoordinates(10, 10);
        this.setState(0);
    }

    setImage(){
        this.#image = {
            url: '././images/personage_1.png',
            width: 55,
            height: 85,
            states: [
                { x: 15, y: 5 },
                { x: 90, y: 5 },
                { x: 170, y: 5 },
                { x: 235, y: 5 },
                { x: 310, y: 5 },
                { x: 380, y: 5 },
                { x: 445, y: 5 },
                { x: 500, y: 5 },
            ]
        }
    }

    setCoordinates(x, y) {
        this.#coordinates = { x: x, y: y }
    }

    setState(state){
        this.#state = state;
    }

    printPersonageInArea(){
        const personageImage = new Image();
        personageImage.src = this.#image.url;
        personageImage.onload = () => {
            this.#personageImage = personageImage;
            this.changeState();
        }
    }

    changeState(){
        const statesCoordinates = this.#image.states[this.#state];

        this.#game.getArea().clear();
        this.#game.getArea().getContext().drawImage( this.#personageImage, statesCoordinates.x, statesCoordinates.y, this.#image.width, this.#image.height, this.#coordinates.x, this.#coordinates.y, this.#width, this.#height);

        const nextState = this.#state <= (this.#image.states.length-2) ? this.#state + 1 : 0;
        this.setState(nextState);
    }

    goUp(){
        this.setCoordinates(this.#coordinates.x, this.#coordinates.y - this.#stepCoordinate);
        this.changeState();
    }

    goDown(){
        this.setCoordinates(this.#coordinates.x, this.#coordinates.y + this.#stepCoordinate);
        this.changeState();
    }

    goLeft(){
        this.setCoordinates(this.#coordinates.x - this.#stepCoordinate, this.#coordinates.y);
        this.changeState();
    }

    goRight(){
        this.setCoordinates(this.#coordinates.x + this.#stepCoordinate, this.#coordinates.y);
        this.changeState();
    }
}