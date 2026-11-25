function CourseCard() {

      const course = {
            name: "ReactJS",
            lessons: 60,
            duration: 10,
            lessonduration: 10 // minutes
      };

      return (
            <>
                  <p>course duration is : {course.duration}</p>
                  <p>course lessons number is : {course.lessons}</p>
            </>
      )

}

export default CourseCard;