let isHidden = false;

let data = [
    {
        'ac' : 'Sp. 79 4405 2020 0360 82',
        'total' :'4,883.15',
        'ref_num' : '86851 62596 19897',
        'due_date' : '12.06.2010',
        'code' : '479440520200360820048831500000000868516259619897100612'          
    },
    {
        'ac' : 'Sampo 16 8000 1400 0502 67',
        'total' :'935.85',
        'ref_num' : '78 77767 96566 28687',
        'due_date' : 'None',
        'code' : '416800014000502670009358500000078777679656628687000000'          
    },
    {
        'ac' : 'Op. 02 5000 4640 0013 02',
        'total' :'693,80',
        'ref_num' : 'RF02 6987 5672 0834',
        'due_date' : '24.7.2011',
        'code' : '502500046400013020006938002000000000698756720834110724'          
    }
]

function decode(evt) {
    evt.preventDefault();    
    let virtual_code = document.getElementById('virtual_code').value;
    let get_acc = data.find(ac => ac.code === virtual_code);
    
    if(virtual_code === '') {
        document.getElementById('error').innerText = "Please enter code";
        return;
    } else if(get_acc === undefined) {
        document.getElementById('error').innerText = "Nothing found";
    } else if(get_acc != undefined) {
       getCode(virtual_code, get_acc)
    }
    
}

function hideShow(evt) {
    evt.preventDefault();
    if(isHidden === false) {
        document.getElementById('info_section').style.display = 'none';
        isHidden = true;        
    } else {
        document.getElementById('info_section').style.display = 'block';
        isHidden = false;
    }


}

function getCode(virtual_code, acc_info) {
    try {
        JsBarcode("#barcode", virtual_code, {format: "CODE128C"});
        document.getElementById('acct').innerText = acc_info.ac;
        document.getElementById('amount').innerText = acc_info.total;
        document.getElementById('ref').innerText = acc_info.ref_num;
        document.getElementById('date').innerText = acc_info.due_date;

    }
    catch(err) {
        document.getElementById("error").innerText = err.message;
    }
    
}