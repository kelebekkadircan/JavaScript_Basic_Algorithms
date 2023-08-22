export const countingMinutes = (time) => {

    const times = time.split("-")
    let time1 = {
        meridiem: "",
        hour: "",
        minute: ""
    }
    let time2 = {
        meridiem: "",
        hour: "",
        minute: ""
    }

    time1.meridiem = times[0].slice(-2) // am
    time1.hour = parseInt(times[0].split(":")[0]) // 9
    time1.minute = parseInt(times[0].slice(-4, -2)) // 00

    time2.meridiem = times[1].slice(-2) // am
    time2.hour = parseInt(times[1].split(":")[0]) // 10
    time2.minute = parseInt(times[1].slice(-4, -2)) // 10


    let minuteDiff = 0
    let result = 0

    if (time1.meridiem === time2.meridiem) {
        minuteDiff = (time2.hour * 60 + time2.minute) - (time1.hour * 60 + time1.minute)
        result = minuteDiff > 0 ? minuteDiff : (24 * 60) + minuteDiff

    } else {
        minuteDiff = (time2.hour * 60 + time2.minute) - (time1.hour * 60 + time1.minute)
        result = 12 * 60 + minuteDiff
    }







    return result
}