class QueueCallbacks {

    constructor(approach){
     this.approach = approach === "LIFO" ? "LIFO" : "FIFO"
     this.callbackQueue = []
     this.runningAsyncFuns = []
    }

    process(asyncFun){
        if(this.runningAsyncFuns.length <= 1){
            asyncFun();
            return;
        }else{
            this.callbackQueue.push(asyncFun)
        }



    }

}