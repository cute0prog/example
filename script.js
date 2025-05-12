function greetUser() {
  const name = document.getElementById('nameInput').value.trim();
  const greetingEl = document.getElementById('greeting');
  
  if (name) {
    greetingEl.textContent = `안녕하세요, ${name}님!`;
  } else {
    greetingEl.textContent = '이름을 입력해 주세요.';
  }
}
