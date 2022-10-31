const dateIntString = (datestamp) => {
    let val = Math.floor(datestamp * 1000)
    let date = new Date(val)
return `${date.toLocaleString("en-US", {month: "numeric"})}/${date.toLocaleString("en-US", {day:"numeric"})}/${date.toLocaleString("en-US", {year: "numeric"})}`
}

module.exports = dateIntString