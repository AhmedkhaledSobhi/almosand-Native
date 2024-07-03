// function isNumber(evt) {
//     var charCode = (evt.which) ? evt.which : evt.keyCode;
//     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
//         return false;
//     }
//     return true;
// }

// function rowTotal(rowId) {
//     var qty = parseFloat(document.getElementById('amount-' + rowId).value) || 0;
//     var price = parseFloat(document.getElementById('price-' + rowId).value) || 0;
//     var taxRate = parseFloat(document.getElementById('vat-' + rowId).value) || 0;
//     var discount = parseFloat(document.getElementById('discount-' + rowId).value) || 0;

//     var tax = (qty * price * taxRate) / 100;
//     document.getElementById('texttaxa-' + rowId).innerText = tax.toFixed(2);
//     document.getElementById('taxa-' + rowId).value = tax.toFixed(2);

//     var subtotal = (qty * price) + tax - discount;
//     document.getElementById('result-' + rowId).innerText = subtotal.toFixed(2);
//     document.getElementById('total-' + rowId).value = subtotal.toFixed(2);
// }

// function billUpyog() {
//     // Additional calculations can be performed here if needed
// }

// document.getElementById('addproduct').addEventListener('click', function () {
//     var table = document.querySelector('tbody');
//     var newRow = document.createElement('tr');
//     newRow.innerHTML = `
//         <td>
//             <input type="text" class="form-control" name="product_name[]" placeholder="Enter Product">
//         </td>
//         <td>
//             <input type="text" class="form-control req amnt" name="product_qty[]" onkeypress="return isNumber(event)" onkeyup="rowTotal('0'), billUpyog()" autocomplete="off" value="1">
//             <input type="hidden" value="" name="alert[]">
//         </td>
//         <td>
//             <input type="text" class="form-control req prc" name="product_price[]" onkeypress="return isNumber(event)" onkeyup="rowTotal('0'), billUpyog()" autocomplete="off">
//         </td>
//         <td>
//             <input type="text" class="form-control vat" name="product_tax[]" onkeypress="return isNumber(event)" onkeyup="rowTotal('0'), billUpyog()" autocomplete="off">
//         </td>
//         <td class="text-center">0</td>
//         <td>
//             <input type="text" class="form-control discount" name="product_discount[]" onkeypress="return isNumber(event)" onkeyup="rowTotal('0'), billUpyog()" autocomplete="off">
//         </td>
//         <td class="text-center">
//             <span class="currenty">$</span>
//             <strong><span class='ttlText'>0</span></strong>
//         </td>
//         <td class="text-center">
//         </td>
//         <input type="hidden" name="total_tax[]" value="0">
//         <input type="hidden" name="total_discount[]" value="0">
//         <input type="hidden" class="ttInput" name="product_subtotal[]" value="0">
//         <input type="hidden" class="pdIn" name="product_id[]" value="0">
//         <input type="hidden" name="unit[]" value="">
//         <input type="hidden" name="code[]" value="">

//         <tr>
//                 <td colspan="6">
//                     <textarea id="dpid-0" class="form-control html_editor" name="product_description[]" placeholder="Enter Description (Optional)" autocomplete="off"></textarea><br>
//                 </td>
//                 <td colspan="2">
//                     <select class="form-control unit" data-uid="0" name="u_m[]" style="display: none"></select>
//                 </td>
//             </tr>
//     `;

//     table.appendChild(newRow);
// });



// function isNumber(evt) {
//     var charCode = (evt.which) ? evt.which : evt.keyCode;
//     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
//         return false;
//     }
//     return true;
// }

// function rowTotal(rowId) {
//     var qty = parseFloat(document.getElementById('amount-' + rowId).value) || 0;
//     var price = parseFloat(document.getElementById('price-' + rowId).value) || 0;
//     var taxRate = parseFloat(document.getElementById('vat-' + rowId).value) || 0;
//     var discount = parseFloat(document.getElementById('discount-' + rowId).value) || 0;

//     var tax = (qty * price * taxRate) / 100;
//     document.getElementById('texttaxa-' + rowId).innerText = tax.toFixed(2);
//     document.getElementById('taxa-' + rowId).value = tax.toFixed(2);

//     var subtotal = (qty * price) + tax - discount;
//     document.getElementById('result-' + rowId).innerText = subtotal.toFixed(2);
//     document.getElementById('total-' + rowId).value = subtotal.toFixed(2);
// }

// function billUpyog() {
//     // Additional calculations can be performed here if needed
// }

// document.getElementById('addproduct').addEventListener('click', function () {
//     var tbody = document.getElementById('invoice-body');

//     // Create product row
//     var newRow = document.createElement('tr');
//     newRow.innerHTML = `
//         <td>
//             <input type="text" class="form-control" name="product_name[]" placeholder="Enter Product">
//         </td>
//         <td>
//             <input type="text" class="form-control req amnt" name="product_qty[]" onkeypress="return isNumber(event)" onkeyup="rowTotal('0'), billUpyog()" autocomplete="off" value="1">
//             <input type="hidden" value="" name="alert[]">
//         </td>
//         <td>
//             <input type="text" class="form-control req prc" name="product_price[]" onkeypress="return isNumber(event)" onkeyup="rowTotal('0'), billUpyog()" autocomplete="off">
//         </td>
//         <td>
//             <input type="text" class="form-control vat" name="product_tax[]" onkeypress="return isNumber(event)" onkeyup="rowTotal('0'), billUpyog()" autocomplete="off">
//         </td>
//         <td class="text-center">0</td>
//         <td>
//             <input type="text" class="form-control discount" name="product_discount[]" onkeypress="return isNumber(event)" onkeyup="rowTotal('0'), billUpyog()" autocomplete="off">
//         </td>
//         <td class="text-center">
//             <span class="currenty">$</span>
//             <strong><span class='ttlText'>0</span></strong>
//         </td>
//         <td class="text-center">
//         </td>
//         <input type="hidden" name="total_tax[]" value="0">
//         <input type="hidden" name="total_discount[]" value="0">
//         <input type="hidden" class="ttInput" name="product_subtotal[]" value="0">
//         <input type="hidden" class="pdIn" name="product_id[]" value="0">
//         <input type="hidden" name="unit[]" value="">
//         <input type="hidden" name="code[]" value="">
//     `;

