let money,
    time;

money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");


let appData = {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false,
};


for(let i=0; i<2; i++){
    let exp1 = prompt("Введите обязательную статью расходов в этом месяце", '');
    let exp2 = prompt("Во сколько обойдется?", '');
    if ((typeof(exp1))==='string' && (typeof(exp1)) !=null 
    && exp1 !='' && exp2 !='' && exp1.length<50) {
        console.log("done");
        appData.expenses[exp1]=exp2;
    }else{
        
    }
    appData.moneyPerDay = appData.budget/30;

    alert("Ваш ежедневный бюджет " + appData.moneyPerDay  );
    if(appData.moneyPerDay<100){
        alert("минимальный уровень достатка");

    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay<2000){
        alert("средний уровень достатка");
    }else if(appData.moneyPerDay > 2000 && appData.moneyPerDay<5000){
        alert("средний уровень достатка");
    }else{
        alert("ошибка")
    }
    
}
console.log(appData.expenses);



