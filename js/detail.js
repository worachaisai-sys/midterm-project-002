const items = {};

/* รายการ The Little Prince */
items.นางคุก = {
  id: "นางคุก",
  name: "นางคุก",
  group: "books",
  category: "หนังสือ",
  maker: "ภาคินัย",
  makerLabel: "ผู้เขียน",
  caption: "อ่านได้อีก แม้จะรู้เรื่องแล้ว",
  description:
    "ช่างภาพหนุ่มได้รับมอบหมายให้ไปถ่ายภาพในคุกแห่งหนึ่ง" +
    "ทันทีที่ก้าวเข้าไปเหยียบในคุกนรกแห่งนั้น ชายหนุ่มสัมผัสได้ถึงอะไรบางอย่าง",
  story:
    "เป็นหนังสือที่อ่านแล้วสนุกมากๆ " +
    "อ่านกี่ครั้งก็ยังสนุกเหมือนเดิม",
  image: "assets/images/collection/b11.jpg",
  related: ["กาสัก", "รจเลข"],
};

/* รายการ Fujifilm X100 */
items.รจเลข = {
  id: "รจเลข",
  name: "รจเลขกัมมันต์",
  group: "books",
  category: "หนังสือ",
  maker: "กิตติศักดิ์ คงคา",
  makerLabel: "ผู้เขียน",
  caption: "สนุกมากๆ",
  description:
    "“สารวัตรเดเมียน” นายตำรวจหนุ่มได้รับภารกิจสำคัญให้ปลอมตัวเข้าไปสืบคดีฆาตกรรมต่อเนื่องในเรือนจำทัณฑ์นิรามิษ " +
    "ดินแดนที่ป้องกันความตายอย่างสมบูรณ์แบบ การตรวจสอบสิ่งของอย่างเข้มงวด"
    +"กล้องวงจรปิดตลอดยี่สิบสี่ชั่วโมง แสงสว่างที่ไม่เคยดับ และเรือนนอนที่ลงกลอนกุญแจตลอดเวลา",
  story:
    "เป็นหนังสือที่อ่านแล้วสนุกมากๆ " +
    "อ่านกี่ครั้งก็ยังสนุกเหมือนเดิม",
  image: "assets/images/collection/b12.jpg.webp",
  related: ["นางคุก", "อย่าปล่อยให้ความคิดร้ายๆ"],
};

/* รายการ The Grand Budapest Hotel */
items.กาสัก = {
  id: "กาสัก",
  name: "กาสักอังก์ฆาต",
  group: "books",
  category: "หนังสือ",
  maker: "กิตติศักดิ์ คงคา",
  makerLabel: "ผู้เขียน",
  caption: "ชอบการไขคดีมากๆ",
  description:
    "ศาสตราจารย์ซินแคลร์ นักสืบหนุ่มตัดสินใจหนีความรู้สึกผิดในใจด้วยการไปบวช" +
    "ที่วัดป่าบนเกาะร้างห่างไกลไร้สัญญาณโทรศัพท์มือถือ แทนที่จะได้สงบ แต่กลับต้องไปเจอคดีฆาตกรรมแสนประหลาดเพราะ"
    +"ผู้ต้องสงสัยทุกคนถูกขังอยู่ในหอสำนึกตน แต่ผู้ตายกลับถูกฆ่าอยู่ข้างนอกคนเดียว " +
    "งานนี้นักสืบหนุ่มต้องยืมมือพี่ชายฝาแฝดอย่าง “สารวัตรเดเมียน” มาช่วยคลี่คลายคดีแสนซับซ้อนเสียแล้ว..",
  story:
    "เป็นหนังสือที่อ่านแล้วสนุกมากๆ " +
    "อ่านกี่ครั้งก็ยังสนุกเหมือนเดิม",
  image: "assets/images/collection/b8.jpg.webp",
  related: ["อย่าปล่อยให้ความคิดร้ายๆ", "ปีเตอร์แพน"],
};

