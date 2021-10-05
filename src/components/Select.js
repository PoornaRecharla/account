const ListSearchFunction = () => {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchBox");
    filter = input.value.toUpperCase().split(" ").join("");
    ul = document.getElementById("selectList");
    li = ul.getElementsByTagName("li");

    if (filter == '') {
        let x = 0
        // console.log(li.length)
        for (let i = 0; i < li.length; i++) {
            if (li[i].classList.contains('collapsible')) {
                li[i].style.display = "block";
                x++
                // console.log(x, li[i])
            }
            else if (x < 2) {
                li[i].style.display = "block";
            }
            else {
                li[i].style.display = "none";
            }
        }
        return
    }

    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.innerText.trim().split(" ").join("").toUpperCase();
        if (txtValue.indexOf(filter) > -1) {
            li[i].style.display = "";
            if (li[i].classList.contains('list_item') && i != 0) {
                var j = (i - 1);
                while (j >= 0 && li[j] && (!li[j].classList.contains('collapsible'))) {
                    j--;
                }
                if (li[j].classList.contains('collapsible')) {
                    li[j].style.display = "";
                }
            }
        } else {
            li[i].style.display = "none";
        }

        if (li[i].classList.contains('selected_item')) {
            li[i].classList.remove("selected_item")
        }
    }

    if (document.getElementsByClassName("list_item").length > 0) {
        document.getElementsByClassName("list_item")[0].classList.add("selected_item")
    }
}

const MouseMove = () => {
    let list_items, list_item;
    list_items = document.getElementsByClassName("list_item");
    if (list_items.length > 0) {
        for (list_item of list_items) {
            list_item.addEventListener("mousemove", function () {
                document.getElementsByClassName("selected_item")[0].classList.remove("selected_item");
                this.classList.add("selected_item");
            })
        }
    }
}

export {ListSearchFunction, MouseMove}