//     // Create description row
//     var newDescriptionRow = document.createElement('tr');
//     newDescriptionRow.innerHTML = `
//         <td colspan="6">
//             <textarea class="form-control html_editor" name="product_description[]" placeholder="Enter Description (Optional)" autocomplete="off"></textarea><br>
//         </td>
//         <td colspan="2">
//             <select class="form-control unit" name="u_m[]" style="display: none"></select>
//         </td>
//     `;

//     // Insert new rows before the last-item-row
//     tbody.insertBefore(newRow, document.querySelector('.last-item-row'));
//     tbody.insertBefore(newDescriptionRow, document.querySelector('.last-item-row'));
// });

// ---------------------------------------------

let rowCount = 1;

function isNumber(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function rowTotal(rowId) {
    var qty = parseFloat(document.getElementById('amount-' + rowId).value) || 0;
    var price = parseFloat(document.getElementById('price-' + rowId).value) || 0;
    var taxRate = parseFloat(document.getElementById('vat-' + rowId).value) || 0;
    var discount = parseFloat(document.getElementById('discount-' + rowId).value) || 0;

    var tax = (qty * price * taxRate) / 100;
    document.getElementById('texttaxa-' + rowId).innerText = tax.toFixed(2);
    document.getElementById('taxa-' + rowId).value = tax.toFixed(2);

    var subtotal = (qty * price) + tax - discount;
    document.getElementById('result-' + rowId).innerText = subtotal.toFixed(2);
    document.getElementById('total-' + rowId).value = subtotal.toFixed(2);
}

function billUpyog() {
    // Additional calculations can be performed here if needed
}

document.getElementById('addproduct').addEventListener('click', function () {
    var tbody = document.getElementById('invoice-body');

    // Create product row
    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td class="px-2">
            <input type="text" class="form-control" name="product_name[]" placeholder=" أدخل اسم المنتج ">
        </td>
        <td class="px-2">
            <input type="text" class="form-control req amnt" name="product_qty[]" id="amount-${rowCount}" onkeypress="return isNumber(event)" onkeyup="rowTotal(${rowCount}), billUpyog()" autocomplete="off" value="1">
            <input type="hidden" value="" name="alert[]">
        </td>
        <td class="px-2">
            <input type="text" class="form-control req prc" name="product_price[]" id="price-${rowCount}" onkeypress="return isNumber(event)" onkeyup="rowTotal(${rowCount}), billUpyog()" autocomplete="off">
        </td>
        <td class="px-2">
            <input type="text" class="form-control vat" name="product_tax[]" id="vat-${rowCount}" onkeypress="return isNumber(event)" onkeyup="rowTotal(${rowCount}), billUpyog()" autocomplete="off">
        </td>
        <td class="text-center" id="texttaxa-${rowCount}">0</td>
        <td class="px-2">
            <input type="text" class="form-control discount" name="product_discount[]" onkeypress="return isNumber(event)" id="discount-${rowCount}" onkeyup="rowTotal(${rowCount}), billUpyog()" autocomplete="off">
        </td>
        <td class="text-center">
            <span class="currenty">$</span>
            <strong><span class='ttlText' id="result-${rowCount}">0</span></strong>
        </td>
        <td class="text-center px-2">
            <button type="button" class="btn btn-danger btn-sm delete-product" data-row-id="${rowCount}">حذف</button>
        </td>
        <td class="text-center"></td>
        <input type="hidden" name="total_tax[]" id="taxa-${rowCount}" value="0">
        <input type="hidden" name="total_discount[]" id="disca-${rowCount}" value="0">
        <input type="hidden" class="ttInput" name="product_subtotal[]" id="total-${rowCount}" value="0">
        <input type="hidden" class="pdIn" name="product_id[]" value="0">
        <input type="hidden" name="unit[]" value="">
        <input type="hidden" name="code[]" value="">
    `;

    // Create description row
    var newDescriptionRow = document.createElement('tr');
    newDescriptionRow.innerHTML = `
        <td colspan="6">
            <textarea class="form-control html_editor" name="product_description[]" placeholder="" autocomplete="off"></textarea><br>
        </td>
        <td colspan="2">
            <select class="form-control unit" name="u_m[]" style="display: none"></select>
        </td>
    `;

    // Insert new rows before the last-item-row
    tbody.insertBefore(newRow, document.querySelector('.last-item-row'));
    tbody.insertBefore(newDescriptionRow, document.querySelector('.last-item-row'));

    rowCount++;
});

// Event delegation for delete button
document.getElementById('invoice-body').addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('delete-product')) {
        var rowId = event.target.getAttribute('data-row-id');

        // Find and remove the product row
        var productRow = document.querySelector(`#amount-${rowId}`).closest('tr');
        if (productRow) {
            // Find and remove the corresponding description row
            var descriptionRow = productRow.nextElementSibling;
            if (descriptionRow) {
                descriptionRow.remove();
            }

            productRow.remove();
        }

        billUpyog();
    }
});
