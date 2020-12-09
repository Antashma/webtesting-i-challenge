module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement < 20) {
    item.enhancement+= 1;
    item = checkEnhancement(item);
    return {...item}
  } else {
    return { ...item };
  } 
}

function fail(item) {
  switch(true) {
    case item.enhancement < 15:
      item.durability -= 5;
      item = checkDurability(item);
      return {...item};
    case item.enhancement >= 15:
      if (item.enhancement > 16) {
        item = checkEnhancement(item);
        --item.enhancement;
      };
      item.durability -= 10;
      item = checkDurability(item);
      console.log(item);
      return {...item};
    default:
      return {...item};
  }

}
  

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}

function checkEnhancement(item) {
  switch (true) {
    case !item.enhancement:
      console.log(`This ${item.name} cannot be enhanced.`);
      return `This ${item.name} cannot be enhanced.`
    case item.enhancement > 20:
      return {...item, enhancement: 20}
    case item.enhancement < 0:
      return {...item, enhancement: 0}
    default:
      return item;
  } 
}

function checkDurability(item) {
  switch (true) {
    case !item.durability:
      console.log(item);
      console.log(`This ${item.name} cannot be repaired.`)
      return `This ${item.name} cannot be repaired.`
    case item.durability > 100:
      return {...item, durability: 100}
    case item.durability < 0:
      return {...item, durability: 0}
    default:
      return item;
  } 

}