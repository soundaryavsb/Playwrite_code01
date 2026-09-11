export function generatePhoneNumber()
{
    return "9"+Math.floor(1000000000 + Math.random() * 900000000)
}
export function generateEmailID()
{
    return "user"+Math.floor(Math.random()*10000)+"@gmail.com"
}