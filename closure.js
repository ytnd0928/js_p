//クロージャーとは関数が定義されたスコープとその祖先スコープにある変数や関数の仕様を維持する仕組み




function createClosure () {

    const value = 'myClosureValue';

    function myClosure () {
        //valueはClosureの外ではあるが、myclosureと同じcreateClosureの関数スコープに居るので束縛する。

        console.log(value)
    }

    return myClosure
}

const closure = createClosure()
closure()

/** 実行の流れ
createclosure関数が呼ばれる
        　↓
createClosure関数ではmyClosure関数の参照を返す
        　↓
↑で受け取った参照をclosure変数に格納する
　　　　　　↓
closure関数(実態はmyClkosure関数)を呼び出す

**/
