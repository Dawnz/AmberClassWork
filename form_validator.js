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
    if (document.forms["student-form"]["email"].value=="")
    {
        messages.push("Please fill in your email address.");
    }
    if (document.forms["student-form"]["password"].value=="")
    {
        messages.push("Please fill in your password.");
    }
    if (document.forms["student-form"]["gender"].value=="first")
    {
        messages.push("Please select your Gender.");
    }
    if (messages.length > 0) {
        alert(messages.join('\n'));
        return false;
    } else {
        return true;
        
    }
}