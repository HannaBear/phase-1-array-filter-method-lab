let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

input = ''

function findMatching(drivers, input){
    return drivers.filter(function(driver){
        return driver.toLowerCase() === input.toLowerCase()

    })

}

function fuzzyMatch(drivers, input){
    return drivers.filter(function(driver){
        return driver.slice(0,2) === input.slice(0,2)
    })
}

function matchName(drivers, input){
    return drivers.filter(function(driver){
        return driver.hometown, driver.name === input
    })
}

