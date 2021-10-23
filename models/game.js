import {Step1} from "../steps/step1.js";
import {StateMachine} from "./state-machine.js";
import {Area} from "./area.js";
import {User} from "./user.js";
import {Personage} from "./personage.js";

export class Game {
    #area;
    #step;
    #user;
    #images;
    #canvasDocument;
    #personage;

    constructor(canvasDocument) {
        this.#canvasDocument = canvasDocument;
        this.init();
        return this;
    }

    init(){
        this.setUser();
        this.setPersonage();
        this.setImages();
        this.setEvents();
        this.setArea();
    }

    start(){
        this.#area.printStart();
        this.#personage.printPersonageInArea();
        // const startStep = new Step1(this);
        // const stateMachine = new StateMachine(startStep);
        // stateMachine.process();
    }

    getUser(){
        return this.#user;
    }

    getArea(){
        return this.#area;
    }

    getCanvasDocument(){
        return this.#canvasDocument;
    }

    getImages(){
        return this.#images;
    }

    setArea(){
        this.#area = new Area(this);
    }

    setUser(){
        this.#user = new User();
    }

    setImages(){
        this.#images = {
            room: './images/room.png'
        }
    }

    setPersonage() {
        this.#personage = new Personage(this);
    }

    setEvents(){
        console.log('Set Events');
        const personage = this.#personage;
        document.addEventListener('keydown', function(event) {
            if (event.code === 'ArrowUp') personage.goUp();
            if (event.code === 'ArrowDown') personage.goDown();
            if (event.code === 'ArrowLeft') personage.goLeft();
            if (event.code === 'ArrowRight') personage.goRight();
        });
    }
}