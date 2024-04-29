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




// const folders = document.querySelectorAll('.folder');

// for (const folder of folders) {
//     folder.onclick = () => {
//         folder.classList.toggle('active');
//         const target_list = folder.nextElementSibling;
//         target_list.style.maxHeight = target_list.style.maxHeight ? null : "100vh";
//     }
// }