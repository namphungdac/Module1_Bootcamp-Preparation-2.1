function convert(){
    let opn1 = document.getElementById('slt1').value;
    let opn2 = document.getElementById('slt2').value;
    let amount = document.getElementById('amount').value;
    let result;
    if(opn1 === 'VNĐ' && opn2 === 'USD') {
        result = amount/23000;
     }
    else if(opn1 === 'USD' && opn2 === 'VNĐ') {
        result = amount*23000;
    }
    else if(opn1 === 'USD' && opn2 === 'USD') {
        result = amount;
    }
    else {
        result = amount;
    }
    document.getElementById('display').innerHTML= result + " " + opn2;
}