function aneObj(){
    this.x = [];
    this.len = [];
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function(){
    for (var i = 0; i < this.num; i++) {
       console.log(i);
        
    }
}