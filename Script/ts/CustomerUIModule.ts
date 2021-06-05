/// <reference path="jquery.d.ts" />
/// <reference path="CustomerModule.ts" />

module CustomerUIModule {

    export class CustomerUI {

        LoadCustomers(data) {
            $("#customerTable").find("tr:gt(1)").remove();
            $.each(data, function (key, val) {
                var tableRow = '<tr>' +
                                '<td>' + val.CustomerID + '</td>' +
                                '<td><input type="text" value="' + val.CompanyName + '"/></td>' +
                                '<td><input type="text" value="' + val.ContactName + '"/></td>' +
                                '<td><input type="text" value="' + val.Country + '"/></td>' +
                                '<td><input type="button" name="btnUpdate" value="Update" /> <input type="button" name="btnDelete" value="Delete" /></td>' +
                                '</tr>';
                $('#customerTable').append(tableRow);
            });
            
            $("input[name='btnInsert']").click(function () {
                var customerId = $("#txtCustomerId").val();
                var companyName = $("#txtCompanyName").val();
                var contactName = $("#txtContactName").val();
                var country = $("#txtCountry").val();
                var customer = new CustomerModule.Customer();
                customer.CustomerID = customerId.toString();
                customer.CompanyName = companyName.toString();
                customer.ContactName = contactName.toString();
                customer.Country = country.toString();
                customer.Insert(function () {
                    $("#txtCustomerId").val('');
                    $("#txtCompanyName").val('');
                    $("#txtContactName").val('');
                    $("#txtCountry").val('');
                    alert('Customer Added !');
                });
            });
            
            $("input[name='btnUpdate']").click(function () {
                var cell;
                var customerId = $(this).parent().parent().children().get(0).innerHTML;
                cell = $(this).parent().parent().children().get(1);
                var companyName = $(cell).find('input').val();
                cell = $(this).parent().parent().children().get(2);
                var contactName = $(cell).find('input').val();
                cell = $(this).parent().parent().children().get(3);
                var country = $(cell).find('input').val();

                var customer = new CustomerModule.Customer();
                customer.CustomerID = customerId;
                customer.CompanyName = companyName.toString();
                customer.ContactName = contactName.toString();
                customer.Country = country.toString();
                customer.Update(function () {
                    alert('Customer Updated !');
                });
            });


            $("input[name='btnDelete']").click(function () {
                var customerId = $(this).parent().parent().children().get(0).innerHTML;
                var data = '{"id":"' + customerId + '"}';
                var row = $(this).parent().parent();

                var customer = new CustomerModule.Customer();
                customer.CustomerID = customerId;
                
                customer.Delete(function () {
                    alert('Customer Deleted !');
                });
            });
        }

    }
}