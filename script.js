"use strict";

var gCoursesDB = {
  description: "This DB includes all courses in system",
  courses: [
    {
      id: 1,
      courseCode: "FE_WEB_ANGULAR_101",
      courseName: "How to easily create a website with Angular",
      price: 750,
      discountPrice: 600,
      duration: "3h 56m",
      level: "Beginner",
      coverImage: "images/courses/course-angular.jpg",
      teacherName: "Morris Mccoy",
      teacherPhoto: "images/teacher/morris_mccoy.jpg",
      isPopular: false,
      isTrending: true,
    },
    {
      id: 2,
      courseCode: "BE_WEB_PYTHON_301",
      courseName: "The Python Course: build web application",
      price: 1050,
      discountPrice: 900,
      duration: "4h 30m",
      level: "Advanced",
      coverImage: "images/courses/course-python.jpg",
      teacherName: "Claire Robertson",
      teacherPhoto: "images/teacher/claire_robertson.jpg",
      isPopular: false,
      isTrending: true,
    },
    {
      id: 5,
      courseCode: "FE_WEB_GRAPHQL_104",
      courseName: "GraphQL: introduction to graphQL for beginners",
      price: 850,
      discountPrice: 650,
      duration: "2h 15m",
      level: "Intermediate",
      coverImage: "images/courses/course-graphql.jpg",
      teacherName: "Ted Hawkins",
      teacherPhoto: "images/teacher/ted_hawkins.jpg",
      isPopular: true,
      isTrending: false,
    },
    {
      id: 6,
      courseCode: "FE_WEB_JS_210",
      courseName: "Getting Started with JavaScript",
      price: 550,
      discountPrice: 300,
      duration: "3h 34m",
      level: "Beginner",
      coverImage: "images/courses/course-javascript.jpg",
      teacherName: "Ted Hawkins",
      teacherPhoto: "images/teacher/ted_hawkins.jpg",
      isPopular: true,
      isTrending: true,
    },
    {
      id: 8,
      courseCode: "FE_WEB_CSS_111",
      courseName: "CSS: ultimate CSS course from beginner to advanced",
      price: 750,
      discountPrice: 600,
      duration: "3h 56m",
      level: "Beginner",
      coverImage: "images/courses/course-css.jpg",
      teacherName: "Juanita Bell",
      teacherPhoto: "images/teacher/juanita_bell.jpg",
      isPopular: true,
      isTrending: true,
    },
    {
      id: 9,
      courseCode: "FE_WEB_WORDPRESS_111",
      courseName: "Complete Wordpress themes & plugins",
      price: 1050,
      discountPrice: 900,
      duration: "4h 30m",
      level: "Advanced",
      coverImage: "images/courses/course-wordpress.jpg",
      teacherName: "Clevaio Simon",
      teacherPhoto: "images/teacher/clevaio_simon.jpg",
      isPopular: true,
      isTrending: false,
    },
  ],
  insertCourse: function (newCourse) {
    let vIsFound = false;
    let vIndex = 0;
    while (!vIsFound && vIndex < this.courses.length) {
      if (this.courses[vIndex].id == newCourse.id) {
        this.courses[vIndex].courseCode = newCourse.courseCode;
        this.courses[vIndex].courseName = newCourse.courseName;
        this.courses[vIndex].price = newCourse.price;
        this.courses[vIndex].discountPrice = newCourse.discountPrice;
        this.courses[vIndex].duration = newCourse.duration;
        this.courses[vIndex].level = newCourse.level;
        this.courses[vIndex].coverImage = newCourse.coverImage;
        this.courses[vIndex].teacherName = newCourse.teacherName;
        this.courses[vIndex].teacherPhoto = newCourse.teacherPhoto;
        this.courses[vIndex].isPopular = newCourse.isPopular;
        this.courses[vIndex].isTrending = newCourse.isTrending;
        vIsFound = true;
      } else {
        vIndex++;
      }
    }
  },
  deleteCourse: function (idCourse) {
    let vIsFound = false;
    let vIndex = 0;
    while (!vIsFound && vIndex < this.courses.length) {
      if (this.courses[vIndex].id == idCourse) {
        this.courses.splice(vIndex, 1);
        vIsFound = true;
      } else {
        vIndex++;
      }
    }
  },
};

