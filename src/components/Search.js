const ListSearchFunction = (event) => {

    var input, filter, ul, li, a, i, txtValue, isTextValEqual, currentElement;
    input = document.getElementById("searchBox");
    filter = input.value.toUpperCase();
    ul = document.getElementById("selectList");
    li = ul.getElementsByTagName("li");

    switch (event.keyCode) {
        case 40: /*down */
        case 38: /*up */
        case 39: /*right*/
        case 37: /*left*/
        case 13: {/* enter */
            event.preventDefault();
            return;
        }
    }

    if (input.value.trim() == '') {
        let x = 0
        for (let i = 0; i < li.length; i++) {
            if (li[i].classList.contains('highlightedElement')){
                li[i].classList.remove("highlightedElement")
            }
            if (li[i].classList.contains('collapsible')) {
                li[i].style.display = "";
                li[i].classList.add("drilldown");
                x++
                // console.log(x)
            }
            else if (x < 2) {
                li[i].style.display = "";
                li[i].classList.add("drilldown");                        
            }
            else if (li[i].classList.contains('groupelement')) {
                li[i].style.display = "none";
                li[i].classList.remove("drilldown");	
                // console.log(li[i])
            }
        }
        // let elem
        // console.log(document.getElementsByClassName('highlightedElement'))
        // if (document.getElementsByClassName('highlightedElement').length > 0){
        //     for (let elem=0; elem > document.getElementsByClassName('highlightedElement'.length); elem++){
        //         if (elem.classList != undefined) {
        //             console.log(elem)
        //             elem.classList.remove('highlightedElement')
        //         }
        //     }    
        // }

        // console.log(currentElement)
        // currentElement.classList.remove("highlightedElement")
        currentElement = document.getElementsByClassName("drilldown")[0];
        console.log(currentElement)
        console.log(document.getElementsByClassName("drilldown")[0])
        // if (document.getElementsByClassName("drilldown").length > 0) {
        //     console.log(currentElement)
        //     currentElement = document.getElementsByClassName("drilldown")[0];
        //     currentElement.classList.add("highlightedElement")
        //     console.log(currentElement)
        // } else {
        //     currentElement = null;
        // }
        // // document.getElementsByClassName("drilldown")[0].classList.add("highlightedElement")
        // return
    }

    //Refresh Case:When only one character is left in the search box and the user presses 
    //backspace we dont want to prevent the default behavior of backspace key.
    //So, in the following variable the above condition is checked.
    isTextValEqual = ((input.value == input.value.trim()));

    if (!isTextValEqual) {
        
        if (input.value.trim() == "" && (event.keyCode == 8 || event.keyCode == 32)) {
            // console.log('AAAAAAAAA')
            event.preventDefault();
            return;
        }
    }

    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.innerText;
        txtValue = txtValue.trim();
        txtValue = txtValue.split(" ").join("");
        filter = filter.split(" ").join("");
        //Search only the report names and not the aliases.
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            li[i].classList.add("drilldown");
            if (li[i].classList.contains('groupelement')) {
                var j = (i - 1);
                while (j >= 0 && li[j] && (!li[j].classList.contains('collapsible'))) {
                    j--;
                }
                if (li[j].classList.contains('collapsible')) {
                    li[j].style.display = "";
                    li[i].classList.add("drilldown");
                }
            }
        } else {
            li[i].style.display = "none";
            li[i].classList.remove("drilldown");
        }

        if (li[i].classList.contains('highlightedElement')){
            li[i].classList.remove("highlightedElement")
        }
        // li[i].classList.remove("highlightedElement");
    }

    if (document.getElementsByClassName("drilldown").length > 0) {
        currentElement = document.getElementsByClassName("drilldown")[0];
        currentElement.classList.add("highlightedElement")
    } else {
        currentElement = null;
    }
    // if (document.getElementsByClassName("drilldown").length > 0) {
    //     document.getElementsByClassName("drilldown")[0].classList.add("highlightedElement");
    // }
    console.log(currentElement)
}

export default ListSearchFunction















// const keyMoveSetUp = () => {
//     let drillDownAll, drillDownElement, currentElement    
//     drillDownAll = document.getElementsByClassName("drilldown"); //groupelement drilldown
//     console.log('yayys')
//     if (drillDownAll.length > 0) {
//         currentElement = drillDownAll[0];
//         for (drillDownElement of drillDownAll) {
//             drillDownElement.addEventListener("mousemove", function () {
//                 currentElement.classList.remove("highlightedElement");
//                 if (document.getElementsByClassName('highlightedElement').length > 0){
//                     for (let elem=0; elem > document.getElementsByClassName('highlightedElement').length; elem++){
//                         console.log(elem)
//                         if (elem.classList != undefined) {
//                             elem.classList.remove('highlightedElement')
//                         }
//                     }    
//                 }       
//                 currentElement = this;
//                 currentElement.classList.add("highlightedElement");
//             })
//         }
//     }
// }

// export default keyMoveSetUp

// // let drillDownAll, drillDownElement, currentElement, box;
// // box = document.getElementById("box");
// // drillDownAll = box.getElementsByTagName("li");
// // if (drillDownAll.length > 0) {
// //     currentElement = drillDownAll[0];
// //     for (drillDownElement of drillDownAll) {
// //         drillDownElement.addEventListener("mousemove", function () {
// //             currentElement.classList.remove("highlightedElement");
// //             currentElement = this;
// //             currentElement.classList.add("highlightedElement");
// //         })
// //     }
// // }