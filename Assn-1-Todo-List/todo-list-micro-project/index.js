// alert("sf")
const todoContainer = document.querySelector('ul')
const input = document.querySelector('input')
const button =document.querySelector('button')
// const eles =['ele1','ele2','ele3']

// eles.forEach((element)=>{
//     const li =document.createElement('li')
//     li.innerHTML=element
//     todoContainer.appendChild(li)
// })
let mode='add'

const todos =[]
const handleDelete=()=>{
li.remove()
}
const handleEdit=(id)=>{
    const element =todos.findIndex((todo)=>todo.id===id);

    
}
const listButton=(todo_text)=>{
   ` <button class="btn btn-success w-70 h-50 py-2 my-2" type="submit">${todo_text}</button>`

}
const renderList=()=>{
    todoContainer.innerHTML='   '
    todos.forEach((todo)=>{
        const delButton =document.createElement('button')
        const editButton =document.createElement('button')
        const div =document.createElement('div')
        editButton.innerHTML='edit'
             
        // delButton.style.backgroundColor='green'
        delButton.className='btn btn-success w-70 py-2 my-2'
        editButton.className='btn btn-warning w-70 py-2 my-2'
        delButton.innerHTML='remove '
        const li =document.createElement('li')
        li.innerHTML=todo.text
        todoContainer.appendChild(li)


        li.style.display='flex'
        li.style.justifyContent='space-between'
        li.style.alignItems='center'
        li.style.gap='50px'
        li.style.flexWrap='wrap'
        li.style.color='white'

        div.style.display='flex'
        div.style.gap='10px'
        div.style.flexWrap='wrap'
        editButton.style.color='white'

        li.style.width='100%'


        div.appendChild(delButton)
        div.appendChild(editButton)
        li.appendChild(div)
        editButton.style.marginRight='40px'
        editButton.addEventListener('click',(e)=>{
            editButton.innerHTML=''
            editButton.style.visibility='hidden'


            const inpu =document.createElement('input')
            const save=document.createElement('button')
            inpu.className='form-control gradient-background custom-outline w-50'
            save.className='btn btn-success w-70 py-2 my-2'
            save.innerHTML='save'
            const editDiv=document.createElement('div')
            

            editDiv.appendChild(inpu)
            editDiv.appendChild(save)
            editDiv.style.display='flex'
            editDiv.style.gap='10px'


            li.appendChild(editDiv)
            save.addEventListener('click',(e)=>{
                const newText =inpu.value
                li.innerHTML=newText
                todos.pop()
                todos.push({
                    text:li.innerHTML,
                    completed:false,
            id:Date.now()
                
                })
            })
        })


        delButton.addEventListener('click',(e)=>{
            
            li.remove();
            const id =todo.id
            todos.splice(todos.findIndex((todo)=>todo.id===id),1);
        })
        })
}


const handleAdd=(e)=>{
    const itemToAdd =input.value
    if (itemToAdd!==null && itemToAdd!=='') {
        // const div =document.createElement('div')
        // div.style.display='flex'
        // div.style.gap='20px'
        // div.style.margin='20px'
        // // div.style.justifyContent='space-between'
        // const delButton =document.createElement('button')
        // delButton.innerHTML='remove '
        // const li =document.createElement('li')
        // li.innerHTML=itemToAdd
        // div.appendChild(li)
        // div.append(delButton)
        // todoContainer.appendChild(div)
        console.log("ADDED ELEMENT;")
        
        todos.push({
            text:itemToAdd,
            completed:false,
            id:Date.now()
        })
        input.value=''
        renderList()
         return 
    }else{
        return window.alert('Please Enter Something')
    }
}

button.addEventListener('click',handleAdd)
