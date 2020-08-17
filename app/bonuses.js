//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
    let team = str
    team = team.replace(' ', '')
    team = team.replace(' ', '')
    team = team.replace('n', 'N')
    console.log(team);
    return team
}
