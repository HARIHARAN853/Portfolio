const family = {
    ur_name : 'Hari',
    Age : 21,
    Year : 2003,

    sister : {
        ur_name : 'Bhavana',
        Age: 15,
        Year: 2009,

        brother : {
            ur_name: 'Michael',
            Age:19,
            Year:2010,
            details : function() {
                return `The name is ${this.ur_name} and Age is ${this.Age} and the year is ${this.Year}.`
            }
        }
    }


}

console.log(family.ur_name);
console.log(family.sister.Age);
console.log(family.sister.brother.details());