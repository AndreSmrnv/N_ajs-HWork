// TODO: write your code here

const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
class itemPrnCard {
    constructor(name, value) {        
        this.key = name;
        this.value = value || '-';
      }
    
};
export function orderByProps(obj, arrKeys) {
    const objF = { ...obj };
    const arrPrnCard = [];
    arrKeys.forEach(item => {
        arrPrnCard.push(new itemPrnCard(item, objF[item]))
        delete objF[item];
    });
    
    
    Object.keys(objF).sort().forEach(item => {
        arrPrnCard.push(new itemPrnCard(item, objF[item]))        
    });
   
    return arrPrnCard;
};

orderByProps(obj, ["name", "level", "defence"]);
// console.log(orderByProps(obj, ["name", "level"]));
// console.log(obj);
// console.log('worked');
