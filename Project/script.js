let date = new Date();

let year = date.getFullYear();

let month = date.getMonth();


const day = document.querySelector(".calender-dates");

const currdate = document.querySelector(".calender-current-date");

const prevNexIcon = document.querySelectorAll(".calender-navigation span");

// create months

const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];


//function to generate calender

const manipulation = () => {


    const dayone = new Date(year, month, 1).getDay(); //it return first day i,e sat = 06
    // console.log(dayone)
    const lastdate = new Date(year, month + 1, 0).getDate(); //how many days in a month;

    const dayend = new Date(year, month, lastdate).getDay();//lastdate was 31 and return lastday is mon =1

    const monthlastdate = new Date(year, month, 0).getDate(); // prev month lastdate

    //to store in generated html


    let lit = " "

    //loop to add last dates of prev month
    for (i = dayone; i > 0; i--) {

        lit += `<li class = "inactive">${monthlastdate - i + 1} </li>`

        // console.log(lit)

    }

    // --------------------------------loop to add the dates of current month-----------------------

    for (i = 1; i <= lastdate; i++) {

        let isToday = i === date.getDate() && month === date.getMonth() && year == date.getFullYear() ? "active" : "";

        lit += `<li class = "${isToday}">${i} </li>`
    }

    // loop to add first dates for next month

    for (i = dayend; i < 6; i++) {

        lit += `<li class = "inactive">${i - dayend + 1} </li>`
    }
    currdate.innerText = ` ${months[month]} ${year}`

    day.innerHTML = lit;

}
manipulation();

// ----------------attach a click event listners to each icon-----------------------------

prevNexIcon.forEach(icon => {
    icon.addEventListener("click", () => {

        month = icon.id === "calender-prev" ? month - 1 : month + 1;

        if (month < 0 || month > 11) {

            date = new Date(year, month, new Date().getDate());
            year = date.getFullYear(); // 2023 - current year
            month = date.getMonth();  // 07 - current month
        }
        else {
            date = new Date();
        }
        manipulation()
    });
});
