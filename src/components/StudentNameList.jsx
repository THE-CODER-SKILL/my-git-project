import React from "react";
import Staff from"../components/Staff";
import Details from "../components/details";

function StudentList()
{
    return(
<>
<Staff Staffname="Sathish Kumar" course="IT"/>
<Staff staffname="Shivanisha" Course="java"/>
<Details name="Krithika" age={21} course="IT course"/>
<Details name="Poorna Devi" age={20} course="IT course"/>
<Details name="Manikandan" age={21} course="IT course"/>
<Details name="Akila" age={21} course="IT course"/>
<Details name="gayu" age={21} course="IT course"/>


</>


    )
}
export default StudentList;