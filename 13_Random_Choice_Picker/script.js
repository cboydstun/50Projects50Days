const tagsElement = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e)=>{
    createTags(e.target.value)
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim()!=='').map(tag=>tag.trim())
    console.log(tags)

    tagsElement.innerHTML=''

    tags.forEach(tag=>{
        const tagElement = document.createElement('span')
        tagElement.classList.add('tag')
        tagElement.innerText = tag
        tagsElement.appendChild(tagElement)
    })
}