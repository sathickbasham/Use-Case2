var CustomerUIModule;
(function (CustomerUIModule) {
    
    var CustomerUI = (function () {
        var data =[{"CustomerID":"1", "CompanyName":"ABC", "ContactName":"ABC", "Country":"India"}];
        function CustomerUI() { }
        
        CustomerUI.prototype.LoadCustomers = function () {
            $("#customerTable").find("tr:gt(1)").remove();
            
            $.each(data, function (key, val) {
                var tableRow = '<tr>' + '<td>' + val.CustomerID + '</td>' + '<td><input type="text" value="' + val.CompanyName + '"/></td>' + '<td><input type="text" value="' + val.ContactName + '"/></td>' + '<td><input type="text" value="' + val.Country + '"/></td>' + '<td><input type="button" name="btnUpdate" value="Update" /> <input type="button" name="btnDelete" value="Delete" /></td>' + '</tr>';
                $('#customerTable').append(tableRow);
            });
            $("input[name='btnInsert']").click(function () {
                var data1=[];
                data.push([{"CustomerID":$("#txtCustomerId").val(), "CompanyName":$("#txtCompanyName").val(), "ContactName":$("#txtContactName").val(), "Country":$("#txtCountry").val()}])
                data1.push([{"CustomerID":$("#txtCustomerId").val(), "CompanyName":$("#txtCompanyName").val(), "ContactName":$("#txtContactName").val(), "Country":$("#txtCountry").val()}])
                $.each(data1, function (key, val) {
                    var tableRow = '<tr>' + '<td>' + val[0].CustomerID + '</td>' + '<td><input type="text" value="' + val[0].CompanyName + '"/></td>' + '<td><input type="text" value="' + val[0].ContactName + '"/></td>' + '<td><input type="text" value="' + val[0].Country + '"/></td>' + '<td><input type="button" name="btnUpdate" value="Update" /> <input type="button" name="btnDelete" value="Delete" /></td>' + '</tr>';
                    $('#customerTable').append(tableRow);
                });
                $("#txtCustomerId").val("");
                $("#txtCompanyName").val("");
                $("#txtContactName").val("");
                $("#txtCountry").val("");
                alert('Inserted Successfully');
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
                for(var i=0; i<data.length; i++)
                {
                    if(data[i].CustomerID==customerId)
                    {
                        data[i].CompanyName =companyName;
                        data[i].ContactName = contactName;
                        data[i].country =country;
                    }
                }
                alert('Updated Successfully');
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
        };
        return CustomerUI;
    })();
    CustomerUIModule.CustomerUI = CustomerUI;    
})(CustomerUIModule || (CustomerUIModule = {}));
