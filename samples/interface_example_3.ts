interface Vehicle {
    positionX: number;
    positionY: number;
    move(direction: number, speed: number);
}

class Car implements Vehicle {
    positionX: number;
    positionY: number;

    move(direction: number, speed: number) {
        // move
    }
}