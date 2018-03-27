function treeCreater(treeArr, className) {
    var $ = treeArr,
        root = document.createDocumentFragment(),
        childLevel = 0
    function insertChildren(parentNode, traverseArr) {
        for(let i = 0; i < traverseArr.length; i++) {
            if(parentNode === root) {
                childLevel = 0
            }
            var currentLi = document.createElement('li')
            currentLi.setAttribute('level', childLevel)
            if(traverseArr[i].children && traverseArr[i].children.length > 0) {
                var title = document.createElement('div')
                var triangle = document.createElement('i')
                var text = document.createElement('p')
                currentLi.classList.add('parentNode')
                title.classList.add('title')
                triangle.classList.add('triangle')
                text.innerText = traverseArr[i].title
                title.appendChild(triangle)
                title.appendChild(text)
                currentLi.appendChild(title)
                childLevel++
                insertChildren(currentLi, traverseArr[i].children)
            }else {
                currentLi.innerText = traverseArr[i].title
            }
            parentNode.appendChild(currentLi)
        }
    }
    insertChildren(root, $)
    document.querySelector('ul.' + className + '').appendChild(root)
}