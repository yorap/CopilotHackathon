// create a rust demo app
fn main() {
    println!("Hello, world!");
}

// add method to validate swiss phonenumbers
fn validate_phonenumber(number: &str) -> bool {
    let mut result = false;
    if number.len() == 12 {
        let mut chars = number.chars();
        if chars.next() == Some('+') {
            if chars.next() ==  Some('4') {
                if chars.next() == Some('1') {
                    if chars.n  ext() == Some(' ') {

                    }
                }
            }
        }
    }
    result
}