// Biến mảng hằng số chứa danh sách tên các thuộc tính
const gCOURSES_COLS = [
  "id",
  "courseName",
  "coverImage",
  "price",
  "discountPrice",
  "teacherName",
  "teacherPhoto",
];
// Biến mảng toàn cục định nghĩa chỉ số các cột tương ứng
const gID_COL = 0;
const gCOURSE_NAME_COL = 1;
const gCOURSE_IMG_COL = 2;
const gPRICE_COL = 3;
const gDISCOUNT_PRICE_COL = 4;
const gTEACHER_NAME_COL = 5;
const gTEACHER_PHOTO = 6;
const gACTION_COL = 7;
// Biến toàn cục để hiển lưu STT
var gSTT = 1;
// Khai báo DataTable & mapping collumns
var gCoursesTable = $("#tblCourses").DataTable({
  columns: [
    { data: gCOURSES_COLS[gID_COL] },
    { data: gCOURSES_COLS[gCOURSE_NAME_COL] },
    { data: gCOURSES_COLS[gCOURSE_IMG_COL] },
    { data: gCOURSES_COLS[gPRICE_COL] },
    { data: gCOURSES_COLS[gDISCOUNT_PRICE_COL] },
    { data: gCOURSES_COLS[gTEACHER_NAME_COL] },
    { data: gCOURSES_COLS[gTEACHER_PHOTO] },
    { data: gCOURSES_COLS[gACTION_COL] },
  ],
  columnDefs: [
    {
      targets: gCOURSE_IMG_COL,
      render: (data) => {
        return `<img src="${data}" style="width: 170px"/>`;
      },
    },
    {
      targets: gCOURSE_NAME_COL,
      width: "20%",
    },
    {
      targets: gDISCOUNT_PRICE_COL,
      width: "5%",
    },
    {
      targets: gTEACHER_NAME_COL,
      width: "10%",
    },
    {
      targets: gTEACHER_PHOTO,
      width: "5%",
      render: (data) => {
        return `<img src="${data}" style="width: 70px"/>`;
      },
    },
    {
      // định nghĩa lại cột action
      targets: gACTION_COL,
      width: "10%",
      defaultContent: `
      <div class='d-flex flex-row'>
        <button class="btn btn-primary btn-edit mx-1">Edit</button>
        <button class="btn btn-danger btn-delete mx-1">Delete</button>
      </div>
        
      `,
    },
  ],
});
/*** REGION 2 - Vùng gán / thực thi sự kiện cho các elements */
$(document).ready(function () {
  loadCourses();
  loadCourseToTable(gCoursesDB.courses);
});
// --------------Js cho backend-----------------

$("#addNewCourse").click(function () {
  console.log("create course");
  addNewCourse();
});
$("#tblCourses").on("click", ".btn-edit", function () {
  console.log("update course");
  editCourse(this);
});
$("#tblCourses").on("click", ".btn-delete", function () {
  console.log("delete");
  deleteCourse(this);
});
$("[data-dismiss=modal]").on("click", function (e) {
  var $t = $(this),
    target = $t[0].href || $t.data("target") || $t.parents(".modal") || [];

  $(target)
    .find("input,textarea,select")
    .val("")
    .end()
    .find("input[type=checkbox], input[type=radio]")
    .prop("checked", "")
    .end();
});

