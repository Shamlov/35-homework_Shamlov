// В этой части выполняются задания сделать которые в предыдующих ДЗ не удалось. 


// Определить количество цифр в введенном числе
function numberLength(n) {
    if (typeof n == 'number') {               // проверим на число
        let userNum = n                        
        return userNum.toString().length
    } else {
        return `вы передали не число`
    }
}
// console.log(numberLength(3454))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат 
(если число 123456 сдвинуть на 2 цифры, то получится 345612).*/
const digitShft = function(num, shift) {             // для примера присвоим функцию константе. так мы гарантированно случайно не перезапишем функцию целиком
    str = num.toString()                                    // изменим тип данных на строку  
    let rez = str.slice(shift) + str.slice(0, shift)        // у строк есть метод  slice    
    return rez
}
// console.log(digitShft(123456789, 2))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом:
каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя
«Ваше число > N, < N или == N?». В зависимости от того что указал пользователь, уменьшаете диапазон. Начальный
диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили
диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.*/

// НЕ СДЕЛАЛ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function numberSearch () {
    let maxInterval = 100 //+prompt('введи интервал поиска, например 100')
    let minInterval = 0
    // let userNumber = +prompt ('какое число будем искать?')
    // let rez
    // let difference
    let i = 0
    do {
        difference = maxInterval - minInterval
        if(confirm(`ваше число меньше? ${difference}`)) {
            maxInterval = maxInterval / 2 + maxInterval / 2 % 2
        } else {
            minInterval = difference / 2 +  difference / 2 % 2
        }
        console.log(maxInterval)
        console.log(minInterval)
        i++
    } while(i < 8 )
    // console.log(rez)
    ХЗ
}
// numberSearch () 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое 
количество и куплен или нет. Написать несколько функций для работы с таким массивом.
1. Вывод всего списка на экран таким образом, чтобы сначала  шли некупленные продукты, а потом – купленные.
2. Добавление покупки в список. Учтите, что при добавлении  покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,  а не добавлять новую. 
3. Покупка продукта. Функция принимает название продукта 
и отмечает его как купленный */
class Product {
    constructor(_name, _count, _bought) {
        this.name = _name;
        this.count = _count;
        this.bought = _bought;
    }
}
class ShopingList {
    constructor() {
        this.shoppingList = new Array();
    }
    addListProduct(productName, count) {
        for(let i = 0; i < this.shoppingList.length; i++) {   
            if(this.shoppingList[i].name == productName) {
                this.shoppingList[i].count += count;
                this.shoppingList[i].bought = false;
                return;
            }
        }
        this.shoppingList.push(new Product(productName, count, false));
    }
    showList() {
        this.shoppingList.forEach(function(el) {
            if(el.bought == false) {
                console.log(`товар не куплен -  ${el.name}`)
            } 
        })
        this.shoppingList.forEach(function(el) {
            if(el.bought == true) {
                console.log(`товар уже купили -  ${el.name}`)
            }
        })
    }
    BuyProduct(productName, quantity = 0) {
        this.shoppingList.forEach(function(el){
            if(el.name == productName) {
                el.bought = true
                el.count = el.count + quantity
            }
        })
    }
}
let p1 = new ShopingList
console.log(p1)
p1.addListProduct('капуста', 5)
p1.addListProduct('молоко', 5)
p1.addListProduct('молоко', 5)
p1.addListProduct('яблоки', 5)
p1.BuyProduct('капуста', 20)
console.log(p1)
p1.showList()

































// const purchases = [
//     {
//         productName: 'cheese',
//         quantity: 2,
//         purchased: false,
//     },
//     {
//         productName: 'milk',
//         quantity: 7,
//         purchased: true,
//     },
//     {
//         productName: 'bread',
//         quantity: 4,
//         purchased: true,
//     },
//     {
//         productName: 'meat',
//         quantity: 5,
//         purchased: false,
//     }
// ]

// /*Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
// необходимо увеличивать количество в существующей покупке, а не добавлять новую. */

// // НЕ СДЕЛАЛ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// newProduct1 = {
//     productName: 'bread',
//     quantity: 2,
// }
// newProduct2 = {
//     productName: 'juice',
//     // quantity: 4,
// }

// function addProduct (arr, newObj) {
//     class AddNewObjProd {
//         purchased = true;
//         constructor (productName, quantity = 1) {
//             this.productName = productName;
//             this.quantity = quantity;
//         }
//     }
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].productName == newObj.productName) {     // проверка на наличие продукта
//             console.log('такой продукт есть в списке')
//         } 
//         if(arr[i].productName != newObj.productName) {
//             arr.push(new AddNewObjProd(newObj.productName, newObj.quantity ))
//             console.log('нет в списке')
//         }

            
//     }
// }




// addProduct (purchases, newProduct1)
// console.log(purchases)





