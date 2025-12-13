$(document).ready(function () {
    $("#submitButton").click(function (event) {
        event.preventDefault();
        
        let form = $("#formId");
        
        // validation
        let firstName = $("#first-name").val();
        let lastName = $("#last-name").val();
        let email = $("#email").val();
        
        if (!firstName || !lastName || !email) {
            toastr.error('Please fill in all required fields');
            return;
        }
        
        
        toastr.success('Application submitted successfully!');
        form[0].reset();
    });
});