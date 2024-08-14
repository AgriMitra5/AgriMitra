// const uservalidation=(values)=>{
//     let errors={}
//     if(!values.name){
//         errors.name="Name is required"
//     }
//     if(!values.city){
//         errors.city="City is required"
//     }
//     if(!values.userid){
//         errors.userid="User id is required"
//     }
//     if(!values.phone){
//         errors.phone="Phone no is required"
//     }
//     if(!values.pwd){
//         errors.pwd="Password is required"
//     }
//     if(!values.cpwd){
//         errors.cpwd="Confirm password is required"
//     }
    
//     if(values.pwd && values.cpwd && values.pwd!==values.cpwd){
//         errors.cpwd="Password not match"
//     }

//     return errors;
// }

// export default uservalidation;

const uservalidation = (values) => {
    let errors = {}

    // Name validation (letters and spaces only)
    if (!values.name) {
        errors.name = "Name is required"
    } else if (!/^[A-Za-z\s]+$/.test(values.name)) {
        errors.name = "Name can only contain letters and spaces"
    }

    // City validation (letters and spaces only)
    if (!values.city) {
        errors.city = "City is required"
    } else if (!/^[A-Za-z\s]+$/.test(values.city)) {
        errors.city = "City can only contain letters and spaces"
    }

    // User ID validation (email format)
    if (!values.userid) {
        errors.userid = "User ID (email) is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.userid)) {
        errors.userid = "User ID must be a valid email address"
    }

    // Phone number validation (digits only)
    if (!values.phone) {
        errors.phone = "Phone number is required"
    } else if (!/^\d+$/.test(values.phone)) {
        errors.phone = "Phone number can only contain digits"
    }

    // Password validation
    if (!values.pwd) {
        errors.pwd = "Password is required"
    }

    // Confirm password validation
    if (!values.cpwd) {
        errors.cpwd = "Confirm password is required"
    } else if (values.pwd && values.cpwd && values.pwd !== values.cpwd) {
        errors.cpwd = "Passwords do not match"
    }

    return errors;
}

export default uservalidation;
