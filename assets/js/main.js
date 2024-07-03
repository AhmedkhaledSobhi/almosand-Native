
// (() => {
//     const folders = document.querySelectorAll('.folder');

//     for (const folder of folders) {
//         folder.onclick = () => {
//             folder.classList.toggle('active');
//             const target_list = folder.nextElementSibling;
//             target_list.style.maxHeight = target_list.style.maxHeight ? null : "100vh";
//         }
//     }

// })();

(()=>{

    document.getElementById("addPaymentProcess").addEventListener("click", function () {
        var newDiv = document.createElement("div");
        // Add content inside the new div
        newDiv.innerHTML = ` <hr>
        <div class="row">
            <div class="col-md-6">
                <div>
                    <label for="paymentMethod">طريقة الدفع او السداد</label>
                    <select class="select-user w-100 px-2" id="paymentMethod" aria-label="">
                        <option class="" selected> كاش </option>
                        <option value="1"> تحويل بنكي </option>
                        <option value="2"> شيك </option>
                        <option value="3"> ماستر كارد </option>
                        <option value="4"> Card </option>
                        <option value="5"> رصيد السفظة Wallct </option>
                        <option value="6"> اخري </option>
                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <div>
                    <label for="total">الاجمالي</label>
                    <input class="px-2 w-100" type="number" name="total" id="total" placeholder="الاجمالي">
                </div>
            </div>
        </div> `;
    
        document.getElementById("addChild").appendChild(newDiv);
    });

})()




// const url = 'https://dashboard.almosand.com/api/pos-invoices';

// const headers=new Headers;
// headers.append("Custom-Header", 'YourHeaderValue');


// // Define the invoice data
// const invoiceData = {
//     "customer_id": 33,
//     "tid": "#R-1000",
//     "refer": "#R-1000",
//     "invoicedate": "2024-02-24",
//     "invoiceduedate": "2024-02-24",
//     "recur_after": "",
//     "sub": null,
//     "notes": "Test",
//     "subtotal": 1500.00,
//     "shipping": 50.00,
//     "tax": 150.00,
//     "discount": 0,
//     "discount_rate": 0,
//     "after_disc": 0,
//     "currency": "EGP",
//     "total": 1700.00,
//     "tax_format": "FLAT",
//     "discount_format": "percentage",
//     "ship_tax": 7.5,
//     "ship_tax_type": "percentage",
//     "ship_rate": "15",
//     "term_id": null,
//     "tax_id": 1,
//     "p": null,
//     "user_id": 31,
//     "product_id": [31],
//     "product_name": ["Shawrma"],
//     "code": ["332"],
//     "product_qty": [5],
//     "product_price": [10],
//     "product_tax": [1.2],
//     "product_discount": [0],
//     "product_subtotal": [53.44],
//     "total_tax": [6],
//     "total_discount": [0],
//     "product_description": ["TEST"],
//     "unit": ["Pack"],
//     "serial": ["223-444"],
//     "unit_m": ["Pack"],
//     "p_amount": [1700.00],
//     "p_method": ["cash"],
//     "p_account": [220],
//     "b_change": [300]
// };

// fetch(url, {
//     method: 'POST',
   
//     body: JSON.stringify(invoiceData),
// })
// .then(response => {
//     console.log(response);
//     if (!response.ok) {
//         throw new Error('Network response was not ok' );
//     }
//     return response.json();
// })
// .then(data => {
//     console.log('Success:', data);
// })
// .catch(error => {
//     console.error('Error:', error);
// });









// ============================================= How to Print Page Area using JavaScript  Add opening the site on the print page ==============================



// function printDiv(divId) {
//     var divToPrint = document.querySelector(`.${divId}`);
//     var newWin = window.open('', '_blank', 'width=700,height=600');
//     newWin.document.open();
//     newWin.document.write('<html><head><title>Print</title>');
//     newWin.document.write('<style>@media print { body { -webkit-print-color-adjust: exact; } }</style>');
//     newWin.document.write('</head><body>');
//     newWin.document.write(divToPrint.innerHTML);
//     newWin.document.write('</body></html>');
//     newWin.document.close();
//     newWin.print();
//     newWin.close();
// }
