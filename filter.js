const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);//exuberant,destruction,present


//

function isBigEnough(value) {
    return value >= 10;
}

const filtered = [12,5,8,130,44,55].filter(isBigEnough);

console.log(filtered);//12,130,44,55
