function add(){
    window.location.href ="/add";
}
Array.from(document.getElementsByClassName("upd_good")).forEach(
    i => i.onclick =function(){
        id = this.getAttribute("x_id") ;
        console.log(id);
        window.location.href="/add?id= " + id;
    }
)