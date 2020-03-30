

class BTNode {
    constructor(value){
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    // add methods here...



    add(val){
        if(this.root != null){
            var runner = this.root;
            while(runner){
                if(val > runner.val){
                    if(runner.right != null){
                        runner = runner.right;
                    }
                    else {
                        runner.right = new BTNode(val);
                        return this;
                    }
                }
                else if(val >= runner.val){
                    if(runner.left != null){
                        runner = runner.left;
                    }
                    else {
                        runner.left = new BTNode(val);
                        return this;
                    }
                }

            }
        }
        else {
            this.root = new BTNode(val)
            return this;
        }
    }


    contains(val){
        var runner = this.root;
        while(runner){
            if(runner.val == val){
                return "found";
            }
            else if(val > runner.val){
                if(runner.right != null){
                    runner = runner.right;
                }
                else{
                    return "not found"
                }
            }
            else if(val < runner.val){
                if(runner.left != null){
                    runner = runner.left;
                }
                else{
                    return "not found"
                }
            }
            
        }
        if(runner == null) {
            return "not found";
        }

    }


    min(){
        var runner = this.head;
        while(runner){
            if(runner.left < runner.right && runner.left != null){
                runner = runner.left;
            }
            else if(runner.right < runner.left && runner.right != null){
                runner = runner.right;
            }
            else if(runner.left == null && runner.right == null){
                return runner.val;
            }
        }
        if(runner == null){
            return "empty";
        }
    }

    max(){
        var runner = this.head;
        while(runner){
            if(runner.left > runner.right && runner.left != null){
                runner = runner.left;
            }
            else if(runner.right > runner.left && runner.right != null){
                runner = runner.right;
            }
            else if(runner.left == null && runner.right == null){
                return runner.val;
            }
        }
        if(runner == null){
            return "empty";
        }
    }

    size(){
        
    }

    isEmpty(){
        if(this.head ==  null){
            return true;
        }
        else{
            return false;
        }
    }





}


var myBST = new BST();
myBST.add(10).add(50);
console.log(myBST);




















