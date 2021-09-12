function validateForm(assignmentForm)   
{
    var messages = [];
    if (document.forms["student-form"]["fname"].value=="")
    {
        messages.push("Please fill in your first name.");
        
    }
    if (document.forms["student-form"]["lname"].value=="")
    {
        messages.push("Please fill in your last name.");
    }
    if (messages.length > 0) {
        alert(messages.join('\n'));
        return false;
    } else {
        console.log(document.forms["student-form"]["fname"].value);
        return true;
        
    }
}