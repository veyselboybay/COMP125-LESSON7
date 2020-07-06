"use strict";
//define namespace
let objects;
    (function(objects){
        class Person
        {
            //constructor
            constructor(name,age)
            {
                this.Name=name;
                this.Age=age;
            }
    
            //properties
            get Name()
            {
                return this.m_name;
            }
            
            set Name(value)
            {
                this.m_name=value;
            }
            get Age()
            {
                return this.m_age;
            }
            set Age(value)
            {
                this.m_age=value;
            }
    
            
    
            saysHello()
            {
                console.log(`${this.Name} says Hello!`);
            }
        }

        objects.Person=Person;

    })(objects||(objects={}));
    let veysel=new objects.Person("Veysel",25);
    veysel.saysHello();

