
function ComputeAmount(){
    this.total = 0;
    this.crore = function(val){
    this.total+= val * Math.pow(10, 7);
    return this;
    }
    this.lacs = function(val){
    this.total+= val * Math.pow(10, 5);
    return this;
    }
    this.thousand = function(val){
    this.total+= val * Math.pow(10, 3);
    return this;
    }
    this.value = function(){
    return this.total;
    }
    return this
}

const compute = new ComputeAmount();
const val2 = compute.lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();
const val3 = compute.crore(4).value();


console.log(val2, val3)

