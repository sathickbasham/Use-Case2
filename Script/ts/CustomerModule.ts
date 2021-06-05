/// <reference path="jquery.d.ts" />

module CustomerModule {

    export class Customer {
        CustomerID: string;
        CompanyName: string;
        ContactName: string;
        Country: string;

        constructor() {
        }

        Insert(callback: any): number {
            var data = '{"CustomerID":"' + this.CustomerID + '","CompanyName":"' + this.CompanyName +
                        '","ContactName":"' + this.ContactName + '","Country":"' + this.Country + '"}';

            $.ajax({
                type: 'POST',
                url: '/api/customers/',
                data: data,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: callback,
                error: function () { alert('Error'); }
            });
            return 0;
        }

        Update(callback: any): number {
            var data = '{"CustomerID":"' + this.CustomerID + '","CompanyName":"' + this.CompanyName +
                       '","ContactName":"' + this.ContactName + '","Country":"' + this.Country + '"}';

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
        }

        Delete(callback: any): number {
            var data = '{"CustomerID":"' + this.CustomerID + '","CompanyName":"' + this.CompanyName +
                       '","ContactName":"' + this.ContactName + '","Country":"' + this.Country + '"}';

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
        }

        SelectAll(callback: any) {
            $.getJSON("api/customers", callback);
        }

    }
}



