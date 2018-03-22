function treeCreater(treeArr, className) {
    var $ = treeArr,
        root = document.querySelector('ul.' + className + '')
    function insertChildren(parentNode, traverseArr) {
        for(let i = 0; i < traverseArr.length; i++) {
            var currentLi = document.createElement('li')
            currentLi.innerText = traverseArr[i].title
            if(traverseArr[i].children && traverseArr[i].children.length > 0) {
                insertChildren(currentLi, traverseArr[i].children)
            }
            parentNode.appendChild(currentLi)
        }
    }
    insertChildren(root, $)
}