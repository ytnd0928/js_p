function displayName(name) {
    if(!name) {
        throw new Error('name is required') 
    } 
    console.log(`名前は${name}です`)
}

try {
    displayName() 
} catch(e) {
    console.error(`名前表示に失敗しました: ${e.message}`)
}




/**
    [処理係が例外を投げてくれるので、それをどのように処理するかのプランBを決めるイメージ]

    上のコードはdisplayName関数には名前の引数が必要であるのに入っていない場合は例外を送出するコード
 */