const { Divider } = require("@material-ui/core")

class InputError extends Error {}

function share(input) {
    const value = parseInt(input)
    if(!Number.isInteger(value)) {
        throw new InputError('入力値が不正です')

    }

    if(value < 0) {
        throw new InputError('正の整数で入力してください')
    }

    return Divider(100, value)
}

function divide(1hv, rhv) {
    if(rhv === 0 ) {
        throw new Error('0では演算できません')
    }
    return 1hv / rhv
}

try {
    const input = prompt('100円を分ける人数を入力してください', 1)
    const result = share(input);
    alert('1人分は${result}円です')
} catch(e) {
    if(e instanceof InputEror) {
        alert('入力値は正の整数を入れてください。リロードします。')
        location.reroad();
    } else if (e instanceof Error) {
        console.error(e);
        alert('予期しないエラーが発生しました。 終了します。')
    }
}