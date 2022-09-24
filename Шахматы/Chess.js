// Вставка картиночек
function insertImage() {

    document.querySelectorAll('.box').forEach(image => {

        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'

            }

            else {

                image.innerHTML = `${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()



//Раскрушкиваем

function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {

        getId = color.id //даем айдишку
        arr = Array.from(getId) //преобразуем в массив
        arr.shift() //удаляем b
        aside = eval(arr.pop()) // 102 = 2
        aup = eval(arr.shift()) // 102 = 100
        a = aside + aup  // 102 

        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(247,236,202)'
        }
        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(50,44,36)'
        }

    })
}
coloring()









tog = 1 //ход белых

document.querySelectorAll('.box').forEach(item => {


    item.addEventListener('click', function () {
        

        if (item.style.backgroundColor == 'green' && item.innerText.length == 0) {
            tog = tog + 1
        }
        
        //кушкаем
        else if (item.style.backgroundColor == 'orange' && item.innerText.length !== 0) {

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    pinkId = i.id
                    pinkText = i.innerText                    

                    document.getElementById(pinkId).innerText = ''
                    item.innerText = pinkText
               
                    coloring()
                    insertImage()
                    tog = tog + 1
           
                }
            })
        }



        getId = item.id
        arr = Array.from(getId)
        arr.shift() // удаляем в начале 'b'
        aside = eval(arr.pop()) // удаляет последний элемент (Было 708 стало 8) ---- какой ряд (A-H)
        arr.push('0') //добавляем 0 в массив (было 70, стало 700)
        aup = eval(arr.join('')) //объединяем массив
        a = aside + aup //чтоб задавать координаты



        // Функция для отображения доступных путей 

        function whosTurn(toggle) {

            // Пешка - PAWN

            if (item.innerText == `${toggle}pawn`) {
                item.style.backgroundColor = 'pink'
				
				//ход белых
                if (tog % 2 !== 0 && aup < 800) {

                    if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                        if (aup == 200){
                            document.getElementById(`b${a + 200}`).style.backgroundColor = 'green'
                        }  
                    }

                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'orange'
                    }

                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'orange'

                    }
                }
				//ход черных

                if (tog % 2 == 0 && aup > 100) { 

                    if (document.getElementById(`b${a - 100}`).innerText.length == 0) {						
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
					    console.log({a}, [aside],{aup});   
                        if (aup == 700){
                            document.getElementById(`b${a - 200}`).style.backgroundColor = 'green'
                        }                         
						
                    }
                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'orange'
                    }
                    if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'orange'

                    }
                }


            }
           
            // Король - KING
			


            





            

            
        }


        // Кто ходит

        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = "Ход Белых"
            whosTurn('W')
        }
        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = "Ход Черных"
            whosTurn('B')
        }

    })

})





// Перемещение элемента
document.querySelectorAll('.box').forEach(hathiTest => {

    hathiTest.addEventListener('click', function () {

        if (hathiTest.style.backgroundColor == 'pink') {

            pinkId = hathiTest.id
            pinkText = hathiTest.innerText

            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function () {
                    if (hathiTest2.style.backgroundColor == 'green' && hathiTest2.innerText.length == 0) {
                        document.getElementById(pinkId).innerText = ''
                        hathiTest2.innerText = pinkText
                        coloring()
                        insertImage()

                    }

                })
            })

        }

    })

})



// Чтоб можно было выбрать только 1 элемент
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'green') {
            coloring()
        }
    })
})
