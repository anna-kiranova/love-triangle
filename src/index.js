/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  debugger;
  let copy = [...preferences];
  let countTriangles = 0;
  
  let i = 0;
  
  // triangle contains 3 links
  // triangle is valid if in the end we will come to start
  // each valid triangle we will exclude
  // then continue searching next triangle until all elements will be excluded

  while (i < copy.length) {
    let start = i;
    
    // link1 - link from the 1st elem to the 2nd
    // it's a value of the 1st elem which is the index of the 2nd elem
    let link1 = copy[start];
    // check - elem is excluded or 1st loves 1st (loop detected)
    if (link1 === -1 || link1 - 1 === start) {
      i++;
      continue;
    }

    // link2 - link from the 2nd to 3rd
    let link2 = copy[link1 - 1];
    // check - elem is excluded or 2nd loves himself
    if (link2 === -1 || link2 === link1) {
      i++;
      continue;
    }

    let link3 = copy[link2 - 1];
    if (link3 === -1 || link3 === link2) {
      i++;
      continue;
    }

    // index of elem after following link3
    // should be equals to start index for valid triangle
    let end = link3 - 1;
    if (start === end) {
      countTriangles += 1;
      // exclude triangle elements
      copy[start] = -1;
      copy[link1 - 1] = -1;
      copy[link2 - 1] = -1;
    }

    i++;
  }

  return countTriangles;
};
