
const btn = document.getElementById('button-main')
btn.addEventListener('click', (e) => {

  e.preventDefault()

  const lenght = document.getElementById('lenght')
  const value = lenght.value

  const codedLength = value - 1

  function genCode() {
    const charsNumbers = "0123456789";
    const charsLowercase = 'abcdefghijklmnopqrstuvwxyz'
    const charsUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const charEspecial = '!@#&!#@&!#@&!@#&!@#&'
    const chars = `${charsLowercase}${charEspecial}${charsNumbers}${charsUppercase}`

    let code = "";
    for (let i = 0; i <= codedLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      code += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("newCode").value = code;
  }

  return genCode()

})

function copyCode() {
  let copyText = document.getElementById("newCode");
  if(copyText.value != '') {
  copyText.select();
  document.execCommand("copy");
  return alert('Copiado para área de transferência')
  } else {
    return alert('Clique para gerar o código antes de copiálo!')
  }
}