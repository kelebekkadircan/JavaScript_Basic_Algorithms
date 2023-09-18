export const timeDifference = (t1, t2) => {

    let hour = Number(t2.split(":")[0]) - Number(t1.split(":")[0])
    let minute = Number(t2.split(":")[1]) - Number(t1.split(":")[1])

    if (minute < 0) {
        hour--
        minute = minute + 60
    }

    if (hour < 0) {
        hour = hour + 24
    }

    if (hour < 10) hour = "0" + hour.toString()

    if (minute < 10) minute = "0" + minute.toString()
    // return t1 + " " + t2

    return hour.toString() + ":" + minute.toString()
}