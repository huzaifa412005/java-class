class Car{
   constructor(name, model, power, colour, engineNO){
      this.name =name
      this.model = model
      this.power = power
      this.colour = colour
      this.engineno = engineNO
   }
   sohwdetails(){
      console.log(`
      Car = ${this.name}
      Model = ${this.model}
      Power = ${this.power}
      Colour = ${this.colour}
      Engine.No = ${this.engineno}
      `)
   }
}

class Tesla extends Car{
   
   constructor(name,model,power,colour,engineNO,fuel){
      super(name,model,power,colour,engineNO)
      this.fuel = fuel
   }
   showdetails(){
      console.log(`
      Car = ${this.name}
      Model = ${this.model}
      Power = ${this.power}
      Colour = ${this.colour}
      Engine.No = ${this.engineno}
      Fuel = ${this.fuel}
      
      
      `)
      document.getElementById("para").innerHTML=`
      Car = ${this.name}</br>
      Model = ${this.model}</br>
      Power = ${this.power}</br>
      Colour = ${this.colour}</br>
      Engine.No = ${this.engineno}</br>
      Fuel = ${this.fuel}
      `
   }

}

let t1 = new Tesla("Tesla","X","100hp","White",12345,"Electric")
console.log(t1)
t1.showdetails();
