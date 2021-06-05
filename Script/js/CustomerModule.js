var CustomerModule;
(function (CustomerModule) {
    var Customer = (function () {
        function Customer() {
        }
        Customer.prototype.Insert = function (callback) {
            var data = '{"CustomerID":"' + this.CustomerID + '","CompanyName":"' + this.CompanyName + '","ContactName":"' + this.ContactName + '","Country":"' + this.Country + '"}';
            $.ajax({
                type: 'POST',
                url: '/api/customers/',
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: callback,
                error: function () {
                    alert('Error');
                }
            });
            return 0;
        };
        Customer.prototype.Update = function (callback) {
            var data = '{"CustomerID":"' + this.CustomerID + '","CompanyName":"' + this.CompanyName + '","ContactName":"' + this.ContactName + '","Country":"' + this.Country + '"}';
            $.ajax({
                type: 'PUT',
                url: '/api/customers',
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: callback,
                error: function (xhr, err) {
                    alert("readyState: " + xhr.readyState + "\nstatus: " + xhr.status);
                    alert("responseText: " + xhr.responseText);
                }
            });
            return 0;
        };
        Customer.prototype.Delete = function (callback) {
            var data = '{"CustomerID":"' + this.CustomerID + '","CompanyName":"' + this.CompanyName + '","ContactName":"' + this.ContactName + '","Country":"' + this.Country + '"}';
            $.ajax({
                type: 'DELETE',
                url: '/api/customers',
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: callback,
                error: function (xhr, err) {
                    alert("readyState: " + xhr.readyState + "\nstatus: " + xhr.status);
                    alert("responseText: " + xhr.responseText);
                }
            });
            return 0;
        };
        Customer.prototype.SelectAll = function (callback) {
            var data =[{"CustomerID":"1", "CustomerName":"ABC", "CompanyName":"ABC", "Country":"India"}];
            return data;
        };
        return Customer;
    })();
    CustomerModule.Customer = Customer;    
})(CustomerModule || (CustomerModule = {}));
