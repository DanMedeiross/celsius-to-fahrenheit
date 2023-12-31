/* ### Celsius to Fahrenheit

    Create a function that receives a string in Celsius or Fahrenheit 
    and transforms it from one unit to another.
  
    C = (F - 32) * 5/9
    F = C * 9/5 + 32
 */

// transformDegree('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // error flow
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Unidentified degree')
    }

    // optimal flow, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // alternative flow, C -> F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'

    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))

    transformDegree('50Z')
} catch (error) {
    console.log(error.message)
}