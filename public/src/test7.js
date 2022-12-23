const car = {make: "Honda", model: "Civic", color: "Slate Grey"}



function getCarColor(car) {
   try {
    if (!car) {
      throw "Color unknown";
    } else if(car.color) {
        console.log(car.color);
  }
 } catch (error) {
   console.log(error);
  }
}

getCarColor(car)