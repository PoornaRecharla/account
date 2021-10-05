const Gateway_of_tally = () => {
    // let drillDownAll;
    // let currentElement;
    // let objectMatrix = {},
    //     columns = [],
    //     rows = [],
    //     drillDownObjects = [],
    //     xLow=10000, yLow=10000, xMax=0, yMax=0,
    //     objectID = [];
    
    // keyMoveSetUp();
    
    // function keyMoveSetUp()
    // {	
    //     let firstVisibleElm = false;
    //     drillDownAll = document.getElementsByTagName("li");
        
    //     currentElement = null;
        
    //     if(drillDownAll.length>0)
    //     {
    //         currentElement = drillDownAll[0];
            
    //         for(drillDownElement of drillDownAll){
    //         if(window.getComputedStyle(drillDownElement).display === "none") continue;
            
    //             if(firstVisibleElm == false)
    //             {
    //                 firstVisibleElm = true;
    //                 drillDownElement.classList.add("highlightedElement");
    //             }
                
    //             const elementOffset = offset(drillDownElement);
    //             xCrd = elementOffset.left,
    //             yCrd = elementOffset.top;
    //             columns.push(xCrd);
    //             rows.push(yCrd);
    //             drillDownObjects.push(drillDownElement)
    //             if(xCrd<xLow) xLow = xCrd;
    //             if(yCrd<yLow) yLow = yCrd;
    //             if(xCrd>xMax) xMax = xCrd;
    //             if(yCrd>yMax) yMax = yCrd;
                
    //             if(true == is_touch_device())
    //             {
    //                 drillDownElement.addEventListener("touchstart", function(){
    //                     currentElement.classList.remove("highlightedElement");
    //                     currentElement = this;
    //                     currentElement.classList.add("highlightedElement");
    //                 })
    //             } else {
    //                 drillDownElement.addEventListener("mousemove", function(){
    //                     currentElement.classList.remove("highlightedElement");
    //                     currentElement = this;
    //                     currentElement.classList.add("highlightedElement");
    //                 })
    //             }
                
    //             drillDownElement.setAttribute("xy-crd", xCrd+","+yCrd);
    //         }
            
    //         for(columnNo of columns)objectMatrix[columnNo] = {};
    //         for(i=0;i<columns.length;i++){
    //             objectMatrix[columns[i]][rows[i]] = drillDownObjects[i];
    //         }
    //     }
    // }
    
    // function offset(el) {
    //     const rect = el.getBoundingClientRect(),
    //     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    //     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     return { left: Math.round(rect.left+scrollLeft), top: Math.round(rect.top+scrollTop) }
    // }

    // function findClosest(goal,object){
    //     let newRow=[];
    //     if (Array.isArray(object)){
    //         newRow = object
    //     }else{
    //         for(row in object) newRow.push(row);
    //     }
    //     const closest = newRow.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    //     return closest;
    // }

    // function moveUsingCrd(action){
    //     if(drillDownAll.length<=0) return;
    //     //currentCrd = offset(currentElement);
    //     let currentCrd = {};
    //     let columnArray = [];
    //     for(column in objectMatrix) columnArray.push(column);
    //     let closest;
    //     const xyCrd = currentElement.getAttribute("xy-crd").split(",");
    //     currentCrd.left = parseInt(xyCrd[0])
    //     currentCrd.top = parseInt(xyCrd[1])
        
    //     switch (action) {
    //         case "right":
    //             for(i=currentCrd.left+1;i<=xMax;i++){
    //                 if(objectMatrix[i]){
    //                     if(objectMatrix[i][currentCrd.top]){
    //                         currentElement.classList.remove("highlightedElement");
    //                         currentElement = objectMatrix[i][currentCrd.top];
    //                         currentElement.classList.add("highlightedElement");
    //                         return;
    //                     }else{
    //                         const closest = findClosest(currentCrd.top,objectMatrix[i])
    //                         currentElement.classList.remove("highlightedElement");
    //                         currentElement = objectMatrix[i][closest];
    //                         currentElement.classList.add("highlightedElement");
    //                         return;
    //                     }
    //                 }
    //             }
    //             break;

    //         case "left":
    //             for(i=currentCrd.left-1;i>=xLow;i--){
    //                 if(objectMatrix[i]){
    //                     if(objectMatrix[i][currentCrd.top]){
    //                         currentElement.classList.remove("highlightedElement");
    //                         currentElement = objectMatrix[i][currentCrd.top];
    //                         currentElement.classList.add("highlightedElement");
    //                         return;
    //                     }else{
    //                         const closest = findClosest(currentCrd.top,objectMatrix[i])
    //                         currentElement.classList.remove("highlightedElement");
    //                         currentElement = objectMatrix[i][closest]
    //                         currentElement.classList.add("highlightedElement");
    //                         return;
    //                     }
    //                 }
    //             }
    //             break;

    //         case "down":
    //             for(i=currentCrd.top+1;i<=yMax;i++){
    //                 if(objectMatrix[currentCrd.left][i]){
    //                     currentElement.classList.remove("highlightedElement");
    //                     currentElement = objectMatrix[currentCrd.left][i];
    //                     currentElement.classList.add("highlightedElement");
    //                     return;
    //                 }
    //             }
                
    //             if(columnArray.length<2) return;
    //             columnArray.splice(columnArray.indexOf(currentCrd.left), 1 )
    //             closest = findClosest(currentCrd.left,columnArray)
    //             for(i=currentCrd.top+1;i<=yMax;i++){
    //                 if(objectMatrix[closest][i]){
    //                     currentElement.classList.remove("highlightedElement");
    //                     currentElement = objectMatrix[closest][i];
    //                     currentElement.classList.add("highlightedElement");
    //                     return;
    //                 }
    //             }
    //             break;

    //         case "up":
    //             for(i=currentCrd.top-1;i>=yLow;i--){
    //                 if(objectMatrix[currentCrd.left][i]){
    //                     currentElement.classList.remove("highlightedElement");
    //                     currentElement = objectMatrix[currentCrd.left][i];
    //                     currentElement.classList.add("highlightedElement");
    //                     return;
    //                 }
    //             }
                
    //             if(columnArray.length<2) return;
    //             columnArray.splice(columnArray.indexOf(currentCrd.left), 1 )
    //             closest = findClosest(currentCrd.left,columnArray)
    //             for(i=currentCrd.top-1;i>=xLow;i--){
    //                 if(objectMatrix[closest][i]){
    //                     currentElement.classList.remove("highlightedElement");
    //                     currentElement = objectMatrix[closest][i];
    //                     currentElement.classList.add("highlightedElement");
    //                     return;
    //                 }
    //             }
    //             break;
        
    //         default:
    //             break;
    //     }
    // }

    // function moveUsingCrd_searchlist(action){
    //     let newElement = currentElement;
    //     switch (action) {
    //         case "down":
    //             while(newElement.nextSibling){
    //                 if(newElement.nextSibling.nodeType==1){
    //                     if(newElement.nextSibling.style.display!="none"){
    //                         newElement = newElement.nextSibling;
    //                         // console.log(newElement)
    //                         break;
    //                     }
    //                 }
    //                 newElement = newElement.nextSibling;
    //             }
    //             if(newElement.nodeType != 1) return;
    //             currentElement.classList.remove("highlightedElement");
    //             currentElement = newElement;
    //             currentElement.classList.add("highlightedElement");
    //             break;
    //         case "up":
    //             // let newElement = currentElement;
    //             while(newElement.previousSibling){
    //                 if(newElement.previousSibling.nodeType==1){
    //                     if(newElement.previousSibling.style.display!="none"){
    //                         newElement = newElement.previousSibling;
    //                         // console.log(newElement)
    //                         break;
    //                     }
    //                 }
    //                 newElement = newElement.previousSibling;
    //             }
    //             if(newElement.nodeType != 1) return;
    //             currentElement.classList.remove("highlightedElement");
    //             currentElement = newElement;
    //             currentElement.classList.add("highlightedElement");
    //             break;
    //         default:
    //             break;
    //     }
    // }
    
    // window.addEventListener("keydown", function(e){
    //     switch (e.which) {
    //         case 37: //Left
    //             e.preventDefault();
    //             if( document.getElementById('filter-box').style.display != 'block'){
    //                 moveUsingCrd("left");
    //                 scrollAction();
    //             }
    //         break;
    //         case 38: //Up
    //             e.preventDefault();
                
    //             if(document.getElementById ("selectList"))
    //             {
    //                 moveUsingCrd_searchlist("up");
    //                 scrollAction_searchlist();
    //                 return;
    //             }
    //             if( document.getElementById('filter-box').style.display != 'block'){
    //                 moveUsingCrd("up");
    //                 scrollAction();
    //                 return ;
    //             }
                
    //         break;
    //         case 39: //Right
    //             e.preventDefault();
    //             if( document.getElementById('filter-box').style.display != 'block'){
    //                 moveUsingCrd("right");
    //                 scrollAction();
    //             }
    //         break;
    //         case 40: //Down
    //             e.preventDefault();
    //             if(document.getElementById ("selectList"))
    //             {
    //                 moveUsingCrd_searchlist("down");
    //                 scrollAction_searchlist();
    //                 return;
    //             }	
                
    //             if( document.getElementById('filter-box').style.display != 'block'){
    //                 moveUsingCrd("down");
    //                 scrollAction();
    //             }
    //         break;
    //         case 13: //Enter
    //             e.preventDefault();
                
    //             if( document.getElementById('filter-box').style.display == 'block'){
    //                 onShowReportClick();
    //             }else{					
            
    //                 if (typeof currentElement !== 'undefined' && currentElement != 'none' && currentElement != null) {
    //                             currentElement.click();
    //                 }
    //                 //drillDown(currentElement);
    //             }
                
    //         break;
    //         case 27: //Esc
                    
    //             /*e.preventDefault();
                        
    //             if( document.getElementById('filter-box').style.display == 'block'){
    //                 hideFilter();
    //             }else{	
    //             if(rep_name!='List of Reports')
    //                     window.history.back();
    //             }*/
    //         break;
    //         default:
    //             break;
    //     }
    // })

    // function getCurrentElement()
    // {
    //     return currentElement;
    // }
    
    // function scrollAction(){
    //     const itemPos = Math.round(currentElement.getBoundingClientRect().top);
    //     const itemTopSpace = window.innerHeight-currentElement.clientHeight-24;
    //     if(itemPos>itemTopSpace){
    //         window.scrollBy(0, (itemPos-itemTopSpace)+currentElement.clientHeight);
    //     }
    //     if(itemPos<10){
    //         window.scrollBy(0, -currentElement.clientHeight+itemPos);
    //     }
    // }
    
    // function scrollAction_searchlist(){
    //     const container = document.getElementById("selectList")
    //     const itemPos = Math.round(currentElement.getBoundingClientRect().top);
    //     const itemTopSpace = window.innerHeight-currentElement.clientHeight-120;
    //     if(itemPos>itemTopSpace){
    //         container.scrollBy(0, (itemPos-itemTopSpace)+currentElement.clientHeight-10);
    //     }
    //     if(itemPos<157){
    //         container.scrollBy(0, -currentElement.clientHeight+itemPos-150);
    //     }
    // }


    // var coll = document.getElementsByClassName("collapsible");
    // var i;

    // for (i = 0; i < coll.length; i++) {
        
    //     if(i > 0) {
    //         var dataElements = coll[i].nextElementSibling;
    //         while(dataElements && dataElements.classList.contains('groupelement')) {
    //             dataElements.style.display = "none";
    //             dataElements = dataElements.nextElementSibling;
    //         }
    //     }
    //     coll[i].addEventListener("click", function() {
        
    //         ChangeButtonIcon (this.firstElementChild.firstElementChild);
    //         if(!reportListSearchInProgress){

    //             if(this.getElementsByTagName('span')[0].classList.contains("exploded")){

    //             this.getElementsByTagName('span')[0].classList.remove("exploded");
    //             }
    //             else{

    //             this.getElementsByTagName('span')[0].classList.add("exploded");
    //             }

    //         } 
    //         var content = this.nextElementSibling;
    //         while(content && content.classList.contains('groupelement')) {

    //             if(content.hasAttribute("alias")){

    //                 content.style.display ="none";
    //                 content = content.nextElementSibling;
    //                 continue;
    //             }
                
    //             if (content.style.display === "block" || content.style.display === "") {
    //                 content.style.display = "none";
    //             } else {
    //                 content.style.display = "block";
    //             }
    //             co0ntent = content.nextElementSibling;
    //         }
    //     });
    // }

    return (
        <>
            <div className="head">Gateway of Tally</div>
            <ul id="list">
                <li className='a'>Masters</li>
                <li><p className="h">C</p>reate</li>
                <li><p className="h">A</p>lter</li>
                <li>C<p className="h">H</p>art of Accounts</li>
                <br/>
                <li className="a">Transactions</li>
                <li><p className="h">V</p>ouchers</li>
                <li>Dayboo<p className="h">K</p></li>
                <br/>
                <li className="a">Reports</li>
                <li><p className="h">B</p>alance Sheet</li>
                <li><p className="h">P</p>rofit & Loss Account</li>
                <li><p className="h">R</p>atio Analysis</li>
                <br/>
                <li><p className="h">D</p>isplay more Reports</li>
                <li><p className="h">Q</p>uit</li>
            </ul>
        </>
    );
}

export default Gateway_of_tally;