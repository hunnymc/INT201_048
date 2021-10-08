class Studentinfo {
    constructor(stuNo,stuNameTh,stuNameEn,subject,credit,gpa,gpax) {
        this.stuNo =  stuNo; //เลขนักศึกษา
        this.stuNameTh = stuNameTh; //ชื่อไทย
        this.stuNameEn = stuNameEn; //ชื่ออิ้งค์
        this.subject = subject; //วิชาที่ลงทะเบียน
        this.gpa = gpa
        this.gpax = gpax; 
    }
}
// สร้างclassมาเพื่อเป็นต้นแบบในการเก็บข้อมูลนศ.แต่ละคน

const std1 = new Studentinfo (
    1 ,
    "เอ",
    "A",
    [ 
        {class:"INT201", credit: 3 },
        {class: "LNG100", credit: 2 } 
    ] 
)
console.log(std1)
//สร้างนักเรียนstd1ได้แบบนี้




