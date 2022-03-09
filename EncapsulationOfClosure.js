function createConcreteObject () {
    return {
        value: 0, 
        up: function() {
            //値を一つ増やす関数
            this.value ++ ;
        }, 
        down: function() {
            //値を一つ減らす関数
            this.value --;
        }
    };
}

const counterObj = createCounterObject()
counterObj.up()
counterObj.up()
counterObj.value = 10 //valueを直接代入できる
counterObj.down()
console.log(counterObj.value)  // => 9


//上のコードはvalueが直接代入できるため、想定した動作が壊されることになるため、カプセル化が不十分である

function createCounter() {
    //この値は外からいじることができない

    let value = 0;

    return {
        up: function() {
            value +=1
        },
        down: function() {
            value -= 1
        },

        getValue: function() {
            return value;
        }
    };
}

const counter = createCounter()
counter.up()
counter.up()
counter.down()

//counter.value = 10; 
//valueは公開されていないのでcounter.valueの操作では想定のvalueを変更できない

console.log(counter.getValue()) // => 1


/**
   counter up とdownのみだとvalueが変化する概念になっている

   upやdown, getValueの各関数はクロージャの性質でvalueを束縛して動作させる。
   そしてcounter.value = 10のような外部からの想定しない動作を受け入れることができない。
 */

