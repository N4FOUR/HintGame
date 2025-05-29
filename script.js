const hints = [
  "กระเป๋าสีดำ",
  "เป็นผู้ชาย",
  "ชื่อเล่นมี 'ม' ",
  "พี่เลขที่ 1010 - (100 + 101)",
  "นั่งหน้าห้อง"
]

const code = [
  '18709761971334813136420077418172',
  '28305057849573862109652917226407',
  '80156686448834838791242007690333',
  '02823613904885417447196442882883',
  '94677640319073340268967765063930'
]

const hint_box = document.getElementById("hint-text");
function showHint() {
  const hint_that_gets = JSON.parse(localStorage.getItem("you_hint")) || [];
  if (hint_that_gets !== null && hint_that_gets.length > 0) {
    hint_box.innerHTML = hint_that_gets.join("<br>");
  } else {
    hint_box.innerHTML = "<p>-- ใส่โค้ดเพื่อรับคำใบ้ --</p>";
  }
}

function getHint() {
  const input = document.getElementById("codeinput");
  const codeInput = input.value.trim();
  if (codeInput === "") {
    alert("กรุณากรอกรหัสผ่าน");
    return;
  }
  if (code.includes(codeInput)) {
    alert("รหัสผ่านถูกต้อง! คุณได้รับคำใบ้ใหม่");
    const hintIndex = code.indexOf(codeInput);
    const hint = hints[hintIndex];
    let existingHints = JSON.parse(localStorage.getItem("you_hint")) || [];
    if (!existingHints.includes(hint)) {
      existingHints.push(hint);
      localStorage.setItem("you_hint", JSON.stringify(existingHints));
      showHint();
    }
  } else {
    alert("รหัสผ่านไม่ถูกต้อง");
  }
}
