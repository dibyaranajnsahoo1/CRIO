//Parent Class
class Student {
    //Parent class constructor with parameter
    constructor(name) {
      this.fullName = name;
    }
  
    //Parent class member method
    markAttendance() {
      console.log(this.fullName, "is present");
    }
  }
  
  //Derived or Child class
class SportsCaptain extends Student {
    //Child class member method
    playFootball() {
      //fullName is derived from Parent class's fullName data member
      console.log(this.fullName, "is playing football");
    }
  }


  const stu = new Student("dibya");

  const spo = new SportsCaptain("Dibya")
  
  spo.markAttendance()
  spo.playFootball()