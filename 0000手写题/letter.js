/**
 * 
 *  单词由52个字母组成，包括26个大写字母和26个小写字母，以及两种标点符号，连字符（-）和撇号（'）。
    字母的重量是由它与字母表中字母A的距离决定的。所以权重（a）=0，权重（b）=1。。。重量（z）=25。
    大写字母的重量等于小写字母的重量。因此，重量（a）=重量（A）。
    所有标点符号都没有权重。
    一个单词的权重是每个字母和标点符号的总和。所以重量（cat）=21，重量（I'm）=20。
    素数词是指权重为素数的词，例如be，因为权重（be）=5。

    你能找到《如果》中出现的前三个最重的单词吗？
*/


const str = `If you can keep your head when all about you, Are losing theirs and blaming it on you, If you can trust yourself when all men doubt you, But make allowance for their doubting too; If you can wait and not be tired by waiting, Or being lied about, don’t deal in lies, Or being hated, don’t give way to hating, And yet don’t look too good, nor talk too wise:`

function heaviest(str) {
    if (typeof str !== "string") return str;
    // 将字母表映射分数
    let allWords = 'abcdefghijklmnopqrstuvwxyz'.split("");
    let worldsMap = new Map();
    allWords.forEach((item, index) => {
        worldsMap.set(item, index)
    });
    // 计算单个单词的权重
    function weight(words) {
        const wordsArr = words.split("");
        // 累加
        const score = wordsArr.reduce((prev, next) => {
            return prev + worldsMap.get(next)
        }, 0)
        
        return {
            key: words,
            value: score
        };
    }
    // 通过正则去掉所有非字母和空格的符号并全部转化为小写 然后按照空格分隔符转换为数组
    const strArr = [...new Set(str.replace(/[^a-zA-Z\s]/g, "").toLowerCase().split(" "))];
    // 取出权重和单词映射的列表
    const threeBigest = strArr.map(item => weight(item));
    // 遍历处理每个单词权重 并按照升序排列 并截取最后三个 即前三个权重最大的
    const threeBigestWeight = threeBigest.map(item => item.value).sort((prev, next) => prev - next).slice(-3)
    const result = threeBigest.filter(item => threeBigestWeight.indexOf(item.value) > -1).map(item => item.key);
    return result;
}

heaviest(str)