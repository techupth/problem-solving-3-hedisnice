// Exercise 2: Single Number

const singleNumber = function (nums) {
  // ใช้ Map เพื่อเก็บจำนวนครั้งของแต่ละตัวเลขใน Array
  const numCountMap = new Map();

  // ใช้ for...of loop ในการนับจำนวนครั้งของแต่ละตัวเลข
  for (const num of nums) {
    numCountMap.set(num, (numCountMap.get(num) || 0) + 1);
  }

  // ใช้ find method เพื่อหาตัวเลขที่ปรากฏเพียงครั้งเดียว
  const singleNum = [...numCountMap.entries()].find(
    ([num, count]) => count === 1
  );

  // ถ้าเจอ คืนค่าตัวเลขที่ปรากฏเพียงครั้งเดียว
  // ถ้าไม่เจอ คืนค่า null
  return singleNum ? singleNum[0] : null;
};

// ทดสอบฟังก์ชัน
const result1 = singleNumber([2, 2, 1]);
const result2 = singleNumber([4, 1, 2, 1, 2]);
const result3 = singleNumber([1]);

console.log(result1); // ผลลัพธ์: 1
console.log(result2); // ผลลัพธ์: 4
console.log(result3); // ผลลัพธ์: 1