/* รายการ AM */
items.อย่าปล่อยให้ความคิดร้ายๆ = {
  id: "อย่าปล่อยให้ความคิดร้ายๆ",
  name: "อย่าปล่อยให้ความคิดร้ายๆ เป็นเจ้านายของชีวิต",
  group: "books",
  category: "หนังสือ",
  maker: "ยูทากะ โอโนะ",
  makerLabel: "ศิลปิน",
  caption: "เป็นหนังสือที่ดีมาก",
  description:
    "เราทุกคนล้วนเคยมีช่วงเวลาที่รู้สึกว่าทุกอย่างกำลังพังทลาย " +
    "แค่เรื่องเล็กน้อยก็กลายเป็นห่วงโซ่ความคิดลบที่พร้อมจะขยายใหญ่กว่าความเป็นจริง "
    +"หลายครั้งที่เราคิดว่าตัวเองกำลัง “มีเหตุผล” ทั้งที่จริงๆ แล้ว เรากำลังถูกความกลัว ความเศร้า หรือความกังวลนำทาง",
  story:
    "เป็นหนังสือที่ได้เรียนรู้วิธีรับมือความคิดลบอย่างมีสติ เท่าทันกับดักทางอารมณ์ " +
    "และสร้างพฤติกรรมใหม่ที่สอดคล้องกับเป้าหมายที่ต้องการ",
  image: "assets/images/collection/b5.jpg.webp",
  related: ["ปีเตอร์แพน", "คืนเทศกาล"],
};

/* รายการ The Hobbit */
items.ปีเตอร์แพน = {
  id: "ปีเตอร์แพน",
  name: "ปีเตอร์แพน (re-newed)",
  group: "books",
  category: "หนังสือ",
  maker: "เจ.เอ็ม. แบร์รี่",
  makerLabel: "ผู้เขียน",
  caption: "สนุกและเพลิดเพลินสุดๆ",
  description:
    "ปีเตอร์ แพน คือเด็กชายผู้ไม่เคยโต ผู้พาเราโบยบินสู่ เนเวอร์แลนด์ ดินแดนแห่งเวทมนตร์ที่ไม่มีผู้ใหญ่ " +
    "มีแต่การผจญภัย มิตรภาพ และความฝัน เรื่องราวเริ่มต้นในค่ำคืนหนึ่งที่ปีเตอร์ แพน "+ 
    "บินเข้ามายังห้องของ เวนดี้ และน้องชายทั้งสอง",
  story:
    "เป็นหนังสือที่อ่านแล้วสนุกมากๆ " +
    "อ่านกี่ครั้งก็ยังสนุกเหมือนเดิม",
  image: "assets/images/collection/b6.jpg",
  related: ["คืนเทศกาล", "นางคุก"],
};

/* รายการ คืนเทศกาลสังหารโหด */
items.คืนเทศกาล = {
  id: "คืนเทศกาล",
  name: "คืนเทศกาลสังหารโหด",
  group: "books",
  category: "หนังสือ",
  maker: "อกาธา (อากาธา) คริสตี้",
  makerLabel: "ผู้เขียน",
  caption: "อ่านแล้วรู้สึกลุ้นไปตามตัวละครในเรื่อง",
  description:
    "มหาเศรษฐีชราผู้โหดเหี้ยม ซีเมียน ลี ได้เรียกลูกชาย ลูกสะใภ้ และญาติห่างๆ"+
    "กลับมารวมตัวกันที่คฤหาสน์กอร์สตันฮอลล์ในคืนคริสต์มาสอีฟเพื่อตั้งใจประกาศปรับพินัยกรรม"+
    "แต่กับเจอเรื่องสะเทือนขวัญแทนของขวัญหรรษาเช่นทุกที",
  story:
    "เป็นหนังสือที่อ่านแล้วสนุกมากๆ " +
    "อ่านกี่ครั้งก็ยังสนุกเหมือนเดิม",
  image: "assets/images/collection/b7.jpg",
  related: ["นางคุก", "รจเลข"],
};

/* อ่าน id จาก URL */
const itemId =
  new URLSearchParams(window.location.search).get("id") || "spirited";
const item = Object.hasOwn(items, itemId) ? items[itemId] : null;

/* ฟังก์ชันแสดงข้อมูล */
function showDetail(item) {
  document.title = "Detail | Personal Collection";
  document.querySelectorAll("[data-field]").forEach(function (element) {
    element.textContent = item[element.dataset.field];
  });
  const image = document.querySelector("#detail-image");
  image.src = item.image;
  image.alt = item.name;
}

/* ฟังก์ชันรายการที่เกี่ยวข้อง */
function showRelated(item) {
  item.related.forEach(function (id, index) {
    const related = items[id];
    const suffix = index === 0 ? "" : "-2";
    document.querySelector("#related-link" + suffix).href =
      "detail.html?id=" + id;
    document.querySelector("#related-image" + suffix).src = related.image;
    document.querySelector("#related-name" + suffix).textContent = related.name;
    document.querySelector("#related-caption" + suffix).textContent =
      related.caption;
  });
}

/* เลือกการแสดงผล */
if (item) {
  showDetail(item);
  showRelated(item);
} else {
  document.querySelector("#detail-content").hidden = true;
  document.querySelector("#not-found").hidden = false;
  document.title = "Detail | Personal Collection";
}