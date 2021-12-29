//Surface Area and Volume of a Box
//Write a function that returns the total surface area and volume of a box as an array: [area, volume]
function getSize(width, height, depth) {
    let arr = []
    arr.push( (2*width*height) + (2*depth*height) + (2*depth*width) )
    arr.push(width * height * depth)
    return arr
}