/**REGION 3 Khai bao ham xu ly event handler */
function loadCourses() {
  console.log("loadcourse");
  //B1 thu thap du lieu
  //B2 validate du lieu
  //B3 hien thi du lieu
  var vPopular = $(".popular-body");
  vPopular.html(" ");
  var vTrending = $(".trending-body");
  vTrending.html("");

  Array.from(gCoursesDB.courses).forEach((course) => {
    if (course.isPopular) {
      vPopular.append(getCourseElement(course));
    }
    if (course.isTrending) {
      vTrending.append(getCourseElement(course));
    }
  });
}
// --------------Js cho backend-----------------
//Hàm load Couse
function loadCourseToTable(paramCourse) {
  gCoursesTable.clear();
  gCoursesTable.rows.add(paramCourse);
  gCoursesTable.draw();
}
//Hàm create Couse
function addNewCourse() {
  $("#createCourseModal").modal("show");

  $("#btnCreateCourse").click(function () {
    //gCoursesDB.courses.push({ test: "ok" });
    // Khai báo đối tượng
    var newCourse = {
      id: 14,
      courseCode: "FE_WEB_WORDPRESS_111",
      courseName: "Complete Wordpress themes & plugins",
      price: 1050,
      discountPrice: 900,
      duration: "4h 30m",
      level: "Advanced",
      coverImage: "images/courses/course-wordpress.jpg",
      teacherName: "Clevaio Simon",
      teacherPhoto: "images/teacher/clevaio_simon.jpg",
      isPopular: true,
      isTrending: false,
    };
    //B1 Thu thap du lieu tu form
    var idCourse = getNextId();
    getCourseFromElement(newCourse, idCourse);
    //B2 : Validate dư lieu
    const isValid = validateCourse(newCourse);
    //B3: Lưu thông tin
    if (isValid) {
      gCoursesDB.courses.push(newCourse);
      console.log(gCoursesDB.courses);
      console.log("Them du lieu thanh cong");
      loadCourseToTable(gCoursesDB.courses);
      $("#createCourseModal").modal("hide");
    }
  });
}
//Hàm edit Course
function editCourse(paramElement) {
  var vRowClick = $(paramElement).closest("tr");
  var vTable = $("#tblCourses").DataTable();
  var vDataRow = vTable.row(vRowClick).data();
  console.log("id user edit: ", vDataRow.id);
  $("#editCourseModal").modal("show");
  //Load du lieu vao form
  loadCourseToEditModal(vDataRow.id);
  //Click nút edit trong modal
  $("#btnEditCourse").on("click", function () {
    console.log("edit click modal");
    // Khai báo đối tượng
    var newCourse = {
      id: "",
      courseCode: "",
      courseName: "",
      price: "",
      discountPrice: "",
      duration: "",
      level: "",
      coverImage: "",
      teacherName: "",
      teacherPhoto: "",
      isPopular: true,
      isTrending: false,
    };
    //B1 Thu thap du lieu tu form
    getCourseFromEditModal(newCourse);
    //B2 : Validate dư lieu
    const isValid = validateCourse(newCourse);
    //B3: Lưu thông tin
    if (isValid) {
      console.log("Sua du lieu thanh cong");
      console.log(newCourse);
      gCoursesDB.insertCourse(newCourse);
      console.log("DB sau khi edit la:", gCoursesDB.courses);
      loadCourseToTable(gCoursesDB.courses);
      $("#editCourseModal").modal("hide");
    }
  });
}
//Ham delee Course
function deleteCourse(paramElement) {
  var vRowClick = $(paramElement).closest("tr");
  var vTable = $("#tblCourses").DataTable();
  var vDataRow = vTable.row(vRowClick).data();
  console.log("id user delete: ", vDataRow.id);
  $("#deleteCourseModal").modal("show");
  $("#btnDeleteCourse").click(function () {
    gCoursesDB.deleteCourse(vDataRow.id);
    loadCourseToTable(gCoursesDB.courses);
    $("#deleteCourseModal").modal("hide");
  });
}
/**SECTION 4 Khai bao ham dung chung cho chuong trinh */
//Ham tao element Card
function getCourseElement(paramCourseObj) {
  let vCourseElement = `<div class="col-sm-3">
<div class="card">
  <img
    class="card-img-top"
    src="./${paramCourseObj.coverImage ? paramCourseObj.coverImage : " "}"
    alt="Card image cap"
  />
  <div class="card-body">
    <a href="#" class="card-title"
      >${paramCourseObj.courseName}</a
    >
    <div class="card-text mt-2">
      <div class="d-flex .justify-content-sm-start">
        <i class="far fa-clock"></i>
        <p class="duration">${paramCourseObj.duration}</p>
        <p class="level">${paramCourseObj.level}</p>
      </div>
      <div class="d-flex .justify-content-sm-start">
        <p class="price"><strong>$${paramCourseObj.discountPrice}</strong></p>
        <p class="discount-price"><del>$${paramCourseObj.price}</del></p>
      </div>
    </div>
  </div>
  <div
    class="card-bottom bg-light d-flex .justify-content-sm-start"
  >
    <div class="col-sm-10 d-flex .justify-content-sm-start">
      <img
        src="${paramCourseObj.teacherPhoto}"
        alt=""
        class="rounded-circle teacher-thumb"
      />
      <div class="teacher-name">${paramCourseObj.teacherName}</div>
    </div>
    <div class="col-sm-2">
      <i class="far fa-bookmark float-right"></i>
    </div>
  </div>
</div>
</div>`;
  return vCourseElement;
}
// --------------Js cho backend-----------------
//Ham load du lieu len modal edit
function loadCourseToEditModal(paramId) {
  var vIsFound = false;
  var vIndex = 0;
  while (!vIsFound && vIndex < gCoursesDB.courses.length) {
    if (gCoursesDB.courses[vIndex].id == paramId) {
      $("#editCourseModal").find("#id").val(gCoursesDB.courses[vIndex].id);
      $("#editCourseModal")
        .find("#courseName")
        .val(gCoursesDB.courses[vIndex].courseName);
      $("#editCourseModal")
        .find("#courseCode")
        .val(gCoursesDB.courses[vIndex].courseCode);
      $("#editCourseModal")
        .find("#coverImage")
        .val(gCoursesDB.courses[vIndex].coverImage);
      $("#editCourseModal")
        .find("#price")
        .val(gCoursesDB.courses[vIndex].price);
      $("#editCourseModal")
        .find("#discountPrice")
        .val(gCoursesDB.courses[vIndex].discountPrice);
      $("#editCourseModal")
        .find("#duration")
        .val(gCoursesDB.courses[vIndex].duration);
      $("#editCourseModal")
        .find("#teacherName")
        .val(gCoursesDB.courses[vIndex].teacherName);
      $("#editCourseModal")
        .find("#teacherPhoto")
        .val(gCoursesDB.courses[vIndex].teacherPhoto);
      $("#editCourseModal")
        .find("#level")
        .val(gCoursesDB.courses[vIndex].level);
      gCoursesDB.courses[vIndex].isPopular
        ? $("#editCourseModal").find("#isPopular").val("1")
        : $("#editCourseModal").find("#isPopular").val("0");

      gCoursesDB.courses[vIndex].isTrending
        ? $("#editCourseModal").find("#isTrending").val("1")
        : $("#editCourseModal").find("#isTrending").val("0");

      $("#editCourseModal").find("#isTrending").val();
      vIsFound = true;
    } else {
      vIndex++;
    }
  }
}
//Ham thu thap du lieu tu modal createCourse
function getCourseFromElement(newCourse, idCourse) {
  newCourse.id = idCourse;
  newCourse.courseName = $.trim(
    $("#createCourseModal").find("#courseName").val()
  );
  newCourse.courseCode = createCourseCode(
    $.trim($("#createCourseModal").find("#courseCode").val())
  );
  newCourse.price = $("#createCourseModal").find("#price").val();
  newCourse.discountPrice =
    $("#createCourseModal").find("#discountPrice").val() != ""
      ? $("#createCourseModal").find("#discountPrice").val()
      : $("#createCourseModal").find("#price").val();
  newCourse.duration = $.trim($("#createCourseModal").find("#duration").val());
  newCourse.level = $("#createCourseModal").find("#level").val();
  newCourse.coverImage = $.trim(
    $("#createCourseModal").find("#coverImage").val()
  );
  newCourse.teacherName = $.trim(
    $("#createCourseModal").find("#teacherName").val()
  );
  newCourse.teacherPhoto = $.trim(
    $("#createCourseModal").find("#teacherPhoto").val()
  );
  newCourse.isPopular =
    $("#createCourseModal").find("#isPopular").val() == "1" ? true : false;
  newCourse.isTrending =
    $("#createCourseModal").find("#isTrending").val() == "1" ? true : false;
}
//Ham thu thap du lieu tu modal editCourse
function getCourseFromEditModal(newCourse) {
  newCourse.id = $("#editCourseModal").find("#id").val();
  newCourse.courseName = $.trim(
    $("#editCourseModal").find("#courseName").val()
  );
  newCourse.courseCode = createCourseCode(
    $.trim($("#editCourseModal").find("#courseCode").val())
  );
  newCourse.price = $("#editCourseModal").find("#price").val();
  newCourse.discountPrice =
    $("#editCourseModal").find("#discountPrice").val() != ""
      ? $("#editCourseModal").find("#discountPrice").val()
      : $("#editCourseModal").find("#price").val();
  newCourse.duration = $.trim($("#editCourseModal").find("#duration").val());
  newCourse.level = $("#editCourseModal").find("#level").val();
  newCourse.coverImage = $.trim(
    $("#editCourseModal").find("#coverImage").val()
  );
  newCourse.teacherName = $.trim(
    $("#editCourseModal").find("#teacherName").val()
  );
  newCourse.teacherPhoto = $.trim(
    $("#editCourseModal").find("#teacherPhoto").val()
  );
  newCourse.isPopular =
    $("#editCourseModal").find("#isPopular").val() == "1" ? true : false;
  newCourse.isTrending =
    $("#editCourseModal").find("#isTrending").val() == "1" ? true : false;
}
//Ham tao Course code
function createCourseCode(paramString) {
  if (paramString != "") {
    const regexString = paramString.replace(/\s\s+/g, " ");
    const stringRes = regexString.split(" ").join("_").toUpperCase();
    return stringRes + "_" + makeId(6);
  }
  return null;
}
//Random string
function makeId(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
// hàm sinh ra đc id tự tăng tiếp theo, dùng khi Thêm mới phần tử
function getNextId() {
  var vNextId = 0;
  // Nếu mảng chưa có đối tượng nào thì Id = 1
  if (gCoursesDB.courses.length == 0) {
    vNextId = 1;
  }
  // Id tiếp theo bằng Id của phần tử cuối cùng + thêm 1
  else {
    vNextId = gCoursesDB.courses[gCoursesDB.courses.length - 1].id + 1;
  }
  return vNextId;
}
//Ham validte thong tin
function validateCourse(paramCourseObj) {
  if (paramCourseObj.courseName == "") {
    alert("courseName khong duoc de trong!");
    return false;
  }
  if (paramCourseObj.courseCode == null) {
    alert("courseCode khong duoc de trong!");
    return false;
  }
  if (paramCourseObj.coverImage == "") {
    alert("coverImage khong duoc de trong!");
    return false;
  }
  // if (validateUrl(paramCourseObj.coverImage) == false) {
  //   alert("coverImage khong dung dinh dang!");
  //   return false;
  // }
  if (paramCourseObj.price == "") {
    alert("price khong duoc de trong!");
    return false;
  }
  if (paramCourseObj.price <= 0) {
    alert("price phai lon hon khong !");
    return false;
  }
  if (paramCourseObj.duration == "") {
    alert("Duration khong duoc de trong !");
    return false;
  }
  if (paramCourseObj.teacherName == "") {
    alert("teacherName khong duoc de trong !");
    return false;
  }
  if (paramCourseObj.teacherPhoto == "") {
    alert("teacherPhoto khong duoc de trong !");
    return false;
  }
  return true;
}
//Ham validate url
function validateUrl(paramUrl) {
  var expression =
    "https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)";
  var regex = new RegExp(expression);
  if (paramUrl.match(regex)) {
    return true;
  } else {
    return false;
  }
}
