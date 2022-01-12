function saturdayFun(task) {
    let satEvent = "";
    switch(task) {
        case 'bathe my dog':
            satEvent =  'This Saturday, I want to bathe my dog!';
            break;
        default:
            satEvent = "This Saturday, I want to roller-skate!";
        }
        return satEvent;
    }
saturdayFun('bathe my dog')

const mondayWork = function(task) {
    let monEvent = "";
    switch(task) {
        case "work from home":
            monEvent = "This Monday, I will work from home.";
            break;
        default:
            monEvent = "This Monday, I will go to the office.";
        }
        return monEvent;
}

mondayWork();

function wrapAdjective(star = "*" ) {
    return function innnerFunction(adj = "special") {
    return `You are ${star}${adj}${star}!`;
    }
}

wrapAdjective('*')('a hard worker');
wrapAdjective('||')('a dedicated programmer')