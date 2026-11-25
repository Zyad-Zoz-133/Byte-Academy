function InstructorCard(InstructorDetails){

      return(
            <div>
                  <img src={InstructorDetails.Image}  />
                  <br />      
                  <span>Name:{InstructorDetails.name}</span>
                  <br />
                  <span>discreption:{InstructorDetails.discription}</span>
            </div>
      )
}

export default InstructorCard;