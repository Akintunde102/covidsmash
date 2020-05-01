export default function arraysEqual(a: (string|number)[], b: (string|number)[]){
    if (a === b) return true;
    if (a == null || b == null || a.length != b.length) return false;
    a.sort();
    b.sort();
  
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }