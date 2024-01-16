// Exercise 1: Length of Last Word

const lengthOfLastWord = function (s) {
  // ตัดช่องว่างที่อยู่ด้านหน้าและด้านหลังของประโยค
  const trimmedString = s.trim();

  // ใช้ split(" ") เพื่อแบ่งประโยคเป็นคำ และเก็บใน Array
  const words = trimmedString.split(" ");

  // ถ้าไม่มีคำใน Array ให้คืนค่าเป็น 0
  if (words.length === 0) {
    return 0;
  }

  // คืนค่าความยาวของคำสุดท้าย
  return words[words.length - 1].length;
};

// ทดสอบฟังก์ชัน
const result1 = lengthOfLastWord("Hello World");
const result2 = lengthOfLastWord("   fly me   to   the moon  ");
const result3 = lengthOfLastWord("luffy is still joyboy");

console.log(result1); // ผลลัพธ์: 5
console.log(result2); // ผลลัพธ์: 4
console.log(result3); // ผลลัพธ์: 6
