function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {
        x: 0,
        y: 0
    };

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = () => {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultlocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid location');
            } else {
                defaultLocation = value;
            }
        }
    }); 
}

const circle = new Circle(10);
circle.defaultLocation = 1;
//circle.draw();
console.log(circle.defaultLocation);