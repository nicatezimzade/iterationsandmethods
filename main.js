// class CustomArrayMethods {
//     constructor() {
//         this.elements = arguments
//     }

    // **METHOD SOME** \\

    // Some(callback) {
    //     let result = false
    //     for (const item of this.elements) {
    //         if (callback(item)) {
    //             result = true
    //             break
    //         }
    //     }
    //     return result
    // }

    // **METHOD MAP** \\ 

    // Map(callback) {
    //     let newArr = []
    //     for (let i = 0; i < this.elements.length; i++) {
    //             newArr[i]=callback(this.elements[i])   
    //         }
    //         return newArr
    //     }

    // **METHOD FILTER** \\  

    // Filter(callback) {
    //     let newArr = []
    //     let i = 0
    //     for (const item of this.elements) {
    //         if (callback(item)) {
    //                 newArr[i] = callback(item)
    //                 i++
    //         }
    //     }
    //     return newArr
    // }

    // **METHOD (LAST)INDEXOF** \\

    // IndexOf(elem, start = 0) {
    //     for (let i = start; i <= this.elements.length; i++) {
    //         if (elem == this.elements[i]) {
    //             return i
    //         }
    //     }
    // }

    // LastIndexOf(elem, start = this.elements.length) {
    //     for (let i = start; i >= 0; i--) {
    //         if (elem == this.elements[i]) {
    //             return i
    //         }
    //     }
    // }

    // **METHOD INCLUDES** \\

    // Includes(elem) {
    //     let result = false
    //     for (const item of this.elements) {
    //         if (elem == item) {
        //             result = true
        //             break
    //         }
    //     }
    //     return result
    // }

    // **METHOD JOIN** \\

    // Join(elem) {
    //     let result=this.elements[0]+""
    //     for (let i = 1; i < this.elements.length; i++) {
    //         result+=`${elem}`+this.elements[i]
    //     }
    //     return result
    // }

    // **METHOD TOSTRING** \\

    // ToString() {
    //     let result=this.elements[0]+""
    //     for (let i = 1; i < this.elements.length; i++) {
    //         result+=","+this.elements[i]
    //     }
    //     return result
    // }
    
// }
// let myTestArray = new CustomArrayMethods(10, 20, "nicat", true, false, 50, "salam")
// let arr = [1, 2, 3, 4, "salam", 6]

// console.log(myTestArray.Map(item => item + 10